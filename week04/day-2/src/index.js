//Function Review and Scope
// Write a variable in global scope
const GLOBALTIMEVAR = new Date();
// Write a variable in fu(nction scope
function memberSale(rewardsMember) {
  //5
  if (rewardsMember === true) {
    alert(
      "Thank you for being a member of our rewards program! You Will get a free gift with your purchase!"
    );
    return true;
  }
}
// Write a variable in block scope
//Function returns a discount price

function buildTotal(arr) {
  //7th
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total.toFixed(2);
}

//Function for rendering a Recept
function renderReceipt(total, member) {
  //9th
  let receiptHTML = `<div>
  <h2>${GLOBALTIMEVAR}</h2>
  <h2>Order Receipt </h2>
  <p>Your total is  $${total}</p>
  </div>
  `;
  if (member === true) {
    receiptHTML =
      receiptHTML +
      `<div>
  <p> Enjoy this free bookmark as a rewards member!
  <img style="width:500px;" src="https://images.unsplash.com/photo-1561865406-62a037159577?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  
  </div>
  `;
  }

  document.querySelector("main").innerHTML = receiptHTML;
}

//APA citation for image
//Roy, K. (2019, June 30). four multicolored ornaments. Unsplash. https://unsplash.com/photos/four-multicolored-ornaments-bYy9hndOx0k
//"https://images.unsplash.com/photo-1561865406-62a037159577?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

//Call your other functions here
function main() {
  //2nd
  // [x, x, x, x]    0    1     2
  let bookPrices = [12, 10.95, 5.99];
  //3rd
  let userBookRewardMember = confirm("Are you a Rewards Member?");
  console.log(userBookRewardMember);
  //4th
  let isMember = memberSale(userBookRewardMember);
  // is member is true or undefined
  //6th
  let total = buildTotal(bookPrices);
  // total = 28.94
  //8th
  renderReceipt(total, isMember);
  //10th
}
//Runs first 1
main();
//11th end script
