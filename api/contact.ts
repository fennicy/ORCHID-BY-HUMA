import type { IncomingMessage, ServerResponse } from 'http';
import { ContactPayload, recordLead, checkRateLimit, escapeHtml, SubmissionResponse } from './_leadStorage';
import { sendToGoogleSheets, isGoogleSheetsConfigured } from './_googleSheetsClient';

interface VercelLikeRequest extends IncomingMessage {
  body?: any;
  query?: Record<string, string>;
  headers: Record<string, string | string[] | undefined>;
}

interface VercelLikeResponse extends ServerResponse {
  status: (statusCode: number) => VercelLikeResponse;
  json: (data: any) => void;
  setHeader: (name: string, value: string | number | readonly string[]) => this;
}

export default async function handler(req: VercelLikeRequest, res: VercelLikeResponse) {
  if (!res.status) {
    res.status = (code: number) => {
      res.statusCode = code;
      return res;
    };
  }
  if (!res.json) {
    res.json = (data: any) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    };
  }

  // 1. Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please send a POST request.',
    });
  }

  // 2. Spam & rate-limiting protection
  const clientIp =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    (req.headers['x-real-ip'] as string) ||
    'anonymous';

  if (!checkRateLimit(`contact:${clientIp}`, 5, 60000)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a minute or call our Katy salon directly at (281) 206-0151.',
    });
  }

  try {
    let bodyData: any = req.body;
    if (typeof bodyData === 'string') {
      try {
        bodyData = JSON.parse(bodyData);
      } catch {
        bodyData = {};
      }
    }

    const { name, phone, message, serviceInterested, preferredDate, email, sourceUrl } =
      (bodyData || {}) as Partial<ContactPayload>;

    // 3. Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name.',
      });
    }

    const cleanedPhone = typeof phone === 'string' ? phone.trim() : '';
    const digitsOnly = cleanedPhone.replace(/\D/g, '');
    if (!cleanedPhone || digitsOnly.length < 7) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid phone number with at least 7 digits so our team can contact you.',
      });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a brief message or question for our team.',
      });
    }

    const cleanedEmail = typeof email === 'string' && email.trim() ? email.trim() : undefined;
    if (cleanedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanedEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address, or leave it blank.',
      });
    }

    const submissionId = `OBH-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const timestamp = new Date().toISOString();
    const recipient = process.env.SALON_EMAIL || 'orchbyhuma@gmail.com';

    const payload: ContactPayload = {
      name: name.trim().slice(0, 100),
      phone: cleanedPhone.slice(0, 30),
      email: cleanedEmail?.slice(0, 100),
      serviceInterested: typeof serviceInterested === 'string' && serviceInterested.trim() ? serviceInterested.trim().slice(0, 80) : 'General Inquiry',
      preferredDate: typeof preferredDate === 'string' && preferredDate.trim() ? preferredDate.trim().slice(0, 20) : undefined,
      message: message.trim().slice(0, 1500),
      sourceUrl: typeof sourceUrl === 'string' && sourceUrl.trim() ? sourceUrl.trim().slice(0, 200) : undefined,
    };

    // 4. Email Delivery Attempt (Resend)
    let emailDelivered = false;
    let emailStatusNote = 'No email credentials configured';
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const fromEmail = process.env.FROM_EMAIL || 'Orchid By Huma Website <notifications@orchidbyhuma.com>';
      const emailSubject = `[New Contact Inquiry] ${payload.name} - ${payload.serviceInterested || 'General Inquiry'}`;
      const emailText = `
NEW CONTACT INQUIRY - ORCHID BY HUMA
====================================
Reference ID: ${submissionId}
Timestamp: ${timestamp}

SENDER DETAILS:
- Name: ${payload.name}
- Phone: ${payload.phone}
- Email: ${payload.email || 'None provided'}
- Topic: ${payload.serviceInterested || 'General Inquiry'}
${payload.preferredDate ? `- Preferred Date: ${payload.preferredDate}` : ''}

MESSAGE:
${payload.message}

Source: ${payload.sourceUrl || 'https://orchidbyhuma.com/contact'}
====================================
`;

      const emailHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F5; padding: 24px;">
  <div style="max-width: 580px; margin: 0 auto; background: #fff; border: 1px solid #EACCC9; border-radius: 4px; overflow: hidden;">
    <div style="background-color: #38201F; padding: 20px; text-align: center;">
      <h2 style="color: #FAF7F5; margin: 0; font-size: 20px; font-family: Georgia, serif;">Orchid By Huma</h2>
      <p style="color: #E6C4C2; margin: 4px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Contact Us Inquiry</p>
    </div>
    <div style="padding: 24px; color: #38201F; font-size: 14px; line-height: 1.5;">
      <p style="margin-top: 0;"><strong>Reference:</strong> ${submissionId}</p>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Phone:</strong> <a href="tel:${escapeHtml(payload.phone)}" style="color: #4A2C2A; font-weight: bold;">${escapeHtml(payload.phone)}</a></p>
      <p><strong>Email:</strong> ${payload.email ? `<a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a>` : 'Not provided'}</p>
      <p><strong>Topic:</strong> ${escapeHtml(payload.serviceInterested || 'General Inquiry')}</p>
      ${payload.preferredDate ? `<p><strong>Preferred Date:</strong> ${escapeHtml(payload.preferredDate)}</p>` : ''}
      <hr style="border: none; border-top: 1px solid #EACCC9; margin: 16px 0;" />
      <p><strong>Message:</strong><br />${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
    </div>
  </div>
</div>
`;

      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [recipient],
            subject: emailSubject,
            text: emailText,
            html: emailHtml,
          }),
        });

        if (response.ok) {
          emailDelivered = true;
          emailStatusNote = 'Delivered via Resend';
        } else {
          const errText = await response.text();
          emailStatusNote = `Resend delivery returned HTTP ${response.status}: ${errText.slice(0, 100)}`;
          console.error('[Resend Error - Contact]:', emailStatusNote);
        }
      } catch (err: any) {
        emailStatusNote = `Resend network error: ${err?.message || 'unknown'}`;
        console.error('[Resend Exception - Contact]:', emailStatusNote);
      }
    }

    // 5. Google Sheets Storage Persistence
    let storageType: 'google_sheets' | 'ephemeral_memory' = 'ephemeral_memory';

    if (isGoogleSheetsConfigured()) {
      const sheetsResult = await sendToGoogleSheets(
        'contact',
        submissionId,
        payload,
        timestamp,
        emailDelivered
      );

      if (!sheetsResult.success) {
        console.error('[Google Sheets Error - Contact Enquiries]:', sheetsResult.error);
        return res.status(500).json({
          success: false,
          error: 'We were unable to securely save your inquiry to Google Sheets. Please call our salon directly at (281) 206-0151.',
        });
      }

      storageType = 'google_sheets';
    }

    // 6. Record in-memory buffer (local dev observation)
    recordLead({
      id: submissionId,
      type: 'contact',
      recipient,
      data: payload,
      timestamp,
      emailDelivered,
      emailStatus: emailStatusNote,
      storageType,
    });

    const responseData: SubmissionResponse = {
      success: true,
      message: 'Your inquiry has been received. Our salon team will contact you shortly.',
      id: submissionId,
      emailDelivered,
      storageType,
    };

    return res.status(200).json(responseData);
  } catch (error: any) {
    console.error('Error handling contact message:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your message. Please call us directly at (281) 206-0151.',
    });
  }
}
