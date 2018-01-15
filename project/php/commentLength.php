<?php session_start(); ?>
<?php
    header("Content-Type:text/html; charset=urf-8");
    include('dbSet.php');
 
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    $tableName = $_SESSION['tableName'];
    // Perform queries and print out affected rows
    mysqli_query($conn,"SELECT * FROM $tableName");
    $request_length = mysqli_affected_rows($conn);
    echo $request_length;
    mysqli_close($conn);
?>