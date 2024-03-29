const nav = document.querySelector('.desktop__top');
const navOuter = document.querySelector('.desktop__top--outer');

window.addEventListener('scroll', stickyNav = () => {
    nav.classList.toggle('sticky', window.scrollY > 0);
    navOuter.classList.toggle('sticky--outer', window.scrollY > 0);    
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__list');

hamburger.addEventListener('click', handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('nav-active');
})