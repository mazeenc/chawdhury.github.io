
const navMenu = document.getElementById('nav-menu'),
  navList = document.querySelector('.nav-list'),
  navItem = document.querySelector('.nav-item'),
  navLink = document.querySelector('.nav-link');

hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
  navMenu.classList.toggle('active');
}
