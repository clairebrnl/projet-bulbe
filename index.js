const buttonToActive = document.querySelector(".button-menu");
const navMenu = document.querySelector(".nav-list");
const hidden = document.querySelector(".sous-menu");
const activeHidden = document.querySelector(".deploy")

buttonToActive.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

activeHidden.addEventListener("click", function () {
  hidden.classList.toggle("active-sousMenu");
});
