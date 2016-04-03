<?php
    $host_name  = "db620444725.db.1and1.com";
    $database   = "db620444725";
    $user_name  = "dbo620444725";
    $password   = "conversant";


    $connect = mysqli_connect($host_name, $user_name, $password, $database);

    if(mysqli_connect_errno())
    {
    echo '<p>Verbindung zum MySQL Server fehlgeschlagen: '.mysqli_connect_error().'</p>';
    }
    else
    {
    echo '<p>Verbindung zum MySQL Server erfolgreich aufgebaut.</p>';
    }
?>
