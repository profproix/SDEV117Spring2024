let userInput = prompt("Hello Can I take your order");

function placeOrder(order) {
  if (order == "pizza") {
    document.querySelector("h2").textContent = "Your total will be $19.99";
  } else {
    document.querySelector("h2").textContent =
      "Sorry we don't have that, would you like a Pizza?";
  }
}
placeOrder(userInput);
