//we have two kind of active classes -- for buttons and for texts
const about = document.querySelector(".about")   //we have just one about class related to the buttons+h+p (right side)
const btns = document.querySelectorAll(".tab-btn")   //3 buttons
const articles = document.querySelectorAll(".content")  //div of h+p of each text

// first we use addEventListener into about not the buttons so we can find which part of about has the data-id
about.addEventListener("click", function(e){
  const id = e.target.dataset.id
  console.log(id)  //if we click on history the answer is history....if we click on text the answer is undefined

  if(id){
    btns.forEach(function(btn){
      //remove "active" from all the buttons
      btn.classList.remove("active")
      //add "active" class to each button we click on--e.target is a target we are clicking on
      e.target.classList.add("active")
    })

    // up to know if we click on a btn the style of the button changes but the text is the same--we want to change the texts with each button
    articles.forEach(function(article){
    article.classList.remove("active")
    const element = document.getElementById(id)
    element.classList.add("active")
    })
  }
})




