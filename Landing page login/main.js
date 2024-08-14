const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginBtn = document.querySelector(".login-form");
const registerBtn = document.querySelector(".register-form");

loginBtn.addEventListener("click", () => {
  loginBtn.style.backgrounColor = "#21264D";
  registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

  loginForm.style.left ="50%";
  registerForm.style.left ="50%";


  loginForm.style.opacity = 0
  registerForm.style.opacity = 1

  document.querySelector(".col-1").style.borderradius = "0 30% 20% 0";
});

registerBtn.addEventListener("click", () => {
  loginBtn.style.backgrounColor = "rgba(255, 255, 255, 0.2)";
  registerBtn.style.backgroundColor = "#21264D";

  loginForm.style.left ="150%";
  registerForm.style.left ="150%";

  loginForm.style.opacity = 0
  registerForm.style.opacity = 1

  document.querySelector(".col-1").style.borderradius = "0 20% 30% 0";
});
