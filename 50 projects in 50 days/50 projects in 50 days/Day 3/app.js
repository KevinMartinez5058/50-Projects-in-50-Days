const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// a simple add and remove class to our page
open.addEventListener('click', () => container.classList.add('show-nav')); // adding show-nav which causes the rotate in the css
close.addEventListener('click', () => container.classList.remove('show-nav')); // removing it so it can go back to normal
