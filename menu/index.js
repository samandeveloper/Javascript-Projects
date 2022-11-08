let menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Steak Dinner",
        category: "dinner",
        price: 39.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];

let menuCopy =[...menu]
let menuCopy2 =[...menu]
let menuCopy3 =[...menu]
let menuCopy4 =[...menu]
let menuCopy5 =[...menu]
let newArray = []
let newArrayBreakfast = []
let newArrayLunch = []
let newArrayAll = []
let newArrayShakes =[]
let newArrayDinner = []

let textFilled = document.getElementsByClassName("item-text")
let article = document.getElementsByClassName("menu-item")

//buttons
let breakfastBtn = document.getElementById("breakfast")
let lunchBtn = document.getElementById("lunch")
let allBtn = document.getElementById("all")
let shakesBtn = document.getElementById("shakes")
let dinnerBtn = document.getElementById("dinner")

// import desc instead of the lorem ipsum text
for(const key in menu){
  newArray.push(menu[key].desc)
}
for(let i=0 ; i<textFilled.length ; i++){
  textFilled[i].innerHTML = newArray[i]
}

//All
allBtn.addEventListener("click", allFunc)
function allFunc(){
  console.log("hi")
  let resultAll = menuCopy3.map(item => 
  item
    )
  for(let e=0 ; e<resultAll.length ; e++){
    let finalAll = resultAll[e].id    
    newArrayAll.push(finalAll)
    console.log(newArrayAll)  
  }
  for(let f=0 ; f<newArrayAll.length ; f++){
    elAll = document.getElementById(newArrayAll[f])
    console.log(elAll)
    if(elAll.style.display="none"){
      elAll.style.display = "inherit"
    }
    else{
      elAll.style.display = "inherit"
    }
  }
 }

//breakfast button
breakfastBtn.addEventListener("click", breakfastFunc)
function breakfastFunc(){
  allFunc()
  //find the ids of breakfast--or find ids that are not breakfasts
  let result = menuCopy.filter(item => item.category !== "breakfast")
  for(let c=0 ; c<result.length ; c++){
    let final2 = result[c].id    
    newArrayBreakfast.push(final2)
    console.log(newArrayBreakfast)  
  }
  //find the ids that are not breakfast and remove them
  for(let b=0 ; b<newArrayBreakfast.length ; b++){
    let el = document.getElementById(newArrayBreakfast[b])
    if(el.style.display="block"){
      el.style.display = "none"
    }
    else{
      el.style.display = "block"
    }
  }
}           

//lunch button
lunchBtn.addEventListener("click", lunchFunc)
function lunchFunc(){
  allFunc()
  //find the ids of breakfast--or find ids that are not breakfasts
  let result2 = menuCopy2.filter(item => item.category !== "lunch")
  for(let x=0 ; x<result2.length ; x++){
    let final = result2[x].id   
    newArrayLunch.push(final)
  }

  //find the ids that are not breakfast and remove them
  for(let y=0 ; y<newArrayLunch.length ; y++){
    let el2 = document.getElementById(newArrayLunch[y])
    if(el2.style.display="block"){
      el2.style.display = "none"
    }
    else{
      el2.style.display = "block"
    }
  }
}

//shakes button
shakesBtn.addEventListener("click", shakesFunc)
function shakesFunc(){
  allFunc()
  let resultShakes = menuCopy4.filter(item => item.category !== "shakes")
  for(let m=0 ; m<resultShakes.length ; m++){
    let finalShakes = resultShakes[m].id   
    newArrayShakes.push(finalShakes)
  }

  //find the ids that are not breakfast and remove them
  for(let n=0 ; n<newArrayShakes.length ; n++){
    let elShakes = document.getElementById(newArrayShakes[n])
    if(elShakes.style.display="block"){
      elShakes.style.display = "none"
    }
    else{
      elShakes.style.display = "block"
    }
  }
}

//dinner button
dinnerBtn.addEventListener("click", dinnerFunc)
function dinnerFunc(){
  allFunc()
  let resultDinner = menuCopy5.filter(item => item.category !== "dinner")
  for(let t=0 ; t<resultDinner.length ; t++){
    let finalDinner = resultDinner[t].id    
    newArrayDinner.push(finalDinner)
  }

  //find the ids that are not breakfast and remove them
  for(let r=0 ; r<newArrayDinner.length ; r++){
    let elDinner = document.getElementById(newArrayDinner[r])
    if(elDinner.style.display="block"){
      elDinner.style.display = "none"
    }
    else{
      elDinner.style.display = "block"
    }
  }
}