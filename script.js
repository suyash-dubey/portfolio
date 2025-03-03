// Enhancing interactivity with JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const profileContainer = document.querySelector(".profile-container");
    const navLinks = document.querySelectorAll(".nav-link");
    
    // Smooth fade-in effect
    profileContainer.style.opacity = 0;
    setTimeout(() => {
        profileContainer.style.transition = "opacity 1.5s ease-in-out";
        profileContainer.style.opacity = 1;
    }, 500);

    // Neon glow effect on hover
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.textShadow = "0 0 15px #ff00ff";
        });
        link.addEventListener("mouseout", function () {
            this.style.textShadow = "none";
        });
    });

    // Dynamic background animation
    const animatedBg = document.querySelector(".animated-bg");
    let mouseX = 0, mouseY = 0;
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
        animatedBg.style.background = `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, rgba(0, 0, 0, 0.9), rgba(10, 10, 10, 1))`;
    });
});
