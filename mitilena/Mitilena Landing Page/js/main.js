const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element;
    throw new Error(`Something went wrong, please check ${element}  typed correctly`)
};


const menuToggleIcon = selectElement('#toggle__btn');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);