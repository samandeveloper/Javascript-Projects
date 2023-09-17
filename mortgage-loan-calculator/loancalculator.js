function computeLoan() {
  const loanAmount = document.getElementById("amount");
  const interestRate = document.getElementById("interest_rate");
  const monthToPay = document.getElementById("months");
  const monthlyPayment = document.getElementById("payment");
  const total = document.getElementById("total");
  const interest = document.getElementById("interest");
  //calculation
  const multiple =
    (Number(loanAmount.value) * Number(interestRate.value)) / 100;
  const sum = Number(loanAmount.value) + Number(multiple);
  const divide = sum / Number(monthToPay.value);
  //extra
  const interestCal =
    divide * Number(monthToPay.value) - Number(loanAmount.value);
  const totalCal = Number(loanAmount.value) + interestCal;
  total.innerHTML = `Total Amount = ${totalCal.toFixed(2)}`;
  interest.innerHTML = `Interest: ${interestCal.toFixed(2)}`;
  monthlyPayment.innerHTML = `Monthly Payment = ${divide.toFixed(2)}`;
}
