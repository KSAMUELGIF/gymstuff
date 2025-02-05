let menu = document.querySelector('#menu-icon'); // Fixed typo
let navbar = document.querySelector('.navbar');

// Toggle menu and navbar on menu icon click
menu.onclick = () => {
  menu.classList.toggle('bx-x'); // Ensure the CSS has the "bx-x" class for styling
  navbar.classList.toggle('active'); // Ensure the "active" class is defined in the CSS
};

// Close menu and navbar when scrolling
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Typing text animation using Typed.js
const typed = new Typed('.multiple-text', {
  strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight Lifting', 'Running'],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
