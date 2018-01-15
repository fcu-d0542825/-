<?php session_start(); ?>

<?php
    $nowTitle = $_POST['title'];
    $tableName = $_POST['tableName'];

    $_SESSION['nowtitle'] = $nowTitle;
    $_SESSION['tableName'] = $tableName;
?>