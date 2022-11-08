//using selectors inside the element

// way1:
let questions = document.querySelectorAll(".question")

questions.forEach(function (elem){
    let closeBtn = elem.querySelector(".question-btn")  //not querySelectorAll
    console.log(closeBtn)
    closeBtn.addEventListener("click", () => {
        questions.forEach(function(item){
            if(elem === item){
                item.classList.toggle("show-text")
            }
        })  
    })
})

//way2: toggle using question not close button--this time we collect questions classes
// let questions = document.querySelectorAll(".question")
// for(let i=0 ; i<answer.length ; i++){
//     questions[i].addEventListener("click", function(){
//         questions[i].classList.toggle("show-text")   //instead of answer[i] in this line we can use this
//     })
// }


