# 🚀 Production Deployment Guide for YVI Soft

This guide provides step-by-step instructions for deploying your YVI Soft application to production with GoDaddy (frontend) and Render (backend).

## 📋 Overview

1. **Frontend**: Deploy React app as static files to GoDaddy
2. **Backend**: Deploy Node.js email server to Render
3. **Database**: Continue using Supabase (already configured)

## 🎯 Prerequisites

- GoDaddy hosting account with cPanel access
- Domain name configured
- Supabase project (already set up)
- Render account for backend deployment

## 🔧 Step-by-Step Deployment

### 1. Prepare Frontend for Production

#### Build the React Application
```bash
# Navigate to your frontend directory
cd frontend

# Install dependencies (if not already installed)
npm install

# Build for production
npm run build
```

This creates a `dist` folder with all static files needed for deployment.

#### Update Environment Variables
Create a `.env.production` file in your frontend directory:
```env
VITE_SUPABASE_URL=your_actual_supabase_url
VITE_SUPABASE_ANON_KEY=your_actual_supabase_anon_key
VITE_BACKEND_URL=https://your-render-app-url.onrender.com
```

### 2. Deploy Backend to Render

#### Prepare Backend for Deployment
1. Ensure your backend code is in a separate directory or repository
2. Update `server.js` to work with Render's environment variables:
   ```javascript
   const PORT = process.env.PORT || 3001;
   ```

#### Deploy to Render
1. Create a GitHub repository for your backend (if not already done)
2. Push your backend code to GitHub
3. Connect Render to your GitHub repository:
   - Go to Render Dashboard
   - Click "New Web Service"
   - Connect your GitHub repository
   - Set:
     - Name: yvi-soft-email-server
     - Environment: Node
     - Build Command: `npm install`
     - Start Command: `npm start`
4. Set environment variables in Render dashboard:
   - `EMAIL_USER`: your GoDaddy email address
   - `EMAIL_PASS`: your GoDaddy email password
   - `EMAIL_TO`: recipient email address
   - `SMTP_HOST`: smtpout.secureserver.net
   - `SMTP_PORT`: 587
   - `SUPABASE_URL`: your Supabase project URL
   - `SUPABASE_KEY`: your Supabase anon key
   - `FRONTEND_URL`: https://yvisoft.com
   - `NODE_ENV`: production

### 3. Update Frontend Configuration

#### Update Vite Configuration
Modify `vite.config.js` to point to your deployed backend:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
```

### 4. Upload Frontend to GoDaddy

#### Using cPanel File Manager
1. Log in to your GoDaddy cPanel
2. Navigate to File Manager
3. Go to your website's root directory (usually `public_html` or `httpdocs`)
4. Delete existing files (if any)
5. Upload all contents from your `dist` folder:
   - `index.html`
   - `assets/` folder
   - All other static files

#### Using FTP
1. Use an FTP client (FileZilla, WinSCP)
2. Connect to your GoDaddy hosting with FTP credentials
3. Upload all contents from your `dist` folder to the root directory

### 5. Configure Domain and DNS

#### Set up Custom Domain (if needed)
1. In your Render dashboard, add your custom domain
2. In GoDaddy DNS management, add a CNAME record:
   - Name: `api` (or any subdomain you prefer)
   - Value: Your Render app URL

### 6. Final Configuration

#### Environment Variables on GoDaddy
Set these environment variables in your hosting platform:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_BACKEND_URL=https://your-render-app-url.onrender.com
```

## 🔍 Testing Steps

### 1. Test Frontend Deployment
- Visit your domain in a browser
- Check that all pages load correctly
- Verify that CSS and JavaScript files are loading

### 2. Test Backend Connection
- Open browser developer tools
- Submit the contact form
- Check the Network tab for successful API calls

### 3. Test Email Functionality
- Submit a test form
- Check that data is saved to Supabase
- Check that email is received at the recipient email address

### 4. Test CORS Configuration
- Verify that API calls from your frontend domain are allowed
- Check that requests from unauthorized domains are blocked

## 🛠️ Troubleshooting

### Common Issues

1. **Blank Page After Deployment**
   - Check browser console for errors
   - Verify all files were uploaded
   - Check that `index.html` is in the root directory

2. **API Connection Errors**
   - Verify backend URL in environment variables
   - Check CORS configuration in `server.js`
   - Ensure backend is running

3. **Email Not Sending**
   - Check email credentials in Render dashboard
   - Verify GoDaddy SMTP settings
   - Check spam folder

4. **Form Not Submitting**
   - Check browser console for JavaScript errors
   - Verify Supabase credentials
   - Ensure all required fields are filled

### Debugging Tips

1. **Check Browser Console**
   - Look for 404 errors (missing files)
   - Look for CORS errors (API connection issues)
   - Look for JavaScript errors

2. **Check Network Tab**
   - Verify API calls are reaching the backend
   - Check response status codes

3. **Check Backend Logs**
   - View logs in Render dashboard
   - Look for error messages

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files to version control
   - Use platform-specific environment variable configuration

2. **API Security**
   - Implement rate limiting on your backend
   - Add input validation
   - Use HTTPS for all communications

3. **Email Security**
   - Use app-specific passwords
   - Enable two-factor authentication
   - Regularly rotate credentials

## 🔄 Maintenance

1. **Regular Monitoring**
   - Check email delivery logs
   - Monitor backend performance
   - Review error logs

2. **Updates**
   - Regularly update dependencies
   - Apply security patches
   - Test changes in staging before production

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [GoDaddy Hosting Help](https://www.godaddy.com/help)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Supabase Documentation](https://supabase.com/docs)

## 🆘 Support

If you encounter issues during deployment:
1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure your backend is running and accessible
4. Contact support if problems persist