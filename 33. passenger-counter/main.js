//welcome message with the name of the person
let welcomeEl = document.getElementById("welcome-el");
let myname = "saman";
let greeting = "Welcome back ";
let message = greeting + myname;

welcomeEl.innerText = message;
welcomeEl.innerText += ":)";

let countEl = document.getElementById("count-el");  //pass in an argument
let count = 0;

//act on increment button
function increment() {
    // count = count + 1;
    count += 1
    countEl.innerText = count;
    console.log(count);
}

//previous entries message--we use save button to reset the numbers of people entered and write the number
let saveEl = document.getElementById("save-el");

//act on save button--Every time we click on save we want to count people from 0 not continiously
function save() {
    console.log(count);
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    //to reset
    countEl.textContent = 0;
    count = 0;
}
