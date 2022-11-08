let counter = 0;
let increaseBtn = document.getElementById("increase")
let decreaseBtn = document.getElementById("decrease")
let resetBtn = document.getElementById("reset")
let numberShow = document.getElementById("number")

increaseBtn.addEventListener("click", increaseFunc)
decreaseBtn.addEventListener("click", decreaseFunc)
resetBtn.addEventListener("click", resetFunc)

function increaseFunc(){
    counter++
    numberShow.textContent = counter
    if(counter < 0){
        numberShow.style.color = "red"
    }
    else if(counter > 0){
        numberShow.style.color = "green"
    }
    else{
        numberShow.style.color = "black"
    }
}

function decreaseFunc(){
    counter--
    numberShow.textContent = counter
    
    if(counter < 0){
        numberShow.style.color = "red"

    }
    else if(counter > 0){
        numberShow.style.color = "green"
    }
    else{
        numberShow.style.color = "black"
    }
}

function resetFunc(){
    counter = 0
    numberShow.textContent = counter
    numberShow.style.color = "black"
}