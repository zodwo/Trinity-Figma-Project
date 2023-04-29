// OnClick obhect
const hamburger = document.querySelector(".menu-logo"); // 1
const lang = document.querySelector(".lang"); // 2
const navigation = document.querySelector(".navigation"); // 3
const popup = document.querySelector(".open-pop"); //4

// be active elements
const navBar = document.querySelector(".nav-col1"); // 1
const langBar = document.querySelector(".nav-col3-txt-wrapper"); // 2
const BarNav = document.querySelector(".navigator-dubai"); // 3
const popupOp = document.querySelector(".pop-up-wrapper"); //4
const menu_wrapper = document.querySelector(".list-main-wrapper"); //5

//active

// Mobile Menu
hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menu_wrapper.classList.toggle("active");
});
// Mobile menu wrapper
menu_wrapper.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menu_wrapper.classList.toggle("active");
});

// Lang Menu
lang.addEventListener("click", () => {
  langBar.classList.toggle("active");
});

// right nav
navigation.addEventListener("click", () => {
  BarNav.classList.toggle("active");
});

// pop up

popup.addEventListener("click", () => {
  popupOp.classList.toggle("active");
});
