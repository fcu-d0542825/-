<?php
    include("dbSet.php");

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    $username = $conn->real_escape_string($_POST['username']);
    $title = $conn->real_escape_string($_POST['title']);
    $comment = $conn->real_escape_string($_POST['comment']);
    $date = $conn->real_escape_string($_POST['date']);
    $wanted = $conn->real_escape_string($_POST['wanted']);
    $imgSrc = $conn->real_escape_string($_POST['imgSrc']);

    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "INSERT INTO sell (title,username,comment,date,src,wanted) VALUES ('$title','$username','$comment','$date','$imgSrc','$wanted')";
    $conn->query($sql);
    exit();

?>