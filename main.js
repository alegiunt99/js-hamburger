// Mostrare la lista del menu al click del menu ad hamburger


// lista dei link
const hamburgerMenu = document.querySelector(".hamburger-menu");


// pulsante per aprire la tendina dei link
const openMenuBtn = document.querySelector(".header-right a .fa-bars");


// pulsante per chiudere la tendina dei link
const closeMenu = document.querySelector(".hamburger-menu .close");


// attivare l'apertura del menu a tendina

openMenuBtn.addEventListener('click',
    function () {
    hamburgerMenu.style.display = 'block';
    openMenuBtn.style.display = 'none';
})