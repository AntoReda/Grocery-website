<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Aisles</title>
    <link rel="stylesheet" href="myStyle.css">
    <style>
        body{
            background-color: rgb(213, 247, 233);
        }
        @media screen and (max-width: 600px) {
            .topnav a:not(:first-child) {display: none;}
            .topnav a.icon 
            {
                float: right;
                display: block;
            }
        }
        p
        {
            font-size: 80px; font-family: serif;
        }
    </style>
</head>
<div>
        <header class="topnav">
            <a href="P1.php">Home</a>
            <a href="P2.php">Shop</a>
            <a href="P4_php.php">My Cart</a>
            <a href="P5.php">My Account</a>
        </header>
</div>
<?php  include "db.php"?>    
    <body>
        <img src="picturesD/Verdi.jpg" class="img1">
        <div class="Aisles">
            <h1>Aisles</h1>
        </div>
        
        <div class="cen">
            
        <h2></h2>
        <div class="meats">
        <div class="products">
        
            <div class="products_row">
            <a href="P3_Meats.php">
                <p style="color: white">Meats</p>
            </a>
            </div>
            
        </div>
        </div>
        
        <h2></h2>
        <div class="dairy">
        <div class="products"> 
        
            <div class="products_row">
            <a href="P3_dairy.php">
                <p style="color: black">Dairy & Eggs</p>
            </a>
            </div>

        </div>
        </div>
        
        <h2></h2>
        <div class="fruits">
        <div class="products"> 
        
            <div class="products_row">
            <a href="P3_fruits.php">
                <p style="color: white">Fruits and Vegetables</p>
            </a>
            </div>

        </div>
        </div>
    
        
        <h2></h2>
        <div class="bread">
        <div class="products"> 
        
            <div class="products_row">
            <a href="P3_Breads.php">
                <p style="color: black">Breads</p>
            </a>
            </div>

        </div>
        </div>
            
        </div>
        <div class="">
        <div class="">
        <div class="products">
       
            <div class="products_row">
            
                <div class="col-4">

            </div>
            </div>
        </div> 
    </body>

    <footer>
        
            <div class="final_row">
                <br><br>
                <div style="background-color:#333; color:beige; max-width:100%">
                <h2>Useful Links</h2>
                <ul>
                    <li><a href="http://www.omafra.gov.on.ca/english/crops/facts/10-013w.htm"style="background-color:#333; color:beige">About Bio Products</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Giuseppe_Verdi"style="background-color:#333; color:beige">About Verdi Products</a></li>
                </ul>
</div>
            </div>
        
    </footer>

</html>
                
                
                
        
        