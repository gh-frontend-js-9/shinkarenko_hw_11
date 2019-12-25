// sign up form
async function signUp(email, password, name) {
  const information = {
    email: email,
    password: password,
    name: name
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
async function login(email, password) {
  const information = {
    email: email,
    password: password
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
async function reset(email, password, confirmPassword) {
  const information = {
    email: email,
    password:  password,
    confirmationPassword: confirmPassword
  };
  console.log(information);

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(information)
  };
  let response = await fetch("http://localhost:3000/api/users/reset_password/", options);
  console.log(await response.json());
}

//validation
function validateEmail(emailForm, email) {
  let emailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailErorr = document.getElementById("email-error");

  if (!email.match(emailformat) && email.length > 0) {
    emailForm.style.border = "2px solid red";
    emailErorr.innerText = "You entered the incorrect mail";
    emailErorr.style.display = "block";
  } else if (email.length == 0) {
    emailForm.style.border = "2px solid red";
    emailErorr.innerText = "This is a mandatory form";
    emailErorr.style.display = "block";
  } else {
    emailErorr.style.border = "1px solid black";
    emailErorr.style.display = "none";
  }
}

function validatePassword(passwordForm, password) {
  let passwordErorr = document.getElementById("password-error");

  if (password.length > 0 && password.length < 8) {
    passwordForm.style.border = "2px solid red";
    passwordErorr.innerText = "Your password must be longer than 8 characters";
    passwordErorr.style.display = "block";
  } else if (password.length == 0) {
    passwordForm.style.border = "2px solid red";
    passwordErorr.innerText = "This is a mandatory form";
    passwordErorr.style.display = "block";
  } else {
    passwordForm.style.border = "1px solid black";
    passwordErorr.style.display = "none";
  }
}

function validateName(nameForm, name) {
  let nameErorr = document.getElementById("name-erorr");

  if (name.length > 0 && name.length < 3) {
    nameForm.style.border = "2px solid red";
    nameErorr.innerText = "Your name must be longer than 3 characters";
    nameErorr.style.display = "block";
  } else if (name.length == 0) {
    nameForm.style.border = "2px solid red";
    nameErorr.innerText = "This is a mandatory form";
    nameErorr.style.display = "block";
  } else {
    nameForm.style.border = "1px solid black";
    nameErorr.style.display = "none";
  }
}

//buttons
let signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", function(sub) {
  const signUpEmail = document.getElementById("signup-email").value;
  const signUpPassword = document.getElementById("signup-password").value;
  const signUpName = document.getElementById("signup-name").value;
  const signUpPasswordId = document.getElementById("signup-password");
  const signUpEmailId = document.getElementById("signup-email");
  const signUpNameId = document.getElementById("signup-name");
  sub.preventDefault();
  signUp(signUpEmail, signUpPassword, signUpName);
  validateEmail(signUpEmailId, signUpEmail);
  validatePassword(signUpPasswordId, signUpPassword);
  validateName(signUpNameId, signUpName);
});


let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(sub) {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;
  const loginEmailId = document.getElementById("login-email");
  const loginPasswordId = document.getElementById("login-password");
  sub.preventDefault();
  login(loginEmail, loginPassword);
  validateEmail(loginEmailId, loginEmail);
  validatePassword(loginPasswordId, loginPassword);
});


let resetForm = document.getElementById("reset-form");
resetForm.addEventListener("submit", function(sub) {
  const resetEmail = document.getElementById("reset-email").value;
  const resetPassword = document.getElementById("reset-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  sub.preventDefault();
  reset(resetEmail,resetPassword,confirmPassword);
});
