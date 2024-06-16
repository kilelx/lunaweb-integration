const burgerMenu = document.querySelector('.nav__burger');
const navMobile = document.querySelector('.nav__mobile');

burgerMenu.addEventListener('click', () => {
    navMobile.classList.toggle('show');
    if(navMobile.classList.contains('show')) {
        document.body.style.overflowY = 'hidden';
        document.body.style.maxHeight = '100vh';
    } else {
        document.body.style.overflowY = 'visible';
        document.body.style.maxHeight = 'auto';
    }
})