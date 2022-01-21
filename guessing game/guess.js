/*
var prompt = document.getElementById("prompt")


enter.addEventListener("click", guessChecker);
*/

var secretNumber = Math.floor(Math.random(), 10) + 1;



function guess(){
    var answer = prompt("Please guess the secret number (1-10)");
    answer = Number(answer);
    checkAnswer(answer)
}

function checker(){
    if (answer > secretNumber) {
        alert("Nope, guess lower")
        guess()
    }else if (answer < secretNumber) {
        alert("Nope, guess higher")
        guess()
    }else{alert("YOU GOT IT")
}




/*
function guessChecker(prompt, secretNumber) {
    console.write(secretNumber)
    if (Number(prompt) == secretNumber) {
        alert("YOU GOT IT!");
    }
    else {
    while(Number(prompt) != secretNumber) {
        if (prompt > secretNumber) {
            alert("Nope, guess lower");
        }
        else if(prompt < secretNumber) {
            alert("Nope, guess higher")
        }
        else if(prompt == secretNumber){
            
        }
        else {
            alert("That's not a valid guess")
        }
        }
    }

}
*/