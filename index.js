var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {[itemName]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

  function viewCart() {
  var initialString = 'In your cart, you have ';
  var cartItems = [];
  var cartPrices = [];
  for(var i = 0; i < cart.length; i++) {
    cartItems.push(cart[i]);
    cartPrices.push(cart.i);
  }
  }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
}
