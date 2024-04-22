// Function Review and Scope
let GLOBALTIMEVAR = new Date();

// Function that alerts users if a Book Club is today
function bookClubDayFoo() {
  //Book Club will be on Sunday
  let bookClubDay = 1;
  if (GLOBALTIMEVAR.getDay() == bookClubDay) {
    let string = "The Book Club is today!";
    alert(string);
  }
}

//bookClubDayFoo();
//Time and bookClubDay are in function scope

//While Loops
function counter(num) {
  let counter = 1;
  while (counter !== num) {
    console.log(`${counter} and a `);
    counter++;
  }
  //Paused until while loop has ended
  console.log("Music happens");
}
console.log(counter(10));
//|Loop | Num | Counter |
//----------------------
//  0   |  10 |   1
//  1   |  10 |   1    | 1 and a...
//  2   |  10 |   2    | 2 and a....
//  3   |  10 |   3    | 3 and a...
//  4   | 10  |   4    | 4 and a...
//  5   | 10  |   5    | 5 and a...
// ...............
//  10  | 10  | 10     |
//For Loops

function printLetters(name) {
  for (let i = 0; i < name.length; i++) {
    console.log(i);
    console.log(name);
    console.log(name[i]);
  }
}
printLetters("ixius");

// name.length === 5
// L |  i  |  ch
// 1    0      i
// 2    1      x
// 3    2      i
// 4    3      u
// 5    4      s
// 6    5
