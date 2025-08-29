<?php
/**
 * YVI Soft Contact Form Database Handler for GoDaddy Hosting
 * Saves contact form submissions to MySQL database
 * 
 * @version 1.0
 * @author YVI Soft Solutions
 */

// Try to load PHPMailer if available (silent loading)
@include_once 'PHPMailer/src/LoggerInterface.php';  // PSR-3 Logger stub for IDE compatibility
@include_once 'PHPMailer/src/Exception.php';
@include_once 'PHPMailer/src/PHPMailer.php';
@include_once 'PHPMailer/src/SMTP.php';

// Use statements for PHPMailer (must be at top level)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Security Headers for Cross-Origin Requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// Database Configuration for GoDaddy
$db_config = [
    'host' => 'localhost',
    'username' => 'Ram',        // Replace with your actual DB username
    'password' => 'Welcome@123',    // Replace with your actual DB password
    'database' => 'Users',
    'port' => 3306
];

/**
 * Sanitize input data
 */
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

/**
 * Validate email format
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Get client IP address
 */
function getClientIP() {
    $ip_keys = ['HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR'];
    foreach ($ip_keys as $key) {
        if (array_key_exists($key, $_SERVER) === true) {
            foreach (explode(',', $_SERVER[$key]) as $ip) {
                $ip = trim($ip);
                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
                    return $ip;
                }
            }
        }
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

try {
    // Validate required fields
    $required_fields = ['name', 'email', 'message'];
    foreach ($required_fields as $field) {
        if (empty($_POST[$field]) || !isset($_POST[$field])) {
            echo json_encode([
                'status' => 'error', 
                'message' => "Field '$field' is required"
            ]);
            exit;
        }
    }

    // Sanitize and validate input data
    $name = sanitizeInput($_POST['name']);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = !empty($_POST['subject']) ? sanitizeInput($_POST['subject']) : 'No Subject';
    $message = sanitizeInput($_POST['message']);
    
    // Validate email format
    if (!validateEmail($email)) {
        echo json_encode([
            'status' => 'error', 
            'message' => 'Please enter a valid email address'
        ]);
        exit;
    }

    // Validate field lengths
    if (strlen($name) < 2) {
        echo json_encode([
            'status' => 'error', 
            'message' => 'Name must be at least 2 characters long'
        ]);
        exit;
    }

    if (strlen($message) < 10) {
        echo json_encode([
            'status' => 'error', 
            'message' => 'Message must be at least 10 characters long'
        ]);
        exit;
    }

    // Get additional data
    $ip_address = getClientIP();
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    $created_at = date('Y-m-d H:i:s');

    // Connect to MySQL database
    $mysqli = new mysqli(
        $db_config['host'], 
        $db_config['username'], 
        $db_config['password'], 
        $db_config['database'], 
        $db_config['port']
    );

    // Check connection
    if ($mysqli->connect_error) {
        error_log("Database connection failed: " . $mysqli->connect_error);
        echo json_encode([
            'status' => 'error', 
            'message' => 'Database connection failed. Please try again later.'
        ]);
        exit;
    }

    // Set charset
    $mysqli->set_charset("utf8");

    // Prepare SQL statement to prevent SQL injection
    $sql = "INSERT INTO contact_messages (name, email, subject, message, ip, user_agent, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($sql);

    if (!$stmt) {
        error_log("SQL prepare failed: " . $mysqli->error);
        echo json_encode([
            'status' => 'error', 
            'message' => 'Database error. Please try again later.'
        ]);
        $mysqli->close();
        exit;
    }

    // Bind parameters and execute
    $stmt->bind_param("sssssss", $name, $email, $subject, $message, $ip_address, $user_agent, $created_at);
    
    if ($stmt->execute()) {
        $contact_id = $mysqli->insert_id;
        
        // Log successful submission
        error_log("Contact form submitted successfully. ID: $contact_id, Name: $name, Email: $email");
        
        // Send email notification after successful database insert
        sendEmailNotification($name, $email, $subject, $message, $contact_id, $ip_address, $created_at);
        
        echo json_encode([
            'status' => 'success',
            'message' => 'Message received successfully!',
            'id' => $contact_id
        ]);
    } else {
        error_log("SQL execution failed: " . $stmt->error);
        echo json_encode([
            'status' => 'error', 
            'message' => 'Failed to save message. Please try again later.'
        ]);
    }

    // Close statement and connection
    $stmt->close();
    $mysqli->close();

} catch (Exception $e) {
    error_log("Contact form error: " . $e->getMessage());
    echo json_encode([
        'status' => 'error', 
        'message' => 'Server error. Please try again later.'
    ]);
} catch (Error $e) {
    error_log("PHP Error in contact form: " . $e->getMessage());
    echo json_encode([
        'status' => 'error', 
        'message' => 'Server error. Please try again later.'
    ]);
}

/**
 * Send Email Notification using GoDaddy SMTP
 * This function is called after successful database insert
 * If email fails, it logs the error but doesn't affect the database operation
 */
function sendEmailNotification($name, $email, $subject, $message, $contact_id, $ip_address, $created_at) {
    // Email Configuration
    $smtp_config = [
        'host' => 'smtp.gmail.com',              // Gmail SMTP server
        'username' => 'ram.dwansys@gmail.com',    // Your Gmail address
        'password' => 'wEg!h*p7',                 // Your Gmail App Password
        'to_email' => 'ram.dwansys@gmail.com',    // Your inbox email
        'to_name' => 'YVI Soft Admin'
    ];
    
    // Check if PHPMailer classes are available
    if (!class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
        error_log("Email notification failed: PHPMailer classes not available");
        return false;
    }
    
    try {
        $mail = new PHPMailer(true);
        
        // Try SSL first (Port 465), fallback to TLS (Port 587)
        $ports_to_try = [
            ['port' => 465, 'encryption' => PHPMailer::ENCRYPTION_SMTPS, 'name' => 'SSL'],
            ['port' => 587, 'encryption' => PHPMailer::ENCRYPTION_STARTTLS, 'name' => 'TLS']
        ];
        
        $email_sent = false;
        $last_error = '';
        
        foreach ($ports_to_try as $config) {
            try {
                // Reset mail object
                $mail->clearAllRecipients();
                $mail->clearAttachments();
                
                // Server settings
                $mail->isSMTP();
                $mail->Host = $smtp_config['host'];
                $mail->SMTPAuth = true;
                $mail->Username = $smtp_config['username'];
                $mail->Password = $smtp_config['password'];
                $mail->SMTPSecure = $config['encryption'];
                $mail->Port = $config['port'];
                $mail->CharSet = 'UTF-8';
                $mail->Encoding = 'base64';
                
                // Optional: Disable SSL verification for testing (remove in production)
                $mail->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );
                
                // Recipients
                $mail->setFrom($smtp_config['username'], 'YVI Soft Contact Form');
                $mail->addAddress($smtp_config['to_email'], $smtp_config['to_name']);
                $mail->addReplyTo($email, $name);
                
                // Content
                $mail->isHTML(true);
                $mail->Subject = "New Contact Form Submission - $subject";
                
                // Create professional email template
                $emailBody = createEmailTemplate($name, $email, $subject, $message, $contact_id, $ip_address, $created_at);
                $mail->Body = $emailBody;
                
                // Plain text version
                $mail->AltBody = createPlainTextEmail($name, $email, $subject, $message, $contact_id, $ip_address, $created_at);
                
                // Send email
                $mail->send();
                error_log("Email notification sent successfully using {$config['name']} (Port {$config['port']}). Contact ID: $contact_id");
                $email_sent = true;
                break; // Success, exit the loop
                
            } catch (Exception $e) {
                $last_error = "Failed with {$config['name']} (Port {$config['port']}): " . $e->getMessage();
                error_log("Email attempt failed: $last_error");
                continue; // Try next configuration
            }
        }
        
        if (!$email_sent) {
            error_log("All email attempts failed. Last error: $last_error");
            return false;
        }
        
        return true;
        
    } catch (Exception $e) {
        error_log("Email notification error: " . $e->getMessage());
        return false;
    }
}

/**
 * Create HTML Email Template
 */
function createEmailTemplate($name, $email, $subject, $message, $contact_id, $ip_address, $created_at) {
    return "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Contact Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; background: #f4f4f4; padding: 20px; }
            .container { background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { padding: 30px; }
            .info-box { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #ddd; }
            .message-box { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #28a745; }
            .footer { background: #f8f9fa; padding: 15px; text-align: center; color: #666; font-size: 12px; }
            .meta { color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>📧 New Contact Form Submission</h1>
                <p style='margin: 0; opacity: 0.9;'>YVI Soft Website</p>
            </div>
            
            <div class='content'>
                <div class='info-box'>
                    <h3 style='color: #667eea; margin-top: 0;'>Contact Information</h3>
                    
                    <div class='field'>
                        <div class='label'>👤 Name:</div>
                        <div class='value'>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</div>
                    </div>
                    
                    <div class='field'>
                        <div class='label'>📧 Email:</div>
                        <div class='value'><a href='mailto:$email' style='color: #667eea; text-decoration: none;'>$email</a></div>
                    </div>
                    
                    <div class='field'>
                        <div class='label'>📋 Subject:</div>
                        <div class='value'>" . htmlspecialchars($subject, ENT_QUOTES, 'UTF-8') . "</div>
                    </div>
                </div>
                
                <h3 style='color: #667eea;'>💬 Message:</h3>
                <div class='message-box'>
                    " . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . "
                </div>
                
                <div class='info-box'>
                    <h4 style='color: #667eea; margin-top: 0;'>📊 Submission Details</h4>
                    <div class='meta'>
                        <strong>Database ID:</strong> $contact_id<br>
                        <strong>IP Address:</strong> $ip_address<br>
                        <strong>Submitted:</strong> $created_at<br>
                        <strong>Source:</strong> YVI Soft Contact Form
                    </div>
                </div>
            </div>
            
            <div class='footer'>
                <p><strong>🚀 YVI Soft Solutions</strong></p>
                <p>This message was sent from your website contact form</p>
            </div>
        </div>
    </body>
    </html>";
}

/**
 * Create Plain Text Email Version
 */
function createPlainTextEmail($name, $email, $subject, $message, $contact_id, $ip_address, $created_at) {
    return "YVI Soft - New Contact Form Submission\n\n" .
           "Contact Information:\n" .
           "Name: $name\n" .
           "Email: $email\n" .
           "Subject: $subject\n\n" .
           "Message:\n$message\n\n" .
           "Submission Details:\n" .
           "Database ID: $contact_id\n" .
           "IP Address: $ip_address\n" .
           "Submitted: $created_at\n" .
           "Source: YVI Soft Contact Form";
}
?>