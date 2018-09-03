




 var d = "";
 var time = 5;
 function go() {
   document.getElementById("start").innerHTML = time;
   time --;
   if (time <= 0){
     alert("Time's up !");
        return;
   }
    d = setTimeout(go,1000);
 }

var time = "" ;
$(document).ready(function(){
    $(".plus").on("click", function(){
        document.getElementById("begin").innerHTML = time;
          time++;
    });
});

$(document).ready(function(){
    $(".minus").on("click", function(){
        document.getElementById("begin").innerHTML = time2;
          time2--;
    });
});

var time3 = 3;
$(document).ready(function(){
    $(".plus1").on("click", function(){
        document.getElementById("time1").innerHTML = time3;
          time3++;
    });
});

$(document).ready(function(){
    $(".minus1").on("click", function(){
        document.getElementById("time1").innerHTML = time3;
          time3--;
    });
});
