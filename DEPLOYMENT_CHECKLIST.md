# 📋 YVI Soft Deployment Checklist

Use this checklist to ensure all steps are completed during deployment.

## 🔲 Pre-Deployment Preparation

### Frontend Preparation
- [ ] Run `npm run build` to create production build
- [ ] Verify `dist/` folder contains all necessary files
- [ ] Test build locally with `npm run preview`

### Backend Preparation
- [ ] Run `npm run prepare-backend` to prepare backend files
- [ ] Verify `yvi-soft-backend/` directory contains:
  - [ ] `package.json`
  - [ ] `server.js`
  - [ ] `render.yaml`
  - [ ] `README.md`
  - [ ] `.gitignore`

### Environment Variables
- [ ] Create `.env.production` file with production values:
  - [ ] `VITE_SUPABASE_URL`
  - [ ] `VITE_SUPABASE_ANON_KEY`
  - [ ] `VITE_BACKEND_URL`

## 🔲 Backend Deployment (Render/Heroku)

### Repository Setup
- [ ] Create GitHub repository for backend
- [ ] Push `yvi-soft-backend/` contents to repository
- [ ] Verify repository contains all necessary files

### Platform Deployment
- [ ] Create new Web Service on Render/Heroku
- [ ] Connect to GitHub repository
- [ ] Set environment variables:
  - [ ] `EMAIL_USER=contact@yvisoft.com`
  - [ ] `EMAIL_PASS=your_email_password`
  - [ ] `PORT=3001` (if required)
- [ ] Deploy application
- [ ] Verify backend is running and accessible

### Testing
- [ ] Test API endpoint: `POST /api/send-email`
- [ ] Verify email sending functionality
- [ ] Check application logs for errors

## 🔲 Frontend Deployment (GoDaddy)

### File Upload
- [ ] Upload all contents from `dist/` folder to GoDaddy hosting
- [ ] Use FTP or cPanel File Manager
- [ ] Ensure `index.html` is in root directory
- [ ] Verify all assets are uploaded correctly

### Configuration
- [ ] Set environment variables in GoDaddy hosting:
  - [ ] `VITE_SUPABASE_URL`
  - [ ] `VITE_SUPABASE_ANON_KEY`
  - [ ] `VITE_BACKEND_URL` (pointing to deployed backend)

### Domain Configuration
- [ ] Verify domain points to correct hosting
- [ ] Check DNS settings if using custom domain
- [ ] Test website accessibility

## 🔲 Post-Deployment Testing

### Frontend Testing
- [ ] Visit website in browser
- [ ] Test all pages and navigation
- [ ] Verify responsive design on different devices
- [ ] Check all images and assets load correctly

### Contact Form Testing
- [ ] Fill out and submit contact form
- [ ] Verify form validation works
- [ ] Check data saves to Supabase database
- [ ] Verify email notification is sent
- [ ] Check browser console for errors

### API Testing
- [ ] Monitor network requests in browser dev tools
- [ ] Verify API calls to backend are successful
- [ ] Check response times and status codes

### Performance Testing
- [ ] Test website loading speed
- [ ] Verify caching is working correctly
- [ ] Check for any console errors or warnings

## 🔲 Security & Monitoring

### Security Checks
- [ ] Verify HTTPS is enabled
- [ ] Check that sensitive files are not accessible
- [ ] Verify environment variables are properly set
- [ ] Confirm no sensitive data is exposed

### Monitoring Setup
- [ ] Set up error monitoring (if applicable)
- [ ] Configure uptime monitoring
- [ ] Set up log monitoring for backend
- [ ] Configure alerts for critical issues

## 🔲 Documentation & Handover

### Documentation Updates
- [ ] Update any deployment-specific documentation
- [ ] Record deployed URLs and access credentials
- [ ] Document any custom configurations

### Handover Information
- [ ] Provide access credentials to relevant stakeholders
- [ ] Share deployment documentation
- [ ] Explain monitoring and maintenance procedures

## 🔲 Final Verification

### Final Testing
- [ ] Perform end-to-end testing of all features
- [ ] Verify all integrations work correctly
- [ ] Test error handling and edge cases
- [ ] Confirm website meets all requirements

### Go/No-Go Decision
- [ ] All checklist items completed
- [ ] All tests passing
- [ ] Stakeholder approval obtained
- [ ] Ready for production use

---

📝 **Notes:**
- Update this checklist as needed for your specific deployment requirements
- Add any project-specific steps or considerations
- Keep this checklist updated with any changes to the deployment process