#!/usr/bin/env node

// Simple start script for Render deployment
// This script changes to the backend directory and starts the server

const { exec } = require('child_process');
const path = require('path');

console.log('Starting YVI Soft Email Server...');

// Change to backend directory and start the server
const backendDir = path.join(__dirname, 'backend');
const startCommand = `cd ${backendDir} && npm start`;

console.log(`Executing: ${startCommand}`);

exec(startCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting server: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  if (stdout) {
    console.log(`stdout: ${stdout}`);
  }
});