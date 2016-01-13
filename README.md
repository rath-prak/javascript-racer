# javascript-racer
Sprint-4 Javascript Racer



//posible solution

if 'keyup' === p or q (these are the keys the players press)
then you taget the 
	<tr id="player1_strip"> and <td>, 

	  	use the removeClass and the addClass to add '.active' to each <td>


***** MAKE SURE YOU READ THE DOCUMENTATION!!! ****

- learn event handling
- probably need to do a tutorial on teamTreehouse for JQuery

-----------------------------------------------------------------------------------

/* document.querySelector('#player1_strip').addEventListener('keyup', function(e){
  var currentPosition = 'td.active';
  if (key === 81){
    player1_strip. 
  };


}, false);


/* var html = '';

for (var i = 1; i <= 10; i++){
  html += "<div>" + i + "</div>";
}
document.write(html); 

this goes through all the divs?

---------------------------------------------------------------------------------

var currentPosition = document.getElementsByClassName('active');

var moveForward = function(){
  console.log('this has moved foward...')

};

currentPosition.onlick = moveForward;