$(".list-mobile").click(function(){
   //alert("funciona");
       var ulmobile = $(".ul-mobile");
        
        if(ulmobile.css('display')=='none'){
            ulmobile.fadeIn(); 
        }else{
            ulmobile.fadeOut();
        }
});

  $(".li-mobile").mouseover(function(){
       $(this).css("background", "#FFCB00");
       $(this).css("color", "black"); 
    });
    $(".li-mobile").mouseout(function(){
       $(this).css("background", "black");
       $(this).css("color", "white"); 
    });
