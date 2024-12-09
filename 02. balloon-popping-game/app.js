let pop = 0 
const balloons = document.querySelectorAll(".balloon")
const text = document.getElementById("yay-no-balloons")
const balloonGallery = document.getElementById("balloon-gallery")

balloons.forEach(function(balloon){
    balloon.addEventListener("mouseover" , function(){

        balloon.style.backgroundColor = "rgb(237, 237, 237)"  //color gray
        balloon.innerHTML = "POP!"
        pop++
        checkAllPoped()
    })
})

function checkAllPoped(){
    if(pop === 24){
        console.log("game over")
        "Wow! All ballons popped!"
        text.style.display = "block"
        balloonGallery.style.display = "none"
    }
}
