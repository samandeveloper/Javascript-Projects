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





























// window.addEventListener("DOMContentLoaded" , function(e){
//     e.preventDefault()
// // question.innerHTML = questions[currentQuestion].question      //first question
//     displayCurrentQuestion()
//     quizMessage.style.display = "none"

//     resultBtn.addEventListener("click" , function(e){
        
//         if(!quizOver){  //Quiz is not finished -- quizOver = 1
//             let radioBtnChecked = document.querySelector('input[type=radio]:checked')
//             console.log(radioBtnChecked)
//             if(radioBtnChecked === null){   //if no radio button chose--Alert
//                 quizMessage.innerText = "please select an answer"
//                 quizMessage.style.display = "block"
//             }
//             else{                          //if any radio button chose
//                 console.log(radioBtnChecked.value)
//                 quizMessage.style.display = "none"
//                 console.log(questions[currentQuestion].correctAnswer)
//                 if(parseInt(radioBtnChecked.value) === questions[currentQuestion].correctAnswer){     //if the correct answer chose
//                     correctAnswers++
//                 }
//                 currentQuestion++       //Go to the next question
            

//                 if(currentQuestion < questions.length){     //still have questions
//                     displayCurrentQuestion()
//                 }
//                 else{       //all the questions are finished
//                     displayScore()  //show the result
//                     resultBtn.innerText = "Play Again?"
//                     quizOver = true
//                 }
//             }   //end of else

//         }   //end of if(!quizOver)
//         else{               //Quiz is finished -- quizOver = 0
//             quizOver = false
//             resultBtn.innerText = "Next Question"
//             resetQuiz()
//             displayCurrentQuestion()
//             hideScore()
//         }


//     }) //end of resultBtn
//  })  //end of window

    
// function displayCurrentQuestion(){
//     ul.innerHTML = ""       //every time we should delete the previous ul
//     for(let j = 0 ; j < 4 ; j++){       //choices[j]--j is number of answers which is 4
//         let choice = questions[currentQuestion].choices[j]
//         question.innerHTML = questions[currentQuestion].question 
//         li = document.createElement("li");  
//         // input = document.createElement("input");
//         // lable = document.createElement("lable");
//         // input.setAttribute("type" , "radio")
//         // input.setAttribute("value" , j)
//         li.innerHTML = '<li><input type="radio" value="' + j + '" name="dynradio" />' + choice + '</li>'

//         // li.appendChild(input)
//         // li.appendChild(lable)
//         ul.appendChild(li);
//         // lable.innerHTML = questions[currentQuestion].choices[j]
//     }
// }

// function resetQuiz(){
//     currentQuestion = 0;
//     correctAnswers = 0;
//     hideScore()
// }


// function displayScore(){
//     document.querySelector('.result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
//     document.querySelector('.result').style.display = 'block';
// }


// function hideScore(){
//     document.querySelector('.result').style.display = "none"
// }