#!/usr/bin/env node

/**
 * Backend Deployment Script for YVI Soft
 * This script helps prepare the backend for deployment to VPS
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 YVI Soft Backend Deployment Script');
console.log('====================================\n');

// Check if we're in the correct directory
const projectRoot = process.cwd();
const backendDir = path.join(projectRoot, 'backend');

if (!fs.existsSync(backendDir)) {
  console.error('❌ Error: Backend directory not found. Please run this script from the project root directory.');
  process.exit(1);
}

if (!fs.existsSync(path.join(backendDir, 'package.json'))) {
  console.error('❌ Error: package.json not found in backend directory.');
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
function runCommand(command, description, cwd = backendDir) {
  try {
    console.log(`🔧 ${description}...`);
    execSync(command, { stdio: 'inherit', cwd });
    console.log('✅ Done\n');
  } catch (error) {
    console.error(`❌ Error during: ${description}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Create deployment package directory
const deployDir = path.join(projectRoot, 'yvi-soft-backend-deploy');
console.log(`📂 Creating deployment package directory: ${deployDir}`);
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true, force: true });
}
fs.mkdirSync(deployDir);
console.log('✅ Deployment directory created\n');

// Copy necessary files
const filesToCopy = [
  'package.json',
  'server.js',
  '.env.example'
];

console.log('📋 Copying necessary files...');
for (const file of filesToCopy) {
  const source = path.join(backendDir, file);
  const destination = path.join(deployDir, file);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, destination);
    console.log(`   ✅ Copied ${file}`);
  } else {
    console.warn(`   ⚠️  Warning: ${file} not found`);
  }
}

console.log('✅ Files copied successfully\n');

// Create deployment instructions
const deploymentInstructions = `
# YVI Soft Backend Deployment Instructions

## Files Included
- package.json - Backend dependencies
- server.js - Main server file
- .env.example - Environment variable template

## Deployment Steps

1. Upload these files to your VPS:
   \`scp -r * user@your-vps-ip:/var/www/yvi-soft-api\`

2. SSH into your VPS:
   \`ssh user@your-vps-ip\`

3. Navigate to the backend directory:
   \`cd /var/www/yvi-soft-api\`

4. Install dependencies:
   \`npm install\`

5. Install PM2 globally (if not already installed):
   \`npm install -g pm2\`

6. Create your environment file:
   \`cp .env.example .env\`
   Then edit .env with your actual credentials

7. Start the server with PM2:
   \`pm2 start server.js --name "yvi-soft-api"\`

8. Set PM2 to start on boot:
   \`pm2 startup\`
   \`pm2 save\`

9. Configure reverse proxy (Apache/Nginx) to point api.yourdomain.com to localhost:3001

## Environment Variables Required
- EMAIL_USER - Your email address for sending emails
- EMAIL_PASS - Your email password or app-specific password
- EMAIL_TO - Recipient email address (default: sanjeevirr@yvisoft.com)
- PORT - Port to run the server on (default: 3001)

## Testing
After deployment, test your API endpoint:
curl -X POST http://localhost:3001/api/send-email -H "Content-Type: application/json" -d '{"from":"test@example.com","subject":"Test","html":"<h1>Test</h1>"}'
`;

const instructionsPath = path.join(deployDir, 'DEPLOYMENT_INSTRUCTIONS.md');
fs.writeFileSync(instructionsPath, deploymentInstructions);
console.log('✅ Deployment instructions created\n');

console.log('📊 Deployment Package Information:');
console.log(`   Location: ${deployDir}`);
console.log(`   Files included: ${filesToCopy.join(', ')}`);
console.log(`   Instructions: ${instructionsPath}\n`);

console.log('✅ Backend deployment package created successfully!');
console.log('Next steps:');
console.log('1. Review the deployment instructions');
console.log('2. Upload the package to your VPS');
console.log('3. Follow the deployment steps in the instructions');