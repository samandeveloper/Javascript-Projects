window.addEventListener("keydown", playSound);

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)  //should have .
    if(!audio){
        return null
    }
    key.classList.add("playing")    //css hover bold and yellow
    audio.currentTime = 0
    audio.play()
    setTimeout(function(){
        key.classList.remove("playing")     //remove css
    },100)
}