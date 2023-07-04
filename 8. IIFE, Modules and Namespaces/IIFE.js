(function(){
    console.log("this is IIFE");   
   })();
   
   (myfun = function(num = 5){
       console.log("the number is "+num);
   })();
   
   myfun(10);
   
   let num = 10
   
   {
       let num = 20
       console.log("num in block is " + num)
   }
   
   console.log("num outside block is "+ num)