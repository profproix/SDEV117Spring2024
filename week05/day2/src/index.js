function renderNumber(num) {
  document.querySelector("#counter").textContent = num;
}
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true
// Citation
// JavaScript for loop. (n.d.). https://www.w3schools.com/js/js_loop_for.asp

//Loops
//For loops
function countdownLoop(num) {
  for (let i = num; i > num; i--) {
    renderNumber(i);
    console.log(`number ${i}`);
  }
}

countdownForLoop(5);

//While
function countdownWhileLoop(num) {
  let i = num;
  while (i > num) {
    renderNumber(i);
    console.log(`number ${i}`);
    i--;
  }
}
countdownWhileLoop(5);

//DoWhile
function countdownDoWhile(num) {
  let i = num;
  do {
    renderNumber(i);
    console.log(`number ${i}`);
    i--;
  } while (i > num);
}
//countdownDoWhile(5);

//Continue and Return
function findDup(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      continue;
    }
    if (string[i] === string[i + 1]) {
      return string[i];
    }
  }
}
findDup("abcdeffghh");

//Break
function lettersBeforeDups(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      count++;
    } else {
      break;
    }
  }
  if (count == string.length) {
    return "no dups";
  } else {
    return count;
  }
}
lettersBeforeDups("abcdeffghh");
