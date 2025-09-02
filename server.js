// Simple redirect to the health endpoint for testing
const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve a simple message for the root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'YVI Soft Email Server Proxy', 
    status: 'Running',
    health: 'Check /health endpoint',
    timestamp: new Date().toISOString()
  });
});

// Start the backend server as a child process
const backendDir = path.join(__dirname, 'backend');
console.log(`Starting backend server in directory: ${backendDir}`);

const backend = spawn('node', ['server.js'], {
  cwd: backendDir,
  stdio: 'inherit'
});

backend.on('error', (error) => {
  console.error('Failed to start backend server:', error);
});

backend.on('exit', (code) => {
  console.log(`Backend server exited with code ${code}`);
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});