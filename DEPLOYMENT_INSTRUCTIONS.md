# YviSoft Contact Form Fix - Deployment Instructions

## Files Created/Updated

1. **backend/send-email.php** - New PHP email handler to replace Node.js backend
2. **backend/.htaccess** - Apache configuration for routing API requests
3. **frontend/src/config/api.js** - Fixed API configuration file
4. **backend/test-api-endpoint.php** - Test API endpoint
5. **backend/api-test.html** - Browser-based API testing
6. **CORS_DEBUGGING_GUIDE.md** - Detailed debugging guide
7. **TROUBLESHOOTING_CHECKLIST.md** - Step-by-step checklist
8. **CORS_FIX_SUMMARY.md** - Summary of changes

## Deployment Steps

### 1. Build the Frontend
```bash
cd frontend
npm install
npm run build
```

### 2. Upload Files to GoDaddy

Upload the following directories and files to your GoDaddy hosting:

```
httpdocs/
├── assets/                 # Frontend assets (from dist folder)
├── backend/                # Backend directory with PHP files
│   ├── send-email.php      # New PHP email handler
│   ├── .htaccess           # Apache configuration for API routing
│   ├── test-api-endpoint.php # Test API endpoint
│   └── api-test.html       # Browser-based API testing
├── favicon.png             # Favicon
├── index.html              # Main HTML file (from dist folder)
├── .htaccess               # Apache configuration (from dist folder)
├── CORS_DEBUGGING_GUIDE.md # Debugging guide
├── TROUBLESHOOTING_CHECKLIST.md # Troubleshooting checklist
└── CORS_FIX_SUMMARY.md     # Summary of changes
```

### 3. Verify File Permissions

Ensure the following files have proper permissions:
- `backend/send-email.php` - 644
- `backend/.htaccess` - 644
- `frontend/dist/.htaccess` - 644

### 4. Test the Implementation

1. Visit your website contact form
2. Fill out the form with test data
3. Submit the form
4. Check that:
   - Form data is saved to Supabase (check Supabase dashboard)
   - Email is sent to sanjeevirr@yvisoft.com
   - Success message is displayed on the form
   - No CORS or JSON parsing errors in browser console

## Troubleshooting

### If you still get CORS errors:
1. Make sure the .htaccess file is in the backend directory
2. Verify that the RewriteEngine is enabled on your GoDaddy hosting
3. Check that the send-email.php file is in the backend directory
4. Ensure Apache has `AllowOverride All` for your backend directory

### If emails are not being sent:
1. Check that your GoDaddy hosting allows PHP mail() function
2. Verify that the email address sanjeevirr@yvisoft.com is properly configured on GoDaddy
3. Test the send-email.php file directly by visiting https://yvisoft.com/backend/send-email.php in your browser (you should see a JSON error about missing fields)

### If you get JSON parsing errors:
1. Make sure the send-email.php file is returning proper JSON responses
2. Check that there are no PHP errors in the file (no extra spaces or characters before <?php)

## How It Works

1. When a user submits the contact form:
   - Data is first saved to Supabase (this was already working)
   - Then an API request is made to `https://yvisoft.com/backend/api/send-email`
   
2. Apache routes this request through the .htaccess file:
   - The RewriteRule directs `/backend/api/send-email` to `/backend/send-email.php`
   
3. The PHP script:
   - Receives the JSON data from the frontend
   - Validates required fields (from, subject)
   - Sends an email using GoDaddy's mail() function
   - Returns a JSON response with success/failure status

This solution bypasses the need for a Node.js backend and uses PHP, which is well-supported on GoDaddy shared hosting.