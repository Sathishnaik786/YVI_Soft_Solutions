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

// Middleware with production-ready CORS configuration
// Allow requests only from your frontend domain
const corsOptions = {
  origin: [
    'https://yvisoft.com',        // Production frontend domain
    'http://localhost:5173',      // Local development frontend
    'http://localhost:3000'       // Alternative local development port
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// If FRONTEND_URL is set in environment variables, add it to allowed origins
if (process.env.FRONTEND_URL) {
  corsOptions.origin.push(process.env.FRONTEND_URL);
}
 
// For production, remove localhost origins
if (process.env.NODE_ENV === 'production') {
  corsOptions.origin = corsOptions.origin.filter(origin => 
    !origin.includes('localhost')
  );
  
  // Add production frontend URL if it's a valid HTTPS URL
  if (process.env.FRONTEND_URL && process.env.FRONTEND_URL.startsWith('https://')) {
    corsOptions.origin.push(process.env.FRONTEND_URL);
  }
  
  // Always allow the main domain
  corsOptions.origin.push('https://yvisoft.com');
}

app.use(cors(corsOptions));

// Enhanced middleware to parse JSON and handle errors
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Create email transporter with retry mechanism for SMTP (ports 587/465)
let transporter;

// Initialize transporter with retry mechanism
const initializeTransporter = async () => {
  // Try port 587 with STARTTLS first
  const primaryConfig = {
    host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
  };

  transporter = nodemailer.createTransport(primaryConfig);

  try {
    await transporter.verify();
    console.log('✅ Email transporter is ready with port 587');
  } catch (error) {
    console.error('❌ Email transporter error with port 587:', error);
    // Fallback to port 465
    console.log('🔄 Trying fallback configuration with port 465...');
    const fallbackConfig = {
      host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    };
    
    transporter = nodemailer.createTransport(fallbackConfig);
    
    try {
      await transporter.verify();
      console.log('✅ Email transporter fallback is ready with port 465');
    } catch (fallbackError) {
      console.error('❌ Email transporter fallback error with port 465:', fallbackError);
    }
  }
};

// Initialize transporter on server start
initializeTransporter();

// Email sending endpoint with comprehensive error handling
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('📧 Received email request:', req.body);
    
    // Ensure we always return JSON
    res.setHeader('Content-Type', 'application/json');
    
    const { to, from, subject, html, template, data } = req.body;
    
    // Validate required fields
    if (!from || !subject) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing required fields: from, subject' 
      });
    }
    
    // Use EMAIL_TO environment variable or default to sanjeevirr@yvisoft.com
    const recipientEmail = to || process.env.EMAIL_TO || 'sanjeevirr@yvisoft.com';
    
    // Use EMAIL_USER as the sender (from) address to ensure emails come from company email
    const senderEmail = process.env.EMAIL_USER || 'sanjeevirr@yvisoft.com';
    
    // Generate HTML content if using template
    let emailHtml = html;
    if (template === 'contact-form' && data) {
      emailHtml = generateContactFormEmail(data);
    }
    
    // Email options
    const mailOptions = {
      from: `"YVI Soft" <${senderEmail}>`, // Always send from company email with name
      to: recipientEmail,
      subject: subject,
      html: emailHtml,
      replyTo: from // Set user's email as reply-to address
    };
    
    // Send email with retry mechanism
    let info;
    let attempts = 0;
    const maxAttempts = 3;
    
    while (attempts < maxAttempts) {
      try {
        info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent:', info.messageId);
        break;
      } catch (sendError) {
        attempts++;
        console.log(`Attempt ${attempts} failed:`, sendError.message);
        
        if (attempts >= maxAttempts) {
          throw new Error(`Failed to send email after ${maxAttempts} attempts: ${sendError.message}`);
        }
        
        // Wait 2 seconds before retrying
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    // Always return proper JSON for success with messageId
    res.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // Always return proper JSON for error with details
    res.status(500).json({ 
      success: false,
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
        <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email || '#'}">${data.email || 'Not provided'}</a></p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject || 'No Subject'}</p>
        <div style="margin: 20px 0;">
          <h3 style="color: #007bff;">Message:</h3>
          <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">${data.message || 'No message'}</p>
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  // Ensure we always return JSON
  res.setHeader('Content-Type', 'application/json');
  res.status(500).json({ 
    success: false,
    error: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred'
  });
});

// Handle 404 for undefined routes
app.use('*', (req, res) => {
  // Ensure we always return JSON
  res.setHeader('Content-Type', 'application/json');
  res.status(404).json({ 
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
});


export default app;

// Simple redirect to backend server
// This file exists for compatibility but the actual server is in the backend directory

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Redirecting to backend server...');

// Change to backend directory and start the server
const backendDir = join(__dirname, 'backend');

const server = spawn('node', ['server.js'], {
  cwd: backendDir,
  stdio: 'inherit'
});

server.on('error', (error) => {
  console.error(`Error starting backend server: ${error}`);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`Backend server process exited with code ${code}`);
  process.exit(code);
});
