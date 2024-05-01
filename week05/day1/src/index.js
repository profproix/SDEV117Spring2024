//Review
// variables
let todaysWeather = "rain";
todaysWeather = "sunny";

//Functions
//Defining a function
function foo() {
  return "boo";
}

//Calling a function
console.log(foo());

// A function is a container, a lists of instructions for a specific task
// They can take a parameter when defined and an argument when called
function weatherReport(weather) {
  if (weather === "rain") {
    return "It's raining get an umbrella";
  } else if (weather === "sunny") {
    return "Its sunny get some shorts!";
  }
}

//Call the function
// The weather param will take on the value of rain
weatherReport("rain");

//Getting Dom elements.
console.log(document.querySelector("main"));
// Updating DOM elements
// Text content
//Inner HTML
function updateDOM() {
  document.querySelector("h1").textContent = "Weather Report";
  document.querySelector("main").innerHTML = `<p> ${weatherReport(
    "sunny"
  )} </p>`;
}
updateDOM();
