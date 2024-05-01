//See Readme for instructions
//Note: Do not rename the function. It's being used to test your code below
// Write your solution inside the isPalindrome function.

function isPalindrome(string) {
  //Write your code here
}

// Do not change the code below
// The function is invoked here to test your code.
// Open the index.html in the browser to see the results.

console.log(isPalindrome("tacocat")); // should print true
console.log(isPalindrome("noon")); // should print true
console.log(isPalindrome("rose")); // should print false
console.log(isPalindrome("")); // should print false because it's an empty string.

//Solution:
// There are many solutions to this, but here's one. If yours does not match this, it's still likely a correct solution so long as you get the expected outputs above. Check with your professor if you're unsure.
//What you'll do:
// 		Start at either end of the string and check every character until you reach the middle.
//             If each character is the same, you have a palindrome.
// Code:
// Create a variable called start and set it to 0;
// Create a variable called end and set it to string.length
//
// The Why: These will act as pointers at the start and end of our string, much like the image Readme.

// Code:
// Create a while loop with the condition start <= end
//
// The Why: If the start and end meet at the same index or pass each other, we know we've reached the middle of our string

// Code:
// In the while loop create an if statement with the condition string[start] !== string[end], return false
//
// The Why: If the character at either pointer do not match, the string is not a Palindrome

// Code:
// After the loop return true
//
// The Why: If we reach the end of our loop without hitting out if condition it means the string was a Palindrome
