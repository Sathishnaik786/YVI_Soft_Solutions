# 🚀 YVI Soft Deployment Plan for GoDaddy with VPS and cPanel

## 📋 Overview

This deployment plan will guide you through deploying your YVI Soft website to your GoDaddy hosting environment which includes both VPS and cPanel capabilities. We'll use a hybrid approach:

1. **Frontend**: Deploy React app as static files to GoDaddy cPanel
2. **Backend**: Deploy Node.js email server to GoDaddy VPS (since you have VPS access)
3. **Database**: Continue using Supabase (already configured)

## 🎯 Prerequisites

- GoDaddy hosting account with cPanel and VPS access
- Domain name configured
- Supabase project (already set up)
- SSH access to your VPS
- FTP/SFTP credentials for cPanel file management

## 🔧 Step-by-Step Deployment

### 1. Prepare Frontend for Deployment

#### Build the React Application
```bash
# Navigate to your project directory
cd /path/to/YviSoft/frontend

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
VITE_BACKEND_URL=https://yourdomain.com/api  # Point to your VPS backend
```

### 2. Prepare Backend for VPS Deployment

#### Create Backend Directory Structure
1. Create a directory for your backend on your local machine:
   ```bash
   mkdir yvi-soft-backend
   cp backend/package.json yvi-soft-backend/
   cp backend/server.js yvi-soft-backend/
   cp backend/.env.example yvi-soft-backend/
   ```

2. Update `server.js` to work with production environment:
   ```javascript
   const PORT = process.env.PORT || 3001;
   ```

3. Create a `render.yaml` file for deployment:
   ```yaml
   services:
     - type: web
       name: yvi-soft-email-server
       env: node
       buildCommand: npm install
       startCommand: node server.js
       envVars:
         - key: EMAIL_USER
           sync: false
         - key: EMAIL_PASS
           sync: false
   ```

### 3. Upload Frontend to GoDaddy cPanel

#### Using cPanel File Manager
1. Log in to your GoDaddy cPanel
2. Navigate to File Manager
3. Go to your website's root directory (usually `public_html`)
4. Delete existing files (if any)
5. Upload all contents from your `dist` folder:
   - `index.html`
   - `assets/` folder
   - All other static files

#### Using SFTP/FTP
1. Use an FTP client (FileZilla, WinSCP)
2. Connect to your GoDaddy hosting with FTP credentials
3. Upload all contents from your `dist` folder to the root directory

### 4. Deploy Backend to GoDaddy VPS

#### Connect to Your VPS via SSH
```bash
ssh username@your-vps-ip
```

#### Upload Backend Files
1. Create a directory for your backend:
   ```bash
   mkdir /var/www/yvi-soft-api
   ```

2. Upload backend files to this directory using SFTP or SCP:
   - `package.json`
   - `server.js`
   - Any other necessary files

#### Install Dependencies and Start Server
```bash
# Navigate to backend directory
cd /var/www/yvi-soft-api

# Install dependencies
npm install

# Start the server
node server.js
```

#### Set Up Process Manager (PM2) for Auto-Restart
```bash
# Install PM2 globally
npm install -g pm2

# Start your app with PM2
pm2 start server.js --name "yvi-soft-api"

# Set PM2 to start on boot
pm2 startup
pm2 save
```

### 5. Configure Reverse Proxy (Apache/Nginx)

#### Apache Configuration (cPanel)
1. In cPanel, go to "MultiPHP INI Editor" > "Subdomains"
2. Create a subdomain for your API (e.g., api.yourdomain.com)
3. Configure the subdomain to point to your backend directory

#### Nginx Configuration (VPS)
If using Nginx, create a reverse proxy configuration:
```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 6. Configure Environment Variables

#### Backend Environment Variables
Create a `.env` file in your backend directory:
```env
EMAIL_USER=contact@yvisoft.com
EMAIL_PASS=your_email_password
EMAIL_TO=sanjeevirr@yvisoft.com
PORT=3001
```

#### Frontend Environment Variables
Set these environment variables in your cPanel:
1. Go to cPanel > Software > MultiPHP INI Editor
2. Select your domain
3. Add these variables:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_BACKEND_URL=https://api.yourdomain.com
```

