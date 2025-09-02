# Supabase Setup Guide for YVI Soft

This guide will walk you through setting up Supabase for the YVI Soft contact form.

## Prerequisites

- A Supabase account (free tier available)
- This YVI Soft project

## Step 1: Create a Supabase Account and Project

1. Go to [supabase.com](https://supabase.com/)
2. Click "Start your project" or "Sign up"
3. Sign up with your preferred method (GitHub, Google, or email)
4. Check your email and confirm your account
5. Click "New Project"
6. Fill in the project details:
   - **Name**: YVI Soft Contact Form (or any name you prefer)
   - **Database Password**: Create a strong password
   - **Region**: Choose the region closest to your users
7. Click "Create Project" and wait for it to be provisioned (this may take a few minutes)

## Step 2: Get Your Supabase Credentials

1. Once your project is created, you'll be taken to the project dashboard
2. In the left sidebar, click on the "Settings" icon (gear icon)
3. Click on "API" in the settings menu
4. Copy the following values:
   - **Project URL**: This is your `VITE_SUPABASE_URL`
   - **anon key**: This is your `VITE_SUPABASE_ANON_KEY`

## Step 3: Update Your Environment Variables

1. Open your project in your code editor
2. Navigate to `frontend/.env`
3. Replace the placeholder values with your actual Supabase credentials:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your-actual-project-url-here
VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here

# Backend API URL
VITE_BACKEND_URL=http://localhost:3001
```

For example:
```env
# Supabase Configuration
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3BxcnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzNDU2NzgsImV4cCI6MTk5MTkyMTY3OH0.1234567890abcdefghijklmnopqrstuvwx

# Backend API URL
VITE_BACKEND_URL=http://localhost:3001
```

## Step 4: Create the Database Table

1. In your Supabase project dashboard, click on "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy and paste the following SQL script:

```sql
-- Create the contact_messages_new table
CREATE TABLE IF NOT EXISTS contact_messages_new (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  company VARCHAR(100),
  phone VARCHAR(20),
  subject VARCHAR(200) DEFAULT 'No Subject',
  message TEXT NOT NULL,
  ip VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_new_email ON contact_messages_new(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_new_created_at ON contact_messages_new(created_at);

-- Enable Row Level Security (RLS) for enhanced security
ALTER TABLE contact_messages_new ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for contact form submissions)
CREATE POLICY "Allow public insert" ON contact_messages_new
FOR INSERT WITH CHECK (true);

-- Create policy to prevent public reads (protect privacy)
CREATE POLICY "Restrict public select" ON contact_messages_new
FOR SELECT USING (false);

-- Grant necessary permissions
GRANT INSERT ON contact_messages_new TO anon;
GRANT USAGE ON SEQUENCE contact_messages_new_id_seq TO anon;

-- Add comments for documentation
COMMENT ON TABLE contact_messages_new IS 'Contact form submissions from YVI Soft website';
COMMENT ON COLUMN contact_messages_new.id IS 'Unique identifier for each message';
COMMENT ON COLUMN contact_messages_new.name IS 'Name of the person submitting the form (max 100 characters)';
COMMENT ON COLUMN contact_messages_new.email IS 'Email address of the person submitting the form (max 150 characters)';
COMMENT ON COLUMN contact_messages_new.company IS 'Company name of the person submitting the form (max 100 characters)';
COMMENT ON COLUMN contact_messages_new.phone IS 'Phone number of the person submitting the form (max 20 characters)';
COMMENT ON COLUMN contact_messages_new.subject IS 'Subject of the message (max 200 characters, defaults to "No Subject")';
COMMENT ON COLUMN contact_messages_new.message IS 'The actual message content';
COMMENT ON COLUMN contact_messages_new.ip IS 'IP address of the submitter (max 45 characters for IPv6)';
COMMENT ON COLUMN contact_messages_new.user_agent IS 'Browser user agent string';
COMMENT ON COLUMN contact_messages_new.created_at IS 'Timestamp when the message was submitted';
```

4. Click "Run" to execute the script

## Step 5: Test the Setup

1. Start your frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

2. Start your backend server (in a separate terminal):
   ```bash
   cd backend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`
4. Go to the contact form section
5. Fill out the form and submit it
6. Check your browser's developer console for any errors
7. In your Supabase dashboard, go to "Table Editor" to verify the data was inserted

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure your Supabase URL is correctly configured in your [.env](file:///C:/Users/sathi/OneDrive/Desktop/NextGen_AI/YviSoft/YviSoft/backend/.env) file

2. **RLS Policy Issues**: If you're having issues with data insertion, check that the RLS policies were created correctly:
   - Go to "Authentication" > "Policies" in your Supabase dashboard
   - Verify that the policies for `contact_messages_new` table exist

3. **Network Errors**: Ensure you have a stable internet connection and that your Supabase project is not paused

### Testing Database Connection

You can test your database connection by running a simple query in the Supabase SQL Editor:

```sql
-- Test insert to verify table works
INSERT INTO contact_messages_new (name, email, subject, message, ip, user_agent)
VALUES ('Test User', 'test@example.com', 'Test Subject', 'This is a test message', '127.0.0.1', 'Test Browser');

-- Check if the test record was inserted
SELECT * FROM contact_messages_new WHERE name = 'Test User';

-- Clean up test data
DELETE FROM contact_messages_new WHERE name = 'Test User';
```

## Security Notes

- The Supabase anon key is intentionally exposed to the frontend - this is normal
- RLS policies protect your data from unauthorized access
- Never expose your Supabase service role key to the frontend
- Regularly monitor your Supabase project usage in the dashboard

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client Library](https://supabase.com/docs/guides/getting-started/tutorials/with-react)
- [Row Level Security Documentation](https://supabase.com/docs/guides/auth/row-level-security)