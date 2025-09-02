# Frontend-Backend Integration Guide

This document explains how the YVI Soft frontend connects to the backend services.

## Email Service Integration

The frontend sends contact form submissions to the backend email service via HTTP requests.

### API Endpoint

- **URL**: `/api/send-email`
- **Method**: POST
- **Base URL**: Configurable via `VITE_BACKEND_URL` environment variable (defaults to `http://localhost:3001`)

### Request Format

```json
{
  "from": "user@example.com",
  "subject": "Contact Form Submission",
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

Create a `.env` file in the frontend directory with:

```bash
VITE_BACKEND_URL=http://localhost:3001
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Supabase Integration

Contact form submissions are also stored in a Supabase database.

### Database Schema

Table: `contact_messages_new`

Fields:
- `id` (UUID, auto-generated)
- `name` (TEXT)
- `email` (TEXT)
- `company` (TEXT)
- `phone` (TEXT)
- `subject` (TEXT)
- `message` (TEXT)
- `ip` (TEXT)
- `user_agent` (TEXT)
- `created_at` (TIMESTAMP)

## Development Workflow

1. Start the backend server:
   ```bash
   cd ../backend
   npm run dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. The frontend will be available at `http://localhost:5173`
4. The backend API will be available at `http://localhost:3001`