### 7. Update Frontend Configuration

#### Update Vite Configuration
Modify `frontend/vite.config.js`:
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
  },
  // For production, we'll use environment variables
  define: {
    __BACKEND_URL__: JSON.stringify(process.env.VITE_BACKEND_URL || 'https://api.yourdomain.com')
  }
})
```

#### Update Email Service
Modify `frontend/src/services/emailService.js`:
```javascript
// Use environment variable for production, proxy for development
const EMAIL_API_URL = import.meta.env.PROD 
  ? (import.meta.env.VITE_BACKEND_URL || 'https://api.yourdomain.com') + '/api/send-email'
  : '/api/send-email';
```

### 8. Set Up SSL Certificate

#### Using cPanel SSL/TLS
1. In cPanel, go to "SSL/TLS Status"
2. Select your domain and subdomain
3. Enable AutoSSL for both domains

#### Manual SSL Setup (if needed)
```bash
# Install Certbot
sudo apt-get update
sudo apt-get install certbot

# Obtain SSL certificate
sudo certbot certonly --standalone -d yourdomain.com -d api.yourdomain.com
```

### 9. Final Configuration

#### Update Contact Form
Ensure your contact form component uses the updated email service.

#### Test CORS Configuration
Make sure your backend server.js has proper CORS configuration:
```javascript
app.use(cors({
  origin: ['https://yourdomain.com', 'https://www.yourdomain.com'],
  credentials: true
}));
```

## 🔍 Testing Steps

### 1. Test Frontend Deployment
- Visit your domain in a browser (https://yourdomain.com)
- Check that all pages load correctly
- Verify that CSS and JavaScript files are loading

### 2. Test Backend Connection
- Open browser developer tools
- Submit the contact form
- Check the Network tab for successful API calls to https://api.yourdomain.com/api/send-email

### 3. Test Email Functionality
- Submit a test form
- Check that data is saved to Supabase
- Check that email is received at sanjeevirr@yvisoft.com

### 4. Test SSL/HTTPS
- Ensure both frontend (https://yourdomain.com) and backend (https://api.yourdomain.com) are accessible via HTTPS

## 🛠️ Troubleshooting

### Common Issues

1. **Blank Page After Deployment**
   - Check browser console for errors
   - Verify all files were uploaded
   - Check that `index.html` is in the root directory

2. **API Connection Errors**
   - Verify backend URL in environment variables
   - Check CORS configuration in `server.js`
   - Ensure backend is running on VPS

3. **Email Not Sending**
   - Check email credentials in backend .env file
   - Verify GoDaddy SMTP settings
   - Check PM2 logs: `pm2 logs yvi-soft-api`

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
   - View logs with PM2: `pm2 logs yvi-soft-api`
   - Look for error messages

4. **Check VPS Processes**
   - Check if backend is running: `pm2 list`
   - Check port usage: `netstat -tulpn | grep 3001`

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

4. **VPS Security**
   - Keep your system updated
   - Use strong passwords and SSH keys
   - Configure firewall rules

## 🔄 Maintenance

### Updating the Application

1. **Frontend Updates**
   - Rebuild the frontend: `npm run build`
   - Upload new files to cPanel
   - Clear CDN cache if applicable

2. **Backend Updates**
   - Upload updated files to VPS
   - Restart with PM2: `pm2 restart yvi-soft-api`
   - Check logs for errors: `pm2 logs yvi-soft-api`

### Monitoring

1. **Frontend Monitoring**
   - Use browser developer tools to check for errors
   - Monitor page load times

2. **Backend Monitoring**
   - Check PM2 status: `pm2 status`
   - Monitor logs: `pm2 logs`
   - Set up health check endpoints

## 📚 Additional Resources

- [GoDaddy VPS Documentation](https://www.godaddy.com/help)
- [Node.js Deployment Guide](https://nodejs.org/en/docs/guides/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Supabase Documentation](https://supabase.com/docs)

## 🆘 Support

If you encounter issues during deployment:
1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure your backend is running and accessible
4. Check PM2 logs for backend errors
5. Contact GoDaddy support if problems persist