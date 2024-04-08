//What is a program
    // A sequence of instructions 
//Joke
// A room mate asked his friend who is a programmer to go shopping.

// "hey, can you buy a bottle of milk? Oh and if they have eggs, buy 12"

// So the programmer went shopping.

// When she got back, she bought 12 bottle of milk and her room mate asked

// "why the heck did you bought 12 bottle of milk?!"

// The programmer responded.

// "they have eggs"

//The joke here is the literal interpretation of instruction.
// We know from our own context that the room mate meant buy 12 eggs if they have eggs at the store. 
// But if we gave those instructions to a computer, it wouldn't have access to that context, so to the computer the instruction would be
// Buy Milk
// If eggs 
//   Buy 12 Milk


// A program runs top to bottom 
// Console.log logs something to the console. 
// In this case it will log it to our browser console
console.log("Hello World");
console.log("c");
console.log("a");

//Datatypes
//Primitive 
// String : Text
    console.log(typeof "a");
    console.log("cat");
    console.log("");
    console.log("hey, can you buy a bottle of milk? Oh and if they have eggs, buy 12");
    console.log(' So the programmer went shopping.');
    console.log(`When she got back, he bought 12 bottle of milk and his room mate asked`);
// Boolean.
console.log(true);
console.log(false);
//Comparison operators
console.log("a" == "a");
console.log("a" == "b");
console.log(1 == "1");
//strict equal
console.log(1 === "1");
// does not equal
console.log("a" !== "b"); //true
console.log("a" !== "a"); //false
// Number.
    console.log(typeof 1);
    console.log(1.001);
    console.log(-1);
    console.log(typeof NaN);

    console.log(1 === 1);
    //NaN is a little weird 
    console.log(NaN === NaN); // false
    console.log(isNaN(NaN)); //
// Bigint.
    console.log(Number.MAX_SAFE_INTEGER);
    // Under the hood, Integer values lose precision after this.
    console.log(BigInt(9007199254740992234232));

// Undefined.
// not defined and undefined are not the same
console.log(undefined);
// Null.
// given a value of nothing
console.log(null);
// undefined - > something that is missing a value, it should have
// null -> something that, ideally, intentionally doesn't have a value
// Symbol.
// represents unique values and are used as identifiers or keys to objects.

//Non-Primitive 
// Object.
console.log({cat:"rose"});
//Variables
//Container for data
let cat;
console.log(cat);
cat = "rose";
console.log(cat);
cat = "Tom";
console.log(cat);
// Strongly typed
// In other languages you'd need to define cat as a string
// string cat = "rose" We don't need to do this in JS

const dog = "Andy"
//dog = "Sage"
//index.js:96 Uncaught TypeError: Assignment to constant variable.at index.js:96:5
console.log(dog)

//Don't use var. I'll show you why wednesday. 
var fish = "Fred"

//The power of variables
console.log("This weekend I am going camping with rose")
// `` template literal it allows string interpolation
// Translation: We can embed JS into the string 
// In this case we can put a variable here in place of rose. 
console.log(`This weekend I am going camping with ${cat}`)

cat = 'muffin'
console.log(`This weekend I am going camping with ${cat}`)


//Functions
//Functions are containers for code with a specific task



//Wat
// console.log([] + [])
// console.log([] + {})
// console.log({} + [])
// console.log({} + {})
// console.log(Array(16).join("wat" + 1))
// console.log(Array(16).join("wat" - 1)+" Batman")
