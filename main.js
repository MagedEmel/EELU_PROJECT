"use strict";

let toMenu = document.getElementById("toMenu");
let sideBar = document.getElementById("sideBar");
toMenu.onclick = () => {
  sideBar.classList.toggle("active");
};
window.addEventListener("resize", function () {
    if (window.innerWidth >= 1270 && sideBar.classList.contains("active")) {
        sideBar.classList.remove("active");
    }
});
