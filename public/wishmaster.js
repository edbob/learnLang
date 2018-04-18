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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__(3);




const model = new __WEBPACK_IMPORTED_MODULE_0__model__["a" /* default */]();
const controller = new __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* default */](model);
const view = new __WEBPACK_IMPORTED_MODULE_2__view__["a" /* default */](model, controller);

controller.initialize(model, view);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Model {
    constructor(wordsEng = '', wordsRus = '') {
        this.wordsEng = wordsEng;
        this.wordsRus = wordsRus;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Model);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//Контралер отвезает за обновление модели также отвечает за логику!
class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    save({ wordsEng, wordsRus }) {
        if (wordsEng && wordsRus) {
            console.log('Слово добавлено!: ', wordsEng, wordsRus);
            this.model.wordsEng = wordsEng;
            this.model.wordsRus = wordsRus;

            this.view.message = 'Слово добавлено!';
        } else {
            this.view.message = 'Вы пытаетесь добавить пустые строки!';
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Controller);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class View {
    constructor(model, controller) {
        this.model = model;
        this.controller = controller;

        this.initialize();
    }

    initialize() {
        this.form = document.addWords;
        this.wordsEngInput = this.form.wordsEng;
        this.wordsRusInput = this.form.wordsRus;
        this.resetButton = this.form.reset;
        this.showWords = document.getElementById('showWords');

        // this.wordsEngInput.value = this.model.firstname;
        // this.wordsRusInput.value = this.model.lastname;

        this.resetButton.addEventListener('click', this.handlerResetButtonClick.bind(this));
        this.form.addEventListener('submit', this.handlerSaveButtonClick.bind(this));
    }

    set message(value) {
        let li = document.createElement('li');
        this.showWords.appendChild(li).innerText += value;
    }

    handlerSaveButtonClick(event) {
        let data = {
            wordsEng: this.wordsEngInput.value,
            wordsRus: this.wordsRusInput.value
        };

        this.save(data);
    }

    handlerResetButtonClick(event) {
        this.reset();
    }

    save(data) {
        this.controller.save(data);
    }

    reset() {
        this.wordsEngInput.value = '';
        this.wordsRusInput.value = '';
        this.showWords.value = '';
    }
}

/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ })
/******/ ]);