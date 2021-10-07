const buttonBurger = document.querySelector(".logo-menu-burger");
const navItems = document.querySelector(".nav-items");

buttonBurger.addEventListener("click", function () {
  navItems.classList.toggle("active-nav-items");
});