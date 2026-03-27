"use strict";

const toMenu = document.getElementById("toMenu");
const linkes = document.getElementById("linkes");
const isAdmin = document.getElementById("isAdmin");
const userName = document.getElementById("userName");
toMenu.addEventListener("click", () => {
  linkes.classList.toggle("active");
});
// scroll effect
window.addEventListener("scroll", () => {
  linkes.classList.toggle("scrolled", window.scrollY > 200);
});

// responsive fix
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1270) {
    linkes.classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  if (
    linkes.classList.contains("active") &&
    !linkes.contains(e.target) &&
    !toMenu.contains(e.target)
  ) {
    linkes.classList.remove("active");
  }
});

if (!localStorage.getItem("Admin")) {
  isAdmin.style.display = "none";
  userName.innerHTML = localStorage.getItem("userName");
}
