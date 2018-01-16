<?php session_start(); ?>

<?php
    $nowTitle = $_POST['title'];
    $tableName = $_POST['tableName'];

    $_SESSION['nowSell'] = $nowTitle;
    $_SESSION['sellTable'] = $tableName;
?>