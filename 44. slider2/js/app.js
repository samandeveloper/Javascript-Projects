const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

const leftBtn = document.getElementById("left-btn")
const rightBtn = document.getElementById("right-btn")
const imageDiv = document.querySelector(".img-container")
let count = 0;

leftBtn.addEventListener("click" , leftFunc)
rightBtn.addEventListener("click" , rightFunc)

function leftFunc(){
  console.log("left")
    count--
    imageDiv.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`
  if(count === -1){
    count = 4
    imageDiv.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`
  }
}

function rightFunc(){
  console.log("right")
  count++
  imageDiv.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`
  if(count === 5){
    count = 0
    imageDiv.style.backgroundImage = `url('./img/${pictures[count]}.jpeg')`
  }
}