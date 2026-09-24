<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

header('Content-Type: application/json');

/* ==========================
   METHOD CHECK
========================== */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(403);
    echo json_encode(['status' => 'error', 'message' => 'Forbidden']);
    exit;
}

/* ==========================
   SESSION + RATE LIMIT
========================== */
session_start();
if (isset($_SESSION['last_submit']) && time() - $_SESSION['last_submit'] < 10) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Please wait before submitting again.'
    ]);
    exit;
}
$_SESSION['last_submit'] = time();

/* ==========================
   BOT TRAP (HONEYPOT)
========================== */
if (!empty($_POST['website'])) {
    echo json_encode(['status' => 'error', 'message' => 'Bot detected']);
    exit;
}

/* ==========================
   RECAPTCHA v3 VERIFY
========================== */
$secretKey = "6Ld_mjEsAAAAAODxeg1-rkrK13t1f1G0JRg7b_KH";
$token = $_POST['g-recaptcha-response'] ?? '';

if (!$token) {
    echo json_encode(['status' => 'error', 'message' => 'Captcha missing']);
    exit;
}

$verify = file_get_contents(
    "https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$token}"
);

$captcha = json_decode($verify, true);

if (
    empty($captcha['success']) ||
    $captcha['success'] !== true ||
    ($captcha['score'] ?? 0) < 0.5 ||
    ($captcha['action'] ?? '') !== 'contact'
) {
    echo json_encode(['status' => 'error', 'message' => 'Captcha verification failed']);
    exit;
}

/* ==========================
   INPUT VALIDATION
========================== */
function clean($v) {
    return trim(htmlspecialchars($v, ENT_QUOTES, 'UTF-8'));
}

$name  = clean($_POST['name'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = clean($_POST['phone'] ?? '');

if (!$name || !$email || strlen($phone) < 8) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid form data']);
    exit;
}

/* ==========================
   EMAIL BODY
========================== */
$emailBody = "
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {$name}</p>
<p><strong>Email:</strong> {$email}</p>
<p><strong>Phone:</strong> {$phone}</p>
";

/* ==========================
   SEND MAIL (SMTP)
========================== */
$mail = new PHPMailer(true);

try {
    // SMTP CONFIG — CHANGE TO YOUR DETAILS
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

    // HEADERS (ANTI-SPOOF SAFE)
    $mail->setFrom('no-reply@astrakatdesigns.com', 'Astrakat Designs');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('info@astrakatdesigns.com');

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Message';
    $mail->Body    = $emailBody;
    
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'error_log';

    $mail->send();

    echo json_encode([
        'status' => 'success',
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Mail sending failed'
        // 'debug' => $mail->ErrorInfo // enable only for debugging
    ]);
}

exit;

?>
