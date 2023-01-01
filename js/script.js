const burgerMenu = document.querySelector(".burger-menu a");
const cross = document.querySelector(".cross a");
burgerMenu.addEventListener("click", function () {
  const sideNav = document.querySelector(".side-nav");
  const overlay = document.querySelector(".overlay");
  sideNav.classList.add("active");
  overlay.classList.add("overlayActive");
});
cross.addEventListener("click", function () {
  const sideNav = document.querySelector(".side-nav");
  const overlay = document.querySelector(".overlay");
  sideNav.classList.remove("active");
  overlay.classList.remove("overlayActive");
});

/**slide left side nav**/
const slideLeftBtn = document.querySelector(".slide-left");
const sideNav = document.querySelector(".side-nav");
const mainSec = document.querySelector(".main");
slideLeftBtn.addEventListener("click", function () {
  sideNav.classList.toggle("slide-side-nav");
  slideLeftBtn.classList.toggle("slide-right");
  mainSec.classList.toggle("main-slide-left");
});
