//Step2: create 2 variables
//myLeads -> should be assign to an empty array
//inputEl -> should be assigned to the text input field
let myLeads = [];
// let oldLeads =[]; //step21
const inputEl = document.getElementById("input-el");

let ulEl = document.getElementById("ul-el");  //step6

//Step1: log out "Button clicked!" when the user clicks the "SAVE INPUT" button

//way1--onclick on html
// function saveLead() {
//     console.log("Button clicked from onclick attribute!")
// }
let deleteBtn = document.getElementById("delete-btn")  //step20
let tabBtn = document.getElementById("tab-btn")   //step22


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))  //stage18--get myLeads from local storage--if there is any table in local storage filled then we change it to array
console.log(leadsFromLocalStorage); //answer is myLeads in array--not a string

if (leadsFromLocalStorage) {  //stap 19--if there is a table of array exists in local storage
    myLeads = leadsFromLocalStorage;  //stap 19--put all the address user add to the myLeads array to leadsFromLocalStorage
    // renderLeads();  //stap 19
    render(myLeads); //step21-change
}


// const tabs = [      //step22
//     { url: "https://www.linkedin.com/in/saman-m-mohaghegh-b61844173/" }
// ]

tabBtn.addEventListener("click", function () {  //step22
    //step24
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    //     // since only one tab should be active and in the current window at once
    //     // the return variable should only have one entry
    //     let activeTab = tabs[0];
    //     let activeTabId = activeTab.id; // or do whatever you need

    // });
    //chrome is object.query is method. inside we say which tab we want
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // console.log(tabs);
        // console.log(tabs);  //or console.log(tabs[0])
        // console.log(tabs[0].url);
        //step23
        myLeads.push(tabs[0].url);  //show the addresses in li--tabs[0] means current tab
        localStorage.setItem("myLeads", JSON.stringify(myLeads))  //add array in the local storage
        render(myLeads)
    })

})



//original one
// function renderLeads() {   //step10--just function name
//     let listItem = " ";  //step9
//     for (let i = 0; i < myLeads.length; i++) {
//         // console.log(myLeads[i]); //don't forget the i
//         // ulEl.textContent += myLeads[i] + " "; //step7
//         // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";  //way1--step8

//         // listItem += "<li>" + myLeads[i] + "</li>"; //step9
//         // listItem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";  //step 12
//         //step 13 ->compare to step 12
//         listItem += `<li><a target='_blank' href='${myLeads[i]}'>  ${myLeads[i]}  </a></li>`;
//         ulEl.innerHTML = listItem;
//     }

// step21--pass arguments to a function--leads is an optional name
function render(leads) {   //step10--just function name
    let listItem = " ";  //step9
    for (let i = 0; i < leads.length; i++) {
        // console.log(myLeads[i]); //don't forget the i
        // ulEl.textContent += myLeads[i] + " "; //step7
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";  //way1--step8

        // listItem += "<li>" + myLeads[i] + "</li>"; //step9
        // listItem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";  //step 12
        //step 13 ->compare to step 12
        listItem += `<li><a target='_blank' href='${leads[i]}'>  ${leads[i]}  </a></li>`;
        ulEl.innerHTML = listItem;
    }


    //way2-step8:
    //1.create element
    //2. set text content
    //3. append to ul
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
    ulEl.innerHTML = listItem;  //step9-outside the loop
}


//Step 20   
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);  //step21-change
})

//way2 --addEventListener
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
    // console.log("Button clicked from addEventListener!");
    myLeads.push(inputEl.value);    //step3-4
    inputEl.value = "" //step11
    // console.log(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));   //step17--convert myLeads array to string because local storage accept just string
    console.log(localStorage.getItem("myLeads"));   //step17

    render(myLeads);  //step10 & //step21-change
})



//step3. push the value "www.awesomelead.com" to myArray when the input button is clicked

//step4. push the value from the inputEl into the myLeads array
//instead of the hard-coded "www.awesomelead.com" value

//step5. log out the items in the myLeads array using a for loop
//render out an array means loop through all the items



//step6--render out step 5 to the browser
//html: create an unordered list element (<ul>) with id="ul-el"
//JS: Grab the unordered list and store it in a const variable called ulEl

//step7--render the leads in the unordered list using ulEl.textContent

