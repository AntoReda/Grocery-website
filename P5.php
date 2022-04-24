<?php

if(isset($_POST['submit'])){

echo "yes it received"; 
}
if(isset($_GET['error'])==true)
{
    echo'<p align="center" style="background-color:#333; font-size:40px; color:white; font-family: Courier New, Courier, monospace ">Incorrect username or password</p>';
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Verdi Account</title>
    <link rel="stylesheet" href="myStyleS.css">
</head>

<body>
    <style>
    a:hover{background-color: white; border-radius: 20px; padding:2px}
    .second_button:hover{background-color:white}
    .sign:hover{background-color:#90EE90; padding:2px; color:black; border-radius:20%}
    </style>
    <div class="container">
        <header class="navbar">
            <div class="logo">
                <img src="Images/Verdi.png" class="img1">
            </div>

            <!-- The overall navigation bar -->
            <nav>
                <ul>
                    <li><a href="P1.php">Home</a></li>
                    <li><a href="P2.php">Shop</a></li>
                </ul>
            </nav>
        </header>

        <section>
            <div class="login">
                <h1>Log In</h1>
                <form action="login.php" method="post">
                    <div class="form">

                        <div>

                            <label for="email" class="label">Username</label>
                            <input type="text" name="username" id="email" class="rectangle" placeholder="verdi_lover77" required>
                            <br>
                        </div>
                        <div>
                            <label for="pswd" class="label">Password</label>
                            <input type="password" name="password" id="pswd" class="rectangle" placeholder="Password"required>
                            <br>
                        </div>

                        <div >
                            <input type="submit" name="login" class="second_button" id="" value ="Submit">
                        </div>
                </form>

                </div>

                <div class="reg">
                    <h2>Not registered with Verdi? <br>
                        <a href="P6.php"class="sign"> <u>Sign Up Here!</u></a>
                    </h2>
                </div>
            </div>
        </section>
    </div>

    <!-- The productcs page -->


</body>

</html>