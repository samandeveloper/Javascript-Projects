const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let random = "#"; 
const text = document.getElementById("hex-value")

function btnFunction(){
    for(let i = 0 ; i < 6 ; i++){       
        random += hexValues[Math.floor(Math.random()*16)]       
        console.log(random)
        document.body.style.backgroundColor = random
        text.textContent = random
    }
    random = "#"    
}

