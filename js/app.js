// DOM Elements
const navLinks = Array.from(document.querySelectorAll('.header-nav a'));

// Active Class Toggle
navLinks.forEach(navLink => {
  navLink.addEventListener('click', (e) => {
    const navLinkActive = document.querySelector('.header-nav .active');

    if (!e.target.classList.contains('active')) {
      e.target.className = 'active';
      navLinkActive.className = '';
    }
  })
})

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.fa-phone').style.color = '#B73225';
  document.querySelector('.fa-envelope').style.color = '#004E7C';
})