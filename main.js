// DOM Elements
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');

// Show time
function showTime(){
let today = new Date(),
hour = today.getHours(),
min = today.getMinutes(),
sec = today.getSeconds();

//set AM or PM
let AmOrPm = hour>=12 ? "PM" : "AM";

// 12 hour format
hour = hour%12 ? hour%12 : 12; 

// Output time
time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${AmOrPm}`;
setTimeout(showTime, 1000);

}
function addZero(n){
return (n<10 ? ""+parseInt(0) : "") + n


}

function setBackground(){
let today = new Date();
 hours = today.getHours();
if (hours>= 5 && hours < 12){
    document.body.style.backgroundImage = "url('../Image Files/Forest Sunrise.jpg')";
    greeting.textContent = "Good morning";
}else if (hours <= 18){
    document.body.style.backgroundImage = "url('../Image Files/forest.jpg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = 'black';
}else{
    
    document.body.style.backgroundImage = "url('../Image Files/earth.jpg')";
    document.body.style.color = 'white';
    greeting.textContent = "Good Evening";
    
    
    }
}
showTime(); 
setBackground();