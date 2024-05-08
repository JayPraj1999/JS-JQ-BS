let slideIndex = 0;
    let slides = document.querySelectorAll('.box');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${index * 50}%)`;
        });
        slideIndex = index;
    }
    function nextSlide() {
        showSlide(slideIndex + 1);
    }
    function prevSlide() {
        showSlide(slideIndex - 1);
    }