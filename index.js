//---------------Button newsletter-------- en cours-------//

const btnPopup = document.getElementById("btnPopup");
const overlay = document.getElementById("overlay");
const btnClose = document.getElementById("btnClose");
const btnMail = document.getElementById("btnMail");

btnPopup.addEventListener("click", openModal);

btnClose.addEventListener("click", closePopup);

btnMail.addEventListener("click", closeAlertPopup);

function openModal() {
  overlay.style.display = "block";
}

function closePopup() {
  overlay.style.display = "none";
}

function closeAlertPopup() {
  overlay.style.display = 'none';
  alert('Merci ! Tu ne sera plus mou du BULB !');
  
}


//----------------Button envoyer ------------//

const btnCom = document.querySelector('.btn-7');

btnCom.addEventListener('click', maintenance);

function maintenance(){
  alert("Impossible d'envoyer un commentaire ! Vérifier votre connection internet !");
};

//---------------Button burger-------//

var el = document.getElementById("contactForm");
if (el != null) {
  el.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
}
