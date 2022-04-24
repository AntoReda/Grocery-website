

<table style="width: 100%">
                <thead>
                    <tr>
                        <th>UID</th>
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>


                <?php 

$query = "SELECT * FROM users"; 
$select_users = mysqli_query($connection, $query); 

while($row = mysqli_fetch_assoc($select_users)){

    $user_id = $row['user_id'];
    $user_name = $row['user_name'];
    $user_password = $row['user_password'];
    $user_firstname = $row['user_firstname'];
    $user_lastname = $row['user_lastname'];
    $user_email = $row['user_email'];
    $user_image = $row['user_image'];
    $user_role = $row['user_role'];
  
    


    echo "<tr>";
    echo "<td>$user_id</td>";
    echo "<td>$user_name</td>";
    echo "<td>$user_firstname</td>";
    echo "<td>$user_lastname</td>";
    echo "<td>$user_email</td>";
    echo "<td>$user_role</td>";
    echo "<td><a href='P9_admin.php?source=edit_user&edit_user={$user_id}'>Edit</a></td>";  
    echo "<td><a href='P9_admin.php?delete={$user_id}'>Delete</a></td>"; 
    echo "</tr>"; 


}
    ?>
                </tbody>
            </table>

            <?php 
            
            if(isset($_GET['delete'])){

                $the_user_id = $_GET['delete'];
                
                $query = "DELETE FROM users WHERE user_id = {$the_user_id}";
                $delete_user_query = mysqli_query($connection, $query);

            }

            ?>