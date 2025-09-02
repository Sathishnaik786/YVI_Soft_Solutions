#!/usr/bin/env node

// Script to start both frontend and backend in development mode
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting YVI Soft Development Environment...');
console.log('=============================================\n');

// Start backend server
const backend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  stdio: 'inherit',
  shell: true
});

console.log('🔧 Backend server starting...\n');

// Start frontend server
const frontend = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  stdio: 'inherit',
  shell: true
});

console.log('🎨 Frontend server starting...\n');

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development servers...');
  backend.kill();
  frontend.kill();
  process.exit(0);
});

console.log('✅ Development environment started!');
console.log('   Frontend: http://localhost:5173');
console.log('   Backend:  http://localhost:3001\n');