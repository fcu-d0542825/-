<?php
    header("Content-Type:text/html; charset=urf-8");
    include("dbSet.php");
 
  $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
  if (mysqli_connect_errno())
    {
     echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

  // Perform queries and print out affected rows
  mysqli_query($conn,"SELECT username FROM user");
  $request_length = mysqli_affected_rows($conn);
  echo $request_length;
  //echo json_encode($request_length,JSON_UNESCAPED_UNICODE);
  mysqli_close($conn);

?>