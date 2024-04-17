//Last week review
// Variables
// Functions
// Parameter, Arguments
// Return Statement
// Calling a function

// function magicEightBallLog(question) {
//   if (question == "Can I learn to code?") {
//     return "Without a doubt";
//   } else {
//     return "Ask again later";
//   }
// }
// Useful Math functions
// Math.floor Rounds down
// Math.ceil rounds up
// Math.random will return a random number
// Math.random * max will return a random number below the max number

// Intro to the Dom
// Make a magic 8 ball

function magicEightBall() {
  let randomNum = Math.floor(Math.random() * 12);
  switch (randomNum) {
    case 1:
      return "It is decidedly so";
    case 2:
      return "Without a doubt";
    case 3:
      return "Yes definitely";
    case 4:
      return "You may rely on it";
    case 5:
      return "Very doubtful";
    case 6:
      return "Better not tell you now";
    case 7:
      return "Cannot predict now";
    case 8:
      return "Concentrate and ask again";
    case 9:
      return "My reply is no";
    case 10:
      return "My sources say no";
    case 11:
      return "Outlook not so good";
    default:
      return "Ask again later";
  }
}

function main() {
  prompt("Enter your question");
  let response = magicEightBall();
  console.log(response);
  console.log(document.querySelector("#response"));
  document.querySelector("#response").textContent = response;
}
main();
