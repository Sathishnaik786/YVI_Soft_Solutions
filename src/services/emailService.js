// Email Service for sending contact form notifications
// This service sends emails using a backend endpoint

const EMAIL_API_URL = '/api/send-email';

/**
 * Send email notification for contact form submission
 * @param {Object} formData - The contact form data
 * @returns {Promise<Object>} - The response from the email API
 */
export const sendContactEmail = async (formData) => {
  try {
    console.log('📧 Sending email notification:', formData);
    
    const emailData = {
      to: import.meta.env.EMAIL_TO || 'sanjeevirr@yvisoft.com',
      from: import.meta.env.EMAIL_USER || 'contact@yvisoft.com',
      subject: `New Contact Form Submission: ${formData.subject || 'No Subject'}`,
      template: 'contact-form',
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject || 'No Subject',
        message: formData.message,
        ip: 'unknown', // In a real app, you'd get this from the server
        userAgent: navigator.userAgent || 'unknown',
        timestamp: new Date().toISOString()
      }
    };

    const response = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Email API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
};

/**
 * Send email notification for contact form submission (alternative method)
 * @param {Object} formData - The contact form data
 * @returns {Promise<Object>} - The response from the email API
 */
export const sendContactEmailAlternative = async (formData) => {
  try {
    console.log('📧 Sending email notification (alternative):', formData);
    
    // Simple email format
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <h2 style="color: #007bff; margin-top: 0;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${formData.subject || 'No Subject'}</p>
          <div style="margin: 20px 0;">
            <h3 style="color: #007bff;">Message:</h3>
            <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">${formData.message}</p>
          </div>
          <div style="background-color: #e9ecef; padding: 10px; border-radius: 3px; font-size: 0.9em;">
            <p><strong>Additional Information:</strong></p>
            <p><strong>IP Address:</strong> unknown</p>
            <p><strong>User Agent:</strong> ${navigator.userAgent || 'unknown'}</p>
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
        <div style="text-align: center; font-size: 0.8em; color: #6c757d;">
          <p>This email was automatically generated from the YVI Soft contact form.</p>
          <p>YVI Soft Solutions</p>
        </div>
      </body>
      </html>
    `;

    const emailData = {
      to: import.meta.env.EMAIL_TO || 'sanjeevirr@yvisoft.com',
      from: import.meta.env.EMAIL_USER || 'contact@yvisoft.com',
      subject: `New Contact Form Submission: ${formData.subject || 'No Subject'}`,
      html: emailContent
    };

    const response = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Email API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
};

export default {
  sendContactEmail,
  sendContactEmailAlternative
};