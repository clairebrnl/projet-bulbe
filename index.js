
//modification du dom pour la verison desktop
const hidden = document.querySelector(".sous-menu");
const activeHidden = document.querySelector(".deploy");
activeHidden.addEventListener("mouseover", function () {
  hidden.classList.toggle("active-sousMenu");
});
hidden.addEventListener("mouseover", function() {
  hidden.classList.toggle("active-sousMenu");
})

//---------------Button newsletter-------- en cours-------//

const btnPopup = document.getElementById('btnPopup');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btnClose');
const btnMail = document.getElementById('btnMail');

btnPopup.addEventListener('click', openModal);

btnClose.addEventListener('click', closePopup);

btnMail.addEventListener('click', closeAlertPopup);

function openModal (){
  overlay.style.display = "block";
}

function closePopup(){
  overlay.style.display='none';
}

function closeAlertPopup() {
  overlay.style.display = 'none';
  alert('Merci !');
  
}


//---------------Button contact---------------//
const message = "Merci pour votre retour ! ";



var el = document.getElementById("contactForm");
if (el != null) {
  el.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
}
