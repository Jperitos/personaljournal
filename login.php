<?php
session_start();

// Database connection
$conn = new PDO('localhost', 'username', 'password', 'database_name');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare and execute query
    $stmt = $conn->prepare("SELECT id, password_hash FROM journal_tbl WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($user_id, $password_hash);
    $stmt->fetch();
    
    // Verify the password
    if ($user_id && password_verify($password, $password_hash)) {
        // Password is correct, start session
        $_SESSION['user_id'] = $user_id;
        echo "Login successful!";
    } else {
        echo "Invalid email or password.";
    }

    $stmt->close();
    $conn->close();
}
?>
