//   scroll reveal
ScrollReveal({
  //   reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.homet-content, .home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.homet-content a, .vid-btn, .home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
