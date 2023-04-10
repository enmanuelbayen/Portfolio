console.log("***** Elementos del DOM.js *****");

const mobileMenu = document.querySelector('.contenedor');
const menuBttn = document.getElementById('menu-icon');
const anchorList = document.querySelectorAll('.anchor-section');

menuBttn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
})

const remove = document.querySelector('.x-remove');

remove.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
})

anchorList.forEach((anchorList) => {
    anchorList.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});


