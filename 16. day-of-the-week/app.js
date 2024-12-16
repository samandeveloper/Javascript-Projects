const date = document.getElementById("weekday")
const phrase = document.getElementById("phrase")
let nameOfDay;
let quote;
const dayOfWeekNumber = new Date().getDay()

switch(dayOfWeekNumber){
    case 0:
        nameOfDay = "Sunday";
        quote = "Time to chilax!"
        break;

    case 1:
        nameOfDay = "Monday";
        quote = 'Monday morning blues!';
        break;

    case 2:
        nameOfDay = "Tuesday";
        quote = 'Taco Time!';
        break;

    case 3:
        nameOfDay = "Wednesday";
        quote = 'Two more days to the weekend.';
        break;
    
    case 4:
        nameOfDay = "Thursday";
        quote = 'The weekend is almost here...';
        break;

    case 5:
        nameOfDay = "Friday";
        quote = 'Weekend is here!';
        break;

    case 6:
        nameOfDay = "Saturday";
        quote = 'Time to party!';
        break;
}
    
date.innerHTML = `${nameOfDay}`
phrase.innerHTML = `${quote}`