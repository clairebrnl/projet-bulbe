//modification du dom pour la verison desktop
const listLink = document.querySelectorAll('.list-link');
const lien = document.querySelector('.active-menu')
const hiddenMenu = document.querySelector('.sous-menu')

document.body.addEventListener('mouseover', function(event) {
  console.log(event.target);
  if (event.target == lien || event.target == listLink) {
    console.log("j'active");
    hiddenMenu.classList.add('active-sousMenu');
   }
  else {
    console.log("j'efface");
    hiddenMenu.classList.remove('active-sousMenu')
  }
})



