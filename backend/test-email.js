// Simple test script to verify email configuration
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('Testing email configuration...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_TO:', process.env.EMAIL_TO);

// Create email transporter
const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test email options
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: 'Test Email Configuration',
  text: 'This is a test email to verify the email configuration is working correctly.'
};

console.log('Sending test email...');
console.log('From:', mailOptions.from);
console.log('To:', mailOptions.to);

// Send test email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Error sending test email:', error);
  } else {
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
  }
  
  process.exit(0);
});