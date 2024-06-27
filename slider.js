let slideIndex = 0;
const slides = document.querySelectorAll('.portfolio-content .row');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlides() {
  
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100 / 2}%)`;
    });

   
    dots.forEach(dot => dot.classList.remove('active'));


    dots[slideIndex].classList.add('active');
}


showSlides();


setInterval(() => {
    slideIndex++;
    if (slideIndex > totalSlides / 2 - 1) { slideIndex = 0 }
    showSlides();
}, 3000);

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    const menuItems = navbar.querySelectorAll('a');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});