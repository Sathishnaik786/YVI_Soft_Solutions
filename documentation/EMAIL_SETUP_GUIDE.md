# 📧 Email Setup Guide for YVI Soft Contact Form

This guide explains how to set up email notifications for the contact form to send submissions to [sanjeevirr@yvisoft.com](mailto:sanjeevirr@yvisoft.com).

## Overview

When a visitor submits the contact form on the YVI Soft website, two actions occur:
1. The form data is stored in the Supabase database
2. Sent as an email notification to [sanjeevirr@yvisoft.com](mailto:sanjeevirr@yvisoft.com)

## Prerequisites

- Node.js and npm installed
- A working Supabase project (for database storage)
- GoDaddy email account credentials

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file in your project root with the following variables:

```env
# Email Configuration
EMAIL_USER=contact@yvisoft.com
EMAIL_PASS=your_email_password
EMAIL_TO=sanjeevirr@yvisoft.com

# Server Configuration
PORT=3001
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Email Server

```bash
node server.js
```

### 4. Test the Setup

1. Fill out the contact form on your website
2. Submit the form
3. Check [sanjeevirr@yvisoft.com](mailto:sanjeevirr@yvisoft.com) for the notification email

## Troubleshooting

### Common Issues

1. **Emails not being received**: Check that the EMAIL_USER and EMAIL_PASS in your `.env` file are correct
2. **Connection errors**: Verify that your GoDaddy SMTP settings are correct (host: smtpout.secureserver.net, port: 465)
3. **CORS errors**: Ensure your frontend is properly configured to communicate with the email server

### Testing the Email Server

You can test the email server directly with curl:

```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "sanjeevirr@yvisoft.com",
    "from": "contact@yvisoft.com",
    "subject": "Test Email",
    "html": "<h1>Test Email</h1><p>This is a test email from the YVI Soft contact form.</p>"
  }'
```

## Security Notes

- Never commit your `.env` file to version control
- Use strong passwords for your email account
- Consider implementing rate limiting for the email endpoint in production

## 📨 Email Template

The email notification uses a professional HTML template that includes:

- Sender's name and email
- Subject line
- Message content
- Additional metadata (IP, user agent, timestamp)

Example email content:

```
New Contact Form Submission

Name: John Doe
Email: john@example.com
Subject: Website Inquiry

Message:
Hello, I'm interested in your services...

Additional Information:
IP Address: 192.168.1.1
User Agent: Mozilla/5.0...
Submitted at: 2025-01-15 10:30:45

This email was automatically generated from the YVI Soft contact form.
```

## 🔒 Security Considerations

1. **Environment Variables**: Never commit `.env` files to version control
2. **App Passwords**: Use app-specific passwords instead of your main email password
3. **Rate Limiting**: Consider implementing rate limiting to prevent abuse
4. **Input Validation**: The frontend includes validation, but backend validation is also important

## 🚨 Troubleshooting

### Common Issues

1. **Emails not sending**:
   - Check email credentials in `.env`
   - Verify the email server is running
   - Check spam/junk folder

2. **Connection errors**:
   - Ensure both frontend and backend servers are running
   - Check Vite proxy configuration
   - Verify port numbers

3. **Authentication errors**:
   - Use app-specific passwords for Gmail/Google Workspace
   - Check SMTP settings for your email provider

### Debugging

Enable detailed logging by checking the console output in both:
- Browser developer tools (frontend)
- Terminal where the email server is running (backend)

## 🔄 Alternative Email Services

If you prefer to use other email services, you can modify the transporter configuration in `server.js`:

### SendGrid
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
```

### Mailgun
```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS
  }
});
```

## 📚 Additional Resources

- [Nodemailer Documentation](https://nodemailer.com/)
- [GoDaddy SMTP Settings](https://www.godaddy.com/help/what-are-my-email-server-settings-1180)
- [Supabase Documentation](https://supabase.com/docs)