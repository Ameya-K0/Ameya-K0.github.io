document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });
});
let slideIndex = 0; // Start at first slide
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex); // Ensure only one image is shown at first
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    // If out of range, loop back
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides before displaying one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show only the correct slide
    slides[slideIndex].style.display = "block";
}


// Auto-slide every 5 seconds (optional)
setInterval(() => {
    plusSlides(1);
}, 5000);

