<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up to verdi</title>
    <link rel="stylesheet" href="MyStyleB.css">
    
    <style>
        th {
            background-color: #4CAF50;
            color: white;
        }
        
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        .button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: right;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            font-size-adjust: auto;
            max-width: 100%;
            height: auto;
        }
        
        .button:hover {
            filter: brightness(150%);
        }
        
        td {
            text-align: center;
        }
        
        div.a {
            text-align: right
        }
        
        div.gen h1 {
            text-align: center
        }
        
        .topnav {
            overflow: hidden;
            background-color: #333;
        }
        
        .topnav a {
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        }
        
        .topnav a:hover {
            background-color: #ddd;
            color: black;
        }
        
        .topnav-right {
            float: right;
        }
        
        h2 {
            font-family: Georgia, 'Times New Roman', Times, serif;
            text-align: left;
            font-size: 60px;
            line-height: 60px;
            margin: 25px;
        }
        /* Style inputs with type="text", select elements and textareas */
        
        input[type=text],
        select,
        textarea {
            width: 100%;
            /* Full width */
            padding: 12px;
            /* Some padding */
            border: 1px solid #ccc;
            /* Gray border */
            border-radius: 4px;
            /* Rounded borders */
            box-sizing: border-box;
            /* Make sure that padding and width stays in place */
            margin-top: 6px;
            /* Add a top margin */
            margin-bottom: 16px;
            /* Bottom margin */
            resize: vertical/* Allow the user to vertically resize the textarea (not horizontally) */
        }
        input[type=email],
        select,
        textarea {
            width: 100%;
            /* Full width */
            padding: 12px;
            /* Some padding */
            border: 1px solid #ccc;
            /* Gray border */
            border-radius: 4px;
            /* Rounded borders */
            box-sizing: border-box;
            /* Make sure that padding and width stays in place */
            margin-top: 6px;
            /* Add a top margin */
            margin-bottom: 16px;
            /* Bottom margin */
            resize: vertical/* Allow the user to vertically resize the textarea (not horizontally) */
        }

        input[type=password],
        select,
        textarea {
            width: 100%;
            /* Full width */
            padding: 12px;
            /* Some padding */
            border: 1px solid #ccc;
            /* Gray border */
            border-radius: 4px;
            /* Rounded borders */
            box-sizing: border-box;
            /* Make sure that padding and width stays in place */
            margin-top: 6px;
            /* Add a top margin */
            margin-bottom: 16px;
            /* Bottom margin */
            resize: vertical/* Allow the user to vertically resize the textarea (not horizontally) */
        }
        /* Style the submit button with a specific background color etc */
        
        input[type=submit] {
            background-color: rgb(240, 128, 128);
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        /* When moving the mouse over the submit button, add a darker green color */
        
        input[type=submit]:hover {
            background-color: rgb(255, 160, 122);
        }
        /* Add a background color and some padding around the form */
        
        .container {
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
        }
        .form {
    align-items: center;
    text-align: center;
    justify-content: space-around;
    background: rgb(238, 174, 202);
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(192, 233, 148, 1) 100%);
    padding:20px;
}
        
        @media screen and (max-width: 600px) {
            .topnav a:not(:first-child) {
                display: none;
            }
            .topnav a.icon {
                float: right;
                display: block;
            }
        }
    </style>
</head>
<?php  include "safe.php"?>
<body>
<div class="topnav">
        <a href="P1.php">Home</a>
        <a href="P2.php">Shop</a>
    </div>
    <div>
        <h2>Sign Up</h2>
    </div>

    <div>

    <?php
    if(isset($_POST['create_user'])){

        $user_firstname = $_POST['user_firstname'];
        $user_lastname = $_POST['user_lastname'];
        $user_role = $_POST['user_role'];
        $user_name = $_POST['user_name'];

        // $product_img = $_FILES['product_img']['name'];
        // $product_image_tmp = $_FILES['product_img']['tmp_name'];

        $user_email = $_POST['user_email'];
        $user_password = $_POST['user_password'];

        // move_uploaded_file($product_image_tmp, "../picturesD/$product_img");

         $query = "INSERT INTO users (user_firstname,user_lastname,
         user_role,user_name,user_email,user_password) VALUES('$user_firstname','$user_lastname','$user_role','$user_name','$user_email','$user_password')";

         $create_user_query = mysqli_query($connection,$query);

         if(!$create_user_query){

             die("QUERY FAILED" . mysqli_error($connection));
         }
        
    

        }
    
    ?>
        <form action="" method="post" enctype="multipart/form-data" class="form">

            <label for="fname" style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 26px; float:left;">First Name</label>
            <input type="text" id="fname" name="user_firstname" placeholder="i.e: Harley">

            <div>
                <label for="lname" style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 26px; float:left;">Last Name</label>
                <input type="text" id="lname" name="user_lastname" placeholder="i.e: Quinn">
            </div>

            <div style="margin-top: 15px;">
                <label for="country" style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 26px; float:left;" >Username</label>
                <input type="text" id="lname" name="user_name" placeholder="therealharleyquinn">
            </div>

           

            <div style="margin-top: 15px;">
            <label for="subject" style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 26px; float:left;">Email </label>
            <input type="email" id="lname" name="user_email" placeholder="quinn.biz@yahoo.com">
            </div>
            

          <div style="margin-top: 15px;">
          <label for="country"style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 26px; float:left;">Password</label>
            <input type="password" id="lname" name="user_password">
          </div>

          <div style="margin-top: 15px;">
                <select name="user_role" id="lname">
                    <option value="customer">Select Options</option>
                    <option value="customer">Customer</option>
                </select>
            </div>

            <input style="margin-top: 15px;" type="submit" name="create_user" value="Add User">

        </form>
    </div>
</body>

</html>