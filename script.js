const message = "Merci ! ";

var el = document.getElementById("contactForm");
if (el != null) {
  el.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
}