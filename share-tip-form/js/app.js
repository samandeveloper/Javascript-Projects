const inputBillAmount = document.getElementById("input-bill");
const inputNumUsers = document.getElementById("input-users");
const inputServices = document.getElementById("input-service");
const feedback = document.querySelector(".feedback");
const form = document.querySelector("form");
const results = document.querySelector(".results");
const resultTipAmount = document.getElementById("tip-amount");
const resultTotalAmount = document.getElementById("total-amount");
const resultNumOfPerson = document.getElementById("person-amount");

let isfeedback = false;
// feedback.innerHTML = ""
let newArrayServices1 = [];
let newArrayServices2 = [];

//Set up a service array
const services = [
  {
    value: 1,
    title: "20%",
  },
  {
    value: 2,
    title: "10%",
  },
  {
    value: 3,
    title: "2%",
  },
];

const alerts = [
  {
    title: "Bill Amount Cannot Be Blank",
  },
  {
    title: "Number Of Users Must Be Greater Than Zero",
  },
  {
    title: "You Must Select A Service",
  },
];

for (let i = 0; i < services.length; i++) {
  newArrayServices1.push(services[i].title);
  newArrayServices2.push(services[i].value);
  //create option elements
  const optionTag = document.createElement("option");
  //add textcontent
  optionTag.textContent = newArrayServices1[i];
  optionTag.value = newArrayServices2[i];
  //add created tag and text to DOM
  inputServices.appendChild(optionTag);
}

//set a form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //alerts-- we add alerts inside a form since we should press calculator button to show the alerts
  function alertMessages() {
    feedback.innerHTML = "";

    if (inputBillAmount.value === "" || inputBillAmount.value <= 0) {
      let pTag = document.createElement("p");
      pTag.textContent = alerts[0].title;
      console.log(pTag.textContent);
      feedback.appendChild(pTag);
      feedback.classList.add("showItem");
      isfeedback = true;
      timerAlert();
    }

    if (inputNumUsers.value === "" || inputNumUsers.value <= 0) {
      let pTag = document.createElement("p");
      pTag.textContent = alerts[1].title;
      console.log(pTag.textContent);
      feedback.appendChild(pTag);
      feedback.classList.add("showItem");
      isfeedback = true;
      timerAlert();
    }

    if (inputServices.value === "0") {
      //it must be a string otherwise we are not receiving an answer (because it's a value)
      let pTag = document.createElement("p");
      pTag.textContent = alerts[2].title;
      console.log(pTag.textContent);
      feedback.appendChild(pTag);
      feedback.classList.add("showItem");
      isfeedback = true;
      timerAlert();
    }
  }
  alertMessages(); //call the function

  //Mathematical
  function mathematicalFunc() {
    if (feedback.classList.contains("showItem")) {
      results.classList.remove("showItem");
      //if there are no alerts on the top then the calculation in bottom should be appear
    } else {
      if (inputServices.value === "1") {
        //tip=20%--because it's a value it should be string
        results.classList.add("showItem");
        let percentage = (inputBillAmount.value * 20) / 100;
        let total = Number(inputBillAmount.value) + Number(percentage);
        let result = Number(total / inputNumUsers.value).toFixed(2); //show two numbers after decimal
        resultTipAmount.innerHTML = percentage;
        resultTotalAmount.innerHTML = total;
        resultNumOfPerson.innerHTML = result;
        // inputServices.value="0"
        timerMath();
      } else if (inputServices.value === "2") {
        //tip=10%--because it's a value it should be string
        results.classList.add("showItem");
        let percentage = (inputBillAmount.value * 10) / 100;
        let total = Number(inputBillAmount.value) + Number(percentage);
        let result = Number(total / inputNumUsers.value).toFixed(2); //show two numbers after decimal
        resultTipAmount.innerHTML = percentage;
        resultTotalAmount.innerHTML = total;
        resultNumOfPerson.innerHTML = result;
        // inputServices.value="0"
        timerMath();
      } else if (inputServices.value === "3") {
        //tip=2%--because it's a value it should be string
        results.classList.add("showItem");
        let percentage = (inputBillAmount.value * 2) / 100;
        let total = Number(inputBillAmount.value) + Number(percentage);
        let result = Number(total / inputNumUsers.value).toFixed(2); //show two numbers after decimal
        resultTipAmount.innerHTML = percentage;
        resultTotalAmount.innerHTML = total;
        resultNumOfPerson.innerHTML = result;
        // inputServices.value="0"
        timerMath();
      }
    }

    function timerMath() {
        inputBillAmount.value = "";
        inputNumUsers.value = "";
        inputServices.value = "0";
    }
  }
  mathematicalFunc();
}); 
