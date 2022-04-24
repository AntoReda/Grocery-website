<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Details</title>
    <link rel="stylesheet" href="myStyle.css">
    <script src="P3Script.js"></script>
    <style>
        body {
            background-color: rgb(213, 247, 233);
        }
        .p12{max-width: 160px; float: left;}
        img {width: 100%;
    height: auto;
    width:142px;
    height: 142px;}
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
<?php  include "db.php"?>
<div>
    <header class="topnav">
            
            <a href="P7_admin.php"style="font-family: Georgia, 'Times New Roman', Times, serif; font-size:medium">Product list</a>
            <a href="P11.php"style="font-family: Georgia, 'Times New Roman', Times, serif; font-size:medium">Order list</a>
        <div class="topnav-right">
            <a href="P5.php"style="font-family: Georgia, 'Times New Roman', Times, serif; font-size:medium">Logout</a>
        </div>
    </header>
</div>

<body>


    <div class="products">
        <div class="products_row">

        <?php 

$query = "SELECT * FROM products"; 
$select_products = mysqli_query($connection, $query); 

while($row = mysqli_fetch_assoc($select_products)){

    $product_id = $row['product_id'];
    $product_name = $row['product_name'];
    $product_link = $row['product_link'];
    $product_img = $row['product_img'];
    $product_price = $row['product_price'];
    $prod_price_calc_p4 = $row['prod_price_calc_p4'];
    $product_facts = $row['product_facts'];
    $product_inventory = $row['product_inventory'];
    $product_qty = $row['product_qty'];
    $product_addToCart_P3 = $row['product_addToCart_P3'];
    $product_id_p4 = $row['product_id_p4'];
    $product_add_p4 = $row['product_add_p4'];
    $product_data_p4 = $row['product_data_p4'];
    $product_delete_p4 = $row['product_delete_p4'];
    $product_remove_p4 = $row['product_remove_p4'];
    ?>
    <div>
            <div class="col-2">
                <div class="img2">
                <h1 style="font-size:40px"><?php echo $product_name; ?></h1>
                <img src="picturesD/<?php echo $product_img;?>">
                <h4><?php echo $product_price;?></h4>
                <input type="number" value="1" min="0" id="<?php echo $product_qty; ?>">
                <button href="" class="first_button" onclick="<?php echo $product_addToCart_P3; ?>">Add To the order</button>
                </div>
            </div>

            <div class="col-2">
                
            </div>
            <br><br><br><br><br><br><br><br><br><br>
    </div>
            <?php 
}


?>
        </div>
    </div>

   

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
</body>

</html>