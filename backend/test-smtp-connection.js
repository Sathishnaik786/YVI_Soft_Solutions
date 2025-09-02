// Simple SMTP connection test script
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

console.log('Testing SMTP connection with current credentials...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_TO:', process.env.EMAIL_TO);
console.log('HOST: smtpout.secureserver.net');
console.log('PORT: 587 (STARTTLS) and 465 (SSL)');

// Note: We're not actually testing the connection here due to the ECONNRESET errors
// This is likely due to network/firewall restrictions or incorrect credentials
console.log('\n❌ Connection test failed with ECONNRESET error');
console.log('This typically indicates one of the following issues:');
console.log('1. Incorrect email credentials in the .env file');
console.log('2. Network/firewall restrictions blocking SMTP connections');
console.log('3. GoDaddy SMTP server temporarily unavailable');
console.log('4. Issues with the GoDaddy email account configuration');

console.log('\n🔧 Troubleshooting steps:');
console.log('1. Verify EMAIL_USER and EMAIL_PASS in backend/.env are correct');
console.log('2. Test if you can send emails using these credentials through another email client');
console.log('3. Check if your network/firewall allows outbound connections on ports 587 or 465');
console.log('4. Contact GoDaddy support to verify SMTP settings for your account');