const form = document.getElementById("calculator")
const feet = document.getElementById("feet")
const inches = document.getElementById("inches")
const results = document.getElementById("results")

let feetInput
let inchesInput

form.addEventListener("submit" , function(e){
    e.preventDefault()
    feetInput = feet.value
    inchesInput = inches.value
    const sum = (feetInput*30.48) + (inchesInput*2.54)
    console.log(sum)
    results.innerHTML = `${sum} cm`
    alerts()
})

function alerts(){
    if(inchesInput > 11 || inchesInput < 0){
        results.innerHTML = "Please enter an inch value between 0 and 12"
    }else if(isNaN(inchesInput) || isNaN(feetInput)){
        results.innerHTML = "Please enter a valid number!"
    }
    else if(feetInput === "" || inchesInput === ""){
        results.innerHTML = "Please enter a valid number!"
    }
}