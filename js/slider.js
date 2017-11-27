let slideIndex = 1;
showSlides(slideIndex);

function navSlider(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let nav = document.getElementsByClassName("nav");
    // let container = document.getElementsByClassName("slider_container");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (i = 0; i < nav.length; i++) {
        nav[i].className = nav[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    nav[slideIndex - 1].className += " active";
}

function moveSlide() {
    let slides = document.getElementById("test2");
    let position = 0;
    let int = setInterval(frame, 1);

    function frame() {
        if (position < -300) {
            clearInterval(int);
        } else {
            position--;
            slides.style.left = position + "px";
        }
    }
}