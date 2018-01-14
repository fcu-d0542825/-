<?php session_start(); ?>

<?php

    echo json_encode($_SESSION['username'],JSON_UNESCAPED_UNICODE); 

?>