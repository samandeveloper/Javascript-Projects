
// initialize the count as 0
// listen for clicks on the incremenr button >> have many ways.one way is onclick = function () in HTML and define that function in js file
// increment the count variable when the button is clicked
// change the count - el in the HTML to reflect the new count


//welcome message with the name of the person
let welcomeEl = document.getElementById("welcome-el");
let myname = "saman";
let greeting = "Welcome back ";
let message = greeting + myname;

welcomeEl.innerText = message;

//addinf emoji >> hint: use the same method as cont = count+1
// welcomeEl.innerText = welcomeEl.innerText + ":)";
// or
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
// if I call the function here i will receive 1 instead of 0 in the begining
// increment();


//previous entries message--we use save button to reset the numbers of people entered and write the number
let saveEl = document.getElementById("save-el");


//act on save button--Every time we click on save we want to count people from 0 not continiously
function save() {
    console.log(count);
    let countStr = count + " - ";
    // saveEl.innerText += countStr;   //if we don't use +, then "previous entries"  sentence will be deleted
    //Node.textContent is an alternative for innerText for solving - issue 
    saveEl.textContent += countStr;

    //to reset
    countEl.textContent = 0;
    count = 0;

}
