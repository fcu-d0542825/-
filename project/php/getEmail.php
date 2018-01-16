<?php
    header("Content-Type:text/html; charset=utf-8");
    include('dbSet.php');
      
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "SELECT * FROM user ";
    $result = $conn->query($sql);

    $request_recieve = array();
    while($row = mysqli_fetch_array($result)) {
        array_push($request_recieve, array( 'email'=>$row['email'],
        'username'=>$row['username']));      
    }

    echo json_encode($request_recieve,JSON_UNESCAPED_UNICODE); 
    $conn->close();
?>