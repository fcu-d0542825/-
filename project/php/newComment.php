<?php
    include("dbSet.php");

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    $username = $conn->real_escape_string($_POST['username']);
    $tableName = $conn->real_escape_string($_POST['tableName']);
    $comment = $conn->real_escape_string($_POST['comment']);
    $date = $conn->real_escape_string($_POST['date']);

    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "INSERT INTO $tableName (title,username,comment,date) VALUES ('$tableName','$username','$comment','$date')";
    $conn->query($sql);
    exit();
?>