var typed = new Typed("#element", {
  strings: [
    "All Type of Security",
    "Safety Services",
    "Housekeeping",
    "Manpower Services",
  ],
  typeSpeed: 150,
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const hamToggles = document.querySelectorAll(".ham-toggle");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

hamToggles.forEach((hamToggle) => {
  hamToggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});