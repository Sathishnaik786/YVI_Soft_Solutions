#!/usr/bin/env node

// Simple start script for Render deployment
// This script changes to the backend directory and starts the server

const { spawn } = require('child_process');
const path = require('path');

console.log('Starting YVI Soft Email Server...');

// Change to backend directory and start the server
const backendDir = path.join(__dirname, 'backend');

console.log(`Changing to directory: ${backendDir}`);

const server = spawn('node', ['server.js'], {
  cwd: backendDir,
  stdio: 'inherit'
});

server.on('error', (error) => {
  console.error(`Error starting server: ${error}`);
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});