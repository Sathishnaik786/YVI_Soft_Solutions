// API Configuration for Production with Node.js Backend
// This file configures API calls to your deployed backend

export const API_CONFIG = {
  // 🔧 IMPORTANT: Replace with your actual deployed backend URL
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL || 'https://your-backend-url.onrender.com',

  getApiUrl: function(endpoint = '/api/send-email') {
    // For production, use the Node.js endpoint
    return `${this.BACKEND_URL}${endpoint}`;
  },

  DATABASE_INFO: {
    fields: ['id', 'name', 'email', 'subject', 'message', 'ip', 'user_agent', 'created_at', 'company', 'phone']
  }
};

// Safe fetch wrapper to handle JSON parsing errors
export const safeFetch = async (url, options) => {
  try {
    console.log('🔍 Fetching URL:', url);
    const response = await fetch(url, options);
    const text = await response.text();
    
    // Log response status and content type for debugging
    console.log('📊 Response Status:', response.status);
    console.log('📊 Response Content-Type:', response.headers.get('content-type'));
    console.log('📊 Response Headers:', [...response.headers.entries()]);
    
    // Check if response is actually JSON
    if (text.startsWith('{') || text.startsWith('[')) {
      try {
        return { data: JSON.parse(text), response };
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError);
        throw new Error(`Invalid JSON response: ${text.substring(0, 100)}...`);
      }
    } else {
      // If not JSON, it's probably an HTML error page
      console.error('❌ Received HTML instead of JSON:', text.substring(0, 200) + '...');
      throw new Error(`Received HTML instead of JSON. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default API_CONFIG;