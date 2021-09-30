const hidden = document.querySelector(".sous-menu");
const activeHidden = document.querySelector(".deploy");

activeHidden.addEventListener("click", function () {
  hidden.classList.toggle("active-sousMenu");
});
