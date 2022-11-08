const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")
const images = document.querySelectorAll("img")   
let slide = document.querySelectorAll(".slide")
let pic = [];
let count = 0


//create an array from the images
for(let i=0 ; i < images.length ; i++){
  pic.push(images[i])
}

function showSlide(direction){
  
    if(direction === 'next'){
      console.log("next clicked")
      count++
      console.log(count)
      slide[count].style.display = "block"
      prevBtn.style.display = "block"
      console.log(pic[count])

      if(count === 3){
        nextBtn.style.display = "none"
      }
    }

    if(direction === 'previous'){   
      console.log("prev clicked")
      nextBtn.style.display = "block"
      count--
      console.log(count)
      slide[count].style.display = "block"
      slide[count+1].style.display = "none"
      console.log(pic[count])

      if(count === 0){
        prevBtn.style.display = "none"
      }
    }


}









