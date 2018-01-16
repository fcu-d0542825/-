<?php session_start(); ?>

<?php
    $username = $_POST['username'];

    $_SESSION['email'] =  $username;
?>