

function closeMenu(){
  menu.classList.add('close')
  menu.classList.remove('open')
  }

const menu = document.querySelector('#menu_features');


function openMobileMenu(){
  mobile_menu.classList.add('mobile_open');
  mobile_menu.classList.remove('mobile_close')
  overlay.classList.add('open');
  overlay.classList.remove('close')
}


function closeMobileMenu(){
  mobile_menu.classList.add('mobile_close');
  mobile_menu.classList.remove('mobile_open')
  overlay.classList.add('close');
  overlay.classList.remove('open')
}


const mobile_menu = document.querySelector('#menu_mobile_modal')
const overlay = document.querySelector('.overlay')