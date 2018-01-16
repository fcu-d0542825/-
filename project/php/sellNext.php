<?php session_start(); ?>

<?php
  echo json_encode($_SESSION['sellNext'],JSON_UNESCAPED_UNICODE); 
?>