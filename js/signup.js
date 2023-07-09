"use strict";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "manggo" && password === "8888") {
  }
});

function moveToMain() {
  location.replace("./main.html");
}
loginButton.addEventListener("click", moveToMain);