//step8--for having html code inside js we have to change textContent to innerHTML or way2

//step9. IMPORTANT! 
//create a variable, listItems, to hold all the HTML for the list items--assign it to an empty string to begin with
//add the item to the listItems variable instead of the ulEl.innerHTML
//render the listItem inside the unordered list using ulEl.innerHTML

//step10. wrap the for loop code in the renderLeads() function
//call the renderLeads() function in addEventListener

//step11. after adding input(address) to input and publish it in li, the issue is the input is still in the input field. We want to remove it.
//clear out the input field

//step12. we want all our li to be link and clickable
//wrap the lead in an anchor tag (<a>) inside the <li>
//can you make the link open in a new tab?

//step13. use "template string" to make the line of html in js easier--use `` and ${}--remove all the "" and ++

//step14. we want to deploy our project. we use JSON (.json=js object notation= for store and send data from server to a client) 
//we want to deploy the project. go to chrome://extensions/ -> developer mode:on -> "Load unpacked" -> install the folder
//open a new browser


//step15. every time we close the extension or refresh the page we loose whatever we saved.
//solution:	Local storage in google
// We can use the local storage in application tab of google.
// We have a control of it. E.g. in console if we write localStorage.clear() and go back to application->local storage we can see we delete the table. Or if localStorage.setItem("myLeads", "https://en.wikipedia.org/") go back to local storage, the table is full. 
// **myLeads is a key and address is the value.
// ** the localStorage is accessible in main.js file

// localStorage.setItem("myLeads", "www.examplelead.com")  //run->nothing happen in browser but it saves key and value

// console.log(localStorage.getItem("myLeads"))  //answer->"www.examplelead.com"

//step16. The issue is local storage just store string but we want to store array (myLeads=[])
//solution: use JSON.stingify() and JSON.parse()
//suppose 
// let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.parse(myleads)            //turn a myLead string into array
// myLeads.push("www.epiclead.com")         //push a new value to the array
// console.log(myLeads)  //answer=>["www.awesomelead.com","www.epiclead.com"]


// vise versa
// let myLeads = ["www.awesomelead.com"]
// myLeads = JSON.stringify(myLeads)       //turn array into string
// console.log(myLeads)   //answer=>["www.awesomelead.com"]
// console.log(typeof myLeads) //answer=>string

//step17. in the addEventListener function : save the myLeads array to localStorage using JSON>stringify()


//step18. in local storage we can see that all the addresses we save are there and not going by refreshing the page.
// but the problem is still there while refreshing page we can't see the saved addresses in the extention box. because we didn't fetch them yet

//1. Get the leads from localStorage --use JSON.parse() to convert again string to array
//2. store it in a variable, leadsFromLocalStorage
//3. Log out the variable


//step19-continue solving step 18 problem
//check if leadsFromLocalStorage is truthy (e.g. it's not null), if so, set myLEads to its value and call renderLeads()--becausemyLeads.length is in renderLeads() function

//step20. delete the addresses we add --delete button
//1. store the delete button in a deleteBtn variable
//2. listen for double clicks on the delete button 
//3. when button clicked, clear localStorage, myLeads, and the DOM (clear the li addresses)

//step21. pass arguments into function
//right now we have just myLeads array, but if we have another array e.g. let oldLeads=[] then for not confusing 
//we can pass myLeads arguments into function
//we want a renderLeads() function to accept any of the arrays we want not just myLeads
//render(leads){} is a function with leads parameter and render(myLeads) is call/invoke function with myLeads argument.


//step22.Create a tab button
//1.Grab the SAVE TAB BUTTON button and store it in a tabBtn variable
//2. Listen for clicks on tabBtn. Log Per's Linkedin URL to the console.

//step23. save (in localStorage, myLeads array, triger a render) the step 22 instead of just log it out

//step24. it's useless to have myLeads.push(inputEl[0].tabs); because every time we publish the linkedin url again and again
//when we are on the browser tab and hit "SAVE TAB" button we want that address to be save and publish in li
//we have to talk to current API to ask for the url
//google-> chrome extension get current tab->stackoverflow->copy the code and paste it here
//also manifest.json file should be change too-so that chrome extension can access to chrome tabs

// "permissions": [
//     "tabs"
// ]