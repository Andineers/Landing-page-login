// Mengambil elemen tombol dan form
const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

// Event listener untuk tombol Sign In
loginBtn.addEventListener("click", () => {
  loginBtn.style.backgroundColor = "#21264D";
  registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

  // Mengatur posisi dan opacity form login dan register
  loginForm.style.left = "50%";
  registerForm.style.left = "-50%";
  
  loginForm.style.opacity = 1;
  registerForm.style.opacity = 0;

  // Mengubah radius border kolom-1
  document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
});

// Event listener untuk tombol Sign Up
registerBtn.addEventListener("click", () => {
  loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  registerBtn.style.backgroundColor = "#21264D";

  // Mengatur posisi dan opacity form login dan register
  loginForm.style.left = "150%";
  registerForm.style.left = "50%";
  
  loginForm.style.opacity = 0;
  registerForm.style.opacity = 1;

  // Mengubah radius border kolom-1
  document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
});
