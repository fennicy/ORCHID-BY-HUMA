export interface AppointmentPayload {
  fullName: string;
  phone: string;
  email?: string;
  serviceCategory: string;
  specificService?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  sourceUrl?: string;
}

export interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  serviceInterested?: string;
  preferredDate?: string;
  message: string;
  sourceUrl?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  id: string;
  emailDelivered: boolean;
  storageType: 'google_sheets' | 'ephemeral_memory';
  error?: string;
}

export interface LeadRecord {
  id: string;
  type: 'appointment' | 'contact';
  recipient: string;
  data: AppointmentPayload | ContactPayload;
  timestamp: string;
  emailDelivered: boolean;
  emailStatus?: string;
  storageType: 'google_sheets' | 'ephemeral_memory';
}

// In-memory runtime buffer for local dev / fallback testing
const memoryLeadStore: LeadRecord[] = [];

// Simple in-memory rate limiting map (IP / Identifier -> timestamps)
const rateLimitMap = new Map<string, number[]>();

export function checkRateLimit(identifier: string, limit = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;
  const timestamps = (rateLimitMap.get(identifier) || []).filter((t) => t > windowStart);

  if (timestamps.length >= limit) {
    return false;
  }

  timestamps.push(now);
  rateLimitMap.set(identifier, timestamps);

  // Periodic cleanup if map grows
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      const active = times.filter((t) => t > windowStart);
      if (active.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, active);
      }
    }
  }

  return true;
}

export function recordLead(record: LeadRecord) {
  memoryLeadStore.unshift(record);
  if (memoryLeadStore.length > 200) memoryLeadStore.pop();
  console.log(`[Orchid Lead Logged] ID: ${record.id} | Type: ${record.type} | Storage: ${record.storageType} | EmailDelivered: ${record.emailDelivered}`);
}

export function getRecordedLeads(): LeadRecord[] {
  return [...memoryLeadStore];
}

/**
 * Escapes HTML characters to prevent XSS in email bodies
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
