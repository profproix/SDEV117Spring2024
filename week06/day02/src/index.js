//Arrays
// List of data
// Each item in the list is at an index
// ['a', 'b', 'c', 'd']
//   0    1    2    3
//let arr = [true, 1, "cat", , [1, 2, "a"]];
//console.log([true, 1, "cat", , [1, 2, "a"]]);
//let arrOfArr = [[[[[]], []], []], [], []];
let JsBooks = [
  "JavaScript: The Good Parts",
  "Eloquent JavaScript 3rd Edition",
  "You Don't Know JS",
  "Functional JavaScript",
];

//Access
JsBooks[0];
//Reassign
JsBooks[1] = "Eloquent JavaScript 4th Edition";

//Add item to the end array
JsBooks.push("High-Performance JavaScript");
//Removes item from the end of the array
//JsBooks.pop();

//Add Item to start of array T_T
JsBooks.unshift("Learning JavaScript Design Patterns");
//Removes item from teh start of array
//JsBooks.shift();
//Slice copy
// let slice = JsBooks.slice(1, 3);
// console.log("slice", slice);
// console.log(JsBooks);
// let splice = JsBooks.splice(1, 3);
// console.log(splice);
// console.log(JsBooks);

//Makes a copy of a section

//Changes the original array

//Objects
// Objects store dat with key value pairs
// Objects values can be any data, including arrays, other objects and functions

let book = {
  title: "Eloquent JavaScript Third Edition",
  author: { name: "Marijn Haverbeke", age: 44 },
  price: 5,
  images: ["cover.png", "back.png"],

  info: function () {
    return "Eloquent JavaScript Third Edition by Marijn Haverbeke $5.00";
  },
};

//Accessing keys
book.title;

//Calling functions on an object
book.info();

//Updating objects
book.title = "Eloquent JavaScript 4th Edition";
//Access the keys
Object.keys(book);
//Access the values
Object.values(book);
//Access the keys and values
Object.entries(book);





let pokemon;
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((data) => data.json())
  .then((json) => (pokemon = json));
