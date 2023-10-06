
   
      var countDown = new Date("oct 23, 2023 00:00:00").getTime();
     
      
      var update = setInterval(function () {
     
         
         var now = new Date().getTime();
       
         
         var diff = countDown - now;
       
         
         var days = Math.floor(diff / (1000 * 60 * 60 * 24));
         var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000* 60));
         var seconds = Math.floor((diff % (1000 * 60)) / 1000);
       
        
         document.getElementById("time").innerHTML = 
         days +"\D  "  + hrs +"\H " + minutes + "\M " + seconds + 
          "S " + " \n\n.......to go";
         if (diff < 0) {
            clearInterval(update);
            document.getElementById("time").innerHTML = " HAPPY BIRTHDAY LOVE ";
         }
      }, 1000);
