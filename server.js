// Simple server that starts the backend
const { spawn } = require('child_process');
const path = require('path');

console.log('Starting YVI Soft Email Server...');

// Start the backend server as a child process
const backendDir = path.join(__dirname, 'backend');
console.log(`Starting backend server in directory: ${backendDir}`);

const backend = spawn('node', ['server.js'], {
  cwd: backendDir,
  stdio: 'inherit'
});

backend.on('error', (error) => {
  console.error('Failed to start backend server:', error);
  process.exit(1);
});

backend.on('exit', (code) => {
  console.log(`Backend server exited with code ${code}`);
  process.exit(code);
});

// Keep the main process alive
setInterval(() => {
  // Keep alive
}, 10000);