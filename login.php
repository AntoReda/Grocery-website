<?php include "db.php"; ?>
<?php session_start(); ?>
<script src="P3Script.js"></script>
<?php 

if(isset($_POST['login'])){

     $username = $_POST['username'];
     $password = $_POST['password'];
     $db_user_role= $POST['role'];


    $username = mysqli_real_escape_string($connection,$username);
    $password = mysqli_real_escape_string($connection,$password); 
  
    $query = "SELECT * FROM users WHERE user_name = '{$username}' ";
    $select_user_query = mysqli_query($connection, $query);

    if(!$select_user_query){
        
        die("QUERY FAILED". mysqli_error($connection));
        
    }

    while($row = mysqli_fetch_array($select_user_query)){

        $db_user_id = $row['user_id'];
        $db_user_name = $row['user_name'];
        $db_user_password = $row['user_password'];
        $db_user_fisrtname = $row['user_firstname'];
        $db_user_lastname = $row['user_lastname'];
        $db_user_role = $row['user_role'];
    }

    if($username !== $db_user_name && $password !== $db_user_password){
        header("Location: ../verdi/P5.php?error=1");
    } else if($username == $db_user_name && $password == $db_user_password&&$db_user_role=="admin"){


        $_SESSION['user_name'] = $db_user_name;
        $_SESSION['user_firstname'] = $db_user_firstname; 
        $_SESSION['user_lastname'] = $db_user_lastname; 
        $_SESSION['user_role'] = $db_user_role;  

        header("Location: ../verdi/P7_admin.php");
        
    } else if($username == $db_user_name && $password == $db_user_password&&$db_user_role=="customer"){


        $_SESSION['user_name'] = $db_user_name;
        $_SESSION['user_firstname'] = $db_user_firstname; 
        $_SESSION['user_lastname'] = $db_user_lastname; 
        $_SESSION['user_role'] = "customer";

        header("Location: ../verdi/P4_php.php?success=1");
        
    }else {

        header("Location: ../verdi/P5.php?error=1");
    }


   
}

?>