const inputBillAmount = document.getElementById("input-bill")
const inputNumUsers = document.getElementById("input-users")
const inputServices = document.getElementById("input-service")
const feedback = document.querySelector(".feedback")
const form = document.querySelector("form")   
const results = document.querySelector(".results")
const resultTipAmount = document.getElementById("tip-amount")
const resultTotalAmount = document.getElementById("total-amount")
const resultNumOfPerson = document.getElementById("person-amount")

let isfeedback = false;
let newArrayServices1 = []
let newArrayServices2 = []

//Set up a service array
const services = [{
  value: 1,
  title: "great - 20%"
},{
  value: 2,
  title: "good - 10%"
},{
  value: 3,
  title: "bad - 2%"
}]

const alerts = [{
  title: "Bill Amount Cannot Be Blank"
},{
  title: "Number Of Users Must Be Greater Than Zero"
},{
  title: "You Must Select A Service"
}]

for(let i=0 ; i < services.length ; i++){
    newArrayServices1.push(services[i].title)
    newArrayServices2.push(services[i].value)
    //create option elements
    const optionTag = document.createElement("option")
    //add textcontent
    optionTag.textContent = newArrayServices1[i];
    optionTag.value = newArrayServices2[i];
    //add created tag and text to DOM
    inputServices.appendChild(optionTag)
}

//set a form
form.addEventListener("submit", function(e){
    e.preventDefault();
    //alerts-- we add alerts inside the form since we should press calculator button to show the alerts
    function alertMessages(){
        feedback.innerHTML = ""

        if(inputBillAmount.value === "" || inputBillAmount.value <= 0){
        let pTag = document.createElement("p")
        pTag.textContent = alerts[0].title
        console.log(pTag.textContent)
        feedback.appendChild(pTag)
        feedback.classList.add("showItem")
        isfeedback = true
        timerAlert()
        }

        if(inputNumUsers.value === "" || inputNumUsers.value <= 0){
            let pTag = document.createElement("p")
            pTag.textContent = alerts[1].title
            console.log(pTag.textContent)
            feedback.appendChild(pTag)
            feedback.classList.add("showItem")
            isfeedback = true
            timerAlert()
        }

        if(inputServices.value === "0"){    //it must be a string
          let pTag = document.createElement("p")
          pTag.textContent = alerts[2].title
          console.log(pTag.textContent)
          feedback.appendChild(pTag)
          feedback.classList.add("showItem")
          isfeedback = true
          timerAlert()
        }
  
    }alertMessages()          

    //set a timer--for alert to comes and goes after 5 sec
    function timerAlert(){
        setTimeout(function(){
            feedback.classList.remove("showItem");
          }, 5000)
    }

    //Mathematical
    function mathematicalFunc(){
      //if alert shows on the top then the calculation then on the bottom should not be appear
      if(feedback.classList.contains("showItem")){
        results.classList.remove("showItem")
      //if there are no alerts on the top then the calculation in bottom should be appear
      }else{
        if(inputServices.value === "1"){      //means Great:tip=20%
          console.log("1")
          results.classList.add("showItem")
          let percentage = (inputBillAmount.value*20)/100
          let total = Number(inputBillAmount.value) + Number(percentage)
          let result = Number(total/inputNumUsers.value).toFixed(2)       //show two numbers after decimal
          resultTipAmount.innerHTML = percentage
          resultTotalAmount.innerHTML = total
          resultNumOfPerson.innerHTML = result
          timerMath()
        }
        else if(inputServices.value === "2"){      //means Great:tip=10%
          console.log("2")
          results.classList.add("showItem")
          let percentage = (inputBillAmount.value*10)/100
          let total = Number(inputBillAmount.value) + Number(percentage)
          let result = Number(total/inputNumUsers.value).toFixed(2)       //show two numbers after decimal
          resultTipAmount.innerHTML = percentage
          resultTotalAmount.innerHTML = total
          resultNumOfPerson.innerHTML = result
          timerMath()
        }
        else if(inputServices.value === "3"){      //means Great:tip=2%
          console.log("3")
          results.classList.add("showItem")
          let percentage = (inputBillAmount.value*2)/100
          let total = Number(inputBillAmount.value) + Number(percentage)
          let result = Number(total/inputNumUsers.value).toFixed(2)       //show two numbers after decimal
          resultTipAmount.innerHTML = percentage
          resultTotalAmount.innerHTML = total
          resultNumOfPerson.innerHTML = result
          timerMath()
        }
      }
        
        //set a timer--for results to comes and goes after 5 sec
        function timerMath(){
          setTimeout(function(){
            results.classList.remove("showItem")
            inputBillAmount.value = "";
            inputNumUsers.value = "";
            inputServices.value = "0"
          }, 5000)
        }

    }mathematicalFunc()

})    

  
