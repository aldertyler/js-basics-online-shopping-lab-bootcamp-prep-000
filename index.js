var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var price = Math.floor(Math.random() * 100);
  var obj = {'itemName': `${item}`, 'itemPrice': price};
  cart.push(obj);
  return `${item} has been added to your cart.`;
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
