const toggle = document.getElementById("header__toggle");
const navLinks = document.getElementById("header__links-container");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});
