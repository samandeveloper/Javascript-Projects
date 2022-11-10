const score = document.querySelector(".score")
const message = document.querySelector(".message")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const buttons = document.querySelectorAll(".button")

//random number that computer chose
let randomComputer = Math.floor(Math.random()*3)     
let playerScore = 0;
let computerScore = 0;
let rpsPlayer;
let rpsComputer
let winner;

function displayPoints(){
    if(rpsPlayer === "Rock"){
        playerScore++
    }else if(rpsPlayer === "Paper"){
        playerScore++
    }else if(rpsPlayer === "Scissors"){
        playerScore++
    }
}

function computerchoose(){
    if(randomComputer === 0){
        rpsComputer = "Rock"
    }else if(randomComputer === 1){
        rpsComputer = "Paper"
    }else if(randomComputer === 2){
        rpsComputer = "Scissors"
    }
}

function algorithm(){
    if(rpsPlayer === "Rock"){
        if(rpsComputer === "Paper"){
            computerScore++
        }else if(rpsComputer === "Scissors"){
            playerScore++
        }else{
            playerScore++
            computerScore++
        }
    }
    if(rpsPlayer === "Paper"){
        if(rpsComputer === "Scissors"){
            computerScore++
        }else if(rpsComputer === "Rock"){
            playerScore++
        }else{
            computerScore++
            playerScore++
        }
    }
    if(rpsPlayer === "Scissors"){
        if(rpsComputer === "Rock"){
            computerScore++
        }else if(rpsComputer === "Paper"){
            playerScore++
        }else{
            playerScore++
            computerScore++
        }
    }
}

function win(){
    if(playerScore > computerScore){
        winner = `Player wins!`
    }else if(playerScore < computerScore){
        winner = `Computer wins!`
    }else if(playerScore === computerScore){
        winner = `Draw: It's a tie!`
    }
}

function text(){
    score.innerHTML = `Player: [${playerScore}] Computer: [${computerScore}]`
    message.innerHTML = `Player:   <strong>${rpsPlayer}</strong>   Computer:   <strong>${rpsComputer}</strong><br/>  ${winner}`
}

//if one of the buttons clicked then the text appears
rock.addEventListener("click", function(){
    rpsPlayer = "Rock"
    computerchoose()
    algorithm()
    win()
    text()   
})
paper.addEventListener("click", function(){
    rpsPlayer = "Paper"
    computerchoose()
    algorithm()
    win()
    text()
})
scissors.addEventListener("click", function(){
    rpsPlayer = "Scissors"
    computerchoose()
    algorithm()
    win()
    text()
})
