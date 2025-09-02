# 🚀 YVI Soft Deployment Guide

This guide provides comprehensive instructions for deploying the YVI Soft website to GoDaddy hosting with VPS and cPanel.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Architecture](#architecture)
4. [Deployment Process](#deployment-process)
5. [Frontend Deployment](#frontend-deployment)
6. [Backend Deployment](#backend-deployment)
7. [Configuration](#configuration)
8. [Testing](#testing)
9. [Troubleshooting](#troubleshooting)
10. [Maintenance](#maintenance)

## 🌟 Overview

The YVI Soft website consists of:
- **Frontend**: React application built with Vite
- **Backend**: Node.js/Express server for email handling
- **Database**: Supabase for contact form data storage

Due to GoDaddy's hosting limitations, we use a hybrid deployment approach:
- Frontend deployed as static files to cPanel
- Backend deployed to VPS as a Node.js application

## 📋 Prerequisites

Before deployment, ensure you have:

1. **GoDaddy Account** with:
   - cPanel access
   - VPS access
   - Domain name configured

2. **Local Development Environment**:
   - Node.js (v18 or higher)
   - npm or yarn
   - Git

3. **Third-Party Services**:
   - Supabase account and project
   - Email account for sending emails (GoDaddy email recommended)

## 🏗️ Architecture

```
Internet
    ↓
[GoDaddy Domain]
    ↓
[cPanel - Frontend]
    ↓
Browser ←→ [VPS - Backend API] ←→ [Supabase Database]
    ↓
[Email Server]
```

Components:
- **Frontend**: Static React files served by cPanel
- **Backend**: Node.js API running on VPS
- **Database**: Supabase (external service)
- **Email**: GoDaddy SMTP server

## 🚀 Deployment Process

### 1. Prepare Your Environment

```bash
# Clone or navigate to your project directory
cd YviSoft

# Ensure all dependencies are installed
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
```

### 2. Build Frontend

```bash
# Navigate to frontend directory
cd frontend

# Build for production
npm run build

# This creates a 'dist' folder with all static files
```

Or use our build script:
```bash
node build-frontend.js
```

### 3. Prepare Backend

```bash
# Use our deployment script
node deploy-backend.js
```

This creates a deployment package in `yvi-soft-backend-deploy`.

## 🖥️ Frontend Deployment (cPanel)

### Method 1: Using cPanel File Manager

1. Log in to your GoDaddy cPanel
2. Navigate to File Manager
3. Go to your website's root directory (usually `public_html`)
4. Delete existing files (if any)
5. Upload all contents from the `frontend/dist` folder:
   - `index.html`
   - `assets/` folder
   - All other static files

### Method 2: Using FTP/SFTP

1. Use an FTP client (FileZilla, WinSCP)
2. Connect to your GoDaddy hosting with FTP credentials
3. Upload all contents from your `frontend/dist` folder to the root directory

### Environment Variables

Set these environment variables in your cPanel:
1. Go to cPanel > Software > MultiPHP INI Editor
2. Select your domain
3. Add these variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_BACKEND_URL=https://api.yourdomain.com
```

## ☁️ Backend Deployment (VPS)

### 1. Upload Backend Files

1. Connect to your VPS via SSH:
   ```bash
   ssh username@your-vps-ip
   ```

2. Create a directory for your backend:
   ```bash
   mkdir /var/www/yvi-soft-api
   ```

3. Upload the deployment package files to this directory using SFTP or SCP:
   - `package.json`
   - `server.js`
   - `.env.example`

### 2. Install Dependencies

```bash
# Navigate to backend directory
cd /var/www/yvi-soft-api

# Install dependencies
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:
```bash
cp .env.example .env
nano .env
```

Add your configuration:
```env
EMAIL_USER=contact@yvisoft.com
EMAIL_PASS=your_email_password
EMAIL_TO=sanjeevirr@yvisoft.com
PORT=3001
```

### 4. Set Up Process Manager (PM2)

```bash
# Install PM2 globally
npm install -g pm2

# Start your app with PM2
pm2 start server.js --name "yvi-soft-api"

# Set PM2 to start on boot
pm2 startup
pm2 save
```

### 5. Configure Reverse Proxy

#### Apache Configuration (cPanel)

1. In cPanel, go to "Subdomains"
2. Create a subdomain for your API (e.g., api.yourdomain.com)
3. Point it to a directory like `/var/www/yvi-soft-api`

#### Nginx Configuration (VPS)

Create a reverse proxy configuration:
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

### 6. SSL Configuration

#### Using cPanel SSL/TLS

1. In cPanel, go to "SSL/TLS Status"
2. Select your domain and subdomain
3. Enable AutoSSL for both domains

## ⚙️ Configuration

### Frontend Configuration

Update `frontend/vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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

### Backend Configuration

Ensure your `backend/server.js` has proper CORS configuration:
```javascript
app.use(cors({
  origin: ['https://yourdomain.com', 'https://www.yourdomain.com'],
  credentials: true
}));
```

## 🧪 Testing

### 1. Frontend Testing

1. Visit your domain in a browser (https://yourdomain.com)
2. Check that all pages load correctly
3. Verify that CSS and JavaScript files are loading
4. Test navigation between pages

### 2. Backend Testing

1. Test API endpoint:
   ```bash
   curl -X POST https://api.yourdomain.com/api/send-email \
     -H "Content-Type: application/json" \
     -d '{"from":"test@example.com","subject":"Test","html":"<h1>Test</h1>"}'
   ```

2. Check PM2 status:
   ```bash
   pm2 list
   pm2 logs yvi-soft-api
   ```

### 3. Integration Testing

1. Submit the contact form on your website
2. Check browser console for errors
3. Verify the API call in the Network tab
4. Check that data is saved to Supabase
5. Verify that email is received

## 🛠️ Troubleshooting

### Common Issues

1. **Blank Page After Deployment**
   - Check browser console for errors
   - Verify all files were uploaded
   - Check that `index.html` is in the root directory
   - Clear browser cache

2. **API Connection Errors**
   - Verify backend URL in environment variables
   - Check CORS configuration in `server.js`
   - Ensure backend is running on VPS
   - Check firewall settings

3. **Email Not Sending**
   - Check email credentials in backend .env file
   - Verify GoDaddy SMTP settings
   - Check PM2 logs: `pm2 logs yvi-soft-api`
   - Test SMTP connection with provided test scripts

4. **Form Not Submitting**
   - Check browser console for JavaScript errors
   - Verify Supabase credentials
   - Ensure all required fields are filled
   - Check network tab for API errors

### Debugging Commands

```bash
# Check if backend is running
pm2 list

# View backend logs
pm2 logs yvi-soft-api

# Check port usage
netstat -tulpn | grep 3001

# Test backend locally
curl -X POST http://localhost:3001/api/send-email -H "Content-Type: application/json" -d '{"from":"test@example.com","subject":"Test","html":"<h1>Test</h1>"}'
```

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files to version control
   - Use platform-specific environment variable configuration
   - Rotate credentials regularly

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
   - Disable root login

## 🔧 Maintenance

### Updating the Application

1. **Frontend Updates**
   ```bash
   # Rebuild the frontend
   cd frontend
   npm run build
   
   # Upload new files to cPanel
   # Clear CDN cache if applicable
   ```

2. **Backend Updates**
   ```bash
   # Upload updated files to VPS
   # Restart with PM2
   pm2 restart yvi-soft-api
   
   # Check logs for errors
   pm2 logs yvi-soft-api
   ```

### Monitoring

1. **Frontend Monitoring**
   - Use browser developer tools to check for errors
   - Monitor page load times
   - Set up uptime monitoring

2. **Backend Monitoring**
   - Check PM2 status: `pm2 status`
   - Monitor logs: `pm2 logs`
   - Set up health check endpoints
   - Monitor resource usage

## 📚 Additional Resources

- [GoDaddy VPS Documentation](https://www.godaddy.com/help)
- [Node.js Deployment Guide](https://nodejs.org/en/docs/guides/)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [Supabase Documentation](https://supabase.com/docs)

## 📞 Support

If you encounter issues during deployment:

1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure your backend is running and accessible
4. Check PM2 logs for backend errors
5. Contact GoDaddy support if problems persist

## 📝 Documentation

Refer to these additional documentation files:
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) - Step-by-step deployment checklist
- [YVI_SOFT_GODADDY_DEPLOYMENT_PLAN.md](YVI_SOFT_GODADDY_DEPLOYMENT_PLAN.md) - Detailed deployment plan
- [GODADDY_DEPLOYMENT_GUIDE.md](documentation/GODADDY_DEPLOYMENT_GUIDE.md) - Original GoDaddy deployment guide