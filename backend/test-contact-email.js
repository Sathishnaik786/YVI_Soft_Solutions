// Test script to verify contact form email functionality
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Configure dotenv
dotenv.config();

// Create email transporter with alternative configuration
// Try port 587 with STARTTLS first, fallback to port 465 if needed
const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 587,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER || 'sanjeevirr@yvisoft.com',
    pass: process.env.EMAIL_PASS || 'Welc@me@321'
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000,
});

// Test transporter configuration
transporter.verify((error) => {
  if (error) {
    console.error('❌ Email transporter error with port 587:', error);
    // Fallback to port 465
    console.log('🔄 Trying fallback configuration with port 465...');
    const fallbackTransporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'sanjeevirr@yvisoft.com',
        pass: process.env.EMAIL_PASS || 'Welc@me@321'
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });
    
    fallbackTransporter.verify((fallbackError) => {
      if (fallbackError) {
        console.error('❌ Email transporter fallback error with port 465:', fallbackError);
      } else {
        console.log('✅ Email transporter fallback is ready with port 465');
        sendTestEmail(fallbackTransporter);
      }
    });
  } else {
    console.log('✅ Email transporter is ready with port 587');
    sendTestEmail(transporter);
  }
});

// Send test email with retry mechanism
async function sendTestEmail(transporterToUse) {
  try {
    console.log('Testing contact form email...');
    
    // Sample contact form data
    const testData = {
      name: 'Test User',
      email: 'testuser@example.com',
      company: 'Test Company',
      phone: '123-456-7890',
      subject: 'Test Subject',
      message: 'This is a test message from the contact form.',
      ip: '192.168.1.1',
      userAgent: 'Test Browser',
      timestamp: new Date().toISOString()
    };
    
    // Generate HTML email content
    const emailHtml = generateContactFormEmail(testData);
    
    // Email options - now using EMAIL_USER as sender and user email as replyTo
    const mailOptions = {
      from: process.env.EMAIL_USER || 'sanjeevirr@yvisoft.com', // Company email as sender
      to: process.env.EMAIL_TO || 'sanjeevirr@yvisoft.com',     // Recipient (should be same)
      subject: `YVI Soft Contact Form: ${testData.subject}`,
      html: emailHtml,
      replyTo: testData.email  // User's email as reply-to
    };
    
    console.log('Email configuration:');
    console.log('- From:', mailOptions.from);
    console.log('- To:', mailOptions.to);
    console.log('- Reply-To:', mailOptions.replyTo);
    
    // Send email with retry mechanism
    let info;
    let attempts = 0;
    const maxAttempts = 3;
    const transporter = transporterToUse || transporter;
    
    while (attempts < maxAttempts) {
      try {
        info = await transporter.sendMail(mailOptions);
        console.log('✅ Contact form email sent successfully!');
        console.log('Message ID:', info.messageId);
        break;
      } catch (sendError) {
        attempts++;
        console.log(`Attempt ${attempts} failed:`, sendError.message);
        
        if (attempts >= maxAttempts) {
          throw sendError;
        }
        
        // Wait 2 seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
  } catch (error) {
    console.error('❌ Error sending contact form email:', error);
  }
}

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