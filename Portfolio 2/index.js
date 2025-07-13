let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    if (navbar.classList.contains('active')) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
}

// Typed.js animation  //
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer....', 'Mern stack Developer....','Web Designer....'],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});
