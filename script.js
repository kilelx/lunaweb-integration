const burgerMenu = document.querySelector('.nav__burger');
const navMobile = document.querySelector('.nav__mobile');

burgerMenu.addEventListener('click', () => {
    navMobile.classList.toggle('show');
    burgerMenu.classList.toggle('show');
    if(navMobile.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'visible';
    }
})