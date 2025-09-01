// API Configuration for Local Development with Remote Database
// This file helps you connect your local React app to your GoDaddy database

export const API_CONFIG = {
  // 🔧 IMPORTANT: Replace with your actual GoDaddy domain
  GODADDY_DOMAIN: 'yvisoft.com', // Replace with your actual domain
  
  // API endpoints
  getApiUrl: function(endpoint = 'db_save.php') {
    const isLocal = window.location.hostname === 'localhost';
    if (isLocal) {
      // For local development, use relative path to test locally
      return `/${endpoint}`;
      // Uncomment below line to test against GoDaddy directly:
      // return `https://${this.GODADDY_DOMAIN}/${endpoint}`;
    } else {
      // When running on production (GoDaddy), use relative path
      return endpoint;
    }
  },
  
  // Database info (for reference only - actual credentials are in PHP)
  DATABASE_INFO: {
    host: 'localhost:3306',
    database: 'Users',
    table: 'contact_messages',
    fields: ['id', 'name', 'email', 'subject', 'message', 'ip', 'user_agent', 'created_at']
  }
};

// Usage example:
// const apiUrl = API_CONFIG.getApiUrl('db_save.php');
// fetch(apiUrl, { method: 'POST', body: formData });

export default API_CONFIG;