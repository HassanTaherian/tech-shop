const openSideMenu = document.querySelector('.navbar-toggler');
const closeSideMenu = document.querySelector('.close-side-menu');
const sideMenu = document.querySelector('#mobile-side-menu');

function openMenu(e) {
  sideMenu.style.width = "100vh";
}

function closeMenu(e) {
  sideMenu.style.width = "0";
}

openSideMenu.addEventListener('click', openMenu);
closeSideMenu.addEventListener('click', closeMenu);
