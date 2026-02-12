/**
 * Valid image URIs must use a recognized scheme.
 * Relative paths like "1.png" are invalid and cause load errors on iOS.
 */
const VALID_URI_SCHEMES = ['http://', 'https://', 'file://', 'content://', 'data:'];

export function isValidImageUri(uri: string | undefined): boolean {
  if (!uri || typeof uri !== 'string' || uri.trim() === '') {
    return false;
  }
  const trimmed = uri.trim().toLowerCase();
  return VALID_URI_SCHEMES.some((scheme) => trimmed.startsWith(scheme));
}
