<?php
    include("dbSet.php");

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    $tableName = $conn->real_escape_string($_POST['tableName']);
    $username = $conn->real_escape_string($_POST['username']);
    $title = $conn->real_escape_string($_POST['title']);
    $comment = $conn->real_escape_string($_POST['comment']);
    $date = $conn->real_escape_string($_POST['date']);
    $fileName = $conn->real_escape_string($_POST['fileName']);

    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "INSERT INTO $tableName (username,comment,date,sellTitle,fileName) VALUES ('$username','$comment','$date','$title','$fileName')";
    $conn->query($sql);
    exit();
?>