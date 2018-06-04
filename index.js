var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var obj = {'itemName': `${item}`, 'itemPrice': price};
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

  function viewCart() {
   var message = [];
    if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
  for (let i = 0; i < cart.length; i++) {
  if (i===0) {
    message[i] = `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (cart.length < 2) {
    message[i] = `${message[i]}.`;
    }
  }
  else if (i < cart.length-1) {
    message[i] = (`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  else if (i < cart.length) {
    message[i] = (`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
  }
  }
}
return message.join(', ');
  }

function total() {
  

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
}
