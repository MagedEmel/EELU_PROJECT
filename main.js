"use strict";

let toLoginFromHome = document.querySelector(
  ".header .container .user .logout #toLogin",
);
toLoginFromHome.onclick = () => {
  window.location = "login.html";
};
