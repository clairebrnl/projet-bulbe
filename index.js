const buttonToUnroll = document.querySelector('.menu-burger');
const hiddenMenu = document.querySelector('.navigation-menu');

buttonToUnroll.addEventListener('click', function() {
    hiddenMenu.classList.toggle('visible');
});