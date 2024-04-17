//Selecting elements
console.log(document.querySelector("h1"));
console.log(document.querySelector(".menu"));
console.log(document.querySelector("#recommendations"));
console.log(document.getElementById("locations"));
//Change element
document.querySelector("h1").textContent =
  "ReadingCorner Books and Collectables";
document.getElementById("locations").innerHTML = `
  <div class="wrapper" id="locations">
    <div>
      <h3>Locations</h3>

        <h4>Seattle</h4>
        <h4>Portland</h4>

    <div>
  <div>
  `;

//Traversing the Dom
//Getting nested elements
document.querySelector("#recommendations ul li");
document.querySelector(".menu").firstChild.textContent = "Reading";
document.querySelector("#recommendations ul li").nextElementSibling;
//TIME -
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//Current date

let todaysDate = new Date();
let milliseconds = new Date().getTime();
let sec = milliseconds / 1000;
console.log(sec);

//YYYY-MM-DDTHH:mm:ss.sssUTC
//Year - Month - day T Hour : minute : second timezone
//Coordinated Universal Time or UTC
let saleEndDate = new Date("2024-04-20T23:59:59");
console.log(saleEndDate);
let currentTime = new Date();
//Returns milliseconds
//Technically don't need the getTime() here
let timeLeft = saleEndDate.getTime() - currentTime.getTime();
// 1000 milliseconds in a second
// 60 seconds in a minute
// 60 minutes in an hour
// 24 hours in a day
let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//Find the milliseconds remainder of timeLeft / days
//Convert the reminder to Hours
let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//Find the milliseconds remainder of timeLeft / hours
//Convert the reminder to minutes
let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//Find the milliseconds remainder of timeLeft / minutes
//Convert the reminder to seconds
let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

console.log(
  `Days:${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`
);
//How to create a countdown Timer. (n.d.). https://www.w3schools.com/howto/howto_js_countdown.asp
document.querySelector(
  "aside h3"
).nextElementSibling.textContent = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;
