<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Role</title>
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
        /* Style the submit button with a specific background color etc */
        
        input[type=submit] {
            background-color: #4CAF50;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        /* When moving the mouse over the submit button, add a darker green color */
        
        input[type=submit]:hover {
            background-color: #45a049;
        }
        /* Add a background color and some padding around the form */
        
        .container {
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
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
<?php

    if(isset($_GET['p_id'])){
    
    $the_product_id =  $_GET['p_id'];

    }


    $query = "SELECT * FROM products WHERE product_id = $the_product_id  ";
    $select_product_by_id = mysqli_query($connection,$query);  

    while($row = mysqli_fetch_assoc($select_product_by_id)) {
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
    $product_total_price = $row['product_total_price'];
        
         }


    if(isset($_POST['update_product'])) {
        
        
        $product_name = $_POST['product_name'];

     

      $product_price = $_POST['product_price'];
      $product_facts = $_POST['product_facts'];
      $product_inventory = $_POST['product_inventory'];
        
     
        
        if(empty($product_img)) {
        
        $query = "SELECT * FROM products WHERE product_id = $the_product_id ";
        $select_image = mysqli_query($connection,$query);
            
        while($row = mysqli_fetch_array($select_image)) {
            
           $product_img = $row['product_img'];
        
        }
        
        
}

        
          $query = "UPDATE products SET product_name  = '{$product_name}', product_img = '{$product_img}', product_price = '{$product_price}', product_facts = '{$product_facts}', product_inventory   = '{$product_inventory}' WHERE product_id = {$the_product_id} ";
       
        
        $update_product = mysqli_query($connection,$query);
        if(!$update_product){

            die("QUERY FAILED" . mysqli_error($connection));
        }
        
        
        

    
    
    }



?> 

<body>
    <div>
        <h2>Edit Product</h2>
    </div>

    <div class="container">

        <form action="" method="post" enctype="multipart/form-data">

            <label for="fname">Product Name</label>
            <input type="text" id="fname" value="<?php echo $product_name;?>" name="product_name" placeholder="i.e: Beans">

        

            <div style="margin-top: 15px;">
                <label for="country">Product Price</label>
                <input type="text" value="<?php echo $product_price;?>" id="lname" name="product_price" placeholder="$2.49/container">
            </div>


            <label for="subject">Fun Facts</label>
            <textarea id="subject" name="product_facts" placeholder="i.e: Beans are high in fibers" style="height:200px"><?php echo $product_facts;?> </textarea>

            <label for="country">Inventory</label>
            <input type="text" value="<?php echo $product_inventory;?>" id="lname" name="product_inventory" placeholder="23">

            <input type="submit" name="update_product" value="Create product">

        </form>
    </div>
</body>

</html>