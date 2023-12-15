btn.onclick = function () {
    menu__open.classList.toggle('mobile-menu-side--hidden');
    header__close.classList.toggle('header--hidden');
}

const g = document.querySelectorAll('.nav__link--mobile')

g.forEach(element => {
    element.addEventListener('click', () => {
        menu__open.classList.toggle('mobile-menu-side--hidden');
        header__close.classList.toggle('header--hidden');
    })
});