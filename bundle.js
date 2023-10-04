/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! restaurant.jpg */ "./src/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

* {
    box-sizing: border-box;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-attachment: fixed;
    background-size: cover;
    font-family: 'Montserrat', cursive;
    font-size: 1.6rem;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
}

.header {
    display: flex;
    width: 100%;
    background-color: rgba(84, 22, 22, 0.8);
    color: white;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
}

.header .logo {
    margin-left: 1rem;
    margin-right: auto;
    font-size: 2.5rem;
}

.header .logo .image-logo {
    width: 200px;
    height: 75px;
}

.header .nav-bar ul{
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style-type: none;
    margin-right: 1rem;
  
}

.main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px;
}

.main-content-home {
    background-color: rgba(247,194,194,0.8);
    width: clamp(250px, 500px, 750px);
    height: clamp(250px, 500px, 750px);
    border-radius: 10px;
    padding: 10px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
}

.main-content-menu {
    background-color: rgba(247,194,194,0.6);
    gap: 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-evenly;
    place-items: center;
    border-radius: 10px;
}

.main-content-menu .menu-description {
    background-color: rgba(247,194,194,0.7);
    width: clamp(100px, 200px, 300px);
    height: clamp(100px, 200px, 300px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 10px;
}

.main-content-contact-us {
    background-color: rgba(247,194,194,0.7);
    padding: 20px;
    border-radius: 10px;
}

.contact-us {
    width: 750px;
    height: 400px;
    border-radius: 10px;
}

.footer {
    margin-top: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #c64242;
    opacity: 0.8;
    width: 100%;
    text-align: center;
    color: white;
    font-weight: 600;
}

.food-image-home {
    width: 200px;
    height: 200px;
    border-radius: 100px;
}


.food-image-menu {
    width: 75px;
    height: 75px;
    border-radius: 37.5px;
}

button {
    color: white;
    border: none;
    font-size: 2rem;
    background: none;
}

button:hover {
    cursor:pointer;
}

@media screen and (max-width: 600px) {
        
    body {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
        background-attachment: fixed;
        background-size: cover;
        font-family: 'Montserrat', cursive;
        font-size: 0.8rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width: 100vw;
    }

    .header {
        display: flex;
        width: 100%;
        background-color: rgba(84, 22, 22, 0.8);
        color: white;
        font-size: 0.4rem;
        justify-content: center;
        align-items: center;
        padding: 0.4rem;
        position: fixed;
        top: 0;
        left: 0;
    }

    .header .logo {
        margin-left: 0.5rem;
        margin-right: auto;
        font-size: 1.25rem;
    }

    .header .logo .image-logo {
        width: 80px;
        height: 30px;
    }

    .header .nav-bar ul{
        display: flex;
        flex-direction: row;
        gap: 10px;
        list-style-type: none;
        margin-right: 1rem;
    
    }

    .main {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .main-content-home {
        background-color: rgba(247,194,194,0.8);
        width: clamp(80px, 160px, 240px);
        height: clamp(80px, 160px, 240px);
        border-radius: 3px;
        padding: 3px 6px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        align-items: center;
    }

    .main-content-menu {
        background-color: rgba(247,194,194,0.6);
        gap: 7px;
        padding: 7px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: space-evenly;
        place-items: center;
        border-radius: 4px;
    }

    .main-content-menu .menu-description {
        background-color: rgba(247,194,194,0.7);
        width: clamp(40px, 80px, 120px);
        height: clamp(40px, 80px, 120px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7px;
        border-radius: 4px;
    }

    .main-content-contact-us {
        background-color: rgba(247,194,194,0.7);
        padding: 7px;
        border-radius: 4px;
    }

    .contact-us {
        width: 250px;
        height: 130px;
        border-radius: 4px;
    }

    .footer {
        margin-top: auto;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        background-color: #c64242;
        opacity: 0.8;
        width: 100%;
        text-align: center;
        color: white;
        font-weight: 600;
    }

    .food-image-home {
        width: 70px;
        height: 70px;
        border-radius: 40px;
    }


    .food-image-menu {
        width: 25px;
        height: 25px;
        border-radius: 12.5px;
    }

    button {
        color: white;
        border: none;
        font-size: 0.7rem;
        background: none;
    }

  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(restaurant.jpg);\n    background-attachment: fixed;\n    background-size: cover;\n    font-family: 'Montserrat', cursive;\n    font-size: 1.6rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n\n.header {\n    display: flex;\n    width: 100%;\n    background-color: rgba(84, 22, 22, 0.8);\n    color: white;\n    font-size: 2rem;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.header .logo {\n    margin-left: 1rem;\n    margin-right: auto;\n    font-size: 2.5rem;\n}\n\n.header .logo .image-logo {\n    width: 200px;\n    height: 75px;\n}\n\n.header .nav-bar ul{\n    display: flex;\n    flex-direction: row;\n    gap: 30px;\n    list-style-type: none;\n    margin-right: 1rem;\n  \n}\n\n.main {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 60px;\n}\n\n.main-content-home {\n    background-color: rgba(247,194,194,0.8);\n    width: clamp(250px, 500px, 750px);\n    height: clamp(250px, 500px, 750px);\n    border-radius: 10px;\n    padding: 10px 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-content-menu {\n    background-color: rgba(247,194,194,0.6);\n    gap: 20px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: space-evenly;\n    place-items: center;\n    border-radius: 10px;\n}\n\n.main-content-menu .menu-description {\n    background-color: rgba(247,194,194,0.7);\n    width: clamp(100px, 200px, 300px);\n    height: clamp(100px, 200px, 300px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    border-radius: 10px;\n}\n\n.main-content-contact-us {\n    background-color: rgba(247,194,194,0.7);\n    padding: 20px;\n    border-radius: 10px;\n}\n\n.contact-us {\n    width: 750px;\n    height: 400px;\n    border-radius: 10px;\n}\n\n.footer {\n    margin-top: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    background-color: #c64242;\n    opacity: 0.8;\n    width: 100%;\n    text-align: center;\n    color: white;\n    font-weight: 600;\n}\n\n.food-image-home {\n    width: 200px;\n    height: 200px;\n    border-radius: 100px;\n}\n\n\n.food-image-menu {\n    width: 75px;\n    height: 75px;\n    border-radius: 37.5px;\n}\n\nbutton {\n    color: white;\n    border: none;\n    font-size: 2rem;\n    background: none;\n}\n\nbutton:hover {\n    cursor:pointer;\n}\n\n@media screen and (max-width: 600px) {\n        \n    body {\n        background-image: url(restaurant.jpg);\n        background-attachment: fixed;\n        background-size: cover;\n        font-family: 'Montserrat', cursive;\n        font-size: 0.8rem;\n    }\n\n    .content {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        min-height: 100vh;\n        min-width: 100vw;\n    }\n\n    .header {\n        display: flex;\n        width: 100%;\n        background-color: rgba(84, 22, 22, 0.8);\n        color: white;\n        font-size: 0.4rem;\n        justify-content: center;\n        align-items: center;\n        padding: 0.4rem;\n        position: fixed;\n        top: 0;\n        left: 0;\n    }\n\n    .header .logo {\n        margin-left: 0.5rem;\n        margin-right: auto;\n        font-size: 1.25rem;\n    }\n\n    .header .logo .image-logo {\n        width: 80px;\n        height: 30px;\n    }\n\n    .header .nav-bar ul{\n        display: flex;\n        flex-direction: row;\n        gap: 10px;\n        list-style-type: none;\n        margin-right: 1rem;\n    \n    }\n\n    .main {\n        flex: 1;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 20px;\n    }\n\n    .main-content-home {\n        background-color: rgba(247,194,194,0.8);\n        width: clamp(80px, 160px, 240px);\n        height: clamp(80px, 160px, 240px);\n        border-radius: 3px;\n        padding: 3px 6px;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .main-content-menu {\n        background-color: rgba(247,194,194,0.6);\n        gap: 7px;\n        padding: 7px;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        justify-content: space-evenly;\n        place-items: center;\n        border-radius: 4px;\n    }\n\n    .main-content-menu .menu-description {\n        background-color: rgba(247,194,194,0.7);\n        width: clamp(40px, 80px, 120px);\n        height: clamp(40px, 80px, 120px);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 7px;\n        border-radius: 4px;\n    }\n\n    .main-content-contact-us {\n        background-color: rgba(247,194,194,0.7);\n        padding: 7px;\n        border-radius: 4px;\n    }\n\n    .contact-us {\n        width: 250px;\n        height: 130px;\n        border-radius: 4px;\n    }\n\n    .footer {\n        margin-top: auto;\n        padding-top: 0.4rem;\n        padding-bottom: 0.4rem;\n        background-color: #c64242;\n        opacity: 0.8;\n        width: 100%;\n        text-align: center;\n        color: white;\n        font-weight: 600;\n    }\n\n    .food-image-home {\n        width: 70px;\n        height: 70px;\n        border-radius: 40px;\n    }\n\n\n    .food-image-menu {\n        width: 25px;\n        height: 25px;\n        border-radius: 12.5px;\n    }\n\n    button {\n        color: white;\n        border: none;\n        font-size: 0.7rem;\n        background: none;\n    }\n\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact-us.js":
/*!***************************!*\
  !*** ./src/contact-us.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactContent: () => (/* binding */ contactContent)
/* harmony export */ });
/* harmony import */ var _maps_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps.jpg */ "./src/maps.jpg");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");



function contactContent(){
    const divContent = document.querySelector('#content');


    const main = document.createElement('div');
    main.classList.add('main');
    const mainContentContact = document.createElement('div');
    mainContentContact.classList.add('main-content-contact-us');
    const mapsImg = new Image();
    mapsImg.src = _maps_jpg__WEBPACK_IMPORTED_MODULE_0__;
    mapsImg.classList.add('contact-us');
    mainContentContact.append(mapsImg);
    main.append(mainContentContact);
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright';
    footer.append(footerContent);
    divContent.append(footer);

}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContent: () => (/* binding */ homeContent)
/* harmony export */ });
/* harmony import */ var _food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpg */ "./src/food.jpg");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");



function homeContent(){
    const divContent = document.querySelector('#content');
    const main = document.createElement('div');
    main.classList.add('main');
    const mainContentHome = document.createElement('div');
    mainContentHome.classList.add('main-content-home');
    const content1 = document.createElement('p');
    content1.textContent = 'Best padang in the nation!'
    const content2 = document.createElement('p');
    content2.textContent = 'All menu available!'
    const food = new Image();
    food.src = _food_jpg__WEBPACK_IMPORTED_MODULE_0__;
    food.classList.add('food-image-home');
    const content3 = document.createElement('p');
    content3.textContent = 'Order now! What are you waiting for?'
    mainContentHome.append(content1);
    mainContentHome.append(content2);
    mainContentHome.append(food);
    mainContentHome.append(content3);
    main.append(mainContentHome);
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright';
    footer.append(footerContent);
    divContent.append(footer);

}

/***/ }),

/***/ "./src/initial-content.js":
/*!********************************!*\
  !*** ./src/initial-content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialContent: () => (/* binding */ initialContent)
/* harmony export */ });
/* harmony import */ var _food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.jpg */ "./src/food.jpg");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




function initialContent(){
    const divContent = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    const headerLogo = document.createElement('div');
    headerLogo.classList.add('logo');
    const headerContent = new Image();
    headerContent.src = _logo_png__WEBPACK_IMPORTED_MODULE_1__;
    headerContent.classList.add('image-logo');
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');
    const listWrapper = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('home');
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('menu');
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact Us';
    contactBtn.classList.add('contact');
    headerLogo.append(headerContent);
    header.append(headerLogo);
    li1.append(homeBtn);
    li2.append(menuBtn);
    li3.append(contactBtn);
    listWrapper.append(li1);
    listWrapper.append(li2);
    listWrapper.append(li3);
    navBar.append(listWrapper);
    header.append(navBar);
    document.body.append(header);


    const main = document.createElement('div');
    main.classList.add('main');
    const mainContentHome = document.createElement('div');
    mainContentHome.classList.add('main-content-home');
    const content1 = document.createElement('p');
    content1.textContent = 'Best padang in the nation!'
    const content2 = document.createElement('p');
    content2.textContent = 'All menu available!'
    const food = new Image();
    food.src = _food_jpg__WEBPACK_IMPORTED_MODULE_0__;
    food.classList.add('food-image-home');
    const content3 = document.createElement('p');
    content3.textContent = 'Order now! What are you waiting for?'
    mainContentHome.append(content1);
    mainContentHome.append(content2);
    mainContentHome.append(food);
    mainContentHome.append(content3);
    main.append(mainContentHome);
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright';
    footer.append(footerContent);
    divContent.append(footer);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuContent: () => (/* binding */ menuContent)
/* harmony export */ });
/* harmony import */ var _rendang_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendang.jpeg */ "./src/rendang.jpeg");
/* harmony import */ var _gulai_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gulai.jpeg */ "./src/gulai.jpeg");
/* harmony import */ var _fish_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fish.jpeg */ "./src/fish.jpeg");
/* harmony import */ var _rice_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rice.jpeg */ "./src/rice.jpeg");




function menuContent(){
    const divContent = document.querySelector('#content');

    const main = document.createElement('div');
    main.classList.add('main');
    const mainContentMenu = document.createElement('div');
    mainContentMenu.classList.add('main-content-menu');
    const menuDescription = document.createElement('div');
    menuDescription.classList.add('menu-description');
    const rendangImg = new Image();
    rendangImg.src = _rendang_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    rendangImg.classList.add('food-image-menu');
    const imageTitle = document.createElement('h2');
    imageTitle.textContent = 'Rendang';
    const imageDescription = document.createElement('p');
    imageDescription.textContent = 'Empuk Bos!'
    const menu2Description = document.createElement('div');
    menu2Description.classList.add('menu-description');
    const gulaiImg = new Image();
    gulaiImg.src = _gulai_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    gulaiImg.classList.add('food-image-menu');
    const image2Title = document.createElement('h2');
    image2Title.textContent = 'Gulai Beef';
    const image2Description = document.createElement('p');
    image2Description.textContent = 'Very Tasty!'
    const menu3Description = document.createElement('div');
    menu3Description.classList.add('menu-description');
    const fishImg = new Image();
    fishImg.src = _fish_jpeg__WEBPACK_IMPORTED_MODULE_2__;
    fishImg.classList.add('food-image-menu');
    const image3Title = document.createElement('h2');
    image3Title.textContent = 'Gulai Fish';
    const image3Description = document.createElement('p');
    image3Description.textContent = 'Very Fishy!'

    const menu4Description = document.createElement('div');
    menu4Description.classList.add('menu-description');
    const riceImg = new Image();
    riceImg.src = _rice_jpeg__WEBPACK_IMPORTED_MODULE_3__;
    riceImg.classList.add('food-image-menu');
    const image4Title = document.createElement('h2');
    image4Title.textContent = 'De Rice';
    const image4Description = document.createElement('p');
    image4Description.textContent = 'Hot Rice!'

    menuDescription.append(rendangImg);
    menuDescription.append(imageTitle);
    menuDescription.append(imageDescription);
    menu2Description.append(gulaiImg);
    menu2Description.append(image2Title);
    menu2Description.append(image2Description);
    menu3Description.append(fishImg);
    menu3Description.append(image3Title);
    menu3Description.append(image3Description);
    menu4Description.append(riceImg);
    menu4Description.append(image4Title);
    menu4Description.append(image4Description);
    mainContentMenu.append(menuDescription);
    mainContentMenu.append(menu2Description);
    mainContentMenu.append(menu3Description);
    mainContentMenu.append(menu4Description);
    main.append(mainContentMenu);
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright';
    footer.append(footerContent);
    divContent.append(footer);

}

/***/ }),

/***/ "./src/fish.jpeg":
/*!***********************!*\
  !*** ./src/fish.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e4d8e8c675d35e96201.jpeg";

/***/ }),

/***/ "./src/food.jpg":
/*!**********************!*\
  !*** ./src/food.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a525329465079b6e98d.jpg";

/***/ }),

/***/ "./src/gulai.jpeg":
/*!************************!*\
  !*** ./src/gulai.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be866177820a7d4c05db.jpeg";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6a3150ae850a3d67385.png";

/***/ }),

/***/ "./src/maps.jpg":
/*!**********************!*\
  !*** ./src/maps.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b2b4fb192fba95e0572.jpg";

/***/ }),

/***/ "./src/rendang.jpeg":
/*!**************************!*\
  !*** ./src/rendang.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0288d14e0af9e481ae6c.jpeg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ebbfa06833ec9ec299e.jpg";

/***/ }),

/***/ "./src/rice.jpeg":
/*!***********************!*\
  !*** ./src/rice.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ff40378a612624cb9f4.jpeg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_us_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.js */ "./src/contact-us.js");
/* harmony import */ var _initial_content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial-content.js */ "./src/initial-content.js");

 
 
 


(0,_initial_content_js__WEBPACK_IMPORTED_MODULE_4__.initialContent)(); //dont put header inside mainbody. because event listener wont work if you rerender the button

let divContent = document.querySelector('#content');

let homeBtn = document.querySelector('.home')
homeBtn.addEventListener('click', () => {
    while (divContent.hasChildNodes()) {
        divContent.removeChild(divContent.firstChild);
      };
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homeContent)();
    }
);

let menuBtn = document.querySelector('.menu')
menuBtn.addEventListener('click', () => {
    while (divContent.hasChildNodes()) {
        divContent.removeChild(divContent.firstChild);
      }
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuContent)();
    }
);

let contactBtn = document.querySelector('.contact')
contactBtn.addEventListener('click', () => {
    while (divContent.hasChildNodes()) {
        divContent.removeChild(divContent.firstChild);
      }
    (0,_contact_us_js__WEBPACK_IMPORTED_MODULE_3__.contactContent)();
    }   
);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkdBQWlDO0FBQzdFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFB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d2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC11cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJyZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NCwgMjIsIDIyLCAwLjgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmhlYWRlciAubG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uaGVhZGVyIC5sb2dvIC5pbWFnZS1sb2dvIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uaGVhZGVyIC5uYXYtYmFyIHVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDMwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgXG59XG5cbi5tYWluIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2MHB4O1xufVxuXG4ubWFpbi1jb250ZW50LWhvbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC44KTtcbiAgICB3aWR0aDogY2xhbXAoMjUwcHgsIDUwMHB4LCA3NTBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1jb250ZW50LW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC42KTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWFpbi1jb250ZW50LW1lbnUgLm1lbnUtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCgxMDBweCwgMjAwcHgsIDMwMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1haW4tY29udGVudC1jb250YWN0LXVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuNyk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGFjdC11cyB7XG4gICAgd2lkdGg6IDc1MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY0MjQyO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb29kLWltYWdlLWhvbWUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG5cbi5mb29kLWltYWdlLW1lbnUge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNy41cHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgXG4gICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgY3Vyc2l2ZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAyMiwgMjIsIDAuOCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjRyZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5oZWFkZXIgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAuaGVhZGVyIC5sb2dvIC5pbWFnZS1sb2dvIHtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIC5uYXYtYmFyIHVse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIFxuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGVudC1ob21lIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjgpO1xuICAgICAgICB3aWR0aDogY2xhbXAoODBweCwgMTYwcHgsIDI0MHB4KTtcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg4MHB4LCAxNjBweCwgMjQwcHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubWFpbi1jb250ZW50LW1lbnUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuNik7XG4gICAgICAgIGdhcDogN3B4O1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGVudC1tZW51IC5tZW51LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xuICAgICAgICB3aWR0aDogY2xhbXAoNDBweCwgODBweCwgMTIwcHgpO1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDQwcHgsIDgwcHgsIDEyMHB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGVudC1jb250YWN0LXVzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuY29udGFjdC11cyB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY0MjQyO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuZm9vZC1pbWFnZS1ob21lIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB9XG5cblxuICAgIC5mb29kLWltYWdlLW1lbnUge1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMi41cHg7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cblxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlEQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxP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QTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7OztJQUdBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0VBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocmVzdGF1cmFudC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NCwgMjIsIDIyLCAwLjgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uaGVhZGVyIC5sb2dvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5oZWFkZXIgLmxvZ28gLmltYWdlLWxvZ28ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNzVweDtcXG59XFxuXFxuLmhlYWRlciAubmF2LWJhciB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIFxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA2MHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuOCk7XFxuICAgIHdpZHRoOiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC42KTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1haW4tY29udGVudC1tZW51IC5tZW51LWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtY29udGFjdC11cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtdXMge1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjQyNDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9vZC1pbWFnZS1ob21lIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuXFxuLmZvb2QtaW1hZ2UtbWVudSB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM3LjVweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICBcXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocmVzdGF1cmFudC5qcGcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAyMiwgMjIsIDAuOCk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDAuNHJlbTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubG9nbyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIgLmxvZ28gLmltYWdlLWxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubmF2LWJhciB1bHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGVudC1ob21lIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC44KTtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCg4MHB4LCAxNjBweCwgMjQwcHgpO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg4MHB4LCAxNjBweCwgMjQwcHgpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcGFkZGluZzogM3B4IDZweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRlbnQtbWVudSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuNik7XFxuICAgICAgICBnYXA6IDdweDtcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRlbnQtbWVudSAubWVudS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuNyk7XFxuICAgICAgICB3aWR0aDogY2xhbXAoNDBweCwgODBweCwgMTIwcHgpO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg0MHB4LCA4MHB4LCAxMjBweCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogN3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRlbnQtY29udGFjdC11cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuNyk7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtdXMge1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcblxcbiAgICAuZm9vdGVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjQyNDI7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIH1cXG5cXG4gICAgLmZvb2QtaW1hZ2UtaG9tZSB7XFxuICAgICAgICB3aWR0aDogNzBweDtcXG4gICAgICAgIGhlaWdodDogNzBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgLmZvb2QtaW1hZ2UtbWVudSB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEyLjVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB9XFxuXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFwc0ltYWdlIGZyb20gJy4vbWFwcy5qcGcnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2xvZ28ucG5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RDb250ZW50KCl7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudENvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWNvbnRhY3QtdXMnKTtcbiAgICBjb25zdCBtYXBzSW1nID0gbmV3IEltYWdlKCk7XG4gICAgbWFwc0ltZy5zcmMgPSBtYXBzSW1hZ2U7XG4gICAgbWFwc0ltZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXVzJyk7XG4gICAgbWFpbkNvbnRlbnRDb250YWN0LmFwcGVuZChtYXBzSW1nKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudENvbnRhY3QpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCc7XG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJDb250ZW50KTtcbiAgICBkaXZDb250ZW50LmFwcGVuZChmb290ZXIpO1xuXG59IiwiaW1wb3J0IGZvb2RJbWFnZSBmcm9tICcuL2Zvb2QuanBnJztcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi9sb2dvLnBuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lQ29udGVudCgpe1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBtYWluQ29udGVudEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudEhvbWUuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWhvbWUnKTtcbiAgICBjb25zdCBjb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50MS50ZXh0Q29udGVudCA9ICdCZXN0IHBhZGFuZyBpbiB0aGUgbmF0aW9uISdcbiAgICBjb25zdCBjb250ZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50Mi50ZXh0Q29udGVudCA9ICdBbGwgbWVudSBhdmFpbGFibGUhJ1xuICAgIGNvbnN0IGZvb2QgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kLnNyYyA9IGZvb2RJbWFnZTtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UtaG9tZScpO1xuICAgIGNvbnN0IGNvbnRlbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnQzLnRleHRDb250ZW50ID0gJ09yZGVyIG5vdyEgV2hhdCBhcmUgeW91IHdhaXRpbmcgZm9yPydcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGNvbnRlbnQxKTtcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGNvbnRlbnQyKTtcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGZvb2QpO1xuICAgIG1haW5Db250ZW50SG9tZS5hcHBlbmQoY29udGVudDMpO1xuICAgIG1haW4uYXBwZW5kKG1haW5Db250ZW50SG9tZSk7XG4gICAgZGl2Q29udGVudC5hcHBlbmQobWFpbik7XG5cblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGVudCcpO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0JztcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG5cbn0iLCJpbXBvcnQgZm9vZEltYWdlIGZyb20gJy4vZm9vZC5qcGcnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2xvZ28ucG5nJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbENvbnRlbnQoKXtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFkZXJDb250ZW50LnNyYyA9IGxvZ29JbWFnZTtcbiAgICBoZWFkZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWxvZ28nKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuICAgIGNvbnN0IGxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBoZWFkZXJMb2dvLmFwcGVuZChoZWFkZXJDb250ZW50KTtcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckxvZ28pO1xuICAgIGxpMS5hcHBlbmQoaG9tZUJ0bik7XG4gICAgbGkyLmFwcGVuZChtZW51QnRuKTtcbiAgICBsaTMuYXBwZW5kKGNvbnRhY3RCdG4pO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTEpO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTIpO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTMpO1xuICAgIG5hdkJhci5hcHBlbmQobGlzdFdyYXBwZXIpO1xuICAgIGhlYWRlci5hcHBlbmQobmF2QmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRIb21lLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudC1ob21lJyk7XG4gICAgY29uc3QgY29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDEudGV4dENvbnRlbnQgPSAnQmVzdCBwYWRhbmcgaW4gdGhlIG5hdGlvbiEnXG4gICAgY29uc3QgY29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDIudGV4dENvbnRlbnQgPSAnQWxsIG1lbnUgYXZhaWxhYmxlISdcbiAgICBjb25zdCBmb29kID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZC5zcmMgPSBmb29kSW1hZ2U7XG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlLWhvbWUnKTtcbiAgICBjb25zdCBjb250ZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50My50ZXh0Q29udGVudCA9ICdPcmRlciBub3chIFdoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8nXG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChjb250ZW50MSk7XG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChjb250ZW50Mik7XG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChmb29kKTtcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGNvbnRlbnQzKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudEhvbWUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCc7XG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJDb250ZW50KTtcbiAgICBkaXZDb250ZW50LmFwcGVuZChmb290ZXIpO1xufSIsImltcG9ydCByZW5kYW5nSW1hZ2UgZnJvbSAnLi9yZW5kYW5nLmpwZWcnO1xuaW1wb3J0IGd1bGFpSW1hZ2UgZnJvbSAnLi9ndWxhaS5qcGVnJztcbmltcG9ydCBmaXNoSW1hZ2UgZnJvbSAnLi9maXNoLmpwZWcnO1xuaW1wb3J0IHJpY2VJbWFnZSBmcm9tICcuL3JpY2UuanBlZyc7XG5leHBvcnQgZnVuY3Rpb24gbWVudUNvbnRlbnQoKXtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBtYWluQ29udGVudE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudE1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LW1lbnUnKTtcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHJlbmRhbmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICByZW5kYW5nSW1nLnNyYyA9IHJlbmRhbmdJbWFnZTtcbiAgICByZW5kYW5nSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UtbWVudScpO1xuICAgIGNvbnN0IGltYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGltYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnUmVuZGFuZyc7XG4gICAgY29uc3QgaW1hZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbWFnZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0VtcHVrIEJvcyEnXG4gICAgY29uc3QgbWVudTJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGd1bGFpSW1nID0gbmV3IEltYWdlKCk7XG4gICAgZ3VsYWlJbWcuc3JjID0gZ3VsYWlJbWFnZTtcbiAgICBndWxhaUltZy5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlLW1lbnUnKTtcbiAgICBjb25zdCBpbWFnZTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW1hZ2UyVGl0bGUudGV4dENvbnRlbnQgPSAnR3VsYWkgQmVlZic7XG4gICAgY29uc3QgaW1hZ2UyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW1hZ2UyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVmVyeSBUYXN0eSEnXG4gICAgY29uc3QgbWVudTNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUzRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGZpc2hJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBmaXNoSW1nLnNyYyA9IGZpc2hJbWFnZTtcbiAgICBmaXNoSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UtbWVudScpO1xuICAgIGNvbnN0IGltYWdlM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbWFnZTNUaXRsZS50ZXh0Q29udGVudCA9ICdHdWxhaSBGaXNoJztcbiAgICBjb25zdCBpbWFnZTNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbWFnZTNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdWZXJ5IEZpc2h5ISdcblxuICAgIGNvbnN0IG1lbnU0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCByaWNlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmljZUltZy5zcmMgPSByaWNlSW1hZ2U7XG4gICAgcmljZUltZy5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlLW1lbnUnKTtcbiAgICBjb25zdCBpbWFnZTRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW1hZ2U0VGl0bGUudGV4dENvbnRlbnQgPSAnRGUgUmljZSc7XG4gICAgY29uc3QgaW1hZ2U0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW1hZ2U0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnSG90IFJpY2UhJ1xuXG4gICAgbWVudURlc2NyaXB0aW9uLmFwcGVuZChyZW5kYW5nSW1nKTtcbiAgICBtZW51RGVzY3JpcHRpb24uYXBwZW5kKGltYWdlVGl0bGUpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2VEZXNjcmlwdGlvbik7XG4gICAgbWVudTJEZXNjcmlwdGlvbi5hcHBlbmQoZ3VsYWlJbWcpO1xuICAgIG1lbnUyRGVzY3JpcHRpb24uYXBwZW5kKGltYWdlMlRpdGxlKTtcbiAgICBtZW51MkRlc2NyaXB0aW9uLmFwcGVuZChpbWFnZTJEZXNjcmlwdGlvbik7XG4gICAgbWVudTNEZXNjcmlwdGlvbi5hcHBlbmQoZmlzaEltZyk7XG4gICAgbWVudTNEZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2UzVGl0bGUpO1xuICAgIG1lbnUzRGVzY3JpcHRpb24uYXBwZW5kKGltYWdlM0Rlc2NyaXB0aW9uKTtcbiAgICBtZW51NERlc2NyaXB0aW9uLmFwcGVuZChyaWNlSW1nKTtcbiAgICBtZW51NERlc2NyaXB0aW9uLmFwcGVuZChpbWFnZTRUaXRsZSk7XG4gICAgbWVudTREZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2U0RGVzY3JpcHRpb24pO1xuICAgIG1haW5Db250ZW50TWVudS5hcHBlbmQobWVudURlc2NyaXB0aW9uKTtcbiAgICBtYWluQ29udGVudE1lbnUuYXBwZW5kKG1lbnUyRGVzY3JpcHRpb24pO1xuICAgIG1haW5Db250ZW50TWVudS5hcHBlbmQobWVudTNEZXNjcmlwdGlvbik7XG4gICAgbWFpbkNvbnRlbnRNZW51LmFwcGVuZChtZW51NERlc2NyaXB0aW9uKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudE1lbnUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCc7XG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJDb250ZW50KTtcbiAgICBkaXZDb250ZW50LmFwcGVuZChmb290ZXIpO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhvbWVDb250ZW50IH0gZnJvbSAnLi9ob21lLmpzJyBcbmltcG9ydCB7IG1lbnVDb250ZW50IH0gZnJvbSAnLi9tZW51LmpzJyBcbmltcG9ydCB7IGNvbnRhY3RDb250ZW50IH0gZnJvbSAnLi9jb250YWN0LXVzLmpzJyBcbmltcG9ydCB7IGluaXRpYWxDb250ZW50IH0gZnJvbSAnLi9pbml0aWFsLWNvbnRlbnQuanMnXG5cbmluaXRpYWxDb250ZW50KCk7IC8vZG9udCBwdXQgaGVhZGVyIGluc2lkZSBtYWluYm9keS4gYmVjYXVzZSBldmVudCBsaXN0ZW5lciB3b250IHdvcmsgaWYgeW91IHJlcmVuZGVyIHRoZSBidXR0b25cblxubGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5sZXQgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJylcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGRpdkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIH07XG4gICAgaG9tZUNvbnRlbnQoKTtcbiAgICB9XG4pO1xuXG5sZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jylcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGRpdkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICBtZW51Q29udGVudCgpO1xuICAgIH1cbik7XG5cbmxldCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKVxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoZGl2Q29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgZGl2Q29udGVudC5yZW1vdmVDaGlsZChkaXZDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIGNvbnRhY3RDb250ZW50KCk7XG4gICAgfSAgIFxuKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9