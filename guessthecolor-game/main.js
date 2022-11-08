//change the background colour when user choose the correct answer

function setButtonColour(button, red, green, blue){
     button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                        );           
}

let buttons = document.getElementsByClassName("colourButton");
let background = document.getElementsByTagName('body');


//create random rgb colors 
function makeColourValue(){
    return Math.round(Math.random()*255);
}

//wrap the code and send it to addEventListener
function startGame(){
    //Pick one of the random colours as the correct answer--store a random number to show the random rgb number
    let answerButton = Math.round(Math.random()*(buttons.length-1))

    //store an element that has id of answer
    let answerMessage = document.getElementById('answer');
    //first of the game there should not be any message in h2
    answerMessage.innerHTML = "";

    //change the background colour when user choose the correct answer
    // let backgroundColour = document.getElementsByTagName('body');
    // backgroundColour;
    

    //define red, green,blue colours randomly for 6 circles
    for(let i=0; i<buttons.length; i++){
        let red = makeColourValue();
        let green = makeColourValue();
        let blue = makeColourValue();
        // buttons[i]=backgroundColour[i]
        setButtonColour(buttons[i],red,green,blue);
       
        //Display the RGB colour values of that colour to the player--show the random rgb number
        if(i===answerButton){
            h1.innerHTML = `RGB(${red},${green},${blue})`
        }

        //when user clicks on the correct button write the answer is right or wrong--use addEventListener
        buttons[i].addEventListener('click', function(){
            //in case the button that has been clicked
            if(this===buttons[answerButton]){
                answerMessage.innerHTML = 'Correct!';
                document.getElementsByTagName("body")[0].style.backgroundColor= 'rgb('+ red +','+ green +','+ blue +')';
            }else{
                answerMessage.innerHTML = 'Wrong answer! Guess again!'
            }
        });

        //reset button
        document.getElementById('reset').addEventListener('click',startGame);
    }
}
startGame();
