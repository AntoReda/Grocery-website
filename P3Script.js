function addToCartApple()
{
    var newqty=document.getElementById('appleqty').value;
    localStorage.setItem('appleqty',newqty );
    alert(newqty+" apples added to cart!");
    
    
}
function addToCartBagel()
{
    var newqty=document.getElementById('bagelqty').value;
    localStorage.setItem('bagelqty',newqty );
    alert(newqty+" bagels added to cart!");
    
}
function addToCartBaguette()
{
    var newqty=document.getElementById('baguetteqty').value;
    localStorage.setItem('baguetteqty',newqty );
    alert(newqty+" baguettes added to cart!");
    
}
function addToCartBanana()
{
    var newqty=document.getElementById('bananaqty').value;
    localStorage.setItem('bananaqty',newqty );
    alert(newqty+" bananas added to cart!");
    
}
function addToCartBell()
{
    var newqty=document.getElementById('bellqty').value;
    localStorage.setItem('bellqty',newqty );
    alert(newqty+" bell added to cart!");
    
}
function addToCartButter()
{
    var newqty=document.getElementById('butterqty').value;
    localStorage.setItem('butterqty',newqty );
    alert(newqty+" butter added to cart!");
    
}
function addToCartCarrot()
{
    var newqty=document.getElementById('carrotqty').value;
    localStorage.setItem('carrotqty',newqty );
    alert(newqty+" carrots added to cart!");
    
}
function addToCartBreast()
{
    var newqty=document.getElementById('breastqty').value;
    localStorage.setItem('breastqty',newqty );
    alert(newqty+" chicken breasts added to cart!");
    
}
function addToCartCucumber()
{
    var newqty=document.getElementById('cucumberqty').value;
    localStorage.setItem('cucumberqty',newqty );
    alert(newqty+" cucumbers added to cart!");
    
}
function addToCartEgg()
{
    var newqty=document.getElementById('eggqty').value;
    localStorage.setItem('eggqty',newqty );
    alert(newqty+" eggs added to cart!");
    
}
function addToCartLamb()
{
    var newqty=document.getElementById('lambqty').value;
    localStorage.setItem('lambqty',newqty );
    alert(newqty+" lamb chops added to cart!");
    
}
function addToCartMilk()
{
    var newqty=document.getElementById('milkqty').value;
    localStorage.setItem('milkqty',newqty );
    alert(newqty+" milk packs added to cart!");
    
}
function addToCartOnion()
{
    var newqty=document.getElementById('onionqty').value;
    localStorage.setItem('onionqty',newqty );
    alert(newqty+" onion packs added to cart!");
    
}
function addToCartOranges()
{
    var newqty=document.getElementById('orangesqty').value;
    localStorage.setItem('orangesqty',newqty );
    alert(newqty+" orange packs added to cart!");
    
}
function addToCartPork()
{
    var newqty=document.getElementById('porkqty').value;
    localStorage.setItem('porkqty',newqty );
    alert(newqty+" pork chops added to cart!");
    
}
function addToCartToast()
{
    var newqty=document.getElementById('toastqty').value;
    localStorage.setItem('toastqty',newqty );
    alert(newqty+" toast loafs added to cart!");
    
}
function addToCartSteak()
{
    var newqty=document.getElementById('steakqty').value;
    localStorage.setItem('steakqty',newqty );
    alert(newqty+" steaks added to cart!");
    
}
function addToCartTomato()
{
    var newqty=document.getElementById('tomatoqty').value;
    localStorage.setItem('tomatoqty',newqty );
    alert(newqty+" tomato packs added to cart!");
    
}
function addToCartTort()
{
    var newqty=document.getElementById('tortqty').value;
    localStorage.setItem('tortqty',newqty );
    alert(newqty+" tortilla packs added to cart!");
    
}
function addToCartYog()
{
    var newqty=document.getElementById('yogqty').value;
    localStorage.setItem('yogqty',newqty );
    alert(newqty+" yogourt packs added to cart!");
    
}

window.onload=function()
{
    if (document.getElementById("appleqty")!=null)
    document.getElementById("appleqty").value=localStorage.getItem('appleqty');
    if (document.getElementById("bagelqty")!=null)
    document.getElementById("bagelqty").value=localStorage.getItem('bagelqty');
    if (document.getElementById("baguetteqty")!=null)
    document.getElementById("baguetteqty").value=localStorage.getItem('baguetteqty');
    if (document.getElementById("bananaqty")!=null)
    document.getElementById("bananaqty").value=localStorage.getItem('bananaqty');
    if (document.getElementById("bellqty")!=null)
    document.getElementById("bellqty").value=localStorage.getItem('bellqty');
    if (document.getElementById("butterqty")!=null)
    document.getElementById("butterqty").value=localStorage.getItem('butterqty');
    if (document.getElementById("carrotqty")!=null)
    document.getElementById("carrotqty").value=localStorage.getItem('carrotqty');
    if (document.getElementById("breastqty")!=null)
    document.getElementById("breastqty").value=localStorage.getItem('breastqty');
    if (document.getElementById("cucumberqty")!=null)
    document.getElementById("cucumberqty").value=localStorage.getItem('cucumberqty');
    if (document.getElementById("eggqty")!=null)
    document.getElementById("eggqty").value=localStorage.getItem('eggqty');
    if (document.getElementById("lambqty")!=null)
    document.getElementById("lambqty").value=localStorage.getItem('lambqty');
    if (document.getElementById("milkqty")!=null)
    document.getElementById("milkqty").value=localStorage.getItem('milkqty');
    if (document.getElementById("onionqty")!=null)
    document.getElementById("onionqty").value=localStorage.getItem('onionqty');
    if (document.getElementById("orangesqty")!=null)
    document.getElementById("orangesqty").value=localStorage.getItem('orangesqty');
    if (document.getElementById("porkqty")!=null)
    document.getElementById("porkqty").value=localStorage.getItem('porkqty');
    if (document.getElementById("toastqty")!=null)
    document.getElementById("toastqty").value=localStorage.getItem('toastqty');
    if (document.getElementById("steakqty")!=null)
    document.getElementById("steakqty").value=localStorage.getItem('steakqty');
    if (document.getElementById("tomatoqty")!=null)
    document.getElementById("tomatoqty").value=localStorage.getItem('tomatoqty');
    if (document.getElementById("tortqty")!=null)
    document.getElementById("tortqty").value=localStorage.getItem('tortqty');
    if (document.getElementById("yogqty")!=null)
    document.getElementById("yogqty").value=localStorage.getItem('yogqty');
}

function ShowAndHide() 
{
            var x = document.getElementById("fun_fact");
            if (x.style.display == 'none') 
            {
                x.style.display = 'block';
            } else {
            x.style.display = 'none';
            }
}
function errorPopUp()
{
    alert("Incorrect username or password. Try again.");
}