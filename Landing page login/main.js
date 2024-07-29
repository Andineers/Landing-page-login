const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginBtn = document.querySelector(".login-form");
const registerBtn = document.querySelector(".register-form");

loginBtn.addEventListener("click", () => {
  loginBtn.style.backgrounColor = "#21264D";
  registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
});

registerBtn.addEventListener("click", () => {
  loginBtn.style.backgrounColor = "rgba(255, 255, 255, 0.2)";
  registerBtn.style.backgroundColor = "#21264D";
});
