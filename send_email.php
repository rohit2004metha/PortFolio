<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your@email.com"; // Replace with your email address
    $subject = "New Message from Your Website";
    $message = $_POST["message"];

    $headers = "From: webmaster@example.com"; // Replace with your email or leave it as is

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
