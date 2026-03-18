"use strict";
let secLogin = document.querySelector(".Login .container .right .login");
let secRegister = document.querySelector(".Login .container .right .register");
let toRegister = document.getElementById("toRegister");
let toLogin = document.getElementById("toLogin");
toRegister.onclick = () => {
  secLogin.style.display = "none";
  secRegister.style.display = "flex";
};
toLogin.addEventListener("click", () => {
  secRegister.style.display = "none";
  secLogin.style.display = "flex";
});

let mailInLogin = document.querySelector(
  ".Login .container .right .login #mail",
);
let passInLogin = document.querySelector(
  ".Login .container .right .login #pass",
);
let submitLogin = document.getElementById("submitLogin");
submitLogin.onclick = (e) => {
  e.preventDefault();
  if (
    mailInLogin.value == "admin@eelu.edu.eg" &&
    passInLogin.value == "admin"
  ) {
    localStorage.setItem("Admin", "True");
    window.location = "index.html";
  } else {
    localStorage.removeItem("Admin");
    window.location = "index.html";
  }
};
