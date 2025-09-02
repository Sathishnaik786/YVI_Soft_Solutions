#!/usr/bin/env node

/**
 * Frontend Build Script for YVI Soft
 * This script automates the build process for the frontend application
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 YVI Soft Frontend Build Script');
console.log('=================================\n');

// Check if we're in the correct directory
const projectRoot = process.cwd();
const frontendDir = path.join(projectRoot, 'frontend');

if (!fs.existsSync(frontendDir)) {
  console.error('❌ Error: Frontend directory not found. Please run this script from the project root directory.');
  process.exit(1);
}

if (!fs.existsSync(path.join(frontendDir, 'package.json'))) {
  console.error('❌ Error: package.json not found in frontend directory.');
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
function runCommand(command, description, cwd = frontendDir) {
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

// Clean previous build
console.log('🧹 Cleaning previous build...');
if (fs.existsSync(path.join(frontendDir, 'dist'))) {
  fs.rmSync(path.join(frontendDir, 'dist'), { recursive: true, force: true });
  console.log('✅ Previous build cleaned\n');
} else {
  console.log('ℹ️  No previous build found\n');
}

// Install dependencies
console.log('📦 Installing dependencies...');
runCommand('npm install', 'Installing frontend dependencies');

// Build the frontend
console.log('🏗️  Building frontend application...\n');
runCommand('npm run build', 'Building React application with Vite');

// Check if build was successful
if (!fs.existsSync(path.join(frontendDir, 'dist'))) {
  console.error('❌ Error: Build failed. The dist folder was not created.');
  process.exit(1);
}

// Display build statistics
const distDir = path.join(frontendDir, 'dist');
const files = fs.readdirSync(distDir);
const fileCount = files.length;

console.log('📊 Build Statistics:');
console.log(`   Files generated: ${fileCount}`);
console.log(`   Build directory: ${distDir}\n`);

// Check for important files
const importantFiles = ['index.html'];
const missingFiles = [];

for (const file of importantFiles) {
  if (!fs.existsSync(path.join(distDir, file))) {
    missingFiles.push(file);
  }
}

if (missingFiles.length > 0) {
  console.warn(`⚠️  Warning: Missing important files: ${missingFiles.join(', ')}`);
} else {
  console.log('✅ All important files present');
}

console.log('📋 Deployment Instructions:');
console.log('==========================');
console.log('1. Upload all contents of the "dist" folder to your GoDaddy hosting');
console.log('2. Use FTP or cPanel File Manager');
console.log('3. Ensure index.html is in the root directory\n');

console.log('✅ Frontend build completed successfully!');
console.log('Next steps: Deploy the contents of the dist folder to your GoDaddy hosting.');