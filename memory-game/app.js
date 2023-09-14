let cardArray = [   //cardArray.length = 12
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  }
]

const grid = document.querySelector('.grid')
const result = document.getElementById("result")

let cardsChosenName = []     
let cardsChosenId = []    
let cardsWon = []         
let cardId;
let tagImage;
let eachImage;

//create image element
for(let i = 0 ; i < cardArray.length ; i++){
  image = document.createElement("img")
  image.classList.add("imageClass")
  image.setAttribute('src', 'images/blank.png')
  image.setAttribute("data-id" , i)
  grid.appendChild(image)

  //if any of the images clicked
  eachImage = document.querySelectorAll(".imageClass")
  eachImage[i].addEventListener("click",function(){
  eachImage[i].setAttribute("src" , cardArray[i].img)

  //fill up arrays
  cardsChosenName.push(cardArray[i].name)
  cardsChosenId.push(i)

  //condition for check if user gain point--just compair two first cards
  if(cardsChosenName.length === 2){   
    setTimeout(checkForMatch , 500)
  }
  })
}   

function checkForMatch(){
  console.log(eachImage[cardsChosenId[0]])
  console.log(eachImage[cardsChosenId[1]])
  //1. if two images are the same
  if(cardsChosenId[0] !== cardsChosenId[1] && cardsChosenName[0] === cardsChosenName[1]){
    // alert("You found the match")
    //make the matches cards white
    eachImage[cardsChosenId[0]].setAttribute('src', 'images/white.png')
    eachImage[cardsChosenId[1]].setAttribute('src', 'images/white.png')
    //remove the place of cards--right now they are just white so they are still clickable
    //if an image become white make them unclickable
    console.log(eachImage[cardsChosenId[0]].getAttribute("src"))
    console.log(eachImage[cardsChosenId[1]].getAttribute("src"))
    if(eachImage[cardsChosenId[0]].getAttribute("src") === "images/white.png"){
      console.log("true0")
      eachImage[cardsChosenId[0]].style.pointerEvents = "none";
    }
    if(eachImage[cardsChosenId[1]].getAttribute("src") === "images/white.png"){
      console.log("true1")
      eachImage[cardsChosenId[1]].style.pointerEvents = "none";
    }
    //collect user's points 
    cardsWon.push(cardsChosenName)
    console.log(cardsWon)
  }
  //2.
  else if(cardsChosenId[0] === cardsChosenId[1] && cardsChosenId[0] === cardsChosenId[1]){
    alert("You click on the same image")
    eachImage[cardsChosenId[0]].setAttribute('src', 'images/blank.png')
    eachImage[cardsChosenId[1]].setAttribute('src', 'images/blank.png')
  }
  //3.
  else  {
    eachImage[cardsChosenId[0]].setAttribute('src', 'images/blank.png')
    eachImage[cardsChosenId[1]].setAttribute('src', 'images/blank.png')
    // alert('Sorry, try again')
  }
  
  cardsChosenId = []
  cardsChosenName = []

  //check if the user wins
  console.log(cardArray.length)
  console.log(cardsWon.length)

  //count score
  result.innerHTML = cardsWon.length

  //win
  if(cardArray.length/2 === cardsWon.length){   //or if(cardsWon.length === 6)
    result.innerHTML = "congragulation! You found them all!"
  }
}


