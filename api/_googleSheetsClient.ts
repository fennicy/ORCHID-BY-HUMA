import { createSign } from 'crypto';
import { AppointmentPayload, ContactPayload } from './_leadStorage';

export interface GoogleSheetsSubmissionResult {
  success: boolean;
  error?: string;
}

/**
 * Checks whether Google Sheets integration is configured via either:
 * 1. Direct Service Account (GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY + GOOGLE_SHEET_ID)
 * 2. Apps Script Webhook (GOOGLE_SHEETS_SCRIPT_URL)
 */
export function isGoogleSheetsConfigured(): boolean {
  const sheetId = process.env.GOOGLE_SHEET_ID || '11MEIBtsiFuGJkcAkjFaIFyxfcufYIpn6om6YREu5itE';
  const hasServiceAccount = Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    sheetId
  );
  const hasAppsScript = Boolean(process.env.GOOGLE_SHEETS_SCRIPT_URL);
  return hasServiceAccount || hasAppsScript;
}

/**
 * Cached OAuth2 access token to avoid re-authenticating on every serverless invocation
 */
let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Generates an OAuth2 access token using the Service Account credentials
 * via Google's standard OAuth2 JWT Bearer assertion flow (RFC 7523).
 * Uses Node's built-in 'crypto' library with zero external dependencies.
 */
async function getServiceAccountAccessToken(): Promise<string> {
  const now = Math.floor(Date.now() / 1000);

  // Return cached token if valid for at least another 60 seconds
  if (cachedToken && cachedToken.expiresAt > now + 60) {
    return cachedToken.token;
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY.');
  }

  // Handle both escaped newlines (\n) and raw multi-line strings from Vercel env vars
  privateKey = privateKey.replace(/\\n/g, '\n');

  // Ensure standard PEM format
  if (!privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
    privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`;
  }

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const claimSet = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const base64UrlEncode = (str: string) =>
    Buffer.from(str)
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
  const signatureInput = `${encodedHeader}.${encodedClaimSet}`;

  const signer = createSign('RSA-SHA256');
  signer.update(signatureInput);
  signer.end();
  const signature = signer
    .sign(privateKey, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const jwt = `${signatureInput}.${signature}`;

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenResponse.ok) {
    const errorBody = await tokenResponse.text();
    throw new Error(`Google OAuth2 token request failed (${tokenResponse.status}): ${errorBody}`);
  }

  const tokenData = await tokenResponse.json();
  cachedToken = {
    token: tokenData.access_token,
    expiresAt: now + (tokenData.expires_in || 3600),
  };

  return tokenData.access_token;
}

/**
 * Appends a row directly to a Google Sheet using the official Google Sheets REST API v4.
 * Formatted with Timestamp, Name, Email, Phone, Message, and additional metadata.
 */
async function appendViaGoogleSheetsAPI(
  type: 'appointment' | 'contact',
  id: string,
  data: AppointmentPayload | ContactPayload,
  timestamp: string,
  emailDelivered: boolean
): Promise<GoogleSheetsSubmissionResult> {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID || '11MEIBtsiFuGJkcAkjFaIFyxfcufYIpn6om6YREu5itE';
  if (!spreadsheetId) {
    return { success: false, error: 'GOOGLE_SHEET_ID is not configured.' };
  }

  // Save contact leads to the "Contact" sheet tab as required
  const tabName =
    type === 'contact'
      ? process.env.GOOGLE_SHEET_CONTACT_TAB || 'Contact'
      : process.env.GOOGLE_SHEET_APPOINTMENTS_TAB || 'Appointments';

  const accessToken = await getServiceAccountAccessToken();

  let rowValues: any[] = [];
  if (type === 'contact') {
    const contact = data as ContactPayload;
    // Exactly saving separate columns:
    // 1. Submission Date and Time
    // 2. Full Name
    // 3. Email Address
    // 4. Phone Number
    // 5. Service Interested In
    // 6. Subject
    // 7. Message
    const nameVal = typeof contact.name === 'string' ? contact.name.trim() : String(contact.name || '');
    const emailVal = typeof contact.email === 'string' ? contact.email.trim() : String(contact.email || '');
    const phoneVal = typeof contact.phone === 'string' ? contact.phone.trim() : String(contact.phone || '');
    const serviceVal = typeof contact.serviceInterested === 'string' && contact.serviceInterested.trim()
      ? contact.serviceInterested.trim()
      : 'Bridal Makeup';
    const subjectVal = serviceVal; // Subject matches the inquiry service or general inquiry
    const messageVal = typeof contact.message === 'string' ? contact.message.trim() : String(contact.message || '');

    rowValues = [
      timestamp,
      nameVal,
      emailVal,
      phoneVal,
      serviceVal,
      subjectVal,
      messageVal,
    ];
  } else {
    const apt = data as AppointmentPayload;
    rowValues = [
      timestamp,
      apt.fullName || '',
      apt.email || '',
      apt.phone || '',
      apt.notes || '',
      apt.serviceCategory || '',
      apt.specificService || '',
      apt.preferredDate || '',
      apt.preferredTime || '',
      id,
      emailDelivered ? 'Yes' : 'No',
    ];
  }

  const range = `${encodeURIComponent(tabName)}!A:A`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
    spreadsheetId
  )}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: [rowValues],
    }),
  });

  // If the sheet tab doesn't exist yet, automatically create it and retry
  if (!response.ok && response.status === 400) {
    const errorBody = await response.text().catch(() => '');
    if (errorBody.includes('Unable to parse range')) {
      try {
        const createTabUrl = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
          spreadsheetId
        )}:batchUpdate`;

        await fetch(createTabUrl, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            requests: [
              {
                addSheet: {
                  properties: {
                    title: tabName,
                  },
                },
              },
            ],
          }),
        });

        // Add header row
        const headerRange = `${encodeURIComponent(tabName)}!A1:G1`;
        await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(
            spreadsheetId
          )}/values/${headerRange}?valueInputOption=USER_ENTERED`,
          {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values: [
                [
                  'Submission Date and Time',
                  'Full Name',
                  'Email Address',
                  'Phone Number',
                  'Service Interested In',
                  'Subject',
                  'Message',
                ],
              ],
            }),
          }
        );

        // Retry append
        response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [rowValues],
          }),
        });
      } catch (e) {
        console.error('[Google Sheets Auto-Tab Error]:', e);
      }
    }
  }

  if (!response.ok) {
    const errorBody = await response.text();
    return {
      success: false,
      error: `Google Sheets API error (${response.status}): ${errorBody.slice(0, 200)}`,
    };
  }

  return { success: true };
}

/**
 * Fallback / Alternative: Sends a structured payload to Google Apps Script Web App
 */
async function appendViaAppsScript(
  type: 'appointment' | 'contact',
  id: string,
  data: AppointmentPayload | ContactPayload,
  timestamp: string,
  emailDelivered: boolean
): Promise<GoogleSheetsSubmissionResult> {
  const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;
  const scriptApiKey = process.env.GOOGLE_SHEETS_API_KEY || '';

  if (!scriptUrl) {
    return { success: false, error: 'GOOGLE_SHEETS_SCRIPT_URL is not configured.' };
  }

  const payload = {
    action: type === 'appointment' ? 'create_appointment' : 'create_contact',
    apiKey: scriptApiKey,
    id,
    timestamp,
    emailDelivered,
    data,
  };

  const response = await fetch(scriptUrl, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => '');
    return {
      success: false,
      error: `Google Apps Script returned HTTP ${response.status}: ${errText.slice(0, 150)}`,
    };
  }

  const resJson = await response.json().catch(() => ({}));
  if (resJson.status === 'success' || resJson.success === true) {
    return { success: true };
  }

  return {
    success: false,
    error: resJson.error || resJson.message || 'Google Sheets Apps Script reported failure.',
  };
}

/**
 * Primary dispatch function:
 * Prefers Direct Service Account API integration if configured.
 * Automatically falls back to Google Apps Script webhook if configured.
 */
export async function sendToGoogleSheets(
  type: 'appointment' | 'contact',
  id: string,
  data: AppointmentPayload | ContactPayload,
  timestamp: string,
  emailDelivered: boolean
): Promise<GoogleSheetsSubmissionResult> {
  const sheetId = process.env.GOOGLE_SHEET_ID || '11MEIBtsiFuGJkcAkjFaIFyxfcufYIpn6om6YREu5itE';

  // 1. Direct Service Account (Google Sheets API v4)
  if (
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    sheetId
  ) {
    try {
      return await appendViaGoogleSheetsAPI(type, id, data, timestamp, emailDelivered);
    } catch (err: any) {
      console.error('[Google Service Account Error]:', err);
      // If Apps Script is also available, try fallback
      if (process.env.GOOGLE_SHEETS_SCRIPT_URL) {
        return await appendViaAppsScript(type, id, data, timestamp, emailDelivered);
      }
      return { success: false, error: err?.message || 'Google Sheets API error' };
    }
  }

  // 2. Apps Script Webhook
  if (process.env.GOOGLE_SHEETS_SCRIPT_URL) {
    try {
      return await appendViaAppsScript(type, id, data, timestamp, emailDelivered);
    } catch (err: any) {
      console.error('[Google Apps Script Error]:', err);
      return { success: false, error: err?.message || 'Google Apps Script error' };
    }
  }

  return {
    success: false,
    error: 'Neither Google Service Account nor Apps Script Webhook is configured in environment variables.',
  };
}
