#!/usr/bin/env node

/**
 * Deployment Helper Script for YVI Soft
 * This script helps automate the build process and provides deployment instructions
 */

import { execSync } from 'child_process';
import fs from 'fs';
// path import removed as it's not used

console.log('🚀 YVI Soft Deployment Helper');
console.log('============================\n');

// Check if we're in the correct directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found. Please run this script from the project root directory.');
  process.exit(1);
}

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.split('.')[0].replace('v', ''));
if (majorVersion < 18) {
  console.warn(`⚠️  Warning: Node.js version ${nodeVersion} detected. Recommended version is 18 or higher.`);
}

console.log('✅ Prerequisites check passed\n');

// Function to run a command
function runCommand(command, description) {
  try {
    console.log(`🔧 ${description}...`);
    execSync(command, { stdio: 'inherit' });
    console.log('✅ Done\n');
  } catch (error) {
    console.error(`❌ Error during: ${description}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Build the frontend
console.log('📦 Building frontend application...\n');
runCommand('npm run build', 'Building React application with Vite');

// Check if build was successful
if (!fs.existsSync('dist')) {
  console.error('❌ Error: Build failed. The dist folder was not created.');
  process.exit(1);
}

console.log('✅ Frontend build completed successfully!\n');

// Display deployment instructions
console.log('📋 Deployment Instructions:');
console.log('==========================\n');

console.log('1. FRONTEND DEPLOYMENT (GoDaddy):');
console.log('   - Upload all contents of the "dist" folder to your GoDaddy hosting');
console.log('   - Use FTP or cPanel File Manager');
console.log('   - Ensure index.html is in the root directory\n');

console.log('2. BACKEND DEPLOYMENT (Cloud Platform):');
console.log('   - Create a separate directory for backend:');
console.log('     mkdir yvi-soft-backend');
console.log('     cp package-backend.json yvi-soft-backend/package.json');
console.log('     cp server.js yvi-soft-backend/\n');
console.log('   - Deploy to a cloud platform like Render or Heroku');
console.log('   - Set environment variables:');
console.log('     * EMAIL_USER=contact@yvisoft.com');
console.log('     * EMAIL_PASS=your_email_password\n');

console.log('3. ENVIRONMENT VARIABLES:');
console.log('   - Set these variables in your GoDaddy hosting:');
console.log('     * VITE_SUPABASE_URL=your_supabase_project_url');
console.log('     * VITE_SUPABASE_ANON_KEY=your_supabase_anon_key');
console.log('     * VITE_BACKEND_URL=https://your-backend-url.onrender.com\n');

console.log('4. CONFIGURATION UPDATES:');
console.log('   - Update vite.config.js to point to your deployed backend');
console.log('   - Update email service to use production URLs\n');

console.log('📖 For detailed instructions, see:');
console.log('   - DEPLOYMENT_GUIDE.md');
console.log('   - GODADDY_DEPLOYMENT_GUIDE.md\n');

console.log('✅ Deployment preparation completed!');
console.log('Next steps: Follow the deployment guides to upload your files to GoDaddy and deploy your backend.');