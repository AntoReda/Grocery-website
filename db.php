<?php 

/** make the data secure  */

$db['db_host'] = "localhost"; 
$db['db_user'] = "root";
$db['db_pass'] = "";
$db['db_name'] = "verdi";

foreach($db as $key => $value){

    define(strtoupper($key), $value);


}


/** to be able to connect all of our dynamic pages to the server */
$connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

?>