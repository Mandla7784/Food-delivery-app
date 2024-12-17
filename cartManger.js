const cartItems = JSON.parse(localStorage.getItem("cartitems")) || [];
const cartToggler = document.querySelector(".shoping-bag");
const cartItemsContainer = document.querySelector(".cart-items");
//events

let items = JSON.stringify(cartItems).split(",");
items.forEach((i) => {
  if (i.includes("")) {
    i.replace("button", " ");
    console.log(i);
  }
});

cartToggler.addEventListener("click", () => {});
