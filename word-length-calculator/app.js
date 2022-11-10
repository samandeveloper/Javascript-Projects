const input = document.getElementById("str")
const output = document.getElementById("output")
const btn = document.getElementById("btn")

btn.addEventListener("click" , function(e){
    e.preventDefault()
    const str = input.value
    const wordCount = str.split("").length
    output.innerHTML = wordCount
})