const hamburger = document.querySelector('.hamburger');
const menuCollapse = document.querySelector('.menu-collapse');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    menuCollapse.classList.toggle('d-none');
    menuCollapse.style.order = '1';
    menu.classList.toggle('hamburgerer');
});