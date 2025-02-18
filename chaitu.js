document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");
  
    function activateLink() {
      let scrollY = window.scrollY;
      let activeSet = false;
  
      sections.forEach((section) => {
        let sectionHeight = section.offsetHeight;
        let sectionTop = section.offsetTop - 50;
        let sectionId = section.getAttribute("id");
  
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(sectionId)) {
              link.classList.add("active");
              activeSet = true;
            }
          });
        }
      });
  
      if (!activeSet) {
        navLinks.forEach((link) => link.classList.remove("active"));
        document.querySelector('.navbar a[href="#home"]').classList.add("active");
      }
    }
  
    // Listen for scroll event
    window.addEventListener("scroll", activateLink);
  
    // Add click event to navbar links
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
    activateLink();
  });
  
  // Define your dark and light mode color schemes
  const darkMode = {
    bg: "#000000",    // dark background
    main: "#834bc4"   // accent color
  };
  
  const lightMode = {
    bg: "#6500c4",    // swapped background for light mode
    main: "#000000"   // swapped main color for light mode
  };
  
  let isDarkMode = true; // Start with dark mode
  
  // Set initial icon on page load (show sun icon to indicate switching to light mode)
  const modeToggleBtn = document.getElementById("mode-toggle");
  modeToggleBtn.innerHTML = '<i class="fa-regular fa-sun fa-spin"></i>';
  
  modeToggleBtn.addEventListener("click", function() {
    const root = document.documentElement;
    if (isDarkMode) {
      // Switch to light mode and update the button icon to show moon (for switching back to dark)
      root.style.setProperty("--bg-color", lightMode.bg);
      root.style.setProperty("--main-color", lightMode.main);
      this.innerHTML = '<i class="fa-solid fa-moon fa-beat"></i>';
      isDarkMode = false;
    } else {
      // Switch back to dark mode and update the button icon to show sun (for switching to light)
      root.style.setProperty("--bg-color", darkMode.bg);
      root.style.setProperty("--main-color", darkMode.main);
      this.innerHTML = '<i class="fa-regular fa-sun fa-spin"></i>';
      isDarkMode = true;
    }
  });
  