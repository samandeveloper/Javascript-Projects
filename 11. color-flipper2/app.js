let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];
const btn = document.getElementById("button")
const canvas = document.getElementById("canvas")

btn.addEventListener("click", function(e){
    e.preventDefault()
    const random = Math.floor(Math.random()*7)      //random number between 0 - 6
    console.log(random)
    canvas.style.backgroundColor = colors[random]
})
