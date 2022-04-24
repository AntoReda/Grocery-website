var finalTotal=0;
var tot=finalTotal;
    localStorage.setItem('totalmem',tot)
    var tot_serialized=JSON.stringify(tot);
    localStorage.getItem('totalmem',tot_serialized );
    var tot_deserialized=JSON.parse(tot_serialized);
    localStorage.setItem('totalmem', tot_deserialized); 

 function deleteApple()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('appleqty', 0)
 }
 function deleteBagel()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('bagelqty', 0)
 }
 function deleteBaguette()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('baguetteqty', 0)
 }
 function deleteBanana()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('bananaqty', 0)
 }
 function deleteBell()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('bellqty', 0)
 }
 function deleteBreast()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('breastqty', 0)
 }
 function deleteButter()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('butterqty', 0)
 }
 function deleteCarrot()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('carrotqty', 0)
 }
 function deleteCucumber()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('cucumberqty', 0)
 }
 function deleteEgg()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('eggqty', 0)
 }
 function deleteLamb()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('lambqty', 0)
 }
 function deleteMilk()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('milkqty', 0)
 }
 function deleteOnion()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('onionqty', 0)
 }
 function deleteOranges()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('orangesqty', 0)
 }
 function deletePork()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('porkqty', 0)
 }
 function deleteToast()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('toastqty', 0)
 }
 function deleteSteak()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('steakqty', 0)
 }
 function deleteTomato()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('tomatoqty', 0)
 }
 function deleteTort()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('tortqty', 0)
 }
 function deleteYog()
 {
    event.target.parentElement.parentElement.remove();
    localStorage.setItem('yogqty', 0)
 }
 function updateCartTotal()
 {
     var totalarr=[];

     if (document.getElementById("appleTotalPrice")!=null)
     totalarr[0]=document.getElementById("appleTotalPrice").innerHTML;

     if (document.getElementById("bagelTotalPrice")!=null)
     totalarr[1]=document.getElementById("bagelTotalPrice").innerHTML;

     if (document.getElementById("baguetteTotalPrice")!=null)
     totalarr[2]=document.getElementById("baguetteTotalPrice").innerHTML;

     if (document.getElementById("bananaTotalPrice")!=null)
     totalarr[3]=document.getElementById("bananaTotalPrice").innerHTML;

     if (document.getElementById("bellTotalPrice")!=null)
     totalarr[4]=document.getElementById("bellTotalPrice").innerHTML;

     if (document.getElementById("butterTotalPrice")!=null)
     totalarr[5]=document.getElementById("butterTotalPrice").innerHTML;

     if (document.getElementById("carrotTotalPrice")!=null)
     totalarr[6]=document.getElementById("carrotTotalPrice").innerHTML;

     if (document.getElementById("breastTotalPrice")!=null)
     totalarr[7]=document.getElementById("breastTotalPrice").innerHTML;

     if (document.getElementById("cucumberTotalPrice")!=null)
     totalarr[8]=document.getElementById("cucumberTotalPrice").innerHTML;

     if (document.getElementById("eggTotalPrice")!=null)
     totalarr[9]=document.getElementById("eggTotalPrice").innerHTML;

     if (document.getElementById("lambTotalPrice")!=null)
     totalarr[10]=document.getElementById("lambTotalPrice").innerHTML;

     if (document.getElementById("milkTotalPrice")!=null)
     totalarr[11]=document.getElementById("milkTotalPrice").innerHTML;

     if (document.getElementById("onionTotalPrice")!=null)
     totalarr[12]=document.getElementById("onionTotalPrice").innerHTML;

     if (document.getElementById("orangesTotalPrice")!=null)
     totalarr[13]=document.getElementById("orangesTotalPrice").innerHTML;

     if (document.getElementById("porkTotalPrice")!=null)
     totalarr[14]=document.getElementById("porkTotalPrice").innerHTML;

     if (document.getElementById("toastTotalPrice")!=null)
     totalarr[15]=document.getElementById("toastTotalPrice").innerHTML;

    if (document.getElementById("steakTotalPrice")!=null)
     totalarr[16]=document.getElementById("steakTotalPrice").innerHTML;

     if (document.getElementById("tomatoTotalPrice")!=null)
     totalarr[17]=document.getElementById("tomatoTotalPrice").innerHTML;

     if (document.getElementById("tortTotalPrice")!=null)
     totalarr[18]=document.getElementById("tortTotalPrice").innerHTML;

     if (document.getElementById("yogTotalPrice")!=null)
     totalarr[19]=document.getElementById("yogTotalPrice").innerHTML;

     var total=0;
     for (var i=0; i<21; i++)
    {
        if(totalarr[i]!=null)
        total+=Number(totalarr[i]);
    }
     
        document.getElementById("total").innerHTML=parseFloat(total).toFixed(2);
        document.getElementById("qst").innerHTML=parseFloat((total*9.975)/100).toFixed(2);
        document.getElementById("gst").innerHTML=parseFloat((total*5)/100).toFixed(2);
        var qst=document.getElementById("qst").innerHTML;
        var gst=document.getElementById("gst").innerHTML;
        document.getElementById("finalTotal").innerHTML=parseFloat(Number(total)+Number(gst)+Number(qst)).toFixed(2);
 }
function addApple() 
{
    document.getElementById('appleData').stepUp();


    var qty=document.getElementById('appleData').value;
    localStorage.setItem('appleqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('appleqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('appleqty', qty_deserialized); 

    var input=document.getElementById("applePrice").innerHTML; 
    document.getElementById("appleTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);

    if(qty_deserialized==2)
    {
        finalTotal+=Number(input);
    }
    var input=document.getElementById('applePrice').innerHTML;
    finalTotal+=Number(input);
    //when we refresh, finalTotal always goes back to 0 so we need to keep that number after a refresh
    var keeper=finalTotal;
    localStorage.setItem('totalmem', keeper);
 }
 function removeApple() 
{
    document.getElementById('appleData').stepDown();
    var qty=document.getElementById('appleData').value;
    localStorage.setItem('appleqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('appleqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('appleqty', qty_deserialized); 

    var input=document.getElementById("applePrice").innerHTML;
    document.getElementById("appleTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);

    var input=document.getElementById('applePrice').innerHTML;
    if(finalTotal>1.45)
    {
         finalTotal-=parseFloat(Number(input)).toFixed(2);
    }
    localStorage.setItem('totalmem', finalTotal);

 }
 function addBaguette() 
{
    document.getElementById('baguetteData').stepUp();

    var qty=document.getElementById('baguetteData').value;
    localStorage.setItem('baguetteqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('baguetteqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('baguetteqty', qty_deserialized); 

    var input=document.getElementById("baguettePrice").innerHTML;
    document.getElementById("baguetteTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function removeBaguette() 
{
    document.getElementById('baguetteData').stepDown();

    var qty=document.getElementById('baguetteData').value;
    localStorage.setItem('baguetteqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('baguetteqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('baguetteqty', qty_deserialized); 

    var input=document.getElementById("baguettePrice").innerHTML;
    document.getElementById("baguetteTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function addBagel() 
{
    document.getElementById('bagelData').stepUp();

    var qty=document.getElementById('bagelData').value;
    localStorage.setItem('bagelqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('bagelqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('bagelqty', qty_deserialized); 

    var input=document.getElementById("bagelPrice").innerHTML;
    document.getElementById("bagelTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function removeBagel() 
{
    document.getElementById('bagelData').stepDown();

    var qty=document.getElementById('bagelData').value;
    localStorage.setItem('bagelqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('bagelqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('bagelqty', qty_deserialized); 

    var input=document.getElementById("bagelPrice").innerHTML;
    document.getElementById("bagelTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function addBanana() 
{
    document.getElementById('bananaData').stepUp();

    var qty=document.getElementById('bananaData').value;
    localStorage.setItem('bananaqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('bananaqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('bananaqty', qty_deserialized); 

    var input=document.getElementById("bananaPrice").innerHTML;
    document.getElementById("bananaTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function removeBanana() 
{
    document.getElementById('bananaData').stepDown();

    var qty=document.getElementById('bananaData').value;
    localStorage.setItem('bananaqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('bananaqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('bananaqty', qty_deserialized); 

    var input=document.getElementById("bananaPrice").innerHTML;
    document.getElementById("bananaTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function addBell() 
{
    document.getElementById('bellData').stepUp();

    var qty=document.getElementById('bellData').value;
    localStorage.setItem('bellqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('bellqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('bellqty', qty_deserialized); 

    var input=document.getElementById("bellPrice").innerHTML;
    document.getElementById("bellTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function removeBell() 
{
    document.getElementById('bellData').stepDown();

    var qty=document.getElementById('bellData').value;
    localStorage.setItem('bellqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('bellqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('bellqty', qty_deserialized); 

    var input=document.getElementById("bellPrice").innerHTML;
    document.getElementById("bellTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function addButter() 
{
    document.getElementById('butterData').stepUp();

    var qty=document.getElementById('butterData').value;
    localStorage.setItem('butterqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('butterqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('butterqty', qty_deserialized); 

    var input=document.getElementById("butterPrice").innerHTML;
    document.getElementById("butterTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function removeButter() 
{
    document.getElementById('butterData').stepDown();

    var qty=document.getElementById('butterData').value;
    localStorage.setItem('butterqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('butterqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('butterqty', qty_deserialized); 

    var input=document.getElementById("butterPrice").innerHTML;
    document.getElementById("butterTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function addCarrot() 
{
    document.getElementById('carrotData').stepUp();

    var qty=document.getElementById('carrotData').value;
    localStorage.setItem('carrotqty',qty)
    var qty_serialized=JSON.stringify(qty);
    localStorage.getItem('carrotqty',qty_serialized );
    var qty_deserialized=JSON.parse(qty_serialized);
    localStorage.setItem('carrotqty', qty_deserialized); 

    var input=document.getElementById("carrotPrice").innerHTML;
    document.getElementById("carrotTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
 }
 function removeCarrot() 
 {
     document.getElementById('carrotData').stepDown();
 
     var qty=document.getElementById('carrotData').value;
     localStorage.setItem('carrotqty',qty)
     var qty_serialized=JSON.stringify(qty);
     localStorage.getItem('carrotqty',qty_serialized );
     var qty_deserialized=JSON.parse(qty_serialized);
     localStorage.setItem('carrotqty', qty_deserialized); 
 
     var input=document.getElementById("carrotPrice").innerHTML;
     document.getElementById("carrotTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
  }
  function addBreast() 
  {
      document.getElementById('breastData').stepUp();
  
      var qty=document.getElementById('breastData').value;
      localStorage.setItem('breastqty',qty)
      var qty_serialized=JSON.stringify(qty);
      localStorage.getItem('breastqty',qty_serialized );
      var qty_deserialized=JSON.parse(qty_serialized);
      localStorage.setItem('breastqty', qty_deserialized); 
  
      var input=document.getElementById("breastPrice").innerHTML;
      document.getElementById("breastTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
   }
   function removeBreast() 
   {
       document.getElementById('breastData').stepDown();
   
       var qty=document.getElementById('breastData').value;
       localStorage.setItem('breastqty',qty)
       var qty_serialized=JSON.stringify(qty);
       localStorage.getItem('breastqty',qty_serialized );
       var qty_deserialized=JSON.parse(qty_serialized);
       localStorage.setItem('breastqty', qty_deserialized); 
   
       var input=document.getElementById("breastPrice").innerHTML;
       document.getElementById("breastTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
    }
    function addCucumber() 
    {
        document.getElementById('cucumberData').stepUp();
    
        var qty=document.getElementById('cucumberData').value;
        localStorage.setItem('cucumberqty',qty)
        var qty_serialized=JSON.stringify(qty);
        localStorage.getItem('cucumberqty',qty_serialized );
        var qty_deserialized=JSON.parse(qty_serialized);
        localStorage.setItem('cucumberqty', qty_deserialized); 
    
        var input=document.getElementById("cucumberPrice").innerHTML;
        document.getElementById("cucumberTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
     }
     function removeCucumber() 
    {
        document.getElementById('cucumberData').stepDown();
    
        var qty=document.getElementById('cucumberData').value;
        localStorage.setItem('cucumberqty',qty)
        var qty_serialized=JSON.stringify(qty);
        localStorage.getItem('cucumberqty',qty_serialized );
        var qty_deserialized=JSON.parse(qty_serialized);
        localStorage.setItem('cucumberqty', qty_deserialized); 
    
        var input=document.getElementById("cucumberPrice").innerHTML;
        document.getElementById("cucumberTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
     }
     function addEgg() 
     {
         document.getElementById('eggData').stepUp();
     
         var qty=document.getElementById('eggData').value;
         localStorage.setItem('eggqty',qty)
         var qty_serialized=JSON.stringify(qty);
         localStorage.getItem('eggqty',qty_serialized );
         var qty_deserialized=JSON.parse(qty_serialized);
         localStorage.setItem('eggqty', qty_deserialized); 
     
         var input=document.getElementById("eggPrice").innerHTML;
         document.getElementById("eggTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
      }
      function removeEgg() 
     {
         document.getElementById('eggData').stepDown();
     
         var qty=document.getElementById('eggData').value;
         localStorage.setItem('eggqty',qty)
         var qty_serialized=JSON.stringify(qty);
         localStorage.getItem('eggqty',qty_serialized );
         var qty_deserialized=JSON.parse(qty_serialized);
         localStorage.setItem('eggqty', qty_deserialized); 
     
         var input=document.getElementById("eggPrice").innerHTML;
         document.getElementById("eggTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
      }
      function addLamb() 
     {
         document.getElementById('lambData').stepUp();
     
         var qty=document.getElementById('lambData').value;
         localStorage.setItem('lambqty',qty)
         var qty_serialized=JSON.stringify(qty);
         localStorage.getItem('lambqty',qty_serialized );
         var qty_deserialized=JSON.parse(qty_serialized);
         localStorage.setItem('lambqty', qty_deserialized); 
     
         var input=document.getElementById("lambPrice").innerHTML;
         document.getElementById("lambTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
      }
      function removeLamb() 
     {
         document.getElementById('lambData').stepDown();
     
         var qty=document.getElementById('lambData').value;
         localStorage.setItem('lambqty',qty)
         var qty_serialized=JSON.stringify(qty);
         localStorage.getItem('lambqty',qty_serialized );
         var qty_deserialized=JSON.parse(qty_serialized);
         localStorage.setItem('lambqty', qty_deserialized); 
     
         var input=document.getElementById("lambPrice").innerHTML;
         document.getElementById("lambTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
      }
      function addMilk() 
     {
         document.getElementById('milkData').stepUp();
     
         var qty=document.getElementById('milkData').value;
         localStorage.setItem('milkqty',qty)
         var qty_serialized=JSON.stringify(qty);
         localStorage.getItem('milkqty',qty_serialized );
         var qty_deserialized=JSON.parse(qty_serialized);
         localStorage.setItem('milkqty', qty_deserialized); 
     
         var input=document.getElementById("milkPrice").innerHTML;
         document.getElementById("milkTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
      }
      function removeMilk() 
     {
         document.getElementById('milkData').stepDown();
     
         var qty=document.getElementById('milkData').value;
         localStorage.setItem('milkqty',qty)
         var qty_serialized=JSON.stringify(qty);
         localStorage.getItem('milkqty',qty_serialized );
         var qty_deserialized=JSON.parse(qty_serialized);
         localStorage.setItem('milkqty', qty_deserialized); 
     
         var input=document.getElementById("milkPrice").innerHTML;
         document.getElementById("milkTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
      }
      function addOnion() 
      {
          document.getElementById('onionData').stepUp();
      
          var qty=document.getElementById('onionData').value;
          localStorage.setItem('onionqty',qty)
          var qty_serialized=JSON.stringify(qty);
          localStorage.getItem('onionqty',qty_serialized );
          var qty_deserialized=JSON.parse(qty_serialized);
          localStorage.setItem('onionqty', qty_deserialized); 
      
          var input=document.getElementById("onionPrice").innerHTML;
          document.getElementById("onionTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
       }
       function removeOnion() 
      {
          document.getElementById('onionData').stepDown();
      
          var qty=document.getElementById('onionData').value;
          localStorage.setItem('onionqty',qty)
          var qty_serialized=JSON.stringify(qty);
          localStorage.getItem('onionqty',qty_serialized );
          var qty_deserialized=JSON.parse(qty_serialized);
          localStorage.setItem('onionqty', qty_deserialized); 
      
          var input=document.getElementById("onionPrice").innerHTML;
          document.getElementById("onionTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
       }
       function addOranges() 
       {
           document.getElementById('orangesData').stepUp();
       
           var qty=document.getElementById('orangesData').value;
           localStorage.setItem('orangesqty',qty)
           var qty_serialized=JSON.stringify(qty);
           localStorage.getItem('orangesqty',qty_serialized );
           var qty_deserialized=JSON.parse(qty_serialized);
           localStorage.setItem('orangesqty', qty_deserialized); 
       
           var input=document.getElementById("orangesPrice").innerHTML;
           document.getElementById("orangesTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
        }
        function removeOranges() 
       {
           document.getElementById('orangesData').stepDown();
       
           var qty=document.getElementById('orangesData').value;
           localStorage.setItem('orangesqty',qty)
           var qty_serialized=JSON.stringify(qty);
           localStorage.getItem('orangesqty',qty_serialized );
           var qty_deserialized=JSON.parse(qty_serialized);
           localStorage.setItem('orangesqty', qty_deserialized); 
       
           var input=document.getElementById("orangesPrice").innerHTML;
           document.getElementById("orangesTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
        }
        function addPork() 
       {
           document.getElementById('porkData').stepUp();
       
           var qty=document.getElementById('porkData').value;
           localStorage.setItem('porkqty',qty)
           var qty_serialized=JSON.stringify(qty);
           localStorage.getItem('porkqty',qty_serialized );
           var qty_deserialized=JSON.parse(qty_serialized);
           localStorage.setItem('porkqty', qty_deserialized); 
       
           var input=document.getElementById("porkPrice").innerHTML;
           document.getElementById("porkTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
        }
        function removePork() 
        {
            document.getElementById('porkData').stepDown();
        
            var qty=document.getElementById('porkData').value;
            localStorage.setItem('porkqty',qty)
            var qty_serialized=JSON.stringify(qty);
            localStorage.getItem('porkqty',qty_serialized );
            var qty_deserialized=JSON.parse(qty_serialized);
            localStorage.setItem('porkqty', qty_deserialized); 
        
            var input=document.getElementById("porkPrice").innerHTML;
            document.getElementById("porkTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
         }
         function addToast() 
       {
           document.getElementById('toastData').stepUp();
       
           var qty=document.getElementById('toastData').value;
           localStorage.setItem('toastqty',qty)
           var qty_serialized=JSON.stringify(qty);
           localStorage.getItem('toastqty',qty_serialized );
           var qty_deserialized=JSON.parse(qty_serialized);
           localStorage.setItem('toastqty', qty_deserialized); 
       
           var input=document.getElementById("toastPrice").innerHTML;
           document.getElementById("toastTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
        }
        function removeToast() 
       {
           document.getElementById('toastData').stepDown();
       
           var qty=document.getElementById('toastData').value;
           localStorage.setItem('toastqty',qty)
           var qty_serialized=JSON.stringify(qty);
           localStorage.getItem('toastqty',qty_serialized );
           var qty_deserialized=JSON.parse(qty_serialized);
           localStorage.setItem('toastqty', qty_deserialized); 
       
           var input=document.getElementById("toastPrice").innerHTML;
           document.getElementById("toastTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
        }
        function addSteak() 
        {
            document.getElementById('steakData').stepUp();
        
            var qty=document.getElementById('steakData').value;
            localStorage.setItem('steakqty',qty)
            var qty_serialized=JSON.stringify(qty);
            localStorage.getItem('steakqty',qty_serialized );
            var qty_deserialized=JSON.parse(qty_serialized);
            localStorage.setItem('steakqty', qty_deserialized); 
        
            var input=document.getElementById("steakPrice").innerHTML;
            document.getElementById("steakTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
         }
         function removeSteak() 
        {
            document.getElementById('steakData').stepDown();
        
            var qty=document.getElementById('steakData').value;
            localStorage.setItem('steakqty',qty)
            var qty_serialized=JSON.stringify(qty);
            localStorage.getItem('steakqty',qty_serialized );
            var qty_deserialized=JSON.parse(qty_serialized);
            localStorage.setItem('steakqty', qty_deserialized); 
        
            var input=document.getElementById("steakPrice").innerHTML;
            document.getElementById("steakTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
         }
         function addTomato() 
        {
            document.getElementById('tomatoData').stepUp();
        
            var qty=document.getElementById('tomatoData').value;
            localStorage.setItem('tomatoqty',qty)
            var qty_serialized=JSON.stringify(qty);
            localStorage.getItem('tomatoqty',qty_serialized );
            var qty_deserialized=JSON.parse(qty_serialized);
            localStorage.setItem('tomatoqty', qty_deserialized); 
        
            var input=document.getElementById("tomatoPrice").innerHTML;
            document.getElementById("tomatoTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
         }
         function removeTomato() 
         {
             document.getElementById('tomatoData').stepDown();
         
             var qty=document.getElementById('tomatoData').value;
             localStorage.setItem('tomatoqty',qty)
             var qty_serialized=JSON.stringify(qty);
             localStorage.getItem('tomatoqty',qty_serialized );
             var qty_deserialized=JSON.parse(qty_serialized);
             localStorage.setItem('tomatoqty', qty_deserialized); 
         
             var input=document.getElementById("tomatoPrice").innerHTML;
             document.getElementById("tomatoTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
          }
          function addTort() 
          {
              document.getElementById('tortData').stepUp();
          
              var qty=document.getElementById('tortData').value;
              localStorage.setItem('tortqty',qty)
              var qty_serialized=JSON.stringify(qty);
              localStorage.getItem('tortqty',qty_serialized );
              var qty_deserialized=JSON.parse(qty_serialized);
              localStorage.setItem('tortqty', qty_deserialized); 
          
              var input=document.getElementById("tortPrice").innerHTML;
              document.getElementById("tortTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
           }

           function removeTort() 
           {
               document.getElementById('tortData').stepDown();
           
               var qty=document.getElementById('tortData').value;
               localStorage.setItem('tortqty',qty)
               var qty_serialized=JSON.stringify(qty);
               localStorage.getItem('tortqy',qty_serialized );
               var qty_deserialized=JSON.parse(qty_serialized);
               localStorage.setItem('tortqty', qty_deserialized); 
           
               var input=document.getElementById("tortPrice").innerHTML;
               document.getElementById("tortTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
            }

            function addYog() 
          {
              document.getElementById('yogData').stepUp();
          
              var qty=document.getElementById('yogData').value;
              localStorage.setItem('yogqty',qty)
              var qty_serialized=JSON.stringify(qty);
              localStorage.getItem('yogqty',qty_serialized );
              var qty_deserialized=JSON.parse(qty_serialized);
              localStorage.setItem('yogqty', qty_deserialized); 
          
              var input=document.getElementById("yogPrice").innerHTML;
              document.getElementById("yogTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
           }
           function removeYog() 
          {
              document.getElementById('yogData').stepDown();
          
              var qty=document.getElementById('yogData').value;
              localStorage.setItem('yogqty',qty)
              var qty_serialized=JSON.stringify(qty);
              localStorage.getItem('yogqty',qty_serialized );
              var qty_deserialized=JSON.parse(qty_serialized);
              localStorage.setItem('yogqty', qty_deserialized); 
          
              var input=document.getElementById("yogPrice").innerHTML;
              document.getElementById("yogTotalPrice").innerHTML=parseFloat(input*qty_deserialized).toFixed(2);
           }


    window.onload=function()
 {
     if(localStorage.getItem('appleqty')>0)
     document.getElementById('apple').className = "visible";
     if(localStorage.getItem('bagelqty')>0)
     document.getElementById('bagel').className = "visible";
     if(localStorage.getItem('baguetteqty')>0)
     document.getElementById('baguette').className = "visible";
     if(localStorage.getItem('bananaqty')>0)
     document.getElementById('banana').className = "visible";
     if(localStorage.getItem('tortqty')>0)
     document.getElementById('tort').className = "visible";
     if(localStorage.getItem('yogqty')>0)
     document.getElementById('yog').className = "visible";
     if(localStorage.getItem('bellqty')>0)
     document.getElementById('bell').className = "visible";
     if(localStorage.getItem('butterqty')>0)
     document.getElementById('butter').className = "visible";
     if(localStorage.getItem('carrotqty')>0)
     document.getElementById('carrot').className = "visible";
     if(localStorage.getItem('breastqty')>0)
     document.getElementById('breast').className = "visible";
     if(localStorage.getItem('cucumberqty')>0)
     document.getElementById('cucumber').className = "visible";
     if(localStorage.getItem('eggqty')>0)
     document.getElementById('egg').className = "visible";
     if(localStorage.getItem('lambqty')>0)
     document.getElementById('lamb').className = "visible";
     if(localStorage.getItem('milkqty')>0)
     document.getElementById('milk').className = "visible";
     if(localStorage.getItem('onionqty')>0)
     document.getElementById('onion').className = "visible";
     if(localStorage.getItem('orangesqty')>0)
     document.getElementById('oranges').className = "visible";
     if(localStorage.getItem('porkqty')>0)
     document.getElementById('pork').className = "visible";
     if(localStorage.getItem('toastqty')>0)
     document.getElementById('toast').className = "visible";
     if(localStorage.getItem('steakqty')>0)
     document.getElementById('steak').className = "visible";
     if(localStorage.getItem('tomatoqty')>0)
     document.getElementById('tomato').className = "visible";



    var appleqty=localStorage.getItem('appleqty');
    document.getElementById('appleData').value=appleqty;
    document.getElementById("appleTotalPrice").innerHTML=parseFloat(appleqty*document.getElementById("applePrice").innerHTML).toFixed(2);

     var baguetteqty=localStorage.getItem('baguetteqty');
     document.getElementById('baguetteData').value=baguetteqty;
     document.getElementById("baguetteTotalPrice").innerHTML=parseFloat(baguetteqty*document.getElementById("baguettePrice").innerHTML).toFixed(2);

     var bagelqty=localStorage.getItem('bagelqty');
     document.getElementById('bagelData').value=bagelqty;
     document.getElementById("bagelTotalPrice").innerHTML=parseFloat(bagelqty*document.getElementById("bagelPrice").innerHTML).toFixed(2);

     var bananaqty=localStorage.getItem('bananaqty');
     document.getElementById('bananaData').value=bananaqty;
     document.getElementById("bananaTotalPrice").innerHTML=parseFloat(bananaqty*document.getElementById("bananaPrice").innerHTML).toFixed(2);

     var bellqty=localStorage.getItem('bellqty');
     document.getElementById('bellData').value=bellqty;
     document.getElementById("bellTotalPrice").innerHTML=parseFloat(bellqty*document.getElementById("bellPrice").innerHTML).toFixed(2);

     var butterqty=localStorage.getItem('butterqty');
     document.getElementById('butterData').value=butterqty;
     document.getElementById("butterTotalPrice").innerHTML=parseFloat(butterqty*document.getElementById("butterPrice").innerHTML).toFixed(2);

     var carrotqty=localStorage.getItem('carrotqty');
     document.getElementById('carrotData').value=carrotqty;
     document.getElementById("carrotTotalPrice").innerHTML=parseFloat(carrotqty*document.getElementById("carrotPrice").innerHTML).toFixed(2);

     var breastqty=localStorage.getItem('breastqty');
     document.getElementById('breastData').value=breastqty;
     document.getElementById("breastTotalPrice").innerHTML=parseFloat(breastqty*document.getElementById("breastPrice").innerHTML).toFixed(2);

     var cucumberqty=localStorage.getItem('cucumberqty');
     document.getElementById('cucumberData').value=cucumberqty;
     document.getElementById("cucumberTotalPrice").innerHTML=parseFloat(cucumberqty*document.getElementById("cucumberPrice").innerHTML).toFixed(2);

     var eggqty=localStorage.getItem('eggqty');
     document.getElementById('eggData').value=eggqty;
     document.getElementById("eggTotalPrice").innerHTML=parseFloat(eggqty*document.getElementById("eggPrice").innerHTML).toFixed(2);

     var lambqty=localStorage.getItem('lambqty');
     document.getElementById('lambData').value=lambqty;
     document.getElementById("lambTotalPrice").innerHTML=parseFloat(lambqty*document.getElementById("lambPrice").innerHTML).toFixed(2);

     var milkqty=localStorage.getItem('milkqty');
     document.getElementById('milkData').value=milkqty;
     document.getElementById("milkTotalPrice").innerHTML=parseFloat(milkqty*document.getElementById("milkPrice").innerHTML).toFixed(2);

     var onionqty=localStorage.getItem('onionqty');
     document.getElementById('onionData').value=onionqty;
     document.getElementById("onionTotalPrice").innerHTML=parseFloat(onionqty*document.getElementById("onionPrice").innerHTML).toFixed(2);

     var orangesqty=localStorage.getItem('orangesqty');
     document.getElementById('orangesData').value=orangesqty;
     document.getElementById("orangesTotalPrice").innerHTML=parseFloat(orangesqty*document.getElementById("orangesPrice").innerHTML).toFixed(2);

     var porkqty=localStorage.getItem('porkqty');
     document.getElementById('porkData').value=porkqty;
     document.getElementById("porkTotalPrice").innerHTML=parseFloat(porkqty*document.getElementById("porkPrice").innerHTML).toFixed(2);

     var toastqty=localStorage.getItem('toastqty');
     document.getElementById('toastData').value=toastqty;
     document.getElementById("toastTotalPrice").innerHTML=parseFloat(toastqty*document.getElementById("toastPrice").innerHTML).toFixed(2);

     var steakqty=localStorage.getItem('steakqty');
     document.getElementById('steakData').value=steakqty;
     document.getElementById("steakTotalPrice").innerHTML=parseFloat(steakqty*document.getElementById("steakPrice").innerHTML).toFixed(2);

     var tomatoqty=localStorage.getItem('tomatoqty');
     document.getElementById('tomatoData').value=tomatoqty;
     document.getElementById("tomatoTotalPrice").innerHTML=parseFloat(tomatoqty*document.getElementById("tomatoPrice").innerHTML).toFixed(2);

     var tortqty=localStorage.getItem('tortqty');
     document.getElementById('tortData').value=tortqty;
     document.getElementById("tortTotalPrice").innerHTML=parseFloat(tortqty*document.getElementById("tortPrice").innerHTML).toFixed(2);

     var yogqty=localStorage.getItem('yogqty');
     document.getElementById('yogData').value=yogqty;
     document.getElementById("yogTotalPrice").innerHTML=parseFloat(yogqty*document.getElementById("yogPrice").innerHTML).toFixed(2);
 }
 
function checkoutMessage()
{
    alert("Thank you for shopping at Verdi !\nEnjoy your fresh order!");
}
function orderPlaced()
{
    alert("Order has been placed!");
}
function clear()
{
   
}