<?php session_start(); ?>
<?php
    header("Content-Type:text/html; charset=utf-8");
    include('dbSet.php');
      
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    $sql = "SET NAMES 'UTF8'";
    $conn->query($sql);
    $sql = "SELECT * FROM sell";
    $result = $conn->query($sql);

    $request_recieve = array();
    while($row = mysqli_fetch_array($result)) {
        if ($_SESSION['username'] != $row['username']) {
            array_push($request_recieve, array('no'=>$row['no'],'src'=>$row['src'], 'title'=>$row['title'],
            'date'=>$row['date']));               
        }
    }

    echo json_encode($request_recieve,JSON_UNESCAPED_UNICODE); 
    $conn->close();
?>
