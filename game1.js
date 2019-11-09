var charsGuessed = [];
var guessesLeft = 10;
var wins = 0;
var losses=0;
//the following code generates any of  0-25 first and then add 97 to get a Unicode of max 122 which is equivalent to last letter ‘z’
var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );

console.log(computerGuess);//for debugging purpose
//the following code first recognize the key press from the keyboard by user…which triggers an event called keyCode. Each keyboard input has an equivalent code. This code is converted to a character using .fromCharCode method…then to a lower case letter. 
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    //document.getElementById('guess').innerHTML = keyPress;
    addChar(keyPress);

}

//method to catch repeat letters and/or add players guess to charsGuessed string
function addChar (usersKeypress) {


    var guessRepeated = charsGuessed.some(function(item){
        return item === usersKeypress;
    })

    //alert  if user’s guess is repeated.
    if (guessRepeated) {
        alert(usersKeypress + " already guessed. Try again!");

        //if it is not a repeat guess, check if it's in word
    } else {
        charsGuessed.push(usersKeypress);
        console.log(charsGuessed);

        //display  user's input in web  browser
        showCharsGuessed();
        //check if  user's  guess is  a match to the computer’s  guess
        guessMatch(usersKeypress);
    }

}

//show all  letters  guessed  so far as separated by comma in the  web browser
function showCharsGuessed() {
    var tempStr = charsGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win!");
        wins = wins + 1;
        showWins();
        //toggleGame();

    } else if (guessesLeft === 0) {
        alert("Aw man! Lets start over.");
        resetVariables ();

    } else {
        guessesLeft = guessesLeft - 1;
        losses=losses+1;
        showGuessesRemaining();
    }
}

//method to show wins
function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

//method to show guesses left
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("numLosses").innerHTML = losses;
}


function resetVariables () {
    charsGuessed = [];
    guessesLeft = 10;
    losses=0;
}

function startGame() {
    showGuessesRemaining();
    showWins();
}


//if the user loses the game, can start again….
startGame();


