# CORS Debugging Guide

This guide will help you troubleshoot the persistent CORS errors you're experiencing with your contact form.

## Current Issue

You're getting this error:
```
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://yvisoft.com/backend/api/send-email. (Reason: CORS header 'Access-Control-Allow-Origin' missing). Status code: 500.
```

## Step-by-Step Debugging

### 1. Verify PHP Endpoint Accessibility

First, let's check if your PHP endpoints are accessible:

1. Visit these URLs in your browser:
   - https://yvisoft.com/backend/send-email.php (should show error about missing fields)
   - https://yvisoft.com/backend/test-api-endpoint.php (should show success message)
   - https://yvisoft.com/backend/api/test (should show success message if .htaccess is working)

2. Check if you can see any content from these URLs. If you get a 404 or 500 error, there's an issue with your server configuration.

### 2. Check Apache Configuration

Make sure your .htaccess file is being read by Apache:

1. Check if your Apache configuration allows .htaccess overrides:
   ```
   # In your Apache virtual host configuration, you should have:
   AllowOverride All
   ```

2. Verify the .htaccess file is in the correct location:
   - Path: `/backend/.htaccess`
   - Content should include rewrite rules for `/api/send-email` to `send-email.php`

### 3. Test API Endpoints Directly

Use the test HTML file to verify your endpoints:

1. Open `https://yvisoft.com/backend/api-test.html` in your browser
2. Click the "Test /api/test" button
3. Click the "Test /api/send-email" button
4. Check the responses in the result boxes

### 4. Check Debug Logs

The PHP script creates a debug log file. Check if it exists and what it contains:

1. Look for `email_debug.log` in your backend directory
2. Check its contents to see if requests are reaching the PHP script

### 5. Verify Headers in PHP Script

The PHP script should be sending the correct CORS headers. Check that these lines are present in `send-email.php`:

```php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://yvisoft.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');
```

### 6. Test with cURL

Use cURL to test the endpoint from the command line:

```bash
# Test OPTIONS request (preflight)
curl -X OPTIONS \
  -H "Origin: https://yvisoft.com" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  https://yvisoft.com/backend/api/send-email

# Test POST request
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Origin: https://yvisoft.com" \
  -d '{"from":"test@example.com","subject":"Test"}' \
  https://yvisoft.com/backend/api/send-email
```

## Common Issues and Solutions

### Issue 1: .htaccess Not Working
If the `/api/send-email` endpoint returns 404:
- Verify Apache has `AllowOverride All` in the virtual host configuration
- Check that the .htaccess file is in the correct directory
- Ensure mod_rewrite is enabled in Apache

### Issue 2: CORS Headers Not Sent
If you get "CORS header missing" errors:
- Check that the PHP script is sending the correct headers
- Verify the `Access-Control-Allow-Origin` header matches your frontend domain
- Make sure headers are sent before any other output

### Issue 3: PHP Script Errors
If the PHP script fails:
- Check the server error logs
- Verify all required PHP extensions are installed
- Check file permissions on the backend directory

## Next Steps

1. Try accessing the URLs mentioned in step 1
2. Check if `email_debug.log` is being created and what it contains
3. Run the cURL commands to test the endpoints
4. Share the results of these tests for further troubleshooting

If you're still experiencing issues after these steps, please share:
1. The exact error messages from your browser console
2. The content of `email_debug.log` if it exists
3. The response from the direct URL tests
4. Any server error logs you can access