var i=1;
   
$(".dere").click(function(){
     if(i==3){
        i=0;
    }
   i++;
    $("#radio"+i).prop("checked", true); 
});

$(".izq").click(function(){
    i--;
    if(i==0){
        i=3;
    }
     $("#radio"+i).prop("checked", true);    
});

function auto(){
    i++;
    console.log(i);
    $("#radio"+i).prop("checked", true); 
    if(i==3){
        i=0;
    };
};
var timer =setInterval(auto, 4000);

$(".dere").click(function(){
   clearInterval(timer); 
});
$(".izq").click(function(){
   clearInterval(timer); 
});
$("label").click(function(){
   clearInterval(timer); 
});
