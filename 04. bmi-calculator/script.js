const form = document.querySelector("form")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const result = document.getElementById("results")

form.addEventListener("submit" , function(e){
    e.preventDefault();
    console.log("hi")
    const formula = (weight.value)/(height.value*height.value)
    console.log(formula)
    const total = (formula*10000).toFixed(2)    //to numbers after decimal
    result.innerHTML = total
})