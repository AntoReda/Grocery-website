<?php 

/** make the data secure  */
//The host and password needs to be altered if you have a password for phpmyadmin set and a different port number for your server.
$db['db_host'] = "localhost"; //if your server port number is for example 3308 you should write between the "" localhost:3308.
$db['db_user'] = "root";
$db['db_pass'] = "";//If your phpmyadmin has a password add it between the "".
$db['db_name'] = "verdi";

foreach($db as $key => $value){

    define(strtoupper($key), $value);


}


/** to be able to connect all of our dynamic pages to the server */
$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

?>
