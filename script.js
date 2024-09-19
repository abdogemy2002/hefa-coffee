document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navbar = document.querySelector(".navbar");

  navToggle.addEventListener("change", function () {
    if (navToggle.checked) {
      navbar.classList.add("dark");
    } else {
      navbar.classList.remove("dark");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("change", () => {
      if (navToggle.checked) {
        navMenu.style.opacity = "1";
        navMenu.style.transform = "translateY(0)";
      } else {
        navMenu.style.opacity = "0";
        navMenu.style.transform = "translateY(-100%)";
      }
    });
  }
});
