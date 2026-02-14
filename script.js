let cartCount = document.getElementById("cartCount");
let totalPrice = document.getElementById("totalPrice");
let discountPrice = document.getElementById("discountprice");
let finalAmount = document.getElementById("finalAmount");
let deliveryPrice = document.getElementById("deliveryprice");
let highestProductPrice = document.getElementById("highestProductprice");

let products = [
  { id: 1, name: "laptop", price: 2000, quantity: 2, discount: 5 },
  { id: 2, name: "mobile", price: 1000, quantity: 3, discount: 5 },
  { id: 3, name: "mouse", price: 500, quantity: 4, discount: 10 },
  { id: 4, name: "keyboard", price: 3000, quantity: 5, discount: 5 },
];

products.push({ id: 5, name: "cable", price: 700, quantity: 7, discount: 5 });
cartCount.textContent = products.length;

let total = 0;
let totalDiscount = 0;
let highestProduct = products[0];

products.forEach((product) => {
  let totalAmount = product.price * product.quantity;
  let discountAmount = (totalAmount * product.discount) / 100;

  total += totalAmount;
  totalDiscount += discountAmount;

  totalPrice.textContent = total;
  discountPrice.textContent = totalDiscount;

  let finalPrice = total - totalDiscount;
  finalAmount.textContent = finalPrice;

  if (totalAmount > highestProduct.price * highestProduct.quantity) {
    highestProduct = product;
  }

  highestProductPrice.textContent = `${highestProduct.name} - ${highestProduct.price * highestProduct.quantity}`;

  if (finalPrice >= 20000) {
    deliveryPrice.textContent = "7000";
  } else if (finalPrice >= 10000 && finalPrice < 20000) {
    finalPrice.textContent = "5000";
  } else if (finalPrice <= 5000) {
    finalPrice.textContent = "Free Delivery";
  }
});
