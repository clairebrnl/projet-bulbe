const buttonBurger = document.querySelector(".btn-burger");
const navItems = document.querySelector(".nav-items");

buttonBurger.addEventListener("click", function () {
  navItems.classList.toggle("active-nav-items");
});