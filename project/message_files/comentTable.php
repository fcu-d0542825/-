<?php session_start(); ?>

<?php
    include("../php/dbSet.php");

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $tableName = $conn->real_escape_string($_POST['title']);

    $sql = "SELECT * FROM message where title = '$tableName'";

    $result = $conn->query($sql);

    $row = mysqli_fetch_array($result);

    $num =  $row[0];
    $fileName = $num.'comment';

    $sql = "CREATE TABLE tableName (
        title TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , 
        username TEXT NOT NULL,
        comment TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
        date TEXT NOT NULL
        )";

    $sql = str_replace("tableName",$fileName,$sql);
    $conn->query($sql);

    $fileName = $fileName.'.html';

    //建立一文字檔名稱 
    $fcreat = fopen($fileName,'w+');


    $x = file('./messageInfo.html');
    print_r($x);

    $htmlTitle = '<title>';
    $htmlTitle = $htmlTitle.$tableName;
    $htmlTitle = $htmlTitle.'</title>';

    foreach($x as $value){
        $value = str_replace("<title></title>",$htmlTitle,$value);
        fwrite($fcreat,$value);
    }
    fclose($fcreat);

    $_SESSION['sendNext'] = $fileName;
?>