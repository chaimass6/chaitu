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
