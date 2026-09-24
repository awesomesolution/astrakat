<?php
/**
 * AstraKAT Designs — Contact Form Mail Handler
 * Validates submission, checks honeypot, verifies Google reCAPTCHA v3,
 * and sends luxury HTML notification via PHPMailer SMTP.
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer classes from live phpmailer folder (with fallbacks)
$candidates = [
    __DIR__ . '/phpmailer/src',
    __DIR__ . '/assets/phpmailer/src',
    __DIR__ . '/../phpmailer/src',
    __DIR__ . '/phpmailer/src/src',
    __DIR__ . '/phpmailer-sample/src',
];

$phpMailerDir = null;
foreach ($candidates as $dir) {
    if (file_exists($dir . '/Exception.php')) {
        $phpMailerDir = $dir;
        break;
    }
}

if ($phpMailerDir) {
    require_once $phpMailerDir . '/Exception.php';
    require_once $phpMailerDir . '/PHPMailer.php';
    require_once $phpMailerDir . '/SMTP.php';
} else {
    header('Content-Type: application/json; charset=UTF-8');
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Mail configuration error: PHPMailer libraries not found.'
    ]);
    exit;
}

header('Content-Type: application/json; charset=UTF-8');

/* ==========================================
   1. HTTP METHOD CHECK
========================================== */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

/* ==========================================
   2. SESSION & RATE LIMITING (10s)
========================================== */
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
if (isset($_SESSION['last_submit']) && (time() - $_SESSION['last_submit']) < 8) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Please wait a few seconds before submitting again.'
    ]);
    exit;
}
$_SESSION['last_submit'] = time();

/* ==========================================
   3. BOT TRAP (HONEYPOT)
========================================== */
if (!empty($_POST['website'])) {
    echo json_encode(['status' => 'error', 'message' => 'Spam submission detected.']);
    exit;
}

/* ==========================================
   4. GOOGLE RECAPTCHA v3 VERIFICATION
========================================== */
$secretKey = "6Ld_mjEsAAAAAODxeg1-rkrK13t1f1G0JRg7b_KH";
$token = $_POST['g-recaptcha-response'] ?? '';

if (empty($token)) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Captcha verification missing. Please refresh and try again.'
    ]);
    exit;
}

$verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
$verifyData = [
    'secret'   => $secretKey,
    'response' => $token,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? ''
];

$verifyResponse = false;
if (function_exists('curl_init')) {
    $ch = curl_init($verifyUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($verifyData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    $verifyResponse = curl_exec($ch);
    curl_close($ch);
}

if (!$verifyResponse) {
    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($verifyData),
            'timeout' => 10
        ]
    ];
    $context = stream_context_create($options);
    $verifyResponse = @file_get_contents($verifyUrl, false, $context);
}

$captcha = json_decode($verifyResponse, true);

if (
    empty($captcha['success']) ||
    $captcha['success'] !== true ||
    ($captcha['score'] ?? 0) < 0.4 ||
    ($captcha['action'] ?? '') !== 'contact'
) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Captcha verification failed. Please try again.'
    ]);
    exit;
}

/* ==========================================
   5. SANITIZATION & INPUT VALIDATION
========================================== */
function cleanInput($val) {
    return trim(htmlspecialchars((string)$val, ENT_QUOTES, 'UTF-8'));
}

$name          = cleanInput($_POST['name'] ?? $_POST['fullName'] ?? '');
$emailRaw      = trim($_POST['email'] ?? '');
$email         = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
$phone         = cleanInput($_POST['phone'] ?? '');
$preferredDate = cleanInput($_POST['preferredDate'] ?? '');
$postcode      = cleanInput($_POST['postcode'] ?? '');
$rooms         = cleanInput($_POST['rooms'] ?? '');
$service       = cleanInput($_POST['service'] ?? '');
$project       = cleanInput($_POST['project'] ?? '');

if (empty($name)) {
    echo json_encode(['status' => 'error', 'message' => 'Please provide your full name.']);
    exit;
}
if (!$email) {
    echo json_encode(['status' => 'error', 'message' => 'Please provide a valid email address.']);
    exit;
}
if (empty($phone) || strlen($phone) < 8) {
    echo json_encode(['status' => 'error', 'message' => 'Please provide a valid phone number (at least 8 digits).']);
    exit;
}

/* ==========================================
   6. EMAIL TEMPLATE GENERATION
========================================== */
$emailBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <title>New Project Enquiry</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f5f2; margin: 0; padding: 24px; color: #222; }
    .card { max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e5ded3; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
    .header { background: #12100e; padding: 28px 32px; text-align: center; border-bottom: 2px solid #b08d57; }
    .header h1 { margin: 0; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; color: #ffffff; }
    .header p { margin: 6px 0 0; color: #b08d57; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; }
    .content { padding: 32px; }
    .intro { margin-bottom: 22px; font-size: 14.5px; color: #555; line-height: 1.6; }
    .field-row { padding: 12px 0; border-bottom: 1px solid #f0ede8; }
    .field-row:last-child { border-bottom: none; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8a8378; font-weight: 700; margin-bottom: 4px; }
    .value { font-size: 15px; color: #1f1d1a; line-height: 1.5; }
    .message-box { background: #faf8f5; border-left: 3px solid #b08d57; padding: 14px 16px; margin-top: 6px; font-size: 14px; color: #333; line-height: 1.6; }
    .footer { background: #faf8f5; padding: 18px 32px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #ede8e1; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h1>AstraKAT Designs</h1>
      <p>New Consultation Enquiry</p>
    </div>
    <div class='content'>
      <p class='intro'>You have received a new project consultation enquiry submitted via the website contact form.</p>
      
      <div class='field-row'>
        <div class='label'>Client Name</div>
        <div class='value'><strong>" . htmlspecialchars($name) . "</strong></div>
      </div>
      <div class='field-row'>
        <div class='label'>Email Address</div>
        <div class='value'><a href='mailto:" . htmlspecialchars($email) . "' style='color:#b08d57; text-decoration:none;'><strong>" . htmlspecialchars($email) . "</strong></a></div>
      </div>
      <div class='field-row'>
        <div class='label'>Phone Number</div>
        <div class='value'><a href='tel:" . htmlspecialchars($phone) . "' style='color:#1f1d1a; text-decoration:none;'><strong>" . htmlspecialchars($phone) . "</strong></a></div>
      </div>";

if (!empty($preferredDate)) {
    $emailBody .= "
      <div class='field-row'>
        <div class='label'>Preferred Consultation Date</div>
        <div class='value'>" . htmlspecialchars($preferredDate) . "</div>
      </div>";
}

if (!empty($postcode)) {
    $emailBody .= "
      <div class='field-row'>
        <div class='label'>Postcode</div>
        <div class='value'>" . htmlspecialchars($postcode) . "</div>
      </div>";
}

if (!empty($rooms)) {
    $emailBody .= "
      <div class='field-row'>
        <div class='label'>Number of Rooms</div>
        <div class='value'>" . htmlspecialchars($rooms) . "</div>
      </div>";
}

if (!empty($service)) {
    $emailBody .= "
      <div class='field-row'>
        <div class='label'>Service Interested In</div>
        <div class='value'><span style='display:inline-block; background:#f4ede2; color:#785820; padding:3px 10px; border-radius:3px; font-weight:600; font-size:13.5px;'>" . htmlspecialchars($service) . "</span></div>
      </div>";
}

if (!empty($project)) {
    $emailBody .= "
      <div class='field-row'>
        <div class='label'>Project Details / Notes</div>
        <div class='value message-box'>" . nl2br(htmlspecialchars($project)) . "</div>
      </div>";
}

$emailBody .= "
    </div>
    <div class='footer'>
      Enquiry received on " . date('d M Y, H:i T') . " from IP: " . htmlspecialchars($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "
    </div>
  </div>
</body>
</html>
";

$altBody = "New Consultation Enquiry — AstraKAT Designs\n\n"
         . "Client Name: {$name}\n"
         . "Email: {$email}\n"
         . "Phone: {$phone}\n"
         . (!empty($preferredDate) ? "Preferred Date: {$preferredDate}\n" : "")
         . (!empty($postcode) ? "Postcode: {$postcode}\n" : "")
         . (!empty($rooms) ? "Number of Rooms: {$rooms}\n" : "")
         . (!empty($service) ? "Service: {$service}\n" : "")
         . (!empty($project) ? "Project Details:\n{$project}\n" : "");

/* ==========================================
   7. SMTP TRANSMISSION VIA PHPMAILER
========================================== */
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'mail.astrakatdesigns.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'no-reply@astrakatdesigns.com';
    $mail->Password   = 'NKZSj24EepmiKjR';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer'       => false,
            'verify_peer_name'  => false,
            'allow_self_signed' => true
        ]
    ];

    $mail->setFrom('no-reply@astrakatdesigns.com', 'AstraKat Designs');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('info@astrakatdesigns.com', 'AstraKat Designs');

    $mail->isHTML(true);
    $mail->Subject = 'New Project Enquiry from ' . $name . ' — AstraKAT Designs';
    $mail->Body    = $emailBody;
    $mail->AltBody = $altBody;

    // Route debug to server error_log (does not output to stdout or corrupt JSON)
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'error_log';

    $mail->send();

    echo json_encode([
        'status'  => 'success',
        'message' => 'Thank you! Your enquiry has been sent successfully. Our design team will get in touch with you shortly.'
    ]);
} catch (Exception $e) {
    error_log('PHPMailer send exception: ' . $e->getMessage() . ' | ' . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode([
        'status'  => 'error',
        'message' => 'Mail sending failed. Please call or WhatsApp us at 07344 337 970 or email info@astrakatdesigns.com.'
    ]);
}

exit;
