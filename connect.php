<?php

  $host="localhost";
  $user="root";
  $pass="";
  $db="journal";

  try{
    $conn=new PDO("mysql:host=$servername;dbname=journal",$username,$password);
    $conn->setAttribute(PDO:: ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }catch(PDOException $e){
    echo "Failed to connect Database".$e->getmessage();
    
  }
  // $conn=new mysqli($host,$user,$pass,$db);
  // if($conn -> connect_error){
  //   echo "Failed to connect DB".$conn->connect_eror;
  // }
?>