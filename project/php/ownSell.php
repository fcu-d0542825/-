<?php session_start(); ?>

<?php
    header("Content-Type:text/html; charset=urf-8");
    include('dbSet.php');

    $username = $_SESSION['username'];

    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "SELECT * FROM sell where username ='$username'";
    $result = $conn->query($sql);

    $request_recieve = array();
    while($row = mysqli_fetch_array($result)) {
        array_push($request_recieve, array( 'no'=>$row['no'],'title'=>$row['title']));      
    }

    echo json_encode($request_recieve,JSON_UNESCAPED_UNICODE); 
    $conn->close();
?>