<?php
    include("dbSet.php");

      $sql = "SET NAMES 'UTF8'";
      $conn->query($sql);
      $sql = "SELECT username FROM user";
      $result = $conn->query($sql);

      $request_recieve = array();
      while($row = mysqli_fetch_array($result))
      {
      array_push($request_recieve, array('username'=>$row['username']));      
      }

      echo json_encode($request_recieve,JSON_UNESCAPED_UNICODE); 
      $conn->close();
?>
