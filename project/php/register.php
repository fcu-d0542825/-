<?php
    include("dbSet.php");

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    $username = $conn->real_escape_string($_POST['username']);
    $password = $conn->real_escape_string($_POST['password']);    
    $email = $conn->real_escape_string($_POST['email']);

    
    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "INSERT INTO user (username, password, email) VALUES ('$username','$password','$email')";
    $conn->query($sql);
    exit();
?>