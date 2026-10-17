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
    var payload = {};
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        // Fallback for form-urlencoded or raw text
        payload = e.parameter || {};
      }
    } else if (e && e.parameter) {
      payload = e.parameter;
    } else {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'No post data received' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var action = payload.action || (payload.data && payload.data.action) || 'create_contact';
    var providedKey = payload.apiKey || (payload.data && payload.data.apiKey) || '';

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
  var sheet = getOrCreateSheet(ss, 'Contact', [
    'Submission Date and Time',
    'Full Name',
    'Email Address',
    'Phone Number',
    'Service Interested In',
    'Subject',
    'Message'
  ]);

  var data = payload.data || {};
  // Safely extract string values, avoiding [object Object] serialization
  var name = typeof data.name === 'string' ? data.name : (data.name ? String(data.name) : '');
  var email = typeof data.email === 'string' ? data.email : (data.email ? String(data.email) : '');
  var phone = typeof data.phone === 'string' ? data.phone : (data.phone ? String(data.phone) : '');
  var service = typeof data.serviceInterested === 'string' && data.serviceInterested.trim()
    ? data.serviceInterested.trim()
    : 'Bridal Makeup';
  var subject = typeof data.subject === 'string' && data.subject.trim()
    ? data.subject.trim()
    : service;
  var message = typeof data.message === 'string' ? data.message : (data.message ? String(data.message) : '');
  var timestamp = typeof payload.timestamp === 'string' ? payload.timestamp : new Date().toISOString();

  var row = [
    timestamp,
    name,
    email,
    phone,
    service,
    subject,
    message
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
