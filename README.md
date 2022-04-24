# Grocery-website
Website made to shop for products on the casual user level and perform admin actions as well

# All functions
[For client users]<br/> 
-Can add items to cart<br/> 
-Can create an account and save information on browser close<br/> 
-Can Calculate total and checkout<br/> 

[For admin users]<br/> 
-Can add items to order list <br/> 
-Can edit items<br/> 
-Can create admin users<br/> 
-Can edit users<br/> 
-Example of an admin usename:therealbatman, password:joker123

# How to run
-To run these files as dynamic pages, you need a localhost intsalled (I used XAMPP and WAMP).<br/> 
-Download either the entire zip file or the .7z file and extract it.<br/> 
-Then add this folder to your localhost file location (for XAMPP place it under htdocs, for WAMP place it under www).<br/>
<br/><br/>
[now the hard part]<br/>
-Create a new SQL database (on phpmyadmin) and name it "verdi". Then copy paste my SQL file contents (verdi.sql made by me) inside your new database called verdi (made by you) and execute your repository to create the database on your local server.<br/>
-Open my db.php file and add next to localhost the port number specific to your server(it is set to default which is 3306). If your phpmyadmin has a password, add your password next to the password field (these instructions are also included as comments insisde the db.php file).<br/>
[end of hard part]<br/><br/>
-Then open your browser and type: localhost/verdi/P1.php<br/>
-This will load the main menu page and you can navigate from there.<br/> <br/>
-To run these files as dynamic pages, rename all the files starting with P as a .html instead of .php (keep in mind the add to cart and other dynamic functions will not work its only to view the HTML and CSS.<br/> 
-Example, name P1.php to P1.html. Do so for P1 through P12.
