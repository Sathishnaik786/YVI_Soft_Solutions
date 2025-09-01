# 📧 Supabase Email Notification Setup

This guide explains how to set up email notifications for your contact form using Supabase.

## Option 1: Supabase Database Webhooks (Recommended)

### 1. Set up a webhook function

Create a new function in your Supabase project:

1. Go to your Supabase project dashboard
2. Navigate to "Database" → "Functions"
3. Click "New Function"
4. Name it `send_contact_notification`
5. Use this SQL:

```sql
-- Function to send email notifications for new contact form submissions
CREATE OR REPLACE FUNCTION send_contact_notification()
RETURNS TRIGGER AS $$
BEGIN
  -- This is a placeholder. In practice, you would call an external service
  -- or use Supabase's integration with external services
  RAISE LOG 'New contact form submission: %', NEW.email;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### 2. Create a trigger

Create a trigger that calls this function when a new record is inserted:

```sql
-- Create trigger for contact form notifications
CREATE TRIGGER contact_notification_trigger
  AFTER INSERT ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION send_contact_notification();
```

## Option 2: Supabase Edge Functions (Advanced)

### 1. Install Supabase CLI

```bash
npm install -g supabase
```

### 2. Initialize Supabase project locally

```bash
supabase init
supabase link --project-ref your-project-ref
```

### 3. Create a new Edge Function

```bash
supabase functions new contact-notification
```

### 4. Edit the function (`supabase/functions/contact-notification/index.ts`):

```typescript
// The following code is for demonstration purposes only
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const { record } = await req.json();
  
  // Here you would integrate with an email service like:
  // - SendGrid
  // - Resend
  // - SMTP
  // - etc.
  
  console.log('New contact form submission:', record);
  
  return new Response(
    JSON.stringify({ 
      message: `Notification sent for ${record.email}` 
    }),
    { headers: { "Content-Type": "application/json" } },
  );
});
```

### 5. Deploy the function

```bash
supabase functions deploy contact-notification
```

### 6. Set up database webhook

In your Supabase dashboard:
1. Go to "Database" → "Webhooks"
2. Create a new webhook
3. Set it to trigger on `INSERT` in `contact_messages`
4. Point it to your Edge Function

## Option 3: Client-side Email Service Integration

For simplicity, you can integrate an email service directly in your frontend code. Here's an example using Resend:

### 1. Install Resend

```bash
npm install resend
```

### 2. Update your contact form component:

```javascript
// In src/components/Contact Info & Form/Info_Form.jsx
import { insertContactMessage } from '../../config/supabase.js'
import { Resend } from 'resend'

const resend = new Resend('your-resend-api-key')

const sendNotificationEmail = async (formData) => {
  try {
    const { data } = await resend.emails.send({
      from: 'contact@yvisoft.com',
      to: 'admin@yvisoft.com',
      subject: `New Contact Form Submission: ${formData.subject || 'No Subject'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject || 'No Subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
    })
    console.log('Email sent:', data)
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

// In your handleSubmit function, after successful database insert:
const handleSubmit = async (e) => {
  // ... existing validation code ...
  
  try {
    // Insert data into Supabase
    const result = await insertContactMessage(form)
    
    // Send notification email
    await sendNotificationEmail(form)
    
    // ... rest of success handling ...
  } catch (err) {
    // ... error handling ...
  }
}
```

## Security Considerations

1. **Never expose API keys** in client-side code
2. **Use environment variables** for sensitive data
3. **Implement rate limiting** to prevent spam
4. **Validate all inputs** both client-side and server-side
5. **Use Row Level Security** in Supabase to protect data

## Testing Email Notifications

1. Submit a test form
2. Check your email inbox
3. Monitor Supabase logs for any errors
4. Verify that the email contains all the expected information

## Troubleshooting

### Common Issues:

1. **Emails not sending**: Check your email service configuration
2. **API key errors**: Verify your API keys are correct and not exposed
3. **CORS issues**: Ensure your email service allows requests from your domain
4. **Rate limiting**: Check if you've hit your email service's rate limits

### Debugging Tips:

1. Check browser console for errors
2. Monitor Supabase function logs
3. Test your email service API directly
4. Verify environment variables are set correctly