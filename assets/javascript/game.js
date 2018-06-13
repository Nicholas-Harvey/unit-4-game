var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var userGuess = null;
var computerGuess = letters[Math.floor(math.random("") * letters.length)];
var guessesLeft = 9;
var guesses = [];
var wins = 0;
var losses = 0;


document.ready(function(){

});

console.log("Wins" + wins + "Losses" + losses + "Guesses Left" + guessesLeft + "Guesses" + guesses + "Computer Guess" + computerGuess);
doncument.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (guesses.indexOf(userGuess) < 0 && letters.indexOf(userGuess) >= 0) {

    }

    if (userGuess === computerGuess) {
        wins++
        console.log("win");
        guessesLeft = 9;
        guesses = [];
        computerGuess = letters[Math.floor(math.random() * letters.length)];
        console.log("Wins" + wins + "Losses" + losses + "Guesses Left" + guessesLeft + "Guesses" + guesses + "Computer Guess" + computerGuess);
        document.getElementById("Win Count").innerHTML=wins;
    }
    if(guessesLeft == 0) {
        losses ++;
        console.log("Lose");
        guessesLeft = 9;
        guesses = [];
        computerGuess = letters[Math.floor(math.random() * letters.length)];
        console.log("Wins" + wins + "Loses" + losses + "Guesses Left" + guessesLeft + "Guesses" + guesses + "Computer Guess" + computerGuess);
        document.getElementById("Loss Count").innerHTML=losses;
    };
};