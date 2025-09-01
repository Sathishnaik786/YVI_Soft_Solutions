# YVI Soft Email Server

This is the backend email server for the YVI Soft contact form. It's a Node.js/Express application that sends email notifications when users submit the contact form.

## 🚀 Deployment to Render

1. Fork this repository or upload the files to a new GitHub repository
2. Create a new Web Service on Render
3. Connect it to your repository
4. Set the following environment variables in the Render dashboard:
   - `EMAIL_USER`: Your email address (e.g., contact@yvisoft.com)
   - `EMAIL_PASS`: Your email password or app-specific password

The server will automatically start on the port defined by Render (or port 3001 if running locally).

## 📦 Dependencies

- express: Web framework
- nodemailer: Email sending library
- cors: Cross-origin resource sharing
- dotenv: Environment variable management

## 🛠️ Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with your email credentials:
   ```
   EMAIL_USER=your@email.com
   EMAIL_PASS=yourpassword
   ```

3. Start the server:
   ```
   npm run dev
   ```

The server will run on http://localhost:3001

## 🔧 API Endpoints

### POST /api/send-email

Sends an email notification.

**Request Body:**
```json
{
  "to": "recipient@example.com",
  "from": "sender@example.com",
  "subject": "Email Subject",
  "html": "<p>Email content</p>"
}
```

**Response:**
```json
{
  "success": true,
  "messageId": "<unique-message-id>",
  "message": "Email sent successfully"
}
```