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
  cue = `${cue}${cart[i].itemName} at $${cart[i].itemPrice}${i+2<cart.length ? ", " :""}${i+2==cart.length ? ", and " : "" }`
}
return `In your cart, you have ${cue}.`
}
else {
  return `Your shopping cart is empty.`
}
}

function total() {
let i = 0
let price = 0
for (i= 0; i<cart.length; i++){
price += cart[i].itemPrice
}
return price
}

function removeFromCart(item) {
for (i = 0; i<cart.length)
 if (item != cart[i].itemName){
 i = cart.length
}
else {
  i += 1
}

}

function placeOrder(cardNumber) {
  // write your code here
}
