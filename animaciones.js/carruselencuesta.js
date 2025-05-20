document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-image');
  const titles = [
    "¿Qué motivó impide aplicar recurrentemente un debido hábito para el manejo del presupuesto personal y/o familiar?",
    "Si tuviera que llevar un control de su presupuesto, a través de una aplicación móvil, ¿Cuáles de estas características le gustaría tener a su servicio",
    "Poniéndose en situación en la cuál una persona le pide la ayuda para controlar su vida económica y encontrar una estabilidad para mejorar su calidad de vida ¿Qué método le aconsejaría?"
  ];
  const titleElement = document.getElementById('slide-title');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove('opacity-0');
        slide.classList.add('opacity-100');
        slide.style.zIndex = '10';
      } else {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
        slide.style.zIndex = '0';
      }
    });

    // Cambiar título dinámicamente
    titleElement.textContent = titles[index];
  }

  window.nextSlide = function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  window.prevSlide = function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  showSlide(currentSlide);
});
