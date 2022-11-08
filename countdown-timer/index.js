let daysClass = document.getElementById("days")
let hoursClass = document.getElementById("hours")
let minutesClass = document.getElementById("mins")
let secondsClass = document.getElementById("secs")

function time(){
  let dateNow = new Date()
  console.log(dateNow)  //now

  let dateFuture = new Date(2022, 11, 31, 11, 30 )
  console.log(dateFuture)


  let totalInSec = Math.abs(dateFuture-dateNow)/1000
  console.log(totalInSec)

  let days = Math.floor(totalInSec/86400)
  totalInSec -= days*86400  //days should be subtract from the whole amount but in seconds since the whole amount is in seconds
  console.log(days)

  let hours = Math.floor(totalInSec/3600)
  totalInSec -= hours*3600  
  console.log(hours)

  let minutes = Math.floor(totalInSec/60)
  totalInSec -= minutes*60
  console.log(minutes)

  let seconds = Math.floor(totalInSec)
  console.log(seconds)


  if(days<10){
    daysClass.innerHTML = "0" + days
  }else{
    daysClass.innerHTML = days
  }

  if(hours<10){
    hoursClass.innerHTML = "0" + hours 
  }else{
    hoursClass.innerHTML = hours 
  }

  if(minutes<10){
    minutesClass.innerHTML = "0" + minutes
  }else{
    minutesClass.innerHTML = minutes
  }

  if(seconds<10){
    secondsClass.innerHTML = "0" + seconds
  }else{
    secondsClass.innerHTML = seconds
  }

}

setInterval(time,1000)  //call the time function every 1000ms = 1sec 