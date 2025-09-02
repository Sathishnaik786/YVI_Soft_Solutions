# Backend Integration Guide

This document explains how the YVI Soft backend integrates with external services and the frontend.

## Email Service

The backend provides an API endpoint for sending emails via GoDaddy's SMTP service.

### API Endpoint

- **URL**: `/api/send-email`
- **Method**: POST
- **Port**: Configurable via `PORT` environment variable (defaults to 3001)

### Request Format

```json
{
  "from": "user@example.com",
  "subject": "Email Subject",
  "html": "<p>Email content</p>",
  "template": "contact-form",
  "data": {
    "name": "John Doe",
    "email": "user@example.com",
    "company": "Company Name",
    "phone": "123-456-7890",
    "subject": "Inquiry",
    "message": "Hello, I'm interested in your services...",
    "ip": "192.168.1.1",
    "userAgent": "Mozilla/5.0...",
    "timestamp": "2023-01-01T00:00:00.000Z"
  }
}
```

### Response Format

```json
{
  "success": true,
  "messageId": "<email-message-id>",
  "message": "Email sent successfully"
}
```

### Environment Variables

Create a `.env` file in the backend directory with:

```bash
# Email Configuration
EMAIL_USER=your-email@yvisoft.com
EMAIL_PASS=your-email-password
EMAIL_TO=sanjeevirr@yvisoft.com

# Server Configuration
PORT=3001
```

## SMTP Configuration

The backend uses GoDaddy's SMTP settings:

- **Host**: smtpout.secureserver.net
- **Port**: 465 (SSL)
- **Security**: SSL/TLS

## Frontend Integration

The frontend connects to the backend via HTTP requests to the `/api/send-email` endpoint.

### CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:5173` (development)
- Production frontend domain (to be configured)

## Development Workflow

1. Start the backend server:
   ```bash
   npm run dev
   ```

2. Start the frontend (in another terminal):
   ```bash
   cd ../frontend
   npm run dev
   ```

3. The backend API will be available at `http://localhost:3001`
4. The frontend will be available at `http://localhost:5173`