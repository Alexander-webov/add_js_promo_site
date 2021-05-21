const menuElem = document.querySelector('.menu'),
    burgerElem = document.querySelector('.humburger-menu');


const toogleMenu = () => {
    menuElem.classList.toggle('menu-active');
    burgerElem.classList.toggle('humburger-menu-active')
}
const closeMenu = (e) => {
    if (e.target.classList.contains('menu-list__link')) {
        menuElem.classList.remove('menu-active');
        burgerElem.classList.remove('humburger-menu-active')
    }
}

burgerElem.addEventListener('click', toogleMenu);
menuElem.addEventListener('click', closeMenu);