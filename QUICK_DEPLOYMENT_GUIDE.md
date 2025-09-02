# 🚀 Quick Deployment Guide for YVI Soft

This guide provides a quick reference for deploying your YVI Soft website to GoDaddy with VPS and cPanel.

## 📋 Prerequisites

1. **GoDaddy Account** with:
   - cPanel access
   - VPS access
   - Domain configured

2. **Local Setup**:
   - Node.js (v18+)
   - This project repository

## 🚀 Quick Deployment Steps

### 1. Prepare Deployment Files

```bash
# Run the automated deployment preparation
npm run deploy
```

This command will:
- Build the frontend application
- Create a backend deployment package

### 2. Deploy Frontend (cPanel)

1. **Access cPanel File Manager**
   - Log in to GoDaddy cPanel
   - Navigate to File Manager
   - Go to your website's root directory (usually `public_html`)

2. **Upload Frontend Files**
   - Upload all contents from `frontend/dist/`:
     - `index.html`
     - `assets/` folder and all contents

3. **Configure Environment Variables**
   - In cPanel, go to "Software" > "MultiPHP INI Editor"
   - Add these variables:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_key
     VITE_BACKEND_URL=https://api.yourdomain.com
     ```

### 3. Deploy Backend (VPS)

1. **Upload Backend Files**
   ```bash
   # Upload deployment package to VPS
   scp -r yvi-soft-backend-deploy/* user@your-vps-ip:/var/www/yvi-soft-api
   ```

2. **Configure Backend on VPS**
   ```bash
   # SSH into your VPS
   ssh user@your-vps-ip
   
   # Navigate to backend directory
   cd /var/www/yvi-soft-api
   
   # Install dependencies
   npm install
   
   # Install PM2
   npm install -g pm2
   
   # Create environment file
   cp .env.example .env
   # Edit .env with your credentials
   
   # Start with PM2
   pm2 start server.js --name "yvi-soft-api"
   pm2 startup
   pm2 save
   ```

3. **Configure Reverse Proxy**
   - Set up Apache/Nginx to proxy `api.yourdomain.com` to `localhost:3001`

### 4. Finalize and Test

1. **Enable SSL**
   - In cPanel, enable AutoSSL for your domain and API subdomain

2. **Test Deployment**
   - Visit your website: `https://yourdomain.com`
   - Submit the contact form
   - Verify emails are received and data is saved to Supabase

## 📁 Deployment Package Locations

After running `npm run deploy`:

- **Frontend**: `frontend/dist/`
- **Backend**: `yvi-soft-backend-deploy/`

## 🛠️ Useful Commands

```bash
# Build frontend only
npm run build:frontend

# Prepare backend deployment package only
npm run deploy:backend

# Build frontend and prepare backend
npm run deploy

# Test locally
npm run dev
```

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify environment variables
3. Check PM2 logs: `pm2 logs yvi-soft-api`
4. Contact GoDaddy support if needed

## ✅ Success Verification

Your deployment is successful when:
- [ ] Website loads at `https://yourdomain.com`
- [ ] All pages and navigation work
- [ ] Contact form submits successfully
- [ ] Emails are received
- [ ] Data is saved to Supabase
- [ ] Both frontend and backend use HTTPS