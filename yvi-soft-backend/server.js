// Simple Express server for handling email sending
// This server provides an API endpoint for sending emails from the contact form

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || 'sanjeevirr@yvisoft.com',
    pass: process.env.EMAIL_PASS || 'Welc@me@321'
  }
});

// Test transporter configuration
transporter.verify((error) => {
  if (error) {
    console.error('❌ Email transporter error:', error);
  } else {
    console.log('✅ Email transporter is ready');
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('📧 Received email request:', req.body);
    
    const { to, from, subject, html, template, data } = req.body;
    
    // Validate required fields
    if (!from || !subject) {
      return res.status(400).json({ 
        error: 'Missing required fields: from, subject' 
      });
    }
    
    // Use EMAIL_TO environment variable or default to sanjeevirr@yvisoft.com
    const recipientEmail = to || process.env.EMAIL_TO || 'sanjeevirr@yvisoft.com';
    
    // Generate HTML content if using template
    let emailHtml = html;
    if (template === 'contact-form' && data) {
      emailHtml = generateContactFormEmail(data);
    }
    
    // Email options
    const mailOptions = {
      from: from,
      to: recipientEmail,
      subject: subject,
      html: emailHtml
    };
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);
    
    res.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message
    });
  }
});

// Generate HTML email for contact form submissions
function generateContactFormEmail(data) {
  return `
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
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <div style="margin: 20px 0;">
          <h3 style="color: #007bff;">Message:</h3>
          <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">${data.message}</p>
        </div>
        <div style="background-color: #e9ecef; padding: 10px; border-radius: 3px; font-size: 0.9em;">
          <p><strong>Additional Information:</strong></p>
          <p><strong>IP Address:</strong> ${data.ip || 'unknown'}</p>
          <p><strong>User Agent:</strong> ${data.userAgent || 'unknown'}</p>
          <p><strong>Submitted at:</strong> ${data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString()}</p>
        </div>
      </div>
      <div style="text-align: center; font-size: 0.8em; color: #6c757d;">
        <p>This email was automatically generated from the YVI Soft contact form.</p>
        <p>YVI Soft Solutions</p>
      </div>
    </body>
    </html>
  `;
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
});

export default app;