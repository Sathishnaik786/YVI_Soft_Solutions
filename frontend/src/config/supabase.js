// Supabase Configuration for Contact Form
// This file contains the configuration to connect to your Supabase project

import { createClient } from '@supabase/supabase-js'

// 🔐 IMPORTANT: Replace with your actual Supabase credentials
// These can be found in your Supabase project dashboard
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

console.log('Supabase config:', {
  url: SUPABASE_URL,
  key: SUPABASE_ANON_KEY ? 'Key is set' : 'Key is missing'
})

// Check if environment variables are properly loaded
if (!SUPABASE_URL || SUPABASE_URL === 'https://your-project.supabase.co') {
  console.error('❌ Supabase URL is not set correctly!')
}
if (!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY === 'your-anon-key') {
  console.error('❌ Supabase ANON KEY is not set correctly!')
}

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Test the Supabase connection
supabase.auth.getSession().then(({ error }) => {
  if (error) {
    console.error('❌ Supabase connection error:', error)
  } else {
    console.log('✅ Supabase connection successful')
  }
})

// Contact form table name - using the new table
export const CONTACT_TABLE = 'contact_messages_new'

// Function to insert contact form data with proper error handling
export const insertContactMessage = async (formData) => {
  try {
    console.log('Inserting contact message:', formData)
    
    // Get client IP and user agent (you might want to handle this differently in production)
    const ip_address = 'unknown' // In a real app, you'd get this from the server
    const user_agent = navigator.userAgent || 'unknown'
    const created_at = new Date().toISOString()

    // Prepare data for insertion
    const messageData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      subject: formData.subject || 'No Subject',
      message: formData.message,
      ip: ip_address,
      user_agent: user_agent,
      created_at: created_at
    }

    console.log('Data to insert:', messageData)

    // Insert data into Supabase and return the inserted row
    const { data: insertedData, error } = await supabase
      .from(CONTACT_TABLE)
      .insert([messageData])
      .select() // Ensure we return the inserted row

    console.log('Supabase response:', { insertedData, error })

    if (error) {
      console.error('Supabase insert error:', error)
      throw new Error(error.message)
    }

    // Return the inserted row or null if nothing was inserted
    return insertedData && insertedData.length > 0 ? insertedData[0] : null
  } catch (error) {
    console.error('Error inserting contact message:', error)
    throw error
  }
}

// Function to get all contact messages (for admin panel)
export const getContactMessages = async () => {
  try {
    const { data: messages, error } = await supabase
      .from(CONTACT_TABLE)
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase select error:', error)
      throw new Error(error.message)
    }

    return messages
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    throw error
  }
}

export default {
  supabase,
  insertContactMessage,
  getContactMessages,
  CONTACT_TABLE
}