// Simple redirect to backend server
// This file exists for compatibility but the actual server is in the backend directory

console.log('Redirecting to backend server...');

// Change to backend directory and start the server
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const backendDir = join(__dirname, 'backend');

const server = spawn('node', ['server.js'], {
  cwd: backendDir,
  stdio: 'inherit'
});

server.on('error', (error) => {
  console.error(`Error starting backend server: ${error}`);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`Backend server process exited with code ${code}`);
  process.exit(code);
});