var questions = [
    {
        question: 'What is the baby of a month known as?',
        choices: ['baby', 'infant', 'kit', 'larva'],
        correctAnswer: 3
    },
    {
        question: 'What is the adult of a kid called?',
        choices: ['calf', 'doe', 'goat', 'chick'],
        correctAnswer: 2
    },
    {
        question: 'What is the young of buffalo called?',
        choices: ['calf', 'baby', 'pup', 'cow'],
        correctAnswer: 0
    },
    {
        question: 'What is a baby alligator called?',
        choices: ['baby', 'gator', 'hatchling', 'calf'],
        correctAnswer: 1
    },
    {
        question: 'What is a baby goose called?',
        choices: ['gooser', 'gosling', 'gup', 'pup'],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

const question = document.querySelector(".question")
const ul = document.getElementById("ul")
const quizMessage = document.querySelector(".quizMessage")
const resultBtn = document.querySelector(".nextButton")
const result = document.querySelector(".result")
const quizContainer = document.querySelector(".quizContainer")

let li;
let input;
let lable;

window.addEventListener("DOMContentLoaded" , function(e){
    e.preventDefault()
    displayCurrentQuestion()
    quizMessage.style.display = "none"      //remove the red line for the alert

    resultBtn.addEventListener("click" , function(){
        //CONDITONS
        if(quizOver === false){      //quiz is not over
            const radioBtnChecked = document.querySelector('input[type=radio]:checked')    
            console.log(radioBtnChecked)
            //no radio button chosen
            if(radioBtnChecked === null){
                displayAlert()
            }
            //any radio button chosen
            else{
                hideAlert()
                //the correct answer chosen
                if(parseInt(radioBtnChecked.value) === questions[currentQuestion].correctAnswer){
                    correctAnswers++
                    console.log(correctAnswers)
                }  //no else
                currentQuestion++   //Go to the next question
                //still in the quiz
                if(currentQuestion < questions.length){
                    displayCurrentQuestion()
                }
                //quiz is finished --the last question is answered
                else{
                    displayScore()
                    resultBtn.innerHTML = "Play Again?"
                    quizOver = true
                }
            }   

        }
        else{              //quiz is over
            quizOver = false
            resultBtn.innerHTML = "Next Question"
            resetQuiz()
            displayCurrentQuestion()
            hideScore()
        }
    })  
}) 

function displayCurrentQuestion(){
    ul.innerHTML = ""       //clear 4 radio answers every time the page is refresh
    for(let i = 0 ; i < 4 ; i++){
        question.innerHTML = questions[currentQuestion].question        //add the question in yellow line
        let choice = questions[currentQuestion].choices[i]  //show 4 radio answers
        li = document.createElement("li")       //we don't need to add input tag. It will add automatically
        li.setAttribute("value" , i)
        li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        ul.appendChild(li)
    }
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore()
}

function hideScore(){
    result.style.display = "none"
}

function displayScore(){
    result.innerHTML = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
    result.style.display = "block"
}

function displayAlert(){
    quizMessage.innerHTML = "Please select an answer"
    quizMessage.style.display = "block"     //this line must be added otherwise it's not going to show the alert
}

function hideAlert(){
    quizMessage.style.display = "none"
}
