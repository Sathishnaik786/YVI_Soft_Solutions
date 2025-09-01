#!/usr/bin/env node

/**
 * Backend Preparation Script for YVI Soft
 * This script prepares the backend files for deployment to cloud platforms
 */

import fs from 'fs';
// path import removed as it's not used

console.log('🔧 YVI Soft Backend Preparation Script');
console.log('=====================================\n');

// Create backend directory if it doesn't exist
const backendDir = 'yvi-soft-backend';
if (!fs.existsSync(backendDir)) {
  console.log(`📁 Creating ${backendDir} directory...`);
  fs.mkdirSync(backendDir);
  console.log('✅ Directory created\n');
} else {
  console.log(`📁 Using existing ${backendDir} directory\n`);
}

// Copy required files
const filesToCopy = [
  { src: 'package-backend.json', dest: `${backendDir}/package.json` },
  { src: 'server.js', dest: `${backendDir}/server.js` }
];

console.log('📋 Copying backend files...\n');

filesToCopy.forEach(file => {
  try {
    if (fs.existsSync(file.src)) {
      fs.copyFileSync(file.src, file.dest);
      console.log(`✅ Copied ${file.src} to ${file.dest}`);
    } else {
      console.warn(`⚠️  Warning: ${file.src} not found`);
    }
  } catch (error) {
    console.error(`❌ Error copying ${file.src}:`, error.message);
  }
});

console.log('\n✅ Backend preparation completed!');
console.log('\n📁 Backend files are now ready in the yvi-soft-backend directory.');
console.log('Next steps:');
console.log('1. Create a GitHub repository for the backend');
console.log('2. Push the yvi-soft-backend directory to the repository');
console.log('3. Deploy to Render or another cloud platform');
console.log('4. Set the required environment variables:');
console.log('   - EMAIL_USER=contact@yvisoft.com');
console.log('   - EMAIL_PASS=your_email_password');