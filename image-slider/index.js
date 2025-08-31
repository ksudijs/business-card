const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let intervalId = null;
let autoIntervalId = null; 
let autoIntervalIdValid = false;

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 2000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide'); 
    })
    slides[slideIndex].classList.add('displaySlide'); 
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide(){
    clearInterval(intervalId);
    clearInterval(autoIntervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function resetInitializeSlider(){
    clearInterval(intervalId);
    clearInterval(autoIntervalId);
    if(!autoIntervalIdValid){
        autoIntervalId = setInterval(nextSlide, 2000);
        autoIntervalIdValid = false;
    }
}


