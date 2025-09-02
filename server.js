// This is a proxy server.js file for Render deployment
// It delegates to the actual backend server in the backend directory

console.log('Starting YVI Soft Email Server...');

// Change to backend directory and start the real server
const path = require('path');
const { spawn } = require('child_process');

const backendDir = path.join(__dirname, 'backend');
console.log(`Changing to backend directory: ${backendDir}`);

const child = spawn('node', ['server.js'], {
  cwd: backendDir,
  stdio: 'inherit'
});

child.on('error', (error) => {
  console.error('Failed to start backend server:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  console.log(`Backend server exited with code ${code}`);
  process.exit(code);
});