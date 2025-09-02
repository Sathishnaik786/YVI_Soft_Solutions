// This is a proxy server.js file for Render deployment
// It delegates to the actual backend server in the backend directory

const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create a simple express app to proxy requests to the backend
const app = express();
const PORT = process.env.PORT || 3000;

// Proxy all requests to the backend server
const backendPort = process.env.BACKEND_PORT || 3001;
app.use('/', createProxyMiddleware({
  target: `http://localhost:${backendPort}`,
  changeOrigin: true,
  pathRewrite: {
    '^/': '/', // remove base path
  },
}));

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
  console.log(`Proxying requests to backend on port ${backendPort}`);
  
  // Now start the actual backend server
  const backendDir = path.join(__dirname, 'backend');
  console.log(`Starting backend server in directory: ${backendDir}`);
  
  // We need to start the backend server in a separate process
  const { spawn } = require('child_process');
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
});