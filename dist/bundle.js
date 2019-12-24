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

eval("// sign up form\r\nasync function signUp() {\r\n  let signUpEmail = document.getElementById(\"signup-email\").value;\r\n  let signUpPassword = document.getElementById(\"signup-password\").value;\r\n  let signUpName = document.getElementById(\"signup-name\").value;\r\n\r\n  let information = {\r\n    \"email\": signUpEmail,\r\n    \"password\": signUpPassword,\r\n    \"name\": signUpName\r\n  };\r\n  console.log(information);\r\n\r\n  let options = {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    },\r\n    body: JSON.stringify(information)\r\n  };\r\n  let response = await fetch(\"http://localhost:3000/api/users/\", options);\r\n  console.log(await response.json());\r\n}\r\n\r\n\r\n// login form\r\nasync function login() {\r\n  let loginEmail = document.getElementById(\"login-email\").value;\r\n  let loginPassword = document.getElementById(\"login-password\").value;\r\n\r\n  let information = {\r\n    \"email\": loginEmail,\r\n    \"password\": loginPassword\r\n  };\r\n  console.log(information);\r\n\r\n  let options = {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    },\r\n    body: JSON.stringify(information)\r\n  };\r\n  let response = await fetch(\"http://localhost:3000/api/users/login\", options);\r\n  console.log(await response.json());\r\n}\r\n\r\n\r\n// reset password form\r\nasync function reset() {\r\n  let resetEmail = document.getElementById(\"reset-email\").value;\r\n  let resetPassword = document.getElementById(\"reset-password\").value;\r\n  let confirmPassword = document.getElementById(\"confirm-password\").value;\r\n\r\n  let information = {\r\n    \"email\": resetEmail,\r\n    \"password\": resetPassword,\r\n    \"confirmationPassword\": confirmPassword\r\n  };\r\n  console.log(information);\r\n\r\n  let options = {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    },\r\n    body: JSON.stringify(information)\r\n  };\r\n  let response = await fetch(\"http://localhost:3000/api/users/reset_password\", options);\r\n  console.log(await response.json());\r\n}\r\n\r\n\r\n//buttons\r\nlet signUpForm = document.getElementById(\"signup-form\");\r\nsignUpForm.addEventListener(\"submit\", function(sub) {\r\n  sub.preventDefault();\r\n  signUp();\r\n});\r\n\r\nlet loginForm = document.getElementById(\"login-form\");\r\nloginForm.addEventListener(\"submit\", function(sub) {\r\n  sub.preventDefault();\r\n  login();\r\n});\r\n\r\nlet resetForm = document.getElementById(\"reset-form\");\r\nresetForm.addEventListener(\"submit\", function(sub) {\r\n  sub.preventDefault();\r\n  reset();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });