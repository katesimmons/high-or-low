$(document).ready(function() {

/*--variables--*/
var secretNumber = 0;
var userGuess = 0;
var guessCount = 0;
var finish = false;

/*--RANDOM NUMBER GENERATION--*/
/*--function to generate random secret number and store in console--*/
function secretNumberGenerator() {
	secretNumber = (Math.floor(Math.random()*100));
	console.log("Secret number is " + secretNumber);
}
/*--call the function that sets a random number--*/
secretNumberGenerator();



/*--function to check input--*/
function checkInput() {
	if(isNaN(userGuess)) {
		alert("That wasn't a number");
	}
	else if(userGuess === " ") {
		alert("Well, you have to enter a number");
	}
	else if(userGuess < 0 || userGuess > 100) {
		alert("Please enter a number 1-100");
	}
	else {
		comparisonAmount();
		console.log("User guess = " + userGuess);
		$('#userGuess').val(''); //what's going on here?
		guessCount++; 
		setCount(guessCount);
		$('ul#guessList').append("<li>" + userGuess + "</li>");
	}

}

/*--function to display feedback--*/
function setFeedback(feedback) {
	$('#feedback').text(feedback);
}

/*--action to collect user input--*/
$('form').submit(function(event) { 
	event.preventDefault(); //this is what keeps the game running without resetting the secretNumber each time
	if(!finish) {
		userGuess = $('#userGuess').val();
		checkInput();
	}
	else {
		setFeedback("You already won! Start a new game.");
	}
});

/*--- Function that counts attempts of user --*/
    function setCount(){ //not sure I understand why he had (count) here, it seems to work fine without it
        $('#count').text(guessCount);
    }



/*--compares user input to secret number--*/ // I think he's done this backwards?
function comparisonAmount() {
	if (userGuess == secretNumber) {
		setFeedback("You win!"); //this didn't work, don't know why
	}
	else if (userGuess < secretNumber) {
		setFeedback("Too low!"); //this didn't work, don't know why
	}
	else {
		setFeedback("Too high!");
	}
}

/*--NEW GAME--*/
/*--function that starts new game--*/
function newGame() {
	secretNumber = (Math.floor(Math.random()*100));
	console.log("New secret number is " + secretNumber);
	finish = false;
	guessCount = 0;
	setFeedback("Guess!!!!");
	$('#userGuess').val(''); // why are some $ and others just text?
	$('#count').text(guessCount);
	$('#guessList li').remove();	
}
/*--call function to start new game--*/
$('.new').click(function() {
	newGame();
});

/*--MODAL--*/
/*--open modal--*/
$('.what').click(function() {
	$('.overlay').fadeIn(1000);
});
$('.close').click(function() {
	$('.overlay').fadeOut(1000);
});

});