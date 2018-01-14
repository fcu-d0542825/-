<?php session_start(); ?>

<?php
  echo json_encode($_SESSION['sendNext'],JSON_UNESCAPED_UNICODE); 
?>