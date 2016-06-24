
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	$(".new").click(function(){
		location.reload();
	});

  	$("#guessButton").click(function() {

  		function clickCounter() {
  			var clicks=0; 							
  			$("#count").html(clicks += 1);
  		};
  	
  	 	function generateNumber() {	
  			var minNumber = 1;
  			var maxNumber = 100;
  			var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  			$("#guessList").append("<li>" + randomNumber + "</li>");	
  	 	};

	  	function compareNumbers () {
	  		var userGuess = $("#userGuess").val();   
  	 		var difference = math.abs(parseInt(userGuess - randomNumber));

	  		function wrongNumber(message) {   
	  			var retVal = confirm(message);
	  			if (retVal == true){
		  			location.reload();
		  		}
	  		};

			if (difference = 0) {
				alert ("You Guessed Correctly! Hooray!");

			} else if (difference >= 50 && difference <= 100) {
				wrongNumber("You are ice cold! Try again!");

			} else if (difference >= 30 && difference <= 49) {
				wrongNumber("You are cold! Try again!");

			} else if (difference >= 20 && difference <= 29)  {
				wrongNumber("You are warm! Try again!");

			} else if (difference >= 10 && difference <= 19)  {
				wrongNumber("You are hot! Try again!");

			} else if (difference >= 1 && difference <= 9)  {
				wrongNumber("You are very hot! Try again!");

			} else (difference >= 10 && difference <= 19)  {
				wrongNumber("You did not enter a number between 1 and 100.  Please try again!");
			};
		};
	};
});


