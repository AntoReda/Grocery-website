<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory</title>
    <link rel="stylesheet" href="MyStyleB.css">
    <style>
        th {
            background-color: rgb(240, 128, 128);
            color: white;
        }
        
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        .button {
            background-color: rgb(240, 128, 128);
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

<body>
<?php  include "db.php"?>
    <div class="topnav">
        <a href="P7_admin.php">Product List</a>
        <a href="P9_admin.php">User List</a>
        <a href="P11.php">Order List</a>
        
    </div>

    <div class="gen">
        <h1>Back Store: User List</h1>

        <div class="a">
            <a href="P10_create_user.php">
                <button style="background-color: rgb(240, 128, 128);"class="button">ADD</button>
            </a>
        </div>
        <div style="overflow-x:auto;">
        <?php
        
        if(isset($_GET['source'])){

            $source = $_GET['source'];


        } else {

            $source = ''; 
        }
        
        switch($source) {

            case 'add_user'; 
            include "P10_create_user.php"; 
            break; 

            case 'edit_user'; 
            include 'P10_edit_user.php'; 
            break; 

            case '34'; 
            echo 'nice'; 
            break; 

            default: 

            include "view_all_users.php"; 

            break; 
        }
        ?>


        </div>
    </div>
</body>

</html>