$(document).ready(function() {

// Set course length
  
var track = prompt("Set the track length between 10 and 30");


  for (var i = 1;  i < track; i++){
        $("#player1_strip").append("<td>");
        $("#player2_strip").append("<td>");
    };


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

       if ($("#player1_strip td").last().hasClass("active")) {
            alert("Player 1 wins");
          }
        else if ($("#player2_strip td").last().hasClass("active")){
            alert("Player 2 wins");
        }

   });

      $( "#restartGame" ).click(function() {
        $("td.active").removeClass("active");
        $("#player1_strip td").first().addClass("active");
        $("#player2_strip td").first().addClass("active");
      });

}); // end of Jquery


