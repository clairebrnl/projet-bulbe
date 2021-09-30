const buttonToActive = document.querySelector('.button-menu');
const navMenu = document.querySelector('.nav-list');

buttonToActive.addEventListener('click', function () {
    navMenu.classList.toggle('active');
})