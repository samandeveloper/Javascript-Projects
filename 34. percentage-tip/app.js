const billAmount = document.getElementById("bill-amount")
const percentageTip = document.getElementById("percentage-tip")
const tipAmount = document.getElementById("tip-amount")
const total = document.getElementById("total")
const calculateBtn = document.getElementById("calculate")

calculateBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(isNaN(billAmount.value) === false && isNaN(percentageTip.value) === false){
        //calculation
        const showTipAmount = ((billAmount.value)*(percentageTip.value))/100
        tipAmount.value = `$${showTipAmount}`
        showTotal = Number(showTipAmount) + Number(billAmount.value)
        total.value = `$${showTotal}`
    }else{
        alert("Please enter a valid bill amount")
    }
})

