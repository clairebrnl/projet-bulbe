//modification du dom pour la verison desktop
const hidden = document.querySelector(".sous-menu");
const activeHidden = document.querySelector(".deploy");
activeHidden.addEventListener("mouseover", function () {
  hidden.classList.toggle("active-sousMenu");
});
hidden.addEventListener("mouseover", function() {
  hidden.classList.toggle("active-sousMenu");
})
hidden.classList.toggle("active-sousMenu");

//---------------Button newsletter----

const btnPopup = document.getElementById('btnPopup');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btnClose');

btnPopup.addEventListener('click', openModal);

btnClose.addEventListener('click', closePopup);

function openModal (){
  overlay.style.display = "block";
}

function closePopup(){
  overlay.style.display='none';
}







