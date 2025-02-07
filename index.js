// SVG Animation
gsap.fromTo("#svg", { strokeDashoffset: 4500 }, {
    strokeDashoffset: 0,
    duration: 4,
    ease: "power2.inOut"
});

// Fade-in Text Animation
gsap.fromTo("#logoText", { opacity: 0 }, {
    opacity: 1,
    duration: 3,
    delay: 3,
    ease: "power2.out"
});

// Hide Loading Page Animation
gsap.to(".lpage", {
    opacity: 0,
    duration: 1.5,
    delay: 4,
    ease: "power2.out"
});
// Wait for the logo animation to complete, then redirect
gsap.to("#svg", {
    strokeDashoffset: 0,
    duration: 5,  // Adjust based on your animation duration
    onComplete: function() {
        setTimeout(() => {
            window.location.href = "chaitu.html"; // Change 'main.html' to your actual main page filename
        }, 1000); // Adjust delay if needed
    }
});

