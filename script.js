const burgerMenu = document.querySelector('#nav__burger');
const navMobile = document.querySelector('.nav__mobile');
// const header = document.querySelector('header');

burgerMenu.addEventListener('click', () => {
    navMobile.classList.toggle('show');
})