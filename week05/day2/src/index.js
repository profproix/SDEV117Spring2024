function renderNumber(num) {
  document.querySelector("#counter").textContent = num;
}

//Loops
//For loops

function countdownLoop(num) {
  for (let i = 0; i < num; i++) {
    renderNumber(i);
    console.log(`number ${i}`);
  }
}
//countdownForLoop(5);

function countdownWhileLoop(num) {
  let i = 0;
  while (i < num) {
    renderNumber(i);
    console.log(`number ${i}`);
    i++;
  }
}
countdownWhileLoop(5);

function countdownDoWhile(num) {
  let i = 0;
  do {
    renderNumber(i);
    console.log(`number ${i}`);
    i++;
  } while (i < num);
}
//countdownDoWhile(5);

//Fount duplicate
//Continue
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
