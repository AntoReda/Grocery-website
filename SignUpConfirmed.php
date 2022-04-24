<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verdi Groceries | Montreal Local Products</title>
    <link rel="stylesheet" href="myStyleS.css">
    <style>
        .offerH {
            padding-top: 35px;
            width: auto;
        }
        
        .offerH p {
            color: black;
            font-family: serif;
            font-size: 60px;
            text-align: center;
        }
        
        .Sales {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        
        .col-9 {
            flex-basis: 33%;
            min-width: 200px;
            text-align: center;
        }

        .col-9 p {
            text-align: center;
        }

        .col-9 img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 75%; 
            height: auto;
        }

        .col-9 h1 {
            font-family: Georgia, 'Times New Roman', Times, serif;
            text-align: center;
            font-size: 60px;
            line-height: 60px;
            margin: 25px;
        }

        .col-9 h4{
            font-family: Georgia, 'Times New Roman', Times, serif;
            text-align: center;
            margin: 25px;
        }


    </style>
</head>

<body>
    <div class="container">
        <!-- The logo of our store -->
        <header class="navbar">
            <div class="logo">
                <img src="Images/Verdi.png" class="img1">
            </div>

            <!-- The overall navigation bar -->
            <nav>
                <ul>
                    <li><a href="P1.php">Home</a></li>
                    <li><a href="P2.php">Shop</a></li>
                    <li><a href="P4_php.php">My Cart</a></li>
                    <li><a href="P5.php">My Account</a></li>
                </ul>
            </nav>
        </header>
        
        <section class="second_row">
            <div class="col-1">
                <h1>You are signed up, <span id="name">Person</span></h1>
            </div>
        </section>


        <footer>
        <div class="container">
            <div class="final_row">
                <h2>Stay a while!</h2>
                <ul>
                    <li><a href="P2.php">Shop Our Products</a></li>
                </ul>
            </div>
        </div>
    </footer>


    <script src="verdiJS.js"></script>
</body>

</html>
