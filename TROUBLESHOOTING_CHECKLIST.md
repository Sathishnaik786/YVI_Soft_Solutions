# Troubleshooting Checklist

Follow this checklist to identify and resolve the CORS issue with your contact form.

## 1. Verify File Structure

- [ ] Check that `send-email.php` exists in the backend directory
- [ ] Check that `.htaccess` exists in the backend directory
- [ ] Check that all files have proper permissions (readable by web server)

## 2. Test Direct PHP Access

Open this URL in your browser:
- [ ] https://yvisoft.com/backend/send-email.php

Expected result: JSON response with error "Missing required fields: from, subject"

If you get a 404 error:
- [ ] Check if the file path is correct
- [ ] Check if your web server is configured to serve PHP files

## 3. Test API Endpoint Access

Open this URL in your browser:
- [ ] https://yvisoft.com/backend/api/send-email

Expected result: Same JSON response as above (if .htaccess routing works)

If you get a 404 error:
- [ ] Check if mod_rewrite is enabled in Apache
- [ ] Check if AllowOverride is set to All in your virtual host configuration
- [ ] Verify the .htaccess file content is correct

## 4. Check Debug Log

- [ ] Look for `email_debug.log` in your backend directory
- [ ] Check if it's being updated when you submit the form
- [ ] Review the content for any error messages

## 5. Test with cURL

Run these commands in your terminal:

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

Expected result: JSON response with success or error message

## 6. Check Browser Console

In your browser's developer tools:

- [ ] Look for any additional error messages
- [ ] Check the Network tab to see the exact request being made
- [ ] Verify the request URL matches what you expect
- [ ] Check response headers for CORS-related headers

## 7. Verify Frontend Configuration

Check your frontend code:

- [ ] In `api.js`, verify `BACKEND_URL` is set correctly
- [ ] In `Info_Form.jsx`, verify the API call is using the correct endpoint
- [ ] Check that the form data includes all required fields

## 8. Server Configuration

Check your server configuration:

- [ ] Verify Apache has `AllowOverride All` for your backend directory
- [ ] Ensure mod_rewrite is enabled
- [ ] Check that PHP is properly configured
- [ ] Verify file permissions allow the web server to read and write files

## 9. Common Fixes

If the above steps don't resolve the issue:

1. **Check Apache Error Logs**: Look for any errors related to .htaccess or mod_rewrite
2. **Verify DNS**: Ensure yvisoft.com resolves correctly
3. **Check SSL Certificate**: Ensure your SSL certificate is valid
4. **Test with IP Address**: Try accessing via direct IP instead of domain name
5. **Contact Hosting Provider**: If you're on shared hosting, they may have restrictions

## 10. Emergency Fallback

If you continue to have issues:

1. Modify the frontend to send data directly to the PHP file:
   - Change the API endpoint from `/api/send-email` to `/send-email.php`
   - Update `api.js` to use the direct path

2. Use a simple form submission instead of AJAX:
   - Set the form action to the PHP file directly
   - Handle the response with a page redirect

## Next Steps

After completing this checklist:

1. Document which steps passed and which failed
2. Share the results with your development team or support
3. Focus troubleshooting on the first failed step
4. If all steps pass but the form still doesn't work, the issue may be in the frontend JavaScript

## Need Help?

If you're still experiencing issues after following this checklist, please provide:

1. Screenshots of the browser console errors
2. Contents of the email_debug.log file
3. Results of the cURL tests
4. Your Apache virtual host configuration
5. Any server error logs from the time of the failed requests