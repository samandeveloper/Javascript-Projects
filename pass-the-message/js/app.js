const form = document.getElementById("message-form")
const inputText = document.getElementById("message")
const submitBtn = document.getElementById("submitBtn")  
const typePlace = document.getElementsByClassName("message-content text-uppercase")[0]
const alert = document.getElementsByClassName("p-2 alert alert-danger my-3 text-capitalize feedback")[0]

form.addEventListener("submit", btnFunc)       
function btnFunc(e){
    if(inputText.value === ""){
        alert.classList.add("show")
    }
    else{
        e.preventDefault();     
        let text = inputText.value
        typePlace.innerHTML = text
        inputText.value = ""
    }
}

