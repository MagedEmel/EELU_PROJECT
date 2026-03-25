"use strict";

const toMenu = document.getElementById("toMenu");
const sideBar = document.getElementById("sideBar");

// scroll effect
window.addEventListener("scroll", () => {
  sideBar.classList.toggle("scrolled", window.scrollY > 200);
});

// open / close menu
toMenu.onclick = () => {
  sideBar.classList.toggle("active");
};

// responsive fix
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1270) {
    sideBar.classList.remove("active");
  }
});

// click outside
document.addEventListener("click", (e) => {
  if (
    sideBar.classList.contains("active") &&
    !sideBar.contains(e.target) &&
    !toMenu.contains(e.target)
  ) {
    sideBar.classList.remove("active");
  }
});