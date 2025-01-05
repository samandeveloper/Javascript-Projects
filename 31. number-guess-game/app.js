let previousGuesses = [];
let numGuesses = 1;  //from 1 to 11
let playGame = true;

const form = document.querySelector(".form")
const guessNumber = document.getElementById("guessField")
const previousG = document.querySelector(".guesses")
const guessesRemaining = document.querySelector(".lastResult")
const lowOrHiMessage = document.querySelector(".lowOrHi")
const resultsSection = document.querySelector(".resultParas")

let randomNumber = Math.floor((Math.random()*100)+1)      //random number between 1 to 100 (include 1 and 100)
let guessNumberInput;  
let p = document.createElement("p") 

//if the game is going on
if(playGame){
    form.addEventListener("submit", function(e){
        e.preventDefault()
        guessNumberInput = parseInt(guessNumber.value)
        console.log(guessNumberInput)
        displayAlertMessages()
        displayBottomMessages()
        displayGuesses()
        guessNumber.value = " "
    })
}

//END Game--in case game over happens "Start New Game" appears--end game
function createElementRestartGame(){
    guessNumberInput = ""  
    p.classList.add("button")
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
    resultsSection.appendChild(p)
    playGame = false
    restartGame()
}

//display "previous guesses" and "guesses remaining"
function displayGuesses(){
    if(Number.isInteger(guessNumberInput) === true && guessNumberInput > 1 && guessNumberInput < 100){
        previousGuesses.push(guessNumberInput)
        console.log(previousGuesses)
        previousG.innerHTML = previousGuesses
        guessesRemaining.innerHTML = `${10 - numGuesses}`
        numGuesses++
        console.log(numGuesses)
        console.log(guessesRemaining.innerHTML)
        if(guessesRemaining.innerHTML === "-1"){
            createElementRestartGame()
            guessNumber.disabled = true     //disable the input after game over
            console.log("game over")
            playGame = false;
            restartGame()
        }
    }
}

function restartGame(){
    const startNewGameBtn = document.querySelector(".button")
    startNewGameBtn.addEventListener("click" , function(){
        randomNumber = Math.floor((Math.random()*100)+1) 
        numGuesses = 1;  
        previousGuesses = []
        previousG.innerHTML = ""
        guessesRemaining.innerHTML = "10"
        lowOrHiMessage.innerHTML = ""
        resultsSection.removeChild(p)   //remove the p tag which created before
        guessNumber.disabled = false
        playGame = true;
    })
}

//alerts on the top
function displayAlertMessages(){
    if(isNaN(guessNumberInput)){
        alert("Please enter a valid number")
    }
    else if(guessNumberInput < 1){
        alert("Please enter a number greater than 1")
    }
    else if(guessNumberInput > 100){
        alert("Please enter a number less than 100")
    }
}

//messages on the bottom
function displayBottomMessages(){
    //if guessNumber is lower than random number
    if(guessNumberInput < randomNumber){
        lowOrHiMessage.innerHTML = `<h1>Too low! Try again!</h1>`
    }
    else if(guessNumberInput > randomNumber){
        lowOrHiMessage.innerHTML = `<h1>Too high! Try again!</h1>`
    }
    else if(guessNumberInput === randomNumber){
        lowOrHiMessage.innerHTML = `<h1>You guesses corectly!</h1>`
        createElementRestartGame()
    }
    else if(numGuesses === "12"){       
        lowOrHiMessage.innerHTML = `<h1>Game over! Number was ${randomNumber}</h1>`
        createElementRestartGame()
    }
}

