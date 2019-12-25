/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// sign up form\r\nasync function signUp(email, password, name) {\r\n  const information = {\r\n    email: email,\r\n    password: password,\r\n    name: name\r\n  };\r\n  console.log(information);\r\n\r\n  let options = {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    },\r\n    body: JSON.stringify(information)\r\n  };\r\n  let response = await fetch(\"http://localhost:3000/api/users/\", options);\r\n  console.log(await response.json());\r\n}\r\n\r\n// login form\r\nasync function login(email, password) {\r\n  const information = {\r\n    email: email,\r\n    password: password\r\n  };\r\n  console.log(information);\r\n\r\n  let options = {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    },\r\n    body: JSON.stringify(information)\r\n  };\r\n  let response = await fetch(\"http://localhost:3000/api/users/login\", options);\r\n  console.log(await response.json());\r\n}\r\n\r\n// reset password form\r\nasync function reset(email, password, confirmPassword) {\r\n  const information = {\r\n    email: email,\r\n    password:  password,\r\n    confirmationPassword: confirmPassword\r\n  };\r\n  console.log(information);\r\n\r\n  let options = {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    },\r\n    body: JSON.stringify(information)\r\n  };\r\n  let response = await fetch(\"http://localhost:3000/api/users/reset_password/\", options);\r\n  console.log(await response.json());\r\n}\r\n\r\n//validation\r\nfunction validateEmail(emailForm, email) {\r\n  let emailformat = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n  let emailErorr = document.getElementById(\"email-error\");\r\n\r\n  if (!email.match(emailformat) && email.length > 0) {\r\n    emailForm.style.border = \"2px solid red\";\r\n    emailErorr.innerText = \"You entered the incorrect mail\";\r\n    emailErorr.style.display = \"block\";\r\n  } else if (email.length == 0) {\r\n    emailForm.style.border = \"2px solid red\";\r\n    emailErorr.innerText = \"This is a mandatory form\";\r\n    emailErorr.style.display = \"block\";\r\n  } else {\r\n    emailErorr.style.border = \"1px solid black\";\r\n    emailErorr.style.display = \"none\";\r\n  }\r\n}\r\n\r\nfunction validatePassword(passwordForm, password) {\r\n  let passwordErorr = document.getElementById(\"password-error\");\r\n\r\n  if (password.length > 0 && password.length < 8) {\r\n    passwordForm.style.border = \"2px solid red\";\r\n    passwordErorr.innerText = \"Your password must be longer than 8 characters\";\r\n    passwordErorr.style.display = \"block\";\r\n  } else if (password.length == 0) {\r\n    passwordForm.style.border = \"2px solid red\";\r\n    passwordErorr.innerText = \"This is a mandatory form\";\r\n    passwordErorr.style.display = \"block\";\r\n  } else {\r\n    passwordForm.style.border = \"1px solid black\";\r\n    passwordErorr.style.display = \"none\";\r\n  }\r\n}\r\n\r\nfunction validateName(nameForm, name) {\r\n  let nameErorr = document.getElementById(\"name-erorr\");\r\n\r\n  if (name.length > 0 && name.length < 3) {\r\n    nameForm.style.border = \"2px solid red\";\r\n    nameErorr.innerText = \"Your name must be longer than 3 characters\";\r\n    nameErorr.style.display = \"block\";\r\n  } else if (name.length == 0) {\r\n    nameForm.style.border = \"2px solid red\";\r\n    nameErorr.innerText = \"This is a mandatory form\";\r\n    nameErorr.style.display = \"block\";\r\n  } else {\r\n    nameForm.style.border = \"1px solid black\";\r\n    nameErorr.style.display = \"none\";\r\n  }\r\n}\r\n\r\n//buttons\r\nlet signUpForm = document.getElementById(\"signup-form\");\r\nsignUpForm.addEventListener(\"submit\", function(sub) {\r\n  const signUpEmail = document.getElementById(\"signup-email\").value;\r\n  const signUpPassword = document.getElementById(\"signup-password\").value;\r\n  const signUpName = document.getElementById(\"signup-name\").value;\r\n  const signUpPasswordId = document.getElementById(\"signup-password\");\r\n  const signUpEmailId = document.getElementById(\"signup-email\");\r\n  const signUpNameId = document.getElementById(\"signup-name\");\r\n  sub.preventDefault();\r\n  signUp(signUpEmail, signUpPassword, signUpName);\r\n  validateEmail(signUpEmailId, signUpEmail);\r\n  validatePassword(signUpPasswordId, signUpPassword);\r\n  validateName(signUpNameId, signUpName);\r\n});\r\n\r\n\r\nlet loginForm = document.getElementById(\"login-form\");\r\nloginForm.addEventListener(\"submit\", function(sub) {\r\n  const loginEmail = document.getElementById(\"login-email\").value;\r\n  const loginPassword = document.getElementById(\"login-password\").value;\r\n  const loginEmailId = document.getElementById(\"login-email\");\r\n  const loginPasswordId = document.getElementById(\"login-password\");\r\n  sub.preventDefault();\r\n  login(loginEmail, loginPassword);\r\n  validateEmail(loginEmailId, loginEmail);\r\n  validatePassword(loginPasswordId, loginPassword);\r\n});\r\n\r\n\r\nlet resetForm = document.getElementById(\"reset-form\");\r\nresetForm.addEventListener(\"submit\", function(sub) {\r\n  const resetEmail = document.getElementById(\"reset-email\").value;\r\n  const resetPassword = document.getElementById(\"reset-password\").value;\r\n  const confirmPassword = document.getElementById(\"confirm-password\").value;\r\n  sub.preventDefault();\r\n  reset(resetEmail,resetPassword,confirmPassword);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });