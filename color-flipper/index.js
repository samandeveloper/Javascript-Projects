const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
document.getElementById("btn").addEventListener("click", changeColor)  //cal the function in addEventListener

function changeColor(){
    let pickRandomColor = Math.floor(Math.random()*4)  //ransom number between 0 and 4 (0,4 included)--or *color.length
     console.log(colors[pickRandomColor])
    let backgroundColorText = document.getElementsByClassName("color")[0]
    backgroundColorText.innerHTML = colors[pickRandomColor]    //or .textContent
    document.body.style.backgroundColor =colors[pickRandomColor]   //we must use the "document" to make it work
}

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");   //return the first element that matches--or .getElementsByClassName

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {     //because hex numbers are 6 digits
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
