<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verdi Groceries | Montreal Local Products</title>
    <link rel="stylesheet" href="myStyleS.css">
    <style>
        a:hover{background-color: white; border-radius: 20px; padding:2px}
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
                    <li><a style="color:black"href="P1.php" >Home</a></li>
                    <li><a style="color:black"href="P2.php">Shop</a></li>
                    <li><a style="color:black"href="P4_php.php">My Cart</a></li>
                    <li><a style="color:black"href="P5.php">My Account</a></li>
                </ul>
            </nav>
        </header>
        
        <section class="second_row">
            <div class="col-1">
                <h1>Welcome!</h1>
            </div>
        </section>
        
    
        <br>
        <br>
        
        <div class="Sales">
            <div class="col-9">
                <p style="font-size: 60px"> Student Offer!<p>
                <p style="font-size: 120px">10%</p>
                <p>All University students are eligible for a 10% discount off!</p>
            </div>
            <div class="col-9">
                <p style="font-size: 60px"> Age Before Beauty!</p>
                <p style="font-size: 120px">15%</p>
                <p> All shoppers above the age of 65 get a 15% discount off! </p>
            </div>
            <div class="col-9">
                <p style="font-size: 60px"> Free delivery!</p>
                <p style="font-size: 120px">100%</p>
                <p>As verdi's contribution to society during COVID-19, all delivers are free !</p>
            </div>
        </div>
        <br>
        <br>
        <br>
        <hr>
        
        

        <section class="first_row">
            <div class="col-2">
                <h1>Giving <br> "Fresh Products" <br> A Whole New Meaning</h1>
                <p> Freshness is always about consistency. <br> At Verdi, this is what we're all about.
                    <br> Look no further for the best products in Montreal at great prices.
                </p>

                <a href="P2.php" class="first_button" style="padding:10px">
                    Shop Now
                </a>

            </div>
            <div class="col-2">
                <img src="Images/Fruit-Veg-Heart.jpg">
            </div>
        </section>
    </div>

    <section class="second_row">

        <div class="col-1">

            <h1>About Us</h1>
            <p> Based in the heart of Montreal,<br> Verdi is run by a team of Students from Concordia University.<br> <b>Sign up now</b> to receive our newsletter and special discounts.
                <br>
                <a href="P6.php" class="second_button"style="padding:10px">
                    Sign Up 
                </a>
            </p>

        </div>
    </section>

    <footer>
        <div class="container" style="margin:auto">
            <div class="final_row"style="text-align:center">
                <h2 style="text-align:center">Useful Links</h2>
                <ul>
                    <li><a href="http://www.omafra.gov.on.ca/english/crops/facts/10-013w.htm%22%3EAbout"> Bio Products</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Giuseppe_Verdi%22%3EAbout"> Verdi Products</a></li>
                </ul>
            </div>
        </div>
        </footer>


    <script src="verdiJS.js"></script>
</body>

</html>