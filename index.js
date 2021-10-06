//modification du dom pour la verison desktop
const hidden = document.querySelector(".sous-menu");
const activeHidden = document.querySelector(".deploy");
activeHidden.addEventListener("mouseover", function () {
  hidden.classList.toggle("active-sousMenu");
});
hidden.addEventListener("mouseover", function() {
  hidden.classList.toggle("active-sousMenu");
})



