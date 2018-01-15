<?php session_start(); ?>

<?php
    header("Content-Type:text/html; charset=utf-8");
    include('dbSet.php');
      
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    $nowTitle = $_SESSION['nowtitle'];

    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "SELECT * FROM message where title = '$nowTitle'";
    $result = $conn->query($sql);

    $request_recieve = array();
    while($row = mysqli_fetch_array($result)) {
        array_push($request_recieve, array( 'title'=>$row['title'],
        'date'=>$row['date'],'comment'=>$row['comment'],'username'=>$row['username']));      
    }

    echo json_encode($request_recieve,JSON_UNESCAPED_UNICODE); 
    $conn->close();
?>

