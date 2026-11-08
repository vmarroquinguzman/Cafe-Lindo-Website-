
// ==================================
// CAFÉ LINDO - JAVASCRIPT
// ==================================

// Automatically update the copyright year

const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==================================
// Navigation Link Highlighting
// ==================================

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {

  link.addEventListener('click', () => {

    // Remove active class from all links
    navLinks.forEach((item) => {
      item.classList.remove('active');
    });

    // Highlight the clicked link
    link.classList.add('active');

  });

});


// ==================================
// HERO IMAGE SLIDESHOW
// ==================================

const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slide-dot');

let currentSlide = 0;
let slideshowInterval;

function showSlide(index) {

  // Remove active class from all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Remove active class from all dots
  dots.forEach((dot) => {
    dot.classList.remove('active');
    dot.setAttribute('aria-pressed', 'false');
  });

  // Activate selected slide
  currentSlide = index;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  dots[currentSlide].setAttribute('aria-pressed', 'true');

}

// Move to next slide
function nextSlide() {

  const next = (currentSlide + 1) % slides.length;

  showSlide(next);

}

// Start the automatic slideshow
function startSlideshow() {

  clearInterval(slideshowInterval);

  slideshowInterval = setInterval(nextSlide, 5000);

}

// Allow users to click the dots
dots.forEach((dot, index) => {

  dot.addEventListener('click', () => {

    showSlide(index);

    // Restart timer after manual selection
    if (slideshowInterval) {
      startSlideshow();
    }

  });

});

// Start only when slideshow elements exist
if (slides.length > 0 && slides.length === dots.length) {

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    startSlideshow();
  }

}
