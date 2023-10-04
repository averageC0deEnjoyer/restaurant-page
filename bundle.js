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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Medium.ttf */ "./src/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! restaurant.jpg */ "./src/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: roboto;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-attachment: fixed;
    background-size: cover;
    font-family: roboto;
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
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
        background-attachment: fixed;
        background-size: cover;
        font-family: roboto;
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
        font-size: 0.8rem;
        justify-content: center;
        align-items: center;
        padding: 0.3rem;
        position: fixed;
        top: 0;
        left: 0;
    }

    .header .logo {
        margin-left: 0.5rem;
        margin-right: auto;
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
        width: clamp(135px, 270px, 405px);
        height: clamp(135px, 270px, 405px);
        border-radius: 3px;
        padding: 3px 6px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
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
        width: clamp(60px, 120px, 180px);
        height: clamp(60px, 120px, 180px);
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
        text-align: center;
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
        font-size: 0.9rem;
        background: none;
    }

  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: roboto;\n    src: url(./Roboto-Medium.ttf);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(restaurant.jpg);\n    background-attachment: fixed;\n    background-size: cover;\n    font-family: roboto;\n    font-size: 1.6rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n\n.header {\n    display: flex;\n    width: 100%;\n    background-color: rgba(84, 22, 22, 0.8);\n    color: white;\n    font-size: 2rem;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.header .logo {\n    margin-left: 1rem;\n    margin-right: auto;\n    font-size: 2.5rem;\n}\n\n.header .logo .image-logo {\n    width: 200px;\n    height: 75px;\n}\n\n.header .nav-bar ul{\n    display: flex;\n    flex-direction: row;\n    gap: 30px;\n    list-style-type: none;\n    margin-right: 1rem;\n  \n}\n\n.main {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 60px;\n}\n\n.main-content-home {\n    background-color: rgba(247,194,194,0.8);\n    width: clamp(250px, 500px, 750px);\n    height: clamp(250px, 500px, 750px);\n    border-radius: 10px;\n    padding: 10px 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-content-menu {\n    background-color: rgba(247,194,194,0.6);\n    gap: 20px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: space-evenly;\n    place-items: center;\n    border-radius: 10px;\n}\n\n.main-content-menu .menu-description {\n    background-color: rgba(247,194,194,0.7);\n    width: clamp(100px, 200px, 300px);\n    height: clamp(100px, 200px, 300px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    border-radius: 10px;\n}\n\n.main-content-contact-us {\n    background-color: rgba(247,194,194,0.7);\n    padding: 20px;\n    border-radius: 10px;\n}\n\n.contact-us {\n    width: 750px;\n    height: 400px;\n    border-radius: 10px;\n}\n\n.footer {\n    margin-top: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    background-color: #c64242;\n    opacity: 0.8;\n    width: 100%;\n    text-align: center;\n    color: white;\n    font-weight: 600;\n}\n\n.food-image-home {\n    width: 200px;\n    height: 200px;\n    border-radius: 100px;\n}\n\n\n.food-image-menu {\n    width: 75px;\n    height: 75px;\n    border-radius: 37.5px;\n}\n\nbutton {\n    color: white;\n    border: none;\n    font-size: 2rem;\n    background: none;\n}\n\nbutton:hover {\n    cursor:pointer;\n}\n\n@media screen and (max-width: 600px) {\n        \n    body {\n        background-image: url(restaurant.jpg);\n        background-attachment: fixed;\n        background-size: cover;\n        font-family: roboto;\n        font-size: 0.8rem;\n    }\n\n    .content {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        min-height: 100vh;\n        min-width: 100vw;\n    }\n\n    .header {\n        display: flex;\n        width: 100%;\n        background-color: rgba(84, 22, 22, 0.8);\n        color: white;\n        font-size: 0.8rem;\n        justify-content: center;\n        align-items: center;\n        padding: 0.3rem;\n        position: fixed;\n        top: 0;\n        left: 0;\n    }\n\n    .header .logo {\n        margin-left: 0.5rem;\n        margin-right: auto;\n    }\n\n    .header .logo .image-logo {\n        width: 80px;\n        height: 30px;\n    }\n\n    .header .nav-bar ul{\n        display: flex;\n        flex-direction: row;\n        gap: 10px;\n        list-style-type: none;\n        margin-right: 1rem;\n    \n    }\n\n    .main {\n        flex: 1;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 20px;\n    }\n\n    .main-content-home {\n        background-color: rgba(247,194,194,0.8);\n        width: clamp(135px, 270px, 405px);\n        height: clamp(135px, 270px, 405px);\n        border-radius: 3px;\n        padding: 3px 6px;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.5rem;\n    }\n\n    .main-content-menu {\n        background-color: rgba(247,194,194,0.6);\n        gap: 7px;\n        padding: 7px;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        justify-content: space-evenly;\n        place-items: center;\n        border-radius: 4px;\n    }\n\n    .main-content-menu .menu-description {\n        background-color: rgba(247,194,194,0.7);\n        width: clamp(60px, 120px, 180px);\n        height: clamp(60px, 120px, 180px);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 7px;\n        border-radius: 4px;\n    }\n\n    .main-content-contact-us {\n        background-color: rgba(247,194,194,0.7);\n        padding: 7px;\n        border-radius: 4px;\n        text-align: center;\n    }\n\n    .contact-us {\n        width: 250px;\n        height: 130px;\n        border-radius: 4px;\n    }\n\n    .footer {\n        margin-top: auto;\n        padding-top: 0.4rem;\n        padding-bottom: 0.4rem;\n        background-color: #c64242;\n        opacity: 0.8;\n        width: 100%;\n        text-align: center;\n        color: white;\n        font-weight: 600;\n    }\n\n    .food-image-home {\n        width: 70px;\n        height: 70px;\n        border-radius: 40px;\n    }\n\n\n    .food-image-menu {\n        width: 25px;\n        height: 25px;\n        border-radius: 12.5px;\n    }\n\n    button {\n        color: white;\n        border: none;\n        font-size: 0.9rem;\n        background: none;\n    }\n\n  }"],"sourceRoot":""}]);
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
/* harmony import */ var _download_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.jpeg */ "./src/download.jpeg");
// import mapsImage from './maps.jpg';


function contactContent(){
    const divContent = document.querySelector('#content');


    const main = document.createElement('div');
    main.classList.add('main');
    const mainContentContact = document.createElement('div');
    mainContentContact.classList.add('main-content-contact-us');
    const catImg = new Image();
    catImg.src = _download_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    catImg.classList.add('contact-us');
    const imageDesc = document.createElement('h3');
    imageDesc.textContent = 'Why eat if you will get hungry again';
    mainContentContact.append(catImg);
    mainContentContact.append(imageDesc);
    main.append(mainContentContact);
    divContent.append(main);


    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');
    footerContent.textContent = 'Copyright @averageC0deEnjoyer';
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
    footerContent.textContent = 'Copyright @averageC0deEnjoyer';
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
    footerContent.textContent = 'Copyright @averageC0deEnjoyer';
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
    footerContent.textContent = 'Copyright @averageC0deEnjoyer';
    footer.append(footerContent);
    divContent.append(footer);

}

/***/ }),

/***/ "./src/Roboto-Medium.ttf":
/*!*******************************!*\
  !*** ./src/Roboto-Medium.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fcd45fbfc419c42c8b9.ttf";

/***/ }),

/***/ "./src/download.jpeg":
/*!***************************!*\
  !*** ./src/download.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d493f2fbfed71c4fa823.jpeg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDRDQUE0QywyR0FBaUM7QUFDN0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZ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SSxxREFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWM7QUFDbEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LXVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJyZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NCwgMjIsIDIyLCAwLjgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmhlYWRlciAubG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uaGVhZGVyIC5sb2dvIC5pbWFnZS1sb2dvIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xufVxuXG4uaGVhZGVyIC5uYXYtYmFyIHVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDMwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgXG59XG5cbi5tYWluIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2MHB4O1xufVxuXG4ubWFpbi1jb250ZW50LWhvbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC44KTtcbiAgICB3aWR0aDogY2xhbXAoMjUwcHgsIDUwMHB4LCA3NTBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbi1jb250ZW50LW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC42KTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWFpbi1jb250ZW50LW1lbnUgLm1lbnUtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XG4gICAgaGVpZ2h0OiBjbGFtcCgxMDBweCwgMjAwcHgsIDMwMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1haW4tY29udGVudC1jb250YWN0LXVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuNyk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGFjdC11cyB7XG4gICAgd2lkdGg6IDc1MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY0MjQyO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb29kLWltYWdlLWhvbWUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG5cbi5mb29kLWltYWdlLW1lbnUge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNy41cHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgXG4gICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAyMiwgMjIsIDAuOCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5oZWFkZXIgLmxvZ28ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmhlYWRlciAubG9nbyAuaW1hZ2UtbG9nbyB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRlciAubmF2LWJhciB1bHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBcbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRlbnQtaG9tZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC44KTtcbiAgICAgICAgd2lkdGg6IGNsYW1wKDEzNXB4LCAyNzBweCwgNDA1cHgpO1xuICAgICAgICBoZWlnaHQ6IGNsYW1wKDEzNXB4LCAyNzBweCwgNDA1cHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgLm1haW4tY29udGVudC1tZW51IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjYpO1xuICAgICAgICBnYXA6IDdweDtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRlbnQtbWVudSAubWVudS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcbiAgICAgICAgd2lkdGg6IGNsYW1wKDYwcHgsIDEyMHB4LCAxODBweCk7XG4gICAgICAgIGhlaWdodDogY2xhbXAoNjBweCwgMTIwcHgsIDE4MHB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGVudC1jb250YWN0LXVzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jb250YWN0LXVzIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjRyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjQyNDI7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5mb29kLWltYWdlLWhvbWUge1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIH1cblxuXG4gICAgLmZvb2QtaW1hZ2UtbWVudSB7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEyLjVweDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuXG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsNENBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5REFBcUM7SUFDckMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHFCQUFxQjtJQUNyQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJO1FBQ0kseURBQXFDO1FBQ3JDLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCx1Q0FBdUM7UUFDdkMsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixlQUFlO1FBQ2YsTUFBTTtRQUNOLE9BQU87SUFDWDs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsU0FBUztRQUNULHFCQUFxQjtRQUNyQixrQkFBa0I7O0lBRXRCOztJQUVBO1FBQ0ksT0FBTztRQUNQLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx1Q0FBdUM7UUFDdkMsaUNBQWlDO1FBQ2pDLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCx1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLHVDQUF1QztRQUN2QyxRQUFRO1FBQ1IsWUFBWTtRQUNaLGFBQWE7UUFDYixxQ0FBcUM7UUFDckMsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSx1Q0FBdUM7UUFDdkMsZ0NBQWdDO1FBQ2hDLGlDQUFpQztRQUNqQyxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsUUFBUTtRQUNSLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHVDQUF1QztRQUN2QyxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7O0lBR0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7RUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gICAgc3JjOiB1cmwoLi9Sb2JvdG8tTWVkaXVtLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocmVzdGF1cmFudC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NCwgMjIsIDIyLCAwLjgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uaGVhZGVyIC5sb2dvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5oZWFkZXIgLmxvZ28gLmltYWdlLWxvZ28ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNzVweDtcXG59XFxuXFxuLmhlYWRlciAubmF2LWJhciB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIFxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA2MHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuOCk7XFxuICAgIHdpZHRoOiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC42KTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1haW4tY29udGVudC1tZW51IC5tZW51LWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtY29udGFjdC11cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtdXMge1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjQyNDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9vZC1pbWFnZS1ob21lIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuXFxuLmZvb2QtaW1hZ2UtbWVudSB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM3LjVweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICBcXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocmVzdGF1cmFudC5qcGcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAyMiwgMjIsIDAuOCk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubG9nbyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIgLmxvZ28gLmltYWdlLWxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubmF2LWJhciB1bHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGVudC1ob21lIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC44KTtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCgxMzVweCwgMjcwcHgsIDQwNXB4KTtcXG4gICAgICAgIGhlaWdodDogY2xhbXAoMTM1cHgsIDI3MHB4LCA0MDVweCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250ZW50LW1lbnUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjYpO1xcbiAgICAgICAgZ2FwOiA3cHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250ZW50LW1lbnUgLm1lbnUtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDYwcHgsIDEyMHB4LCAxODBweCk7XFxuICAgICAgICBoZWlnaHQ6IGNsYW1wKDYwcHgsIDEyMHB4LCAxODBweCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogN3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWNvbnRlbnQtY29udGFjdC11cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuNyk7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtdXMge1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcblxcbiAgICAuZm9vdGVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjQyNDI7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIH1cXG5cXG4gICAgLmZvb2QtaW1hZ2UtaG9tZSB7XFxuICAgICAgICB3aWR0aDogNzBweDtcXG4gICAgICAgIGhlaWdodDogNzBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIH1cXG5cXG5cXG4gICAgLmZvb2QtaW1hZ2UtbWVudSB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEyLjVweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB9XFxuXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgbWFwc0ltYWdlIGZyb20gJy4vbWFwcy5qcGcnO1xuaW1wb3J0IGRvd25sb2FkSW1hZ2UgZnJvbSAnLi9kb3dubG9hZC5qcGVnJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdENvbnRlbnQoKXtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGNvbnN0IG1haW5Db250ZW50Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50Q29udGFjdC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQtY29udGFjdC11cycpO1xuICAgIGNvbnN0IGNhdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGNhdEltZy5zcmMgPSBkb3dubG9hZEltYWdlO1xuICAgIGNhdEltZy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXVzJyk7XG4gICAgY29uc3QgaW1hZ2VEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpbWFnZURlc2MudGV4dENvbnRlbnQgPSAnV2h5IGVhdCBpZiB5b3Ugd2lsbCBnZXQgaHVuZ3J5IGFnYWluJztcbiAgICBtYWluQ29udGVudENvbnRhY3QuYXBwZW5kKGNhdEltZyk7XG4gICAgbWFpbkNvbnRlbnRDb250YWN0LmFwcGVuZChpbWFnZURlc2MpO1xuICAgIG1haW4uYXBwZW5kKG1haW5Db250ZW50Q29udGFjdCk7XG4gICAgZGl2Q29udGVudC5hcHBlbmQobWFpbik7XG5cblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGVudCcpO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IEBhdmVyYWdlQzBkZUVuam95ZXInO1xuICAgIGZvb3Rlci5hcHBlbmQoZm9vdGVyQ29udGVudCk7XG4gICAgZGl2Q29udGVudC5hcHBlbmQoZm9vdGVyKTtcblxufSIsImltcG9ydCBmb29kSW1hZ2UgZnJvbSAnLi9mb29kLmpwZyc7XG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vbG9nby5wbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tZUNvbnRlbnQoKXtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRIb21lLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudC1ob21lJyk7XG4gICAgY29uc3QgY29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDEudGV4dENvbnRlbnQgPSAnQmVzdCBwYWRhbmcgaW4gdGhlIG5hdGlvbiEnXG4gICAgY29uc3QgY29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDIudGV4dENvbnRlbnQgPSAnQWxsIG1lbnUgYXZhaWxhYmxlISdcbiAgICBjb25zdCBmb29kID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZC5zcmMgPSBmb29kSW1hZ2U7XG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlLWhvbWUnKTtcbiAgICBjb25zdCBjb250ZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50My50ZXh0Q29udGVudCA9ICdPcmRlciBub3chIFdoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8nXG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChjb250ZW50MSk7XG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChjb250ZW50Mik7XG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChmb29kKTtcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGNvbnRlbnQzKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudEhvbWUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCBAYXZlcmFnZUMwZGVFbmpveWVyJztcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG5cbn0iLCJpbXBvcnQgZm9vZEltYWdlIGZyb20gJy4vZm9vZC5qcGcnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2xvZ28ucG5nJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbENvbnRlbnQoKXtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFkZXJDb250ZW50LnNyYyA9IGxvZ29JbWFnZTtcbiAgICBoZWFkZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWxvZ28nKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuICAgIGNvbnN0IGxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBoZWFkZXJMb2dvLmFwcGVuZChoZWFkZXJDb250ZW50KTtcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckxvZ28pO1xuICAgIGxpMS5hcHBlbmQoaG9tZUJ0bik7XG4gICAgbGkyLmFwcGVuZChtZW51QnRuKTtcbiAgICBsaTMuYXBwZW5kKGNvbnRhY3RCdG4pO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTEpO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTIpO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTMpO1xuICAgIG5hdkJhci5hcHBlbmQobGlzdFdyYXBwZXIpO1xuICAgIGhlYWRlci5hcHBlbmQobmF2QmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRIb21lLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudC1ob21lJyk7XG4gICAgY29uc3QgY29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDEudGV4dENvbnRlbnQgPSAnQmVzdCBwYWRhbmcgaW4gdGhlIG5hdGlvbiEnXG4gICAgY29uc3QgY29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDIudGV4dENvbnRlbnQgPSAnQWxsIG1lbnUgYXZhaWxhYmxlISdcbiAgICBjb25zdCBmb29kID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZC5zcmMgPSBmb29kSW1hZ2U7XG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlLWhvbWUnKTtcbiAgICBjb25zdCBjb250ZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50My50ZXh0Q29udGVudCA9ICdPcmRlciBub3chIFdoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8nXG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChjb250ZW50MSk7XG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChjb250ZW50Mik7XG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChmb29kKTtcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGNvbnRlbnQzKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudEhvbWUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCBAYXZlcmFnZUMwZGVFbmpveWVyJztcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG59IiwiaW1wb3J0IHJlbmRhbmdJbWFnZSBmcm9tICcuL3JlbmRhbmcuanBlZyc7XG5pbXBvcnQgZ3VsYWlJbWFnZSBmcm9tICcuL2d1bGFpLmpwZWcnO1xuaW1wb3J0IGZpc2hJbWFnZSBmcm9tICcuL2Zpc2guanBlZyc7XG5pbXBvcnQgcmljZUltYWdlIGZyb20gJy4vcmljZS5qcGVnJztcbmV4cG9ydCBmdW5jdGlvbiBtZW51Q29udGVudCgpe1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGNvbnN0IG1haW5Db250ZW50TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250ZW50TWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQtbWVudScpO1xuICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgcmVuZGFuZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHJlbmRhbmdJbWcuc3JjID0gcmVuZGFuZ0ltYWdlO1xuICAgIHJlbmRhbmdJbWcuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZS1tZW51Jyk7XG4gICAgY29uc3QgaW1hZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW1hZ2VUaXRsZS50ZXh0Q29udGVudCA9ICdSZW5kYW5nJztcbiAgICBjb25zdCBpbWFnZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGltYWdlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRW1wdWsgQm9zISdcbiAgICBjb25zdCBtZW51MkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZ3VsYWlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBndWxhaUltZy5zcmMgPSBndWxhaUltYWdlO1xuICAgIGd1bGFpSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UtbWVudScpO1xuICAgIGNvbnN0IGltYWdlMlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbWFnZTJUaXRsZS50ZXh0Q29udGVudCA9ICdHdWxhaSBCZWVmJztcbiAgICBjb25zdCBpbWFnZTJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbWFnZTJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdWZXJ5IFRhc3R5ISdcbiAgICBjb25zdCBtZW51M0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudTNEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZmlzaEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGZpc2hJbWcuc3JjID0gZmlzaEltYWdlO1xuICAgIGZpc2hJbWcuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZS1tZW51Jyk7XG4gICAgY29uc3QgaW1hZ2UzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGltYWdlM1RpdGxlLnRleHRDb250ZW50ID0gJ0d1bGFpIEZpc2gnO1xuICAgIGNvbnN0IGltYWdlM0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGltYWdlM0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1ZlcnkgRmlzaHkhJ1xuXG4gICAgY29uc3QgbWVudTREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnU0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHJpY2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICByaWNlSW1nLnNyYyA9IHJpY2VJbWFnZTtcbiAgICByaWNlSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UtbWVudScpO1xuICAgIGNvbnN0IGltYWdlNFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbWFnZTRUaXRsZS50ZXh0Q29udGVudCA9ICdEZSBSaWNlJztcbiAgICBjb25zdCBpbWFnZTREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbWFnZTREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdIb3QgUmljZSEnXG5cbiAgICBtZW51RGVzY3JpcHRpb24uYXBwZW5kKHJlbmRhbmdJbWcpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2VUaXRsZSk7XG4gICAgbWVudURlc2NyaXB0aW9uLmFwcGVuZChpbWFnZURlc2NyaXB0aW9uKTtcbiAgICBtZW51MkRlc2NyaXB0aW9uLmFwcGVuZChndWxhaUltZyk7XG4gICAgbWVudTJEZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2UyVGl0bGUpO1xuICAgIG1lbnUyRGVzY3JpcHRpb24uYXBwZW5kKGltYWdlMkRlc2NyaXB0aW9uKTtcbiAgICBtZW51M0Rlc2NyaXB0aW9uLmFwcGVuZChmaXNoSW1nKTtcbiAgICBtZW51M0Rlc2NyaXB0aW9uLmFwcGVuZChpbWFnZTNUaXRsZSk7XG4gICAgbWVudTNEZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2UzRGVzY3JpcHRpb24pO1xuICAgIG1lbnU0RGVzY3JpcHRpb24uYXBwZW5kKHJpY2VJbWcpO1xuICAgIG1lbnU0RGVzY3JpcHRpb24uYXBwZW5kKGltYWdlNFRpdGxlKTtcbiAgICBtZW51NERlc2NyaXB0aW9uLmFwcGVuZChpbWFnZTREZXNjcmlwdGlvbik7XG4gICAgbWFpbkNvbnRlbnRNZW51LmFwcGVuZChtZW51RGVzY3JpcHRpb24pO1xuICAgIG1haW5Db250ZW50TWVudS5hcHBlbmQobWVudTJEZXNjcmlwdGlvbik7XG4gICAgbWFpbkNvbnRlbnRNZW51LmFwcGVuZChtZW51M0Rlc2NyaXB0aW9uKTtcbiAgICBtYWluQ29udGVudE1lbnUuYXBwZW5kKG1lbnU0RGVzY3JpcHRpb24pO1xuICAgIG1haW4uYXBwZW5kKG1haW5Db250ZW50TWVudSk7XG4gICAgZGl2Q29udGVudC5hcHBlbmQobWFpbik7XG5cblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGVudCcpO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IEBhdmVyYWdlQzBkZUVuam95ZXInO1xuICAgIGZvb3Rlci5hcHBlbmQoZm9vdGVyQ29udGVudCk7XG4gICAgZGl2Q29udGVudC5hcHBlbmQoZm9vdGVyKTtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBob21lQ29udGVudCB9IGZyb20gJy4vaG9tZS5qcycgXG5pbXBvcnQgeyBtZW51Q29udGVudCB9IGZyb20gJy4vbWVudS5qcycgXG5pbXBvcnQgeyBjb250YWN0Q29udGVudCB9IGZyb20gJy4vY29udGFjdC11cy5qcycgXG5pbXBvcnQgeyBpbml0aWFsQ29udGVudCB9IGZyb20gJy4vaW5pdGlhbC1jb250ZW50LmpzJ1xuXG5pbml0aWFsQ29udGVudCgpOyAvL2RvbnQgcHV0IGhlYWRlciBpbnNpZGUgbWFpbmJvZHkuIGJlY2F1c2UgZXZlbnQgbGlzdGVuZXIgd29udCB3b3JrIGlmIHlvdSByZXJlbmRlciB0aGUgYnV0dG9uXG5cbmxldCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxubGV0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChkaXZDb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBkaXZDb250ZW50LnJlbW92ZUNoaWxkKGRpdkNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9O1xuICAgIGhvbWVDb250ZW50KCk7XG4gICAgfVxuKTtcblxubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChkaXZDb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBkaXZDb250ZW50LnJlbW92ZUNoaWxkKGRpdkNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgbWVudUNvbnRlbnQoKTtcbiAgICB9XG4pO1xuXG5sZXQgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JylcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGRpdkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICBjb250YWN0Q29udGVudCgpO1xuICAgIH0gICBcbik7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==