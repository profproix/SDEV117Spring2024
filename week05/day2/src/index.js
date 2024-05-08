//For
// Iterates -> Loop
// condition
// variable ; condition ; i--

function countDownLoop(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}
//countDownLoop(5);

function countUpLoop(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

//countUpLoop(5);

//while
// Runs the code in the block as long as the condition is true
function countDownWhile(num) {
  let counter = num;
  while (counter >= 0) {
    console.log(counter);
    counter--;
  }
}
//countDownWhile(5);

function countDownDoWhile(num) {
  do {
    console.log(num);
    num--;
  } while (num >= 5);
}
//countDownDoWhile(5);

//Continue and Return
//adiglbehh

function findDup(string) {
  console.log(string.length);
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      return string[i];
    }
  }
  console.log("hi");
}
console.log(findDup("adhh"));

function lettersBeforeDups(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      count++;
    }

    if (string[i] === string[i + 1]) {
      break;
    }
  }

  if (count === string.length) {
    return "no doups";
  } else {
    return count;
  }
}
console.log(lettersBeforeDups("adjihhn"));
// a   d   h   h   e
//         i  i+1
// 0   1   2   3   4
