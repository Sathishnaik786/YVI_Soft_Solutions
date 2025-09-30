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

// Generate HTML email for contact form submissions
function generateContactFormEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
        <h2 style="color: #007bff; margin-top: 0;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name || 'Not provided'}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email || '#'}">${data.email || 'Not provided'}</a></p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${data.subject || 'No Subject'}</p>
        <div style="margin: 20px 0;">
          <h3 style="color: #007bff;">Message:</h3>
          <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">${data.message || 'No message'}</p>
        </div>
        <div style="background-color: #e9ecef; padding: 10px; border-radius: 3px; font-size: 0.9em;">
          <p><strong>Additional Information:</strong></p>
          <p><strong>IP Address:</strong> ${data.ip || 'unknown'}</p>
          <p><strong>User Agent:</strong> ${data.userAgent || 'unknown'}</p>
          <p><strong>Submitted at:</strong> ${data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString()}</p>
        </div>
      </div>
      <div style="text-align: center; font-size: 0.8em; color: #6c757d;">
        <p>This email was automatically generated from the YVI Soft contact form.</p>
        <p>YVI Soft Solutions</p>
      </div>
    </body>
    </html>
  `;
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  // Ensure we always return JSON
  res.setHeader('Content-Type', 'application/json');
  res.status(500).json({ 
    success: false,
    error: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred'
  });
});

// Handle 404 for undefined routes
app.use('*', (req, res) => {
  // Ensure we always return JSON
  res.setHeader('Content-Type', 'application/json');
  res.status(404).json({ 
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
});

export default app;
