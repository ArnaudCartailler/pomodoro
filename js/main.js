

var Tbegin = "";
document.getElementById("begin").innerHTML = Tbegin;




 var d = "";
 var time = "5";
 function go() {
   document.getElementById("start").innerHTML = time;
   time --;
   if (time <= 0){
     alert("Time's up !");
        return;
   }
    d = setTimeout(go,1000);
 }
