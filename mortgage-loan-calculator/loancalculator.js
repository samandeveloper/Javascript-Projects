function computeLoan(){
    const loanAmount = document.getElementById("amount")
    const interestRate = document.getElementById("interest_rate")
    const monthToPay = document.getElementById("months")
    const monthlyPayment = document.getElementById("payment")
    //calculation
    const multiple = (Number(loanAmount.value)*Number(interestRate.value))/100
    const sum = Number(loanAmount.value) + Number(multiple)
    const divide = sum/Number(monthToPay.value)
    monthlyPayment.innerHTML = `Monthly Payment = ${divide.toFixed(2)}`
}



