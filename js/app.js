// selectors
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const bioImage = document.querySelector('.bio-image');
const portraitImg = document.querySelector('.portrait');
// variables
let showMenu = false;

// functions
const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));
    portraitImg.classList.add('show');
    if (bioImage) {
      bioImage.classList.add('hide');
    }
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));
    portraitImg.classList.remove('show');
    if (bioImage) {
      bioImage.classList.remove('hide');
    }
    showMenu = false;
  }
};

// listeners
menuBtn.addEventListener('click', toggleMenu);

//date
const footerInfo = document.querySelector('#main-footer');
const date = new Date();
footerInfo.innerHTML = `Copyright &copy; ${date.getFullYear()} | Created by <a href="https://nahueluboldi.com/" target="_blank">Nahuel Uboldi</a>`;
