# ✅ Deployment Checklist

Use this checklist to ensure all steps are completed when deploying the YVI Soft application to production.

## 📋 Pre-Deployment

- [ ] Update version numbers in package.json files
- [ ] Run tests locally to ensure everything works
- [ ] Check for any console errors or warnings
- [ ] Verify all environment variables are set correctly
- [ ] Ensure all dependencies are up to date
- [ ] Backup current production version (if exists)

## 🚀 Frontend Deployment (GoDaddy)

- [ ] Build frontend: `npm run build`
- [ ] Verify build completes without errors
- [ ] Check contents of `dist` folder
- [ ] Upload files to GoDaddy `httpdocs` directory
- [ ] Verify file permissions are correct
- [ ] Test website loads correctly
- [ ] Check all pages and navigation work
- [ ] Verify CSS and JavaScript files load properly

## ☁️ Backend Deployment (Render)

- [ ] Push latest code to GitHub repository
- [ ] Connect Render to GitHub repository
- [ ] Verify build process completes successfully
- [ ] Set all required environment variables:
  - [ ] `EMAIL_USER`
  - [ ] `EMAIL_PASS`
  - [ ] `EMAIL_TO`
  - [ ] `SMTP_HOST`
  - [ ] `SMTP_PORT`
  - [ ] `SUPABASE_URL`
  - [ ] `SUPABASE_KEY`
  - [ ] `FRONTEND_URL`
  - [ ] `NODE_ENV`
- [ ] Verify backend service is running
- [ ] Check Render logs for any errors

## 🔍 Testing

- [ ] Test contact form submission:
  - [ ] Verify form validation works
  - [ ] Check data saves to Supabase
  - [ ] Verify email is sent
  - [ ] Confirm success message displays
- [ ] Test all API endpoints
- [ ] Check CORS configuration
- [ ] Verify error handling works correctly
- [ ] Test on different browsers and devices

## 🔒 Security

- [ ] Verify HTTPS is working
- [ ] Check that sensitive data is not exposed
- [ ] Ensure environment variables are properly secured
- [ ] Verify authentication/authorization (if applicable)

## 📈 Monitoring

- [ ] Set up error tracking (if applicable)
- [ ] Configure logging
- [ ] Set up performance monitoring (if applicable)
- [ ] Verify analytics are working (if applicable)

## 📝 Documentation

- [ ] Update version history
- [ ] Document any changes made during deployment
- [ ] Update user guides (if applicable)
- [ ] Notify team of deployment completion

## 🆘 Post-Deployment

- [ ] Monitor application for errors
- [ ] Check user feedback
- [ ] Verify all features work as expected
- [ ] Address any immediate issues

---

📝 **Notes:**
- Always deploy during low-traffic periods if possible
- Have a rollback plan ready
- Test thoroughly before and after deployment
- Communicate with stakeholders about downtime (if any)