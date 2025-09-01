# 🚀 YVI Soft Deployment Summary

This document provides a complete summary of the deployment process for the YVI Soft website on GoDaddy hosting with a separate backend deployment.

## 📋 Deployment Components

### 1. Frontend (React Application)
- **Location**: GoDaddy shared hosting
- **Technology**: React 19, Vite 7, Bootstrap 5
- **Build Output**: Static files in `dist/` directory

### 2. Backend (Email Server)
- **Location**: Cloud platform (Render recommended)
- **Technology**: Node.js, Express, Nodemailer
- **Function**: Send email notifications from contact form

### 3. Database
- **Location**: Supabase (external service)
- **Technology**: PostgreSQL
- **Function**: Store contact form submissions

## 🔧 Deployment Steps

### Step 1: Prepare Frontend for Deployment

1. Build the React application:
   ```bash
   npm run build
   ```

2. The build creates a `dist/` folder with all static files

### Step 2: Deploy Backend to Cloud Platform

1. Backend files are in the `yvi-soft-backend/` directory:
   - `server.js` - Email server implementation
   - `package.json` - Backend dependencies
   - `render.yaml` - Render deployment configuration
   - `.gitignore` - Git ignore rules
   - `README.md` - Backend documentation

2. Deploy to Render:
   - Create a GitHub repository with the backend files
   - Connect Render to the repository
   - Set environment variables:
     - `EMAIL_USER`: contact@yvisoft.com
     - `EMAIL_PASS`: Your email password

### Step 3: Upload Frontend to GoDaddy

1. Use FTP or cPanel File Manager to upload all contents from the `dist/` folder to your GoDaddy hosting root directory

2. Ensure `index.html` is in the root directory

### Step 4: Configure Environment Variables

Set these environment variables in your GoDaddy hosting:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_BACKEND_URL=https://your-render-app.onrender.com
```

### Step 5: Update Configuration Files

1. Update `vite.config.js` to point to your deployed backend:
   ```javascript
   server: {
     proxy: {
       '/api': {
         target: 'https://your-render-app.onrender.com',
         changeOrigin: true,
         secure: true
       }
     }
   }
   ```

2. Update `src/services/emailService.js` to use production URLs:
   ```javascript
   const EMAIL_API_URL = import.meta.env.PROD 
     ? (import.meta.env.VITE_BACKEND_URL || 'https://your-render-app.onrender.com') + '/api/send-email'
     : '/api/send-email';
   ```

## 📁 Directory Structure After Deployment

```
Root (GoDaddy hosting)
├── index.html
├── assets/
│   ├── *.css
│   ├── *.js
│   └── images/
└── ... (other static files)

Backend (Render)
├── server.js
├── package.json
├── render.yaml
└── README.md
```

## 🔍 Testing Checklist

- [ ] Frontend loads correctly in browser
- [ ] All pages and components display properly
- [ ] Contact form submits without errors
- [ ] Data saves to Supabase database
- [ ] Email notifications are sent
- [ ] No console errors in browser
- [ ] No network errors in browser dev tools

## 🛠️ Troubleshooting

### Common Issues

1. **Blank Page**: Check that all files were uploaded correctly and `index.html` is in the root

2. **Form Not Submitting**: 
   - Verify backend URL in environment variables
   - Check that the backend server is running
   - Check browser console for errors

3. **Email Not Sending**:
   - Verify email credentials in Render dashboard
   - Check spam folder
   - Verify GoDaddy SMTP settings

4. **Database Connection Issues**:
   - Verify Supabase credentials
   - Check that the contact_messages table exists
   - Ensure proper CORS configuration

## 🔄 Maintenance

1. **Frontend Updates**:
   - Rebuild with `npm run build`
   - Re-upload contents of `dist/` folder

2. **Backend Updates**:
   - Push changes to GitHub repository
   - Render will automatically redeploy

3. **Database Management**:
   - Monitor Supabase dashboard for submissions
   - Regularly backup database

## 📚 Documentation

Refer to these documents for detailed instructions:
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - General deployment instructions
- [GODADDY_DEPLOYMENT_GUIDE.md](GODADDY_DEPLOYMENT_GUIDE.md) - GoDaddy-specific deployment guide
- [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) - Email server setup guide
- [README.md](README.md) - Project overview and setup

## 🆘 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all environment variables are set correctly
3. Ensure backend is running and accessible
4. Contact support if problems persist