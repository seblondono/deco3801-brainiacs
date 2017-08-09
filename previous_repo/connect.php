<?php
    #used for connect DB
    $server="Localhost";  // Web server
    $db_username="root";//DB user name
    $db_password="f562ef01d0b232fc";//DB password
    $db_name = "QBIvoting";//DB name

    $connect = new mysqli($server,$db_username,$db_password,$db_name);//Connect DB
    if (!$connect) {
        die("Connection failed: " . $conn->connect_error);
    }else{
        echo "connect DB success!";
    }
    mysqli_select_db($connect, 'QBIvoting');
?>