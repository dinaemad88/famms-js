const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('#cart-items');
const totalPriceSpan = document.querySelector('#total-price');
const totalBtn = document.querySelector('#total-btn');

let cartItems = [];
let totalPrice = 0;

addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const productPrice = btn.getAttribute('data-price');
    const  productPri = btn.getAttribute('name');
    cartItems.push(Number(productPrice));
    cartItemsList.innerHTML += `<p>$${productPrice}</p>`+  `<p>${productPri}</p>`+"<hr>";
    totalPrice += Number(productPrice) ;
    cartItems.push(Number(productPri));

  });
});

totalBtn.addEventListener('click', () => {
  totalPriceSpan.innerHTML = `$${totalPrice}`;
});
