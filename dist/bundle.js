/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cfg/events.js":
/*!***************************!*\
  !*** ./src/cfg/events.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"events\": () => (/* binding */ events)\n/* harmony export */ });\nconst events = [\n    {\n        name: 'Slot 2022',\n        url: 'https://eventbuzz.co.il/lp/event/nogusvelo',\n        img: 'https://cdnpad.eventbuzz.co.il/f8fd857059d6f4f83b63b83290b07813.jpg',\n        timeStart: '20:00 27.10.2022',\n        timeEnd: '22:00 27.10.2022',\n        place: 'Gagaring',\n        place_link: 'https://goo.gl/maps/irabm8JeRuARA3fY6'\n    },\n    {\n        name: 'Nogu Svelo',\n        url: 'https://eventbuzz.co.il/lp/event/slot2022',\n        img: 'https://cdnpad.eventbuzz.co.il/50972e421bae1a89d88d2e1dc63838e1.jpg',\n        timeStart: '20:00 08.09.2022',\n        timeEnd: '22:00 08.09.2022',\n        place: 'Gagaring',\n        place_link: 'https://goo.gl/maps/irabm8JeRuARA3fY6'\n    }\n]\n\n\n//# sourceURL=webpack://mili/./src/cfg/events.js?");

/***/ }),

/***/ "./src/cfg/translations.js":
/*!*********************************!*\
  !*** ./src/cfg/translations.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translations\": () => (/* binding */ translations)\n/* harmony export */ });\nconst translations = {\n    en: {\n        language: 'English',\n        languageCode: 'en',\n        translations: {\n            start: 'Starts',\n            end: 'Ends',\n            orderDetails: 'לפרטים והזמנה'\n        }\n    },\n    he: {\n        isRtl: true,\n        language: 'עברית',\n        languageCode: 'he',\n        translations: {\n            start: 'התחלה',\n            end: 'סיום',\n            orderDetails: 'לפרטים והזמנה'\n        }\n    },\n    ru: {\n        language: 'Русский',\n        languageCode: 'ru',\n        translations: {\n            start: 'Начало',\n            end: 'До',\n            orderDetails: 'Подробности и заказ'\n        }\n    }\n}\n\n\n//# sourceURL=webpack://mili/./src/cfg/translations.js?");

/***/ }),

/***/ "./src/componenets/event.card.js":
/*!***************************************!*\
  !*** ./src/componenets/event.card.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventCard\": () => (/* binding */ EventCard)\n/* harmony export */ });\n/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/language.service */ \"./src/services/language.service.js\");\n\nconst template = document.createElement('template');\ntemplate.innerHTML = `\n    <style>\n    * {\n        font-family: 'Roboto', sans-serif;\n    }\n    #card {\n        width: 350px;\n        height: 400px;\n        margin: 0 50px;\n        background: #fff;\n        border-radius: 2px;\n        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    }\n    #event-img {\n        width: 350px; /* width of container */\n        height: 200px; /* height of container */\n        object-fit: cover;\n        padding: 0;\n        margin: 0;\n    }\n    .text #card-title {\n        text-align: center;\n        font-size: 24px;\n    }\n    </style>\n    <div id=\"card\"> \n        <img id=\"event-img\">\n        <div class=\"text\">\n            <div id=\"card-title\"></div>\n            <div id=\"start\"></div>\n        </div>\n    </div>\n`;\n\nclass EventCard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({mode: 'open'});\n        this.shadowRoot.appendChild(template.content.cloneNode(true));\n\n        this.imgElm = this.shadowRoot.querySelector('#event-img');\n        this.cardTitle = this.shadowRoot.querySelector('#card-title');\n\n        this.translation = _services_language_service__WEBPACK_IMPORTED_MODULE_0__.languageService.translation;\n    }\n\n    static get observedAttributes() {\n        return ['event-name', 'event-img'];\n    }\n\n    attributeChangedCallback(name, oldValue, newValue) {\n        if (name == 'event-name') this.cardTitle.innerText = newValue;\n        if (name == 'event-img') this.imgElm.src = newValue;\n    }\n\n    set translation(what){\n        this.shadowRoot.querySelector('#card-title');\n    }\n}\n\nwindow.customElements.define('app-event-card', EventCard);\n\n\n//# sourceURL=webpack://mili/./src/componenets/event.card.js?");

/***/ }),

/***/ "./src/componenets/language-switcher.js":
/*!**********************************************!*\
  !*** ./src/componenets/language-switcher.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LanguageSwitcher\": () => (/* binding */ LanguageSwitcher)\n/* harmony export */ });\n/* harmony import */ var _cfg_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cfg/translations */ \"./src/cfg/translations.js\");\n/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/language.service */ \"./src/services/language.service.js\");\n\n\n\nconst template = document.createElement('template');\ntemplate.innerHTML = `\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,500&display=swap\" rel=\"stylesheet\">\n    <style>\n    * {\n        font-family: 'Roboto', sans-serif;\n    }\n    div {\n      margin-top: 20px;\n      color: green;\n    }\n    </style>\n    <select id=\"select-container\">\n        \n    </select>\n`;\n\nclass LanguageSwitcher extends HTMLElement {\n    constructor() {\n        super();\n\n        this.attachShadow({mode: 'open'});\n        this.shadowRoot.appendChild(template.content.cloneNode(true));\n\n        Object.values(_cfg_translations__WEBPACK_IMPORTED_MODULE_0__.translations).forEach(translation => {\n            let optionElm = document.createElement('option');\n            optionElm.value = translation.languageCode;\n            optionElm.innerText = translation.language;\n            this.shadowRoot.querySelector('#select-container').appendChild(optionElm);\n        })\n\n        this.shadowRoot.querySelector('#select-container').addEventListener('change', (e) => {\n            _services_language_service__WEBPACK_IMPORTED_MODULE_1__.languageService.language = e.target.value;\n        });\n    }\n\n    static get observedAttributes() {\n        return ['language'];\n    }\n\n    attributeChangedCallback(name, oldValue, newValue) {\n        // if (name == 'event-name') {\n        //     this.shadowRoot.querySelector(\n        //         '#language'\n        //     ).innerText = `${newValue}`;\n        // }\n    }\n}\n\nwindow.customElements.define('app-language-switch', LanguageSwitcher);\n\n\n//# sourceURL=webpack://mili/./src/componenets/language-switcher.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _componenets_language_switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componenets/language-switcher */ \"./src/componenets/language-switcher.js\");\n/* harmony import */ var _componenets_event_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componenets/event.card */ \"./src/componenets/event.card.js\");\n/* harmony import */ var _cfg_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cfg/events */ \"./src/cfg/events.js\");\n\n\n\n\nlet eventCards = [];\nlet languageSwitcherElm = document.createElement('app-language-switch');\n\ndocument.querySelector('body').append(languageSwitcherElm);\n\nfor (let event of _cfg_events__WEBPACK_IMPORTED_MODULE_2__.events){\n    let elm = document.createElement('app-event-card')\n    elm.setAttribute('event-name', event.name);\n    elm.setAttribute('event-img', event.img);\n    elm.setAttribute('event-url', event.url);\n    eventCards.push(elm);\n}\n\nlet cardContainer = document.createElement('div');\ncardContainer.setAttribute('id', 'cards-container');\ncardContainer.style.display = 'flex';\ncardContainer.style.justifyContent = 'center';\ncardContainer.style.display = 'flex';\ncardContainer.style.flexWrap = 'wrap';\n\ndocument.querySelector('body').append(cardContainer);\neventCards.forEach(elm => {\n    document.querySelector('#cards-container').append(elm);\n})\n\n\n//# sourceURL=webpack://mili/./src/index.js?");

/***/ }),

/***/ "./src/services/language.service.js":
/*!******************************************!*\
  !*** ./src/services/language.service.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"languageService\": () => (/* binding */ languageService)\n/* harmony export */ });\n/* harmony import */ var _cfg_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cfg/translations */ \"./src/cfg/translations.js\");\n\n\nclass LanguageService {\n    constructor() {\n        this.language = 'en';\n        this.translation = _cfg_translations__WEBPACK_IMPORTED_MODULE_0__.translations.en;\n    }\n\n    set language(lang){\n        this.translation = _cfg_translations__WEBPACK_IMPORTED_MODULE_0__.translations[lang];\n    }\n\n    get language(){\n        return _cfg_translations__WEBPACK_IMPORTED_MODULE_0__.translations;\n    }\n\n}\n\nconst languageService = new LanguageService();\n\n\n//# sourceURL=webpack://mili/./src/services/language.service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;