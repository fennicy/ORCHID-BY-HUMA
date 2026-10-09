import { AppointmentPayload, ContactPayload } from './_leadStorage';

/**
 * Checks whether Google Sheets web app endpoint is configured
 */
export function isGoogleSheetsConfigured(): boolean {
  return Boolean(process.env.GOOGLE_SHEETS_SCRIPT_URL);
}

export interface GoogleSheetsSubmissionResult {
  success: boolean;
  error?: string;
}

/**
 * Sends a structured payload to the Google Apps Script Web App.
 * Follows HTTP 302 redirects automatically if fetch handles them.
 */
export async function sendToGoogleSheets(
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

  try {
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
      redirect: 'follow', // Apps Script standard deployment returns 302 redirect
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
  } catch (error: any) {
    console.error('[Google Sheets API Error]:', error);
    return {
      success: false,
      error: error?.message || 'Network exception connecting to Google Sheets.',
    };
  }
}
