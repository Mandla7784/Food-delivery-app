/**
 * TODO: fixing the media screen  for navbar to be resposnive
 *  when we click on the cart toggler icon the cart must show
 *
 */
/**
 * TODO: we must use localstorage or firebase to cart store items
 */

const navbarToggler = document.querySelector("#toggler");
const navbar = document.querySelector(".navbar");
const burgerIcon = document.querySelector(".burger");
//events
navbarToggler.onclick = () => {
  if (navbar.classList.contains("hide")) {
    navbar.classList.remove("hide");
  } else {
    navbar.classList.add("hide");
  }
};

burgerIcon.onclick = () => {
  navbar.classList.remove("hide");
};

// Cart functionality
const allCartButtons = document.querySelectorAll(".cartbtn");
allCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Clickedd");
  });
});
