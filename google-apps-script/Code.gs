/**
 * ==============================================================================
 * Google Apps Script Backend for Orchid By Huma
 * ==============================================================================
 * Purpose: Securely receives appointment requests and contact enquiries from
 * the Orchid By Huma Vercel backend and appends rows to Google Sheets.
 *
 * Sheets managed:
 * 1. "Appointments"
 * 2. "Contact Enquiries"
 * ==============================================================================
 */

// Optional: Define a secret API Key. If set in Apps Script Script Properties, requests must supply matching apiKey.
// Leave as '' or set API_KEY in Script Properties to match GOOGLE_SHEETS_API_KEY in Vercel.
var SCRIPT_PROP_KEY = 'ORCHID_WEBHOOK_SECRET';

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'No post data received' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var payload = JSON.parse(e.postData.contents);
    var action = payload.action;
    var providedKey = payload.apiKey || '';

    // Verify API Key if configured in Script Properties
    var scriptProperties = PropertiesService.getScriptProperties();
    var expectedKey = scriptProperties.getProperty(SCRIPT_PROP_KEY);
    if (expectedKey && expectedKey !== '' && providedKey !== expectedKey) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'Unauthorized: Invalid API Key' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === 'create_appointment') {
      return handleAppointment(ss, payload);
    } else if (action === 'create_contact') {
      return handleContact(ss, payload);
    } else {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'Unknown action: ' + action }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleAppointment(ss, payload) {
  var sheet = getOrCreateSheet(ss, 'Appointments', [
    'Reference ID',
    'Timestamp',
    'Full Name',
    'Phone',
    'Email',
    'Service Category',
    'Specific Treatment',
    'Preferred Date',
    'Preferred Time',
    'Notes',
    'Status',
    'Email Delivered',
    'Source URL'
  ]);

  var data = payload.data || {};
  var row = [
    payload.id || '',
    payload.timestamp || new Date().toISOString(),
    data.fullName || '',
    data.phone || '',
    data.email || '',
    data.serviceCategory || '',
    data.specificService || '',
    data.preferredDate || '',
    data.preferredTime || '',
    data.notes || '',
    'pending', // Status
    payload.emailDelivered ? 'YES' : 'NO',
    data.sourceUrl || ''
  ];

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success', id: payload.id }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleContact(ss, payload) {
  var sheet = getOrCreateSheet(ss, 'Contact Enquiries', [
    'Reference ID',
    'Timestamp',
    'Name',
    'Phone',
    'Email',
    'Topic / Service',
    'Preferred Date',
    'Message',
    'Status',
    'Email Delivered',
    'Source URL'
  ]);

  var data = payload.data || {};
  var row = [
    payload.id || '',
    payload.timestamp || new Date().toISOString(),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.serviceInterested || '',
    data.preferredDate || '',
    data.message || '',
    'new', // Status
    payload.emailDelivered ? 'YES' : 'NO',
    data.sourceUrl || ''
  ];

  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success', id: payload.id }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    // Add header row with styling
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#38201F');
    headerRange.setFontColor('#FAF7F5');
    headerRange.setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);
  }
  return sheet;
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', app: 'Orchid By Huma Lead Sync' }))
    .setMimeType(ContentService.MimeType.JSON);
}
