document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
  // Close menu on link click (mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if(window.innerWidth < 600) navLinks.classList.remove("open");
    });
  });
});