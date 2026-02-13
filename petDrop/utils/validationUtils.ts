/**
 * Validation and formatting utilities for form inputs.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates that age is a positive integer.
 */
export function isValidAge(value: string): { valid: boolean; error?: string } {
  const trimmed = value.trim();
  if (!trimmed) {
    return { valid: false, error: 'Age is required.' };
  }
  const num = Number.parseInt(trimmed, 10);
  if (Number.isNaN(num)) {
    return { valid: false, error: 'Age must be a number.' };
  }
  if (num < 1) {
    return { valid: false, error: 'Age must be at least 1.' };
  }
  if (num !== Number.parseFloat(trimmed)) {
    return { valid: false, error: 'Age must be a whole number (no decimals).' };
  }
  return { valid: true };
}

/**
 * Validates email format.
 */
export function isValidEmail(value: string): { valid: boolean; error?: string } {
  const trimmed = value.trim();
  if (!trimmed) {
    return { valid: false, error: 'Vet email is required.' };
  }
  if (!EMAIL_REGEX.test(trimmed)) {
    return { valid: false, error: 'Please enter a valid email address (e.g., vet@example.com).' };
  }
  return { valid: true };
}

/**
 * Validates that phone is exactly 10 digits.
 */
export function isValidPhone(value: string): { valid: boolean; error?: string } {
  const digits = value.replace(/\D/g, '');
  if (digits.length === 0) {
    return { valid: false, error: 'Vet phone is required.' };
  }
  if (digits.length !== 10) {
    return { valid: false, error: 'Vet phone must be exactly 10 digits.' };
  }
  return { valid: true };
}

/**
 * Extracts digits from phone input and limits to 10.
 */
export function normalizePhoneInput(value: string): string {
  return value.replace(/\D/g, '').slice(0, 10);
}

/**
 * Formats a 10-digit phone number as (XXX) XXX-XXXX.
 */
export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/\D/g, '').slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}
