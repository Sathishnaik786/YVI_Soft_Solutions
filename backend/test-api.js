// Test script to verify API endpoint accessibility
import http from 'http';

// Test the API endpoint
console.log('Testing API endpoint accessibility...');

// Test 1: Direct PHP file access
console.log('\n1. Testing direct PHP file access:');
http.get('http://yvisoft.com/backend/send-email.php', (res) => {
  console.log(`   Status Code: ${res.statusCode}`);
  console.log(`   Headers: ${JSON.stringify(res.headers)}`);
  
  res.on('data', (chunk) => {
    console.log(`   Body: ${chunk.toString().substring(0, 100)}...`);
  });
}).on('error', (err) => {
  console.log(`   Error: ${err.message}`);
});

// Test 2: API endpoint access (if .htaccess routing works)
console.log('\n2. Testing API endpoint access:');
http.get('http://yvisoft.com/backend/api/send-email', (res) => {
  console.log(`   Status Code: ${res.statusCode}`);
  console.log(`   Headers: ${JSON.stringify(res.headers)}`);
  
  res.on('data', (chunk) => {
    console.log(`   Body: ${chunk.toString().substring(0, 100)}...`);
  });
}).on('error', (err) => {
  console.log(`   Error: ${err.message}`);
});

console.log('\nTest completed. Check the results above.');