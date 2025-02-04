document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });
});
let slideIndex = 0; // Start at first slide
showSlides(slideIndex);

// Function to move slides forward or backward
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to display slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    // Loop slides back to the start/end if out of range
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex].style.display = "block";
}

// Auto-slide every 5 seconds (optional)
setInterval(() => {
    plusSlides(1);
}, 5000);

