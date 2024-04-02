const sideMenuOpenBtn = document.querySelector('.header__side-menu-open-btn');
const sideMenuCloseBtn = document.querySelector('.side-menu__close-btn');
const sideMenu = document.querySelector('.side-menu');
const overlayMenu = document.querySelector('.overlay--menu');
const overlayModal = document.querySelector('.overlay--modal');

const WIDTH_SCREEN = 1440;
const ESC_KЕYCODE = 27;

import {escKeydownHandler} from '../js/open-modal.js';

// открывает боковое меню
function openSideMenu() { 
  sideMenu.classList.add('side-menu--active');
  overlayMenu.classList.add('overlay--active');
  document.addEventListener('keydown', escKeydownHandler);
  sideMenuCloseBtn.addEventListener('click', sideMenuModalCloseButtonClickHandler);
  overlayMenu.addEventListener('click', sideMenuModalCloseButtonClickHandler);
}

// закрывает боковое меню
function closeSideMenu() {
  sideMenu.classList.remove('side-menu--active');
  overlayMenu.classList.remove('overlay--active');
  document.removeEventListener('keydown', escKeydownHandler);
  sideMenuCloseBtn.removeEventListener('click', sideMenuModalCloseButtonClickHandler);
  overlayMenu.removeEventListener('click', sideMenuModalCloseButtonClickHandler);
}

//убирает все классы сайд-меню на десктопе
function removeClass() {
  if(window.innerWidth >= WIDTH_SCREEN) {
    sideMenuModalCloseButtonClickHandler();
  }
}

//функции слушателей
function sideMenuModalOpenButtonClickHandler() {
  openSideMenu();
}
function sideMenuModalCloseButtonClickHandler() {
  closeSideMenu();
}
function windowResizeHandler() {
  removeClass();
};

//слушатели
sideMenuOpenBtn.addEventListener('click', sideMenuModalOpenButtonClickHandler);
window.addEventListener('resize', windowResizeHandler);