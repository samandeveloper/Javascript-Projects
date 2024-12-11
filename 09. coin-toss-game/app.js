//grab selection of head or tail
const buttons = document.querySelectorAll('button');
//set values for heads and tails
let heads = 1;
let tails = 0;
let userScore = 0;
let computerScore = 0;

const playerSelection = document.getElementById("player-selection")
const computerSelection = document.getElementById("computer-selection")
let randomNumber
let computerPickRandom
const winner = document.getElementById("winner")
const image = document.getElementById("image")
const playerScore = document.getElementById("player-score")
const compScore = document.getElementById("computer-score")
const headsBtn = document.getElementById("heads")
const tailsBtn = document.getElementById("tails")

//define random numbers
function displayRandom(){
     randomNumber = Math.round(Math.random())
     computerPickRandom = Math.round(Math.random())
     if(computerPickRandom === 0){
          computerSelection.innerHTML = "tails"
          computerSelection.style.color = "blue"
     }else if(computerPickRandom === 1){       
          computerSelection.innerHTML = "heads"
          computerSelection.style.color = "green"
     }
}

function tallyScore(){
     //image--random
     if(randomNumber === 0){
          image.style.backgroundImage = "url(./tails.png)"
     }else if(randomNumber === 1){
          image.style.backgroundImage = "url(./heads.png)"
     }

     //player and computer
     if(randomNumber === heads && playerSelection.innerHTML === "heads"){
          userScore++
          playerScore.innerHTML = userScore
     }if(randomNumber === tails && playerSelection.innerHTML === "tails"){
          userScore++
          playerScore.innerHTML = userScore
     }if(randomNumber === heads && computerSelection.innerHTML === "heads"){
          computerScore++
          compScore.innerHTML = computerScore
     }if(randomNumber === tails && computerSelection.innerHTML === "tails"){
          computerScore++
          compScore.innerHTML = computerScore
     }

     //winer
     if(playerScore.innerHTML === "5"){
          winner.innerHTML = `<h1>You Win!!!</h1>`;
     }else if(compScore.innerHTML === "5"){
          winner.innerHTML = `<h1>Computer Wins!!!</h1>`;
     }else if(playerScore.innerHTML === "5" && compScore.innerHTML === "5"){
     winner.innerHTML = `<h1>It's a Tie</h1>`;
     }
}    

headsBtn.addEventListener("click" , function(){
     console.log("heads clicked")
     playerSelection.innerHTML = "heads"
     playerSelection.style.color = "green"
     image.classList.add("animate")
     displayRandom()
     setTimeout(() => {
     tallyScore()
        image.classList.remove("animate")  
     }, 2000);
})

tailsBtn.addEventListener("click", function(){
     console.log("tails clicked")
     playerSelection.innerHTML = "tails"
     playerSelection.style.color = "blue"
     image.classList.add("animate")
     displayRandom()
     setTimeout(() => {
          tallyScore()
          image.classList.remove("animate")  
     }, 2000);
})

