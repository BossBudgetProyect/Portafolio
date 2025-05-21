let index = 0;
 const slides = document.getElementById("slides");
const total = slides.children.length;
      
function cambiarSlide(dir) {
index = (index + dir + total) % total;
slides.style.transform = `translateX(-${index * 100}%)`;
}
    