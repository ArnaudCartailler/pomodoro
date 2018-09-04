 var d = "";
 var time = 5;

 //begin the deduct
 function go() {
   document.getElementById("start").innerHTML = time;
   time --;
   if (time <= 0){
     document.getElementById("over").innerHTML = "Time's up!";
     document.getElementById("start").style.visibility = "hidden";
        return;
   }
    d = setTimeout(go,1000);
 }


//add time
var time = "" ;
$(document).ready(function(){
    $(".plus").on("click", function(){
        document.getElementById("begin").innerHTML = time;
          time++;
    });
});

//supp time
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

//pause
$(document).ready(function(){
  $("#pause").on("click", function(){
    $("#begin").stop();
  });
});
