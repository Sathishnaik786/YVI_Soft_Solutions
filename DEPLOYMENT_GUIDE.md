# 🚀 Deployment Guide for YVI Soft

## Files to Upload

### 1. Frontend Files (from `dist` folder after build)
After running `npm run build`, upload all contents of the `dist` folder to your hosting provider:
- index.html
- assets/ (folder with CSS, JS files)
- Any other static files

## Supabase Setup

### 1. Create Supabase Account
- Go to [supabase.com](https://supabase.com/) and create an account
- Create a new project
- Note your Project URL and anon key from the project settings

### 2. Create Tables
In the Supabase SQL editor, run this SQL:

```sql
CREATE TABLE contact_messages_new (
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

-- Create indexes for better performance
CREATE INDEX idx_contact_messages_new_email ON contact_messages_new(email);
CREATE INDEX idx_contact_messages_new_created_at ON contact_messages_new(created_at);
```

## Environment Variables

Set up these environment variables in your hosting platform:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

For local development, create a `.env` file in your project root with these variables.

## Configuration Updates

### 1. Update Supabase Configuration
In `src/config/supabase.js`, ensure the configuration matches your Supabase project.

## File Permissions
Most static hosting providers don't require manual permission setting. The default settings should work fine.

## Testing Steps

### 1. Test Supabase Connection
- Start your development server with `npm run dev`
- Open the browser console and check for any Supabase connection errors

### 2. Test Contact Form
- Submit a test form on your website
- Check if data saves to Supabase
- Verify the data appears in the contact_messages_new table

### 3. Check Browser Console
- Monitor browser console for any errors
- Check network tab to see if API calls are successful

## Troubleshooting

### Common Issues:
1. **Supabase Connection Failed**: Check your Project URL and anon key
2. **CORS Errors**: Ensure your Supabase project allows your domain
3. **Form Not Submitting**: Check browser console for JavaScript errors
4. **Data Not Saving**: Verify table structure matches the schema

### Hosting Provider Notes:
- **Vercel**: Set environment variables in the project settings
- **Netlify**: Set environment variables in the site settings
- **GoDaddy**: See [GODADDY_DEPLOYMENT_GUIDE.md](GODADDY_DEPLOYMENT_GUIDE.md) for specific instructions

## GoDaddy Deployment

For detailed instructions on deploying to GoDaddy hosting, please refer to the separate [GODADDY_DEPLOYMENT_GUIDE.md](GODADDY_DEPLOYMENT_GUIDE.md) file which provides:
- Step-by-step deployment process
- Backend deployment options (Render, Heroku)
- Configuration updates for production
- Troubleshooting specific to GoDaddy hosting