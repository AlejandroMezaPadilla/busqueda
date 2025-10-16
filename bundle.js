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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buscarPalabra: () => (/* binding */ buscarPalabra)\n/* harmony export */ });\nfunction buscarPalabra(texto, palabra) {\n  if (!palabra.trim()) return {\n    textoMarcado: \"\",\n    cantidad: 0\n  };\n\n  // Coincidencia exacta de palabra usando límites de palabra (\\b)\n  var regex = new RegExp(\"\\\\b\".concat(palabra, \"\\\\b\"), \"gi\");\n  var coincidencias = texto.match(regex);\n  var cantidad = coincidencias ? coincidencias.length : 0;\n\n  // Resaltar coincidencias\n  var textoMarcado = texto.replace(regex, '<span class=\"highlight\">$&</span>');\n  return {\n    textoMarcado: textoMarcado,\n    cantidad: cantidad\n  };\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var textInput = document.getElementById(\"textInput\");\n  var searchInput = document.getElementById(\"searchInput\");\n  var searchBtn = document.getElementById(\"searchBtn\");\n  var result = document.getElementById(\"result\");\n  var counter = document.getElementById(\"counter\");\n  searchBtn.addEventListener(\"click\", function () {\n    var texto = textInput.value;\n    var palabra = searchInput.value.trim();\n\n    // Contar espacios incluso si el texto son solo espacios\n    var espacios = texto.match(/ /g);\n    var totalEspacios = espacios ? espacios.length : 0;\n\n    // Si no hay palabra, solo mostrar espacios\n    if (!palabra) {\n      counter.textContent = \"Espacios en el texto: \".concat(totalEspacios);\n      result.innerHTML = texto || \"<em>No hay texto para mostrar.</em>\";\n      return;\n    }\n    var _buscarPalabra = buscarPalabra(texto, palabra),\n      textoMarcado = _buscarPalabra.textoMarcado,\n      cantidad = _buscarPalabra.cantidad;\n    if (cantidad === 0) {\n      Swal.fire({\n        icon: \"info\",\n        title: \"Sin coincidencias\",\n        text: \"No se encontraron coincidencias en el texto.\"\n      });\n    }\n    counter.textContent = \"Coincidencias encontradas: \".concat(cantidad, \" | Espacios en el texto: \").concat(totalEspacios);\n    result.innerHTML = textoMarcado;\n  });\n});\n\n//# sourceURL=webpack://unidad1/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;