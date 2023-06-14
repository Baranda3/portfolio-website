// Smooth Scroll
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// Sticky Navigation
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Responsive Navigation
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');

menuBtn.addEventListener('click', function() {
  nav.classList.toggle('show');
  menuBtn.classList.toggle('close');
});