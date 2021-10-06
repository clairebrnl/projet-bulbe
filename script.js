const message = "Merci pour votre retour ! ";

var el = document.getElementById("contactForm");
if (el != null) {
  el.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
}