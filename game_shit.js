//= require jquery
//= require jquery_ujs
bankroll = 100;

$(document).ready(function(){
	$("#guess").on("keyup change", function() {
  	guess = parseInt(this.value);
	});
	$("#bet").on("keyup change", function() {
  	bet = parseInt(this.value);
	});
	$("#btn").click(function(){
		runGame(bet, guess);
	});
	$("#reset-btn").click(function(){
		location.reload();
	});
});
// 


function checkAnswer(guess, answer){
if (guess === answer - 1 || guess === answer + 1 ){
		return alert("Off by one! The answer was " + answer + ". Bankroll remains at " + bankroll);
	}
	if (guess === answer){
		bankroll = bankroll + bet;
		return alert("Correct! Bankroll is now " + bankroll);
	} else{
		bankroll = bankroll - bet;
		if (bankroll <= 0){
			return alert("Your broke! Game over")
		}else{
			return alert("Incorrect! Th answer was " + answer + ". Bankroll is now " + bankroll);
		}
	}
}

function checkBet(bet){
	if (bet == 5 || bet == 10 ){
		return true;
	} else{
		return false;
	}
}

function runGame(bet, guess){
var answer = Math.floor((Math.random() * 10) + 1);
	if (checkBet(bet)){
		checkAnswer(guess, answer);
	} else{
		alert("please enter a valid bet!");
	}
}

