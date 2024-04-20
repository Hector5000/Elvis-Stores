hamburger = document.querySelector(".hamburger")
    hamburger.onclick = function() {
      navB = document.querySelector(".nav-b");
      navB.classList.toggle("active");
    }




     // JavaScript for slider functionality
     const slides = document.querySelectorAll('.slide');
     let currentSlide = 0;
   
     function showSlide(n) {
       slides[currentSlide].classList.remove('active');
       currentSlide = (n + slides.length) % slides.length;
       slides[currentSlide].classList.add('active');
     }
   
     function prevSlide() {
       showSlide(currentSlide - 1);
     }
   
     function nextSlide() {
       showSlide(currentSlide + 1);
     }
   
     document.querySelector('.prev').addEventListener('click', prevSlide);
     document.querySelector('.next').addEventListener('click', nextSlide);
   
     setInterval(nextSlide, 3000); // Change slide every 3 seconds


// for new section
function zoomImage(element) {
  var parentCard = element.closest('.nw-card');
  var image = parentCard.querySelector('img');
  // Toggle class to zoom in/out
  image.classList.toggle('zoomed');
}