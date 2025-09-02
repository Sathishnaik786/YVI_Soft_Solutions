// Test Supabase connection and table schema
import { createClient } from '@supabase/supabase-js';

// Use the same environment variables as the frontend
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://utvivqbvimxldnltkxnj.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dml2cWJ2aW14bGRubHRreG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NDIxODMsImV4cCI6MjA3MjIxODE4M30.qT9xvcSTo1Xwdb-9-TsVFLpwsgSx0L7euM-7y_r99PQ';

console.log('Testing Supabase connection...');
console.log('URL:', SUPABASE_URL);
console.log('Key:', SUPABASE_ANON_KEY ? 'Key is set' : 'Key is missing');

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Test the connection
supabase.auth.getSession().then(({ error }) => {
  if (error) {
    console.error('❌ Supabase connection error:', error);
  } else {
    console.log('✅ Supabase connection successful');
    
    // Test table schema
    supabase
      .from('contact_messages_new')
      .select('*')
      .limit(1)
      .then(({ data, error }) => {
        if (error) {
          console.error('❌ Error querying table:', error);
        } else {
          console.log('✅ Table query successful');
          console.log('Sample data:', data);
        }
        
        // Test insert
        const testData = {
          name: 'Test User',
          email: 'test@example.com',
          company: 'Test Company',
          phone: '123-456-7890',
          subject: 'Test Subject',
          message: 'This is a test message',
          ip: '127.0.0.1',
          user_agent: 'Test Script',
          created_at: new Date().toISOString()
        };
        
        supabase
          .from('contact_messages_new')
          .insert([testData])
          .select()
          .then(({ data, error }) => {
            if (error) {
              console.error('❌ Error inserting test data:', error);
            } else {
              console.log('✅ Test data inserted successfully');
              console.log('Inserted data:', data);
            }
            
            process.exit(0);
          });
      });
  }
});