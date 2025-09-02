# Database Setup Files

[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-blue.svg)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)

SQL scripts for setting up the Supabase database for the YVI Soft contact form.

## 📁 Files

1. **[supabase_setup.sql](file://c:\Users\sathi\OneDrive\Desktop\NextGen_AI\YviSoft\YviSoft\Database\supabase_setup.sql)** - Main setup script for creating the contact_messages_new table with proper RLS policies
2. **[update_contact_table.sql](file://c:\Users\sathi\OneDrive\Desktop\NextGen_AI\YviSoft\YviSoft\Database\update_contact_table.sql)** - Script to add company and phone fields to the contact table
3. **[fix_rls_policies.sql](file://c:\Users\sathi\OneDrive\Desktop\NextGen_AI\YviSoft\YviSoft\Database\fix_rls_policies.sql)** - Script to fix Row Level Security policies
4. **[complete_setup.sql](file://c:\Users\sathi\OneDrive\Desktop\NextGen_AI\YviSoft\YviSoft\Database\complete_setup.sql)** - Complete setup script with comprehensive configuration

## 🚀 Database Setup

### Prerequisites
- Supabase account
- Supabase project created

### Setup Instructions

1. **Log in to your Supabase project dashboard**

2. **Navigate to the SQL editor**

3. **Run the scripts in the following order:**
   - [supabase_setup.sql](file://c:\Users\sathi\OneDrive\Desktop\NextGen_AI\YviSoft\YviSoft\Database\supabase_setup.sql) (main setup)
   - [update_contact_table.sql](file://c:\Users\sathi\OneDrive\Desktop\NextGen_AI\YviSoft\YviSoft\Database\update_contact_table.sql) (to add additional fields)
   - [fix_rls_policies.sql](file://c:\Users\sathi\OneDrive\Desktop\NextGen_AI\YviSoft\YviSoft\Database\fix_rls_policies.sql) (if RLS issues occur)
   - [complete_setup.sql](file://c:\Users\sathi\OneDrive\Desktop\NextGen_AI\YviSoft\YviSoft\Database\complete_setup.sql) (comprehensive setup with testing)

## 🗄️ Database Schema

The contact form uses a PostgreSQL table with the following structure:

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
```

## 🔒 Security

### Row Level Security (RLS)

The database implements Row Level Security to protect data privacy:

- **Public inserts allowed**: Anyone can submit contact forms
- **Public reads restricted**: Prevent unauthorized access to contact data
- **Authenticated reads allowed**: Admin users can access contact data

### Policies

1. **Allow public insert**: Enables contact form submissions
2. **Restrict public select**: Protects privacy of submitted data
3. **Allow authenticated select**: Enables admin access for authorized users

## 🧪 Testing

Each script includes test queries to verify the setup:

```sql
-- Test insert to verify table works
INSERT INTO contact_messages_new (name, email, subject, message, ip, user_agent)
VALUES ('Test User', 'test@example.com', 'Test Subject', 'This is a test message', '127.0.0.1', 'Test Browser')
ON CONFLICT DO NOTHING;

-- Check if the test record was inserted
SELECT * FROM contact_messages_new WHERE name = 'Test User' LIMIT 1;
```

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- Refer to the main project README for integration details