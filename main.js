"use strict";

let toMenu = document.getElementById("toMenu");
let sideBar = document.getElementById("sideBar");

toMenu.onclick = () => {
  sideBar.classList.toggle("active");
};

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1270) {
    sideBar.classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  if (
    sideBar.classList.contains("active") &&
    !sideBar.contains(e.target) &&
    !toMenu.contains(e.target)
  ) {
    sideBar.classList.remove("active");
  }
});