# YviSoft Contact Form Troubleshooting Guide

## Current Issue
You're still experiencing CORS errors when submitting the contact form:
```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://yvisoft.com/backend/api/send-email. (Reason: CORS header 'Access-Control-Allow-Origin' missing). Status code: 500.
```

## Root Cause Analysis
The issue indicates that your frontend is trying to reach `https://yvisoft.com/backend/api/send-email` but:
1. The request is failing (500 status code)
2. CORS headers are not being set properly

## Troubleshooting Steps

### 1. Verify File Placement
Ensure the following files are in the correct locations on your GoDaddy server:
```
httpdocs/
├── assets/
├── backend/
│   ├── send-email.php
│   └── test-php-endpoint.php
├── favicon.png
├── index.html
└── .htaccess
```

### 2. Test PHP Endpoint Directly
Visit these URLs in your browser:
- https://yvisoft.com/backend/test-php-endpoint.php
- https://yvisoft.com/backend/send-email.php

You should see JSON responses for both.

### 3. Check Apache Configuration
Your .htaccess file should contain:
```apache
# .htaccess
RewriteEngine On

# Route API requests to PHP handler
RewriteRule ^backend/api/send-email$ /backend/send-email.php [L,QSA]
RewriteRule ^backend/api/send-email/$ /backend/send-email.php [L,QSA]

# Serve frontend files
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]
```

### 4. Check File Permissions
Ensure PHP files have proper permissions (644):
```bash
chmod 644 backend/send-email.php
chmod 644 backend/test-php-endpoint.php
```

### 5. Check Debug Logs
Look for `email_debug.log` in your backend directory. This file will contain detailed information about what's happening when requests are made to your PHP endpoint.

### 6. Verify GoDaddy Configuration
Contact GoDaddy support to confirm:
- PHP is enabled and working
- RewriteEngine is enabled
- There are no server-level restrictions blocking your requests

## Alternative Solutions

### Option 1: Use a Different Approach for Local Testing
If you're testing locally, update your frontend to use a different backend URL for development:

In your `frontend/.env` file:
```bash
VITE_BACKEND_URL=http://localhost:3001
```

### Option 2: Use EmailJS or Similar Service
As a temporary workaround, you can integrate EmailJS directly in your frontend:

1. Sign up at https://www.emailjs.com/
2. Get your service ID, template ID, and public key
3. Update your Info_Form.jsx to use EmailJS directly

### Option 3: Use a Third-Party Email Service
Consider using services like:
- SendGrid API
- Mailgun API
- SMTP.js

## Immediate Debugging Steps

1. Create the .htaccess file in your root directory with the content above
2. Visit https://yvisoft.com/backend/test-php-endpoint.php in your browser
3. Check if you see a JSON response
4. Check if `email_debug.log` is created in your backend directory
5. Try submitting the contact form again

## If Problems Persist

1. Check your server error logs
2. Verify PHP error reporting is enabled
3. Ensure your hosting plan supports the required PHP functions
4. Contact GoDaddy support for specific server configuration details

## Common Issues and Solutions

### Issue: 500 Internal Server Error
- Check PHP syntax errors
- Verify all required PHP extensions are enabled
- Check file permissions

### Issue: CORS Errors
- Ensure proper headers are set in PHP files
- Verify .htaccess rewrite rules
- Check if there are any server-level CORS restrictions

### Issue: File Not Found
- Verify file paths and names
- Check case sensitivity (Linux servers are case-sensitive)
- Ensure files are uploaded to the correct directories

This guide should help you identify and resolve the issues with your contact form implementation.