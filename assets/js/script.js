
btn.onclick = function () {
    menu__open.classList.toggle('mobile-menu-side--hidden');
    header__close.classList.toggle('header--hidden');
    
    // Add or remove "overflow-hidden" class from the body element
    document.body.classList.toggle('overflow-hidden');
}

const g = document.querySelectorAll('.nav__link--mobile')

g.forEach(element => {
    element.addEventListener('click', () => {
        menu__open.classList.toggle('mobile-menu-side--hidden');
        header__close.classList.toggle('header--hidden');
        
        // Add or remove "overflow-hidden" class from the body element
        document.body.classList.toggle('overflow-hidden');
    })
});

