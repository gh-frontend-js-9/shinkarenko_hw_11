// sign up form
async function signUp() {
  let signUpEmail = document.getElementById("signup-email").value;
  let signUpPassword = document.getElementById("signup-password").value;
  let signUpName = document.getElementById("signup-name").value;

  let information = {
    "email": signUpEmail,
    "password": signUpPassword,
    "name": signUpName
  };
  console.log(information);

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(information)
  };
  let response = await fetch("http://localhost:3000/api/users/", options);
  console.log(await response.json());
}


// login form
async function login() {
  let loginEmail = document.getElementById("login-email").value;
  let loginPassword = document.getElementById("login-password").value;

  let information = {
    "email": loginEmail,
    "password": loginPassword
  };
  console.log(information);

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(information)
  };
  let response = await fetch("http://localhost:3000/api/users/login", options);
  console.log(await response.json());
}


// reset password form
async function reset() {
  let resetEmail = document.getElementById("reset-email").value;
  let resetPassword = document.getElementById("reset-password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  let information = {
    "email": resetEmail,
    "password": resetPassword,
    "confirmationPassword": confirmPassword
  };
  console.log(information);

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(information)
  };
  let response = await fetch("http://localhost:3000/api/users/reset_password", options);
  console.log(await response.json());
}


//buttons
let signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", function(sub) {
  sub.preventDefault();
  signUp();
});

let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(sub) {
  sub.preventDefault();
  login();
});

let resetForm = document.getElementById("reset-form");
resetForm.addEventListener("submit", function(sub) {
  sub.preventDefault();
  reset();
});