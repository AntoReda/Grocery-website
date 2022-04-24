

<table style="width: 100%">
                <thead>
                    <tr>
                        <th>PID</th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Fun Facts</th>
                        <th>Inventory</th>
                    </tr>
                </thead>
                <tbody>


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
    $product_total_price = $row['product_total_price'];
    


    echo "<tr>";
    echo "<td>$product_id</td>";
    echo "<td>$product_name</td>";
    echo "<td><img src='picturesD/$product_img' width='100' height = '100'></td>";
    echo "<td>$product_price</td>";
    echo "<td>$product_facts</td>";
    echo "<td>$product_inventory</td>";
    echo "<td><a href='P7_admin.php?source=edit_products&p_id={$product_id}'>Edit</a></td>";  
    echo "<td><a href='P7_admin.php?delete={$product_id}'>Delete</a></td>"; 
    echo "</tr>"; 


}
    ?>
                </tbody>
            </table>

            <?php 
            
            if(isset($_GET['delete'])){

                $the_product_id = $_GET['delete'];
                
                $query = "DELETE FROM products WHERE product_id = {$the_product_id}";
                $delete_query = mysqli_query($connection, $query);

            }

            ?>