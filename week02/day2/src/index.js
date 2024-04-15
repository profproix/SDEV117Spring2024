// Goal today -> Make a simple calculator

// Operators
// Used for math and logic
console.log(10 + 10);
console.log(10 - 5);
console.log(10 * 10);
console.log(10 / 2);
// Remainder aka Modulo
console.log(11 % 2);

//Comparison
// equals
console.log(1 === 1);
// less than
console.log(10 < 5);
// greater than
console.log(10 > 100);
// does not equal
console.log(10 !== 5);

//Functions
// Functions are containers for code that have a specific task.
// Most of your program will be contained in functions
// They allow our code to be organized and reusable
// We follow the DRY Principle "Don't Repeat Yourself"
// If a bit of code can be streamlined into a function, it should be.

function twoPlusTwo() {
  console.log(2 + 2);
  // A return ends a function
  // If a function does not have a return it will end at the last line
  return;
}
// printing a function
console.log(twoPlusTwo);
// calling a function
// Call in console
twoPlusTwo();

// Outputs
// returns also provide the output of a function.
// If the return is blank or missing the function will return undefined
function tenTimesTen() {
  return 10 * 10;
}
// call in console
tenTimesTen();

//Functions can not have multiple returns
// in the same block or area between { ... }
// the first return will end this function before we get to the second
function tenPlusTen() {
  return;
  return 10 + 10;
}

//Inputs
// Functions can take inputs
// when we define them, they are call parameters
// parameters are variables defined in the function definition
// that represent the input of the function.
function addTwoNums(num1, num2) {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}
// call in console
// When we pass values to a function we call them arguments
addTwoNums(10, 5);
addTwoNums(1100, 2354);

//Conditional Statement
// A Statements is an instruction
// let a = 1; is a statement, the instruction is assign 1 to a variable called a
// Conditional statements handel some logic.
// If there is milk, get 12

// function doMath2Nums(num1, num2, operator){
//     if(operator === '+'){
//         return num1+num2
//     } else {
//         return "Sorry I can't handle that math yet. 😢"
//     }
// }
//We can have multiple returns here because each one has its own block
function doMath2Nums(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Sorry I can't handle that math yet. 😢";
  }
}
