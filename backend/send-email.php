<?php
// Log all requests for debugging
$logEntry = date('Y-m-d H:i:s') . " - Request received\n";
$logEntry .= date('Y-m-d H:i:s') . " - Request method: " . ($_SERVER['REQUEST_METHOD'] ?? 'UNKNOWN') . "\n";
$logEntry .= date('Y-m-d H:i:s') . " - Request URI: " . ($_SERVER['REQUEST_URI'] ?? 'UNKNOWN') . "\n";
$logEntry .= date('Y-m-d H:i:s') . " - HTTP_HOST: " . ($_SERVER['HTTP_HOST'] ?? 'UNKNOWN') . "\n";
$logEntry .= date('Y-m-d H:i:s') . " - REQUEST_SCHEME: " . ($_SERVER['REQUEST_SCHEME'] ?? 'UNKNOWN') . "\n";
$logEntry .= date('Y-m-d H:i:s') . " - HTTP_ORIGIN: " . ($_SERVER['HTTP_ORIGIN'] ?? 'NOT SET') . "\n";
file_put_contents('email_debug.log', $logEntry, FILE_APPEND | LOCK_EX);

// Set headers first
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://yvisoft.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - OPTIONS request handled\n", FILE_APPEND | LOCK_EX);
    http_response_code(200);
    exit();
}

try {
    // Log input data
    $input = file_get_contents('php://input');
    file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Raw input: " . $input . "\n", FILE_APPEND | LOCK_EX);
    
    // Get JSON input
    $data = json_decode($input, true);
    
    // Log parsed data
    file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Parsed data: " . print_r($data, true) . "\n", FILE_APPEND | LOCK_EX);
    
    // Validate required fields
    if (!$data || !isset($data['from']) || !isset($data['subject'])) {
        file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Validation failed\n", FILE_APPEND | LOCK_EX);
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'Missing required fields: from, subject',
            'received_data' => $data
        ]);
        exit();
    }
    
    // Email configuration
    $email_user = 'sanjeevirr@yvisoft.com';
    $email_to = 'sanjeevirr@yvisoft.com';
    
    // Email data
    $from = $data['from'];
    $subject = $data['subject'];
    
    // Generate HTML content
    $htmlContent = '';
    if (isset($data['template']) && $data['template'] === 'contact-form' && !empty($data['data'])) {
        $htmlContent = generateContactFormEmail($data['data']);
    } else {
        $htmlContent = $data['html'] ?? 'No content provided';
    }
    
    // Email headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: YVI Soft <$email_user>\r\n";
    $headers .= "Reply-To: $from\r\n";
    
    // Log before sending
    file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Attempting to send email to: $email_to\n", FILE_APPEND | LOCK_EX);
    file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Email subject: $subject\n", FILE_APPEND | LOCK_EX);
    
    // Send email
    if (mail($email_to, $subject, $htmlContent, $headers)) {
        file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Email sent successfully\n", FILE_APPEND | LOCK_EX);
        echo json_encode([
            'success' => true,
            'messageId' => uniqid(),
            'message' => 'Email sent successfully'
        ]);
    } else {
        file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Failed to send email\n", FILE_APPEND | LOCK_EX);
        throw new Exception('Failed to send email');
    }
} catch (Exception $e) {
    file_put_contents('email_debug.log', date('Y-m-d H:i:s') . " - Exception: " . $e->getMessage() . "\n", FILE_APPEND | LOCK_EX);
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email',
        'details' => $e->getMessage()
    ]);
}

function generateContactFormEmail($data) {
    $name = htmlspecialchars($data['name'] ?? 'Not provided');
    $email = htmlspecialchars($data['email'] ?? 'Not provided');
    $company = htmlspecialchars($data['company'] ?? 'Not provided');
    $phone = htmlspecialchars($data['phone'] ?? 'Not provided');
    $subject = htmlspecialchars($data['subject'] ?? 'No Subject');
    $message = htmlspecialchars($data['message'] ?? 'No message');
    $ip = htmlspecialchars($data['ip'] ?? 'unknown');
    $userAgent = htmlspecialchars($data['userAgent'] ?? 'unknown');
    $timestamp = isset($data['timestamp']) ? date('Y-m-d H:i:s', strtotime($data['timestamp'])) : date('Y-m-d H:i:s');
    
    return "
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset=\"UTF-8\">
      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
      <title>New Contact Form Submission</title>
    </head>
    <body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;\">
      <div style=\"background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;\">
        <h2 style=\"color: #007bff; margin-top: 0;\">New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> <a href=\"mailto:$email\">$email</a></p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Subject:</strong> $subject</p>
        <div style=\"margin: 20px 0;\">
          <h3 style=\"color: #007bff;\">Message:</h3>
          <p style=\"background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;\">$message</p>
        </div>
        <div style=\"background-color: #e9ecef; padding: 10px; border-radius: 3px; font-size: 0.9em;\">
          <p><strong>Additional Information:</strong></p>
          <p><strong>IP Address:</strong> $ip</p>
          <p><strong>User Agent:</strong> $userAgent</p>
          <p><strong>Submitted at:</strong> $timestamp</p>
        </div>
      </div>
      <div style=\"text-align: center; font-size: 0.8em; color: #6c757d;\">
        <p>This email was automatically generated from the YVI Soft contact form.</p>
        <p>YVI Soft Solutions</p>
      </div>
    </body>
    </html>";
}
?>