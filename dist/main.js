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

eval("const navbarToggle = document.querySelector('.navbar-toggle');\nconst navList = document.querySelector('.nav-list');\n\nnavbarToggle.addEventListener('click', () => {\n  navList.classList.toggle('d-none-md');\n});\n\nconst slideElements = document.querySelectorAll('.preview');\n\nconst slideShow = (elements, activePos = 0) => {\n  let [activeIndex, nextIndex] = [activePos, activePos + 1];\n\n  const checkRange = (a, n) => {\n    if (a > elements.length - 1 || a < 0) {\n      return [0, 1];\n    }\n    if (n > elements.length - 1) {\n      return [a, 0];\n    }\n    return [a, n];\n  };\n\n  const changeSlide = (a, n) => {\n    elements[a].classList.remove('active');\n    elements[n].classList.add('active');\n  };\n\n  const isActive = (pos) => elements[pos].classList.contains('active');\n\n  const findActive = () => {\n    let foundActive = 0;\n    elements.forEach(({ classList }, index) => {\n      if (classList.contains('active')) {\n        foundActive = index;\n      }\n    });\n    const [newActive, newNextActive] = checkRange(foundActive, foundActive + 1);\n    return [newActive, newNextActive];\n  };\n\n  [activeIndex, nextIndex] = checkRange(activeIndex, nextIndex);\n  if (isActive(activeIndex)) {\n    changeSlide(activeIndex, nextIndex);\n  } else {\n    [activeIndex, nextIndex] = findActive();\n    changeSlide(activeIndex, nextIndex);\n  }\n  setTimeout(slideShow, 5000, elements, nextIndex + 1);\n};\n\nslideShow(slideElements);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });