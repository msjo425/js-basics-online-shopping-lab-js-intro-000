var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({itemName:item, itemPrice:(Math.floor(Math.random()*100))})
return `${item} has been added to your cart.`

}

function viewCart() {
if (cart.length>0){
var cue = ""
let i = 0
for (i = 0; i<cart.length; i++){
  cue = `${cue} ${cart[i].itemName} at $L${cart[i].itemPrice}${(i+1)<cart.length ? "," :""}`
}
return `In your cart, you have ${cue}`
}
else {
  return `Your shopping cart is empty.`
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
