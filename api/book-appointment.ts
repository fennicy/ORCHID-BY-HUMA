import type { IncomingMessage, ServerResponse } from 'http';
import { AppointmentPayload, recordLead, checkRateLimit, escapeHtml, SubmissionResponse } from './_leadStorage';
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

  if (!checkRateLimit(`book:${clientIp}`, 5, 60000)) {
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

    const { fullName, phone, preferredDate, preferredTime, serviceCategory, specificService, email, notes, sourceUrl } =
      (bodyData || {}) as Partial<AppointmentPayload>;

    // 3. Strict Server-Side Validation
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your full name.',
      });
    }

    const cleanedPhone = typeof phone === 'string' ? phone.trim() : '';
    const digitsOnly = cleanedPhone.replace(/\D/g, '');
    if (!cleanedPhone || digitsOnly.length < 7) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid phone number with at least 7 digits so our salon can reach you.',
      });
    }

    if (!preferredDate || typeof preferredDate !== 'string' || !preferredDate.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please select a preferred appointment date.',
      });
    }

    // Optional email validation
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

    const payload: AppointmentPayload = {
      fullName: fullName.trim().slice(0, 100),
      phone: cleanedPhone.slice(0, 30),
      email: cleanedEmail?.slice(0, 100),
      serviceCategory: typeof serviceCategory === 'string' && serviceCategory.trim() ? serviceCategory.trim().slice(0, 80) : 'Facials & Skincare',
      specificService: typeof specificService === 'string' && specificService.trim() ? specificService.trim().slice(0, 100) : undefined,
      preferredDate: preferredDate.trim().slice(0, 20),
      preferredTime: typeof preferredTime === 'string' && preferredTime.trim() ? preferredTime.trim().slice(0, 20) : '10:00 AM',
      notes: typeof notes === 'string' && notes.trim() ? notes.trim().slice(0, 1000) : undefined,
      sourceUrl: typeof sourceUrl === 'string' && sourceUrl.trim() ? sourceUrl.trim().slice(0, 200) : undefined,
    };

    // 4. Email Notification Dispatch (Resend)
    let emailDelivered = false;
    let emailStatusNote = 'No email credentials configured';
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const fromEmail = process.env.FROM_EMAIL || 'Orchid By Huma Website <bookings@orchidbyhuma.com>';
      const emailSubject = `[New Appointment Request] ${payload.fullName} - ${payload.preferredDate} (${payload.preferredTime})`;

      const emailText = `
NEW APPOINTMENT REQUEST - ORCHID BY HUMA
=========================================
Reference ID: ${submissionId}
Timestamp: ${timestamp}
Location: 1105 South Mason Rd, Katy, TX 77450

CLIENT DETAILS:
- Name: ${payload.fullName}
- Phone: ${payload.phone}
- Email: ${payload.email || 'None provided'}

REQUESTED APPOINTMENT:
- Category: ${payload.serviceCategory}
- Treatment: ${payload.specificService || 'General Consultation'}
- Date: ${payload.preferredDate}
- Time: ${payload.preferredTime}

CLIENT NOTES:
${payload.notes || 'None provided'}

Source: ${payload.sourceUrl || 'https://orchidbyhuma.com/book'}
=========================================
Note: Please call client at ${payload.phone} to confirm availability.
`;

      const emailHtml = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F5; padding: 24px;">
  <div style="max-width: 580px; margin: 0 auto; background: #fff; border: 1px solid #EACCC9; border-radius: 4px; overflow: hidden;">
    <div style="background-color: #38201F; padding: 20px; text-align: center;">
      <h2 style="color: #FAF7F5; margin: 0; font-size: 20px; font-family: Georgia, serif;">Orchid By Huma</h2>
      <p style="color: #E6C4C2; margin: 4px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">New Appointment Request</p>
    </div>
    <div style="padding: 24px; color: #38201F; font-size: 14px; line-height: 1.5;">
      <p style="margin-top: 0;"><strong>Reference:</strong> ${submissionId}</p>
      <p><strong>Client:</strong> ${escapeHtml(payload.fullName)}</p>
      <p><strong>Phone:</strong> <a href="tel:${escapeHtml(payload.phone)}" style="color: #4A2C2A; font-weight: bold;">${escapeHtml(payload.phone)}</a></p>
      <p><strong>Email:</strong> ${payload.email ? `<a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a>` : 'Not provided'}</p>
      <hr style="border: none; border-top: 1px solid #EACCC9; margin: 16px 0;" />
      <p><strong>Service:</strong> ${escapeHtml(payload.specificService || payload.serviceCategory)}</p>
      <p><strong>Requested Date:</strong> ${escapeHtml(payload.preferredDate)}</p>
      <p><strong>Requested Time:</strong> ${escapeHtml(payload.preferredTime)}</p>
      ${payload.notes ? `<p><strong>Notes:</strong><br />${escapeHtml(payload.notes).replace(/\n/g, '<br />')}</p>` : ''}
      <hr style="border: none; border-top: 1px solid #EACCC9; margin: 16px 0;" />
      <p style="font-size: 12px; color: #6B4E4D;">Location: 1105 South Mason Rd, Katy, Texas 77450 · (281) 206-0151</p>
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
          console.error('[Resend Error - Appointment]:', emailStatusNote);
        }
      } catch (err: any) {
        emailStatusNote = `Resend network error: ${err?.message || 'unknown'}`;
        console.error('[Resend Exception - Appointment]:', emailStatusNote);
      }
    }

    // 5. Google Sheets Storage Persistence
    let storageType: 'google_sheets' | 'ephemeral_memory' = 'ephemeral_memory';

    if (isGoogleSheetsConfigured()) {
      const sheetsResult = await sendToGoogleSheets(
        'appointment',
        submissionId,
        payload,
        timestamp,
        emailDelivered
      );

      if (!sheetsResult.success) {
        console.error('[Google Sheets Error - Appointments]:', sheetsResult.error);
        return res.status(500).json({
          success: false,
          error: 'We were unable to securely save your appointment request to Google Sheets. Please call our salon directly at (281) 206-0151.',
        });
      }

      storageType = 'google_sheets';
    }

    // 6. Record in-memory buffer (local dev observation)
    recordLead({
      id: submissionId,
      type: 'appointment',
      recipient,
      data: payload,
      timestamp,
      emailDelivered,
      emailStatus: emailStatusNote,
      storageType,
    });

    const responseData: SubmissionResponse = {
      success: true,
      message: 'Your appointment request has been received. Our salon team will contact you shortly to confirm your booking.',
      id: submissionId,
      emailDelivered,
      storageType,
    };

    return res.status(200).json(responseData);
  } catch (error: any) {
    console.error('Error handling appointment booking:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your request. Please call us directly at (281) 206-0151.',
    });
  }
}
