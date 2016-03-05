$(document).ready(function() {

// Set course length
  
var track = prompt("Choose your Course, SHORT, MEDIUM, LONG").toUpperCase();
var soundWin = new Audio("audio/cheer.mp3");

// if(track >= 30){
//     track = 30;
// }else if(track <= 10){
//   track = 10;
// }
function trackLength(){

  if(track === "SHORT"){
    track = 10;
  }
  else if( track === "MEDIUM"){
    track = 20;
  }
  else if( track === "LONG"){
    track = 35;
  }
  else{location.reload()};

   for (var i = 1;  i < track; i++){
        $("#player1_strip").append("<td>");
        $("#player2_strip").append("<td>");
    }; 
}

trackLength(); 

// Add timer clock
var time = 0;
var running = false;

function start(){
  // running === false
    running = true;
    increment();   
}

function stop(){
   running = false;
}

function increment(){
  if(running === true){
    setTimeout(function(){

      time++;

      var mins = Math.floor(time/10/60);
      var sec = Math.floor(time/10);
      var tenths = time % 10;

      if(mins < 10){
        mins = "0" + mins;
      }

      if(sec < 10){
        sec = "0" + sec;
      }

      document.getElementById("output").innerHTML = mins + " : " + sec + " : " + "0" + tenths;

      increment();

    }, 100);
  }
}


 // update players position.

      $(document).on('keyup', function(key) {
        var key = key.which;
        
        if (key === 81) { 
          $("#player1_strip td.active").next().addClass("active");
        }
        else if (key === 80) { 
          $("#player2_strip td.active").next().addClass("active");
        }
        $("td.active").prev().removeClass("active");

        if(key === 81 || 82){ //starts timer
          start();
        }

       if ($("#player1_strip td").last().hasClass("active")) {
            alert("Player 1 wins");
            soundWin.play();
            stop(); //stop time

          }
        else if ($("#player2_strip td").last().hasClass("active")){
            alert("Player 2 wins");
            soundWin.play();
            stop(); //stop time
        }

   });

      $( "#restartGame" ).click(function() {
        location.reload()
        // $("td.active").removeClass("active");
        // $("#player1_strip td").first().addClass("active");
        // $("#player2_strip td").first().addClass("active");
      });

}); // end of Jquery






// add audio
// add images to icons
// add timer