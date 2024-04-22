//Selecting elements
console.log(document.querySelector("h1"));
console.log(document.querySelector(".menu"));
console.log(document.querySelector("#recommendations"));
console.log(document.getElementById("recommendations"));

//Change element
document.querySelector("h1").textContent =
  "ReadingCorner Books and Collectables";

// document.getElementById("locations").innerHTML = `
//   <h3>Locations</h3>
//   <p>Seattle</p>
//   <p>Portland</p>
// `;

//Traversing the Dom
//Getting nested elements
console.log(document.querySelector("#recommendations ul li"));
document.querySelector(".menu").firstChild.textContent = "Reading";
document.querySelector("#recommendations ul li").nextElementSibling;

//TIME -
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//Current date

let todaysDate = new Date();
let milliseconds = new Date().getTime();
console.log(milliseconds);

//YYYY-MM-DDTHH:mm:ss.sssUTC
//Year - Month - day T Hour : minute : second timezone
//Coordinated Universal Time or UTC
let saleEndDate = new Date("2024-04-20T23:59:59");
let timeLeft = saleEndDate - todaysDate;

//Returns milliseconds
//Technically don't need the getTime() here
// 1000 milliseconds in a second
// 60 seconds in a minute
// 60 minutes in an hour
// 24 hours in a day
let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
console.log(timeLeft / (1000 * 60 * 60 * 24));
//Find the milliseconds remainder of timeLeft / days
//Convert the reminder to Hours
let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours);

//Find the milliseconds remainder of timeLeft / hours
//Convert the reminder to minutes
let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
console.log(minutes);

//Find the milliseconds remainder of timeLeft / minutes
//Convert the reminder to seconds
let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
console.log(seconds);

//How to create a countdown Timer. (n.d.). https://www.w3schools.com/howto/howto_js_countdown.asp

//Go over prompt for Breakout session
console.log("Days: days Hours: hours Minutes: minutes Seconds: seconds");

console.log(
  `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`
);

let input = prompt("Is my cat cute?");
console.log(input);
