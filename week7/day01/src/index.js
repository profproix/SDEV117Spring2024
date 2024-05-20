let jsBooks = [
  "JavaScript: The Good Parts",
  "Eloquent JavaScript 3rd Edition",
  "You Don't Know JS",
  "Functional JavaScript",
];

/*function printBooks() {
  var cat = "rose";
  for (let i = 0; i < JsBooks.length; i++) {
    console.log(JsBooks[i]);
  }
}
*/
//printBooks();

// let sport = "golf";
// let fan = false;

// if (sport == "hockey" && fan == true) alert("You're a hockey fan");
// else if (sport == "golf" && fan == false) alert("You're not a fan of golf");
// else alert("Are you a fan of " + sport + "? " + fan);

// for (let i = 19; i >= -1; i -= 4) {
//   console.log(i);
// }
// let num = 0;
// while (num >= 0) {
//   num = prompt("Enter a number");
//   console.log(num);
// }
// parseInt("1");

// function foo(input) {
//   console.log(input);
//   return "output";
// }

// foo("hi");

// let count = 10;
// do {
//   console.log(count);
//   count--;
// } while (count > 0);
// console.log("Take Off!");

// for (let i = 10; i <= 0; i++) {
//   console.log(i);
// }

// let number = 13;

// let result = isEven(number, true, "cat");

// function isEven(input) {
//   console.log("Is Even");
//   if (input % 2 == 0) {
//     return "even";
//   }
// }
//Params: Are Variables defined in functions
//Arguments: Are the Values for those
//           Variables

//Global
let cat = "rose";

function foo() {
  console.log(cat);
  if (true === true) {
    let dog = "tod";
  }
}
function goo() {
  console.log(dog);
}
foo();
goo();
console.log(dog);
