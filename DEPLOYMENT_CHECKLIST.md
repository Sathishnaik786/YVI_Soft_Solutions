# ✅ YVI Soft Deployment Checklist for GoDaddy

## 🔧 Pre-Deployment Preparation

### Frontend Preparation
- [ ] Build React application (`npm run build` in frontend directory)
- [ ] Verify `dist` folder is created with all necessary files
- [ ] Update `.env.production` with production environment variables
- [ ] Test build locally using `npm run preview`

### Backend Preparation
- [ ] Create backend deployment package
- [ ] Verify `server.js` and `package.json` are included
- [ ] Prepare `.env` file with production credentials
- [ ] Test backend locally with `npm start`

### Environment Variables
- [ ] Supabase URL: `VITE_SUPABASE_URL`
- [ ] Supabase Anon Key: `VITE_SUPABASE_ANON_KEY`
- [ ] Backend URL: `VITE_BACKEND_URL`
- [ ] Email User: `EMAIL_USER`
- [ ] Email Password: `EMAIL_PASS`
- [ ] Email Recipient: `EMAIL_TO`

## ☁️ GoDaddy Account Setup

### cPanel Access
- [ ] Log in to GoDaddy cPanel
- [ ] Verify file manager access
- [ ] Confirm FTP/SFTP credentials
- [ ] Check available disk space

### VPS Access
- [ ] Verify SSH access to VPS
- [ ] Confirm root/sudo privileges
- [ ] Check available RAM and storage
- [ ] Verify firewall settings

## 📁 Frontend Deployment (cPanel)

### File Upload
- [ ] Connect via FTP/SFTP or cPanel File Manager
- [ ] Navigate to `public_html` directory
- [ ] Upload all contents from `dist` folder
- [ ] Verify `index.html` is in root directory
- [ ] Confirm all assets are uploaded correctly

### Domain Configuration
- [ ] Verify domain points to correct directory
- [ ] Test website access via browser
- [ ] Check for broken links or missing assets

## ⚙️ Backend Deployment (VPS)

### Server Setup
- [ ] Connect to VPS via SSH
- [ ] Create backend directory (`/var/www/yvi-soft-api`)
- [ ] Upload backend files to VPS
- [ ] Install Node.js if not already installed
- [ ] Install project dependencies (`npm install`)

### Process Management
- [ ] Install PM2 globally (`npm install -g pm2`)
- [ ] Start backend with PM2 (`pm2 start server.js`)
- [ ] Set PM2 to start on boot (`pm2 startup` and `pm2 save`)
- [ ] Verify backend is running (`pm2 list`)

### Reverse Proxy Configuration
- [ ] Configure Apache or Nginx reverse proxy
- [ ] Set up subdomain (api.yourdomain.com)
- [ ] Test API endpoint accessibility
- [ ] Verify proxy is working correctly

## 🔐 Security Configuration

### SSL Certificates
- [ ] Enable AutoSSL in cPanel for main domain
- [ ] Enable AutoSSL for API subdomain
- [ ] Verify HTTPS access for both domains
- [ ] Test mixed content issues

### Environment Security
- [ ] Set proper file permissions (644 for files, 755 for directories)
- [ ] Secure `.env` files (not accessible via web)
- [ ] Configure firewall rules if needed
- [ ] Update SSH security settings

## 🌐 Configuration Updates

### Frontend Configuration
- [ ] Update `vite.config.js` with production settings
- [ ] Verify email service points to correct backend URL
- [ ] Confirm environment variables are properly loaded
- [ ] Test configuration in development mode

### Backend Configuration
- [ ] Update `server.js` with production settings
- [ ] Verify CORS configuration allows your domain
- [ ] Confirm email transporter settings
- [ ] Test configuration locally

## 🧪 Testing & Verification

### Frontend Testing
- [ ] Test all pages load correctly
- [ ] Verify all navigation works
- [ ] Check responsive design on different devices
- [ ] Test contact form submission

### Backend Testing
- [ ] Test API endpoint accessibility
- [ ] Verify email sending functionality
- [ ] Check Supabase integration
- [ ] Test error handling

### Integration Testing
- [ ] Submit test contact form
- [ ] Verify email receipt
- [ ] Check Supabase data storage
- [ ] Monitor browser console for errors

## 📊 Performance Optimization

### Frontend Optimization
- [ ] Enable Gzip compression in cPanel
- [ ] Configure browser caching
- [ ] Optimize images if needed
- [ ] Minify CSS/JS (already done in build)

### Backend Optimization
- [ ] Configure appropriate logging levels
- [ ] Set up log rotation
- [ ] Monitor resource usage
- [ ] Implement rate limiting if needed

## 📈 Monitoring & Maintenance

### Monitoring Setup
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Set up performance monitoring
- [ ] Create alerting system

### Backup Strategy
- [ ] Create backup of frontend files
- [ ] Create backup of backend files
- [ ] Backup environment configurations
- [ ] Document recovery procedures

## 📝 Documentation

### Deployment Documentation
- [ ] Record deployment steps taken
- [ ] Document any issues encountered and solutions
- [ ] Update version information
- [ ] Create rollback plan

### Access Information
- [ ] Document FTP/SFTP credentials location
- [ ] Record VPS access information
- [ ] Note environment variable locations
- [ ] Save PM2 process information

## 🚀 Go-Live Checklist

### Final Verification
- [ ] Verify all functionality works in production
- [ ] Test on multiple devices/browsers
- [ ] Confirm SSL certificates are valid
- [ ] Check website speed and performance

### DNS Configuration
- [ ] Verify DNS records are correct
- [ ] Check DNS propagation
- [ ] Confirm domain redirects if needed
- [ ] Test both www and non-www versions

### Announcement
- [ ] Update stakeholders about deployment
- [ ] Schedule monitoring during launch
- [ ] Prepare rollback plan
- [ ] Document success criteria

## 🆘 Emergency Procedures

### Rollback Plan
- [ ] Identify previous working version
- [ ] Document rollback steps
- [ ] Test rollback procedure
- [ ] Keep backup files accessible

### Support Contacts
- [ ] GoDaddy support contact information
- [ ] Team member contact information
- [ ] Third-party service support contacts
- [ ] Emergency contact procedures