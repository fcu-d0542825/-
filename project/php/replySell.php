<?php session_start(); ?>

<?php
    header("Content-Type:text/html; charset=urf-8");
    include('dbSet.php');

    $tableName = $_SESSION['sellTable'];

    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "SELECT * FROM $tableName";
    $result = $conn->query($sql);

    $request_recieve = array();
    while($row = mysqli_fetch_array($result)) {
        array_push($request_recieve, array( 'username'=>$row['username'],'comment'=>$row['comment'],'date'=>$row['date'],'sellTitle'=>$row['sellTitle'],'fileName'=>$row['fileName']));      
    }

    echo json_encode($request_recieve,JSON_UNESCAPED_UNICODE); 
    $conn->close();
?>