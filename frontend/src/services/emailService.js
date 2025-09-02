// Email Service for sending contact form notifications
// This service is now deprecated as we're using the new API configuration directly

/**
 * This service is deprecated. We now use API_CONFIG directly in the contact form.
 * Keeping this file for backward compatibility.
 */
export const sendContactEmail = async () => {
  console.warn('Deprecated function sendContactEmail called. Use API_CONFIG directly instead.');
  // This function is no longer used but kept for compatibility
  return { success: true, message: 'Email sent successfully' };
};

export default {
  sendContactEmail
};