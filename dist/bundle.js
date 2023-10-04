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
        font-size: 0.6rem;
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

  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    background-image: url(restaurant.jpg);\n    background-attachment: fixed;\n    background-size: cover;\n    font-family: 'Montserrat', cursive;\n    font-size: 1.6rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n\n.header {\n    display: flex;\n    width: 100%;\n    background-color: rgba(84, 22, 22, 0.8);\n    color: white;\n    font-size: 2rem;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.header .logo {\n    margin-left: 1rem;\n    margin-right: auto;\n    font-size: 2.5rem;\n}\n\n.header .logo .image-logo {\n    width: 200px;\n    height: 75px;\n}\n\n.header .nav-bar ul{\n    display: flex;\n    flex-direction: row;\n    gap: 30px;\n    list-style-type: none;\n    margin-right: 1rem;\n  \n}\n\n.main {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 60px;\n}\n\n.main-content-home {\n    background-color: rgba(247,194,194,0.8);\n    width: clamp(250px, 500px, 750px);\n    height: clamp(250px, 500px, 750px);\n    border-radius: 10px;\n    padding: 10px 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-content-menu {\n    background-color: rgba(247,194,194,0.6);\n    gap: 20px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: space-evenly;\n    place-items: center;\n    border-radius: 10px;\n}\n\n.main-content-menu .menu-description {\n    background-color: rgba(247,194,194,0.7);\n    width: clamp(100px, 200px, 300px);\n    height: clamp(100px, 200px, 300px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    border-radius: 10px;\n}\n\n.main-content-contact-us {\n    background-color: rgba(247,194,194,0.7);\n    padding: 20px;\n    border-radius: 10px;\n}\n\n.contact-us {\n    width: 750px;\n    height: 400px;\n    border-radius: 10px;\n}\n\n.footer {\n    margin-top: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    background-color: #c64242;\n    opacity: 0.8;\n    width: 100%;\n    text-align: center;\n    color: white;\n    font-weight: 600;\n}\n\n.food-image-home {\n    width: 200px;\n    height: 200px;\n    border-radius: 100px;\n}\n\n\n.food-image-menu {\n    width: 75px;\n    height: 75px;\n    border-radius: 37.5px;\n}\n\nbutton {\n    color: white;\n    border: none;\n    font-size: 2rem;\n    background: none;\n}\n\nbutton:hover {\n    cursor:pointer;\n}\n\n@media screen and (max-width: 600px) {\n        \n    body {\n        background-image: url(restaurant.jpg);\n        background-attachment: fixed;\n        background-size: cover;\n        font-family: 'Montserrat', cursive;\n        font-size: 0.8rem;\n    }\n\n    .content {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        min-height: 100vh;\n        min-width: 100vw;\n    }\n\n    .header {\n        display: flex;\n        width: 100%;\n        background-color: rgba(84, 22, 22, 0.8);\n        color: white;\n        font-size: 0.6rem;\n        justify-content: center;\n        align-items: center;\n        padding: 0.4rem;\n        position: fixed;\n        top: 0;\n        left: 0;\n    }\n\n    .header .logo {\n        margin-left: 0.5rem;\n        margin-right: auto;\n        font-size: 1.25rem;\n    }\n\n    .header .logo .image-logo {\n        width: 80px;\n        height: 30px;\n    }\n\n    .header .nav-bar ul{\n        display: flex;\n        flex-direction: row;\n        gap: 10px;\n        list-style-type: none;\n        margin-right: 1rem;\n    \n    }\n\n    .main {\n        flex: 1;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 20px;\n    }\n\n    .main-content-home {\n        background-color: rgba(247,194,194,0.8);\n        width: clamp(135px, 270px, 405px);\n        height: clamp(135px, 270px, 405px);\n        border-radius: 3px;\n        padding: 3px 6px;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .main-content-menu {\n        background-color: rgba(247,194,194,0.6);\n        gap: 7px;\n        padding: 7px;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        justify-content: space-evenly;\n        place-items: center;\n        border-radius: 4px;\n    }\n\n    .main-content-menu .menu-description {\n        background-color: rgba(247,194,194,0.7);\n        width: clamp(60px, 120px, 180px);\n        height: clamp(60px, 120px, 180px);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 7px;\n        border-radius: 4px;\n    }\n\n    .main-content-contact-us {\n        background-color: rgba(247,194,194,0.7);\n        padding: 7px;\n        border-radius: 4px;\n    }\n\n    .contact-us {\n        width: 250px;\n        height: 130px;\n        border-radius: 4px;\n    }\n\n    .footer {\n        margin-top: auto;\n        padding-top: 0.4rem;\n        padding-bottom: 0.4rem;\n        background-color: #c64242;\n        opacity: 0.8;\n        width: 100%;\n        text-align: center;\n        color: white;\n        font-weight: 600;\n    }\n\n    .food-image-home {\n        width: 70px;\n        height: 70px;\n        border-radius: 40px;\n    }\n\n\n    .food-image-menu {\n        width: 25px;\n        height: 25px;\n        border-radius: 12.5px;\n    }\n\n    button {\n        color: white;\n        border: none;\n        font-size: 0.7rem;\n        background: none;\n    }\n\n  }"],"sourceRoot":""}]);
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
    mainContentContact.append(catImg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkdBQWlDO0FBQzdFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbUNBQW1DO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFB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ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LXVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcInJlc3RhdXJhbnQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAyMiwgMjIsIDAuOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4uaGVhZGVyIC5sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5oZWFkZXIgLmxvZ28gLmltYWdlLWxvZ28ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG59XG5cbi5oZWFkZXIgLm5hdi1iYXIgdWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMzBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBcbn1cblxuLm1haW4ge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDYwcHg7XG59XG5cbi5tYWluLWNvbnRlbnQtaG9tZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjgpO1xuICAgIHdpZHRoOiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDI1MHB4LCA1MDBweCwgNzUwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvbnRlbnQtbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjYpO1xuICAgIGdhcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tYWluLWNvbnRlbnQtbWVudSAubWVudS1kZXNjcmlwdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwgMjAwcHgsIDMwMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDEwMHB4LCAyMDBweCwgMzAwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubWFpbi1jb250ZW50LWNvbnRhY3QtdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250YWN0LXVzIHtcbiAgICB3aWR0aDogNzUwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjQyNDI7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvb2QtaW1hZ2UtaG9tZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cblxuLmZvb2QtaW1hZ2UtbWVudSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM3LjVweDtcbn1cblxuYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBcbiAgICBib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDB2dztcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODQsIDIyLCAyMiwgMC44KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmhlYWRlciAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cblxuICAgIC5oZWFkZXIgLmxvZ28gLmltYWdlLWxvZ28ge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIC5oZWFkZXIgLm5hdi1iYXIgdWx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgXG4gICAgfVxuXG4gICAgLm1haW4ge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAubWFpbi1jb250ZW50LWhvbWUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuOCk7XG4gICAgICAgIHdpZHRoOiBjbGFtcCgxMzVweCwgMjcwcHgsIDQwNXB4KTtcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgxMzVweCwgMjcwcHgsIDQwNXB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGVudC1tZW51IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjYpO1xuICAgICAgICBnYXA6IDdweDtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRlbnQtbWVudSAubWVudS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcbiAgICAgICAgd2lkdGg6IGNsYW1wKDYwcHgsIDEyMHB4LCAxODBweCk7XG4gICAgICAgIGhlaWdodDogY2xhbXAoNjBweCwgMTIwcHgsIDE4MHB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGVudC1jb250YWN0LXVzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuY29udGFjdC11cyB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogMC40cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY0MjQyO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuZm9vZC1pbWFnZS1ob21lIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICB9XG5cblxuICAgIC5mb29kLWltYWdlLW1lbnUge1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMi41cHg7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cblxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlEQUFxQztJQUNyQyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFD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SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7OztJQUdBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7O0VBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocmVzdGF1cmFudC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NCwgMjIsIDIyLCAwLjgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uaGVhZGVyIC5sb2dvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5oZWFkZXIgLmxvZ28gLmltYWdlLWxvZ28ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNzVweDtcXG59XFxuXFxuLmhlYWRlciAubmF2LWJhciB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIFxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA2MHB4O1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywxOTQsMTk0LDAuOCk7XFxuICAgIHdpZHRoOiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyNTBweCwgNTAwcHgsIDc1MHB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC42KTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1haW4tY29udGVudC1tZW51IC5tZW51LWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xcbiAgICB3aWR0aDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XFxuICAgIGhlaWdodDogY2xhbXAoMTAwcHgsIDIwMHB4LCAzMDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQtY29udGFjdC11cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtdXMge1xcbiAgICB3aWR0aDogNzUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjQyNDI7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9vZC1pbWFnZS1ob21lIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuXFxuLmZvb2QtaW1hZ2UtbWVudSB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDM3LjVweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICBcXG4gICAgYm9keSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocmVzdGF1cmFudC5qcGcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBjdXJzaXZlO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAyMiwgMjIsIDAuOCk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubG9nbyB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkZXIgLmxvZ28gLmltYWdlLWxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubmF2LWJhciB1bHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGVudC1ob21lIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC44KTtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCgxMzVweCwgMjcwcHgsIDQwNXB4KTtcXG4gICAgICAgIGhlaWdodDogY2xhbXAoMTM1cHgsIDI3MHB4LCA0MDVweCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGVudC1tZW51IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC42KTtcXG4gICAgICAgIGdhcDogN3B4O1xcbiAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4tY29udGVudC1tZW51IC5tZW51LWRlc2NyaXB0aW9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LDE5NCwxOTQsMC43KTtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCg2MHB4LCAxMjBweCwgMTgwcHgpO1xcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCg2MHB4LCAxMjBweCwgMTgwcHgpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDdweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgfVxcblxcbiAgICAubWFpbi1jb250ZW50LWNvbnRhY3QtdXMge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsMTk0LDE5NCwwLjcpO1xcbiAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0LXVzIHtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG5cXG4gICAgLmZvb3RlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNHJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY0MjQyO1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxuXFxuICAgIC5mb29kLWltYWdlLWhvbWUge1xcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxuICAgICAgICBoZWlnaHQ6IDcwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICB9XFxuXFxuXFxuICAgIC5mb29kLWltYWdlLW1lbnUge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMi41cHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgfVxcblxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IG1hcHNJbWFnZSBmcm9tICcuL21hcHMuanBnJztcbmltcG9ydCBkb3dubG9hZEltYWdlIGZyb20gJy4vZG93bmxvYWQuanBlZydcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RDb250ZW50KCl7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBtYWluQ29udGVudENvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudENvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWNvbnRhY3QtdXMnKTtcbiAgICBjb25zdCBjYXRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjYXRJbWcuc3JjID0gZG93bmxvYWRJbWFnZTtcbiAgICBjYXRJbWcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC11cycpO1xuICAgIG1haW5Db250ZW50Q29udGFjdC5hcHBlbmQoY2F0SW1nKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudENvbnRhY3QpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCc7XG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJDb250ZW50KTtcbiAgICBkaXZDb250ZW50LmFwcGVuZChmb290ZXIpO1xuXG59IiwiaW1wb3J0IGZvb2RJbWFnZSBmcm9tICcuL2Zvb2QuanBnJztcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi9sb2dvLnBuZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lQ29udGVudCgpe1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBtYWluQ29udGVudEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudEhvbWUuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWhvbWUnKTtcbiAgICBjb25zdCBjb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50MS50ZXh0Q29udGVudCA9ICdCZXN0IHBhZGFuZyBpbiB0aGUgbmF0aW9uISdcbiAgICBjb25zdCBjb250ZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50Mi50ZXh0Q29udGVudCA9ICdBbGwgbWVudSBhdmFpbGFibGUhJ1xuICAgIGNvbnN0IGZvb2QgPSBuZXcgSW1hZ2UoKTtcbiAgICBmb29kLnNyYyA9IGZvb2RJbWFnZTtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UtaG9tZScpO1xuICAgIGNvbnN0IGNvbnRlbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRlbnQzLnRleHRDb250ZW50ID0gJ09yZGVyIG5vdyEgV2hhdCBhcmUgeW91IHdhaXRpbmcgZm9yPydcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGNvbnRlbnQxKTtcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGNvbnRlbnQyKTtcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGZvb2QpO1xuICAgIG1haW5Db250ZW50SG9tZS5hcHBlbmQoY29udGVudDMpO1xuICAgIG1haW4uYXBwZW5kKG1haW5Db250ZW50SG9tZSk7XG4gICAgZGl2Q29udGVudC5hcHBlbmQobWFpbik7XG5cblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udGVudCcpO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0JztcbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG5cbn0iLCJpbXBvcnQgZm9vZEltYWdlIGZyb20gJy4vZm9vZC5qcGcnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2xvZ28ucG5nJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbENvbnRlbnQoKXtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFkZXJDb250ZW50LnNyYyA9IGxvZ29JbWFnZTtcbiAgICBoZWFkZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWxvZ28nKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJhcicpO1xuICAgIGNvbnN0IGxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBoZWFkZXJMb2dvLmFwcGVuZChoZWFkZXJDb250ZW50KTtcbiAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckxvZ28pO1xuICAgIGxpMS5hcHBlbmQoaG9tZUJ0bik7XG4gICAgbGkyLmFwcGVuZChtZW51QnRuKTtcbiAgICBsaTMuYXBwZW5kKGNvbnRhY3RCdG4pO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTEpO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTIpO1xuICAgIGxpc3RXcmFwcGVyLmFwcGVuZChsaTMpO1xuICAgIG5hdkJhci5hcHBlbmQobGlzdFdyYXBwZXIpO1xuICAgIGhlYWRlci5hcHBlbmQobmF2QmFyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xuXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29uc3QgbWFpbkNvbnRlbnRIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnRIb21lLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudC1ob21lJyk7XG4gICAgY29uc3QgY29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDEudGV4dENvbnRlbnQgPSAnQmVzdCBwYWRhbmcgaW4gdGhlIG5hdGlvbiEnXG4gICAgY29uc3QgY29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudDIudGV4dENvbnRlbnQgPSAnQWxsIG1lbnUgYXZhaWxhYmxlISdcbiAgICBjb25zdCBmb29kID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZC5zcmMgPSBmb29kSW1hZ2U7XG4gICAgZm9vZC5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlLWhvbWUnKTtcbiAgICBjb25zdCBjb250ZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250ZW50My50ZXh0Q29udGVudCA9ICdPcmRlciBub3chIFdoYXQgYXJlIHlvdSB3YWl0aW5nIGZvcj8nXG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChjb250ZW50MSk7XG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChjb250ZW50Mik7XG4gICAgbWFpbkNvbnRlbnRIb21lLmFwcGVuZChmb29kKTtcbiAgICBtYWluQ29udGVudEhvbWUuYXBwZW5kKGNvbnRlbnQzKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudEhvbWUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCc7XG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJDb250ZW50KTtcbiAgICBkaXZDb250ZW50LmFwcGVuZChmb290ZXIpO1xufSIsImltcG9ydCByZW5kYW5nSW1hZ2UgZnJvbSAnLi9yZW5kYW5nLmpwZWcnO1xuaW1wb3J0IGd1bGFpSW1hZ2UgZnJvbSAnLi9ndWxhaS5qcGVnJztcbmltcG9ydCBmaXNoSW1hZ2UgZnJvbSAnLi9maXNoLmpwZWcnO1xuaW1wb3J0IHJpY2VJbWFnZSBmcm9tICcuL3JpY2UuanBlZyc7XG5leHBvcnQgZnVuY3Rpb24gbWVudUNvbnRlbnQoKXtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb25zdCBtYWluQ29udGVudE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudE1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LW1lbnUnKTtcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHJlbmRhbmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICByZW5kYW5nSW1nLnNyYyA9IHJlbmRhbmdJbWFnZTtcbiAgICByZW5kYW5nSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UtbWVudScpO1xuICAgIGNvbnN0IGltYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGltYWdlVGl0bGUudGV4dENvbnRlbnQgPSAnUmVuZGFuZyc7XG4gICAgY29uc3QgaW1hZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbWFnZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0VtcHVrIEJvcyEnXG4gICAgY29uc3QgbWVudTJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGd1bGFpSW1nID0gbmV3IEltYWdlKCk7XG4gICAgZ3VsYWlJbWcuc3JjID0gZ3VsYWlJbWFnZTtcbiAgICBndWxhaUltZy5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlLW1lbnUnKTtcbiAgICBjb25zdCBpbWFnZTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW1hZ2UyVGl0bGUudGV4dENvbnRlbnQgPSAnR3VsYWkgQmVlZic7XG4gICAgY29uc3QgaW1hZ2UyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW1hZ2UyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVmVyeSBUYXN0eSEnXG4gICAgY29uc3QgbWVudTNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUzRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGZpc2hJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBmaXNoSW1nLnNyYyA9IGZpc2hJbWFnZTtcbiAgICBmaXNoSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UtbWVudScpO1xuICAgIGNvbnN0IGltYWdlM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbWFnZTNUaXRsZS50ZXh0Q29udGVudCA9ICdHdWxhaSBGaXNoJztcbiAgICBjb25zdCBpbWFnZTNEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbWFnZTNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdWZXJ5IEZpc2h5ISdcblxuICAgIGNvbnN0IG1lbnU0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51NERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCByaWNlSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmljZUltZy5zcmMgPSByaWNlSW1hZ2U7XG4gICAgcmljZUltZy5jbGFzc0xpc3QuYWRkKCdmb29kLWltYWdlLW1lbnUnKTtcbiAgICBjb25zdCBpbWFnZTRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaW1hZ2U0VGl0bGUudGV4dENvbnRlbnQgPSAnRGUgUmljZSc7XG4gICAgY29uc3QgaW1hZ2U0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW1hZ2U0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnSG90IFJpY2UhJ1xuXG4gICAgbWVudURlc2NyaXB0aW9uLmFwcGVuZChyZW5kYW5nSW1nKTtcbiAgICBtZW51RGVzY3JpcHRpb24uYXBwZW5kKGltYWdlVGl0bGUpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2VEZXNjcmlwdGlvbik7XG4gICAgbWVudTJEZXNjcmlwdGlvbi5hcHBlbmQoZ3VsYWlJbWcpO1xuICAgIG1lbnUyRGVzY3JpcHRpb24uYXBwZW5kKGltYWdlMlRpdGxlKTtcbiAgICBtZW51MkRlc2NyaXB0aW9uLmFwcGVuZChpbWFnZTJEZXNjcmlwdGlvbik7XG4gICAgbWVudTNEZXNjcmlwdGlvbi5hcHBlbmQoZmlzaEltZyk7XG4gICAgbWVudTNEZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2UzVGl0bGUpO1xuICAgIG1lbnUzRGVzY3JpcHRpb24uYXBwZW5kKGltYWdlM0Rlc2NyaXB0aW9uKTtcbiAgICBtZW51NERlc2NyaXB0aW9uLmFwcGVuZChyaWNlSW1nKTtcbiAgICBtZW51NERlc2NyaXB0aW9uLmFwcGVuZChpbWFnZTRUaXRsZSk7XG4gICAgbWVudTREZXNjcmlwdGlvbi5hcHBlbmQoaW1hZ2U0RGVzY3JpcHRpb24pO1xuICAgIG1haW5Db250ZW50TWVudS5hcHBlbmQobWVudURlc2NyaXB0aW9uKTtcbiAgICBtYWluQ29udGVudE1lbnUuYXBwZW5kKG1lbnUyRGVzY3JpcHRpb24pO1xuICAgIG1haW5Db250ZW50TWVudS5hcHBlbmQobWVudTNEZXNjcmlwdGlvbik7XG4gICAgbWFpbkNvbnRlbnRNZW51LmFwcGVuZChtZW51NERlc2NyaXB0aW9uKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudE1lbnUpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gJ0NvcHlyaWdodCc7XG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJDb250ZW50KTtcbiAgICBkaXZDb250ZW50LmFwcGVuZChmb290ZXIpO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhvbWVDb250ZW50IH0gZnJvbSAnLi9ob21lLmpzJyBcbmltcG9ydCB7IG1lbnVDb250ZW50IH0gZnJvbSAnLi9tZW51LmpzJyBcbmltcG9ydCB7IGNvbnRhY3RDb250ZW50IH0gZnJvbSAnLi9jb250YWN0LXVzLmpzJyBcbmltcG9ydCB7IGluaXRpYWxDb250ZW50IH0gZnJvbSAnLi9pbml0aWFsLWNvbnRlbnQuanMnXG5cbmluaXRpYWxDb250ZW50KCk7IC8vZG9udCBwdXQgaGVhZGVyIGluc2lkZSBtYWluYm9keS4gYmVjYXVzZSBldmVudCBsaXN0ZW5lciB3b250IHdvcmsgaWYgeW91IHJlcmVuZGVyIHRoZSBidXR0b25cblxubGV0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5sZXQgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJylcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGRpdkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIH07XG4gICAgaG9tZUNvbnRlbnQoKTtcbiAgICB9XG4pO1xuXG5sZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jylcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGRpdkNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGRpdkNvbnRlbnQucmVtb3ZlQ2hpbGQoZGl2Q29udGVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICBtZW51Q29udGVudCgpO1xuICAgIH1cbik7XG5cbmxldCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKVxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoZGl2Q29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgZGl2Q29udGVudC5yZW1vdmVDaGlsZChkaXZDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIGNvbnRhY3RDb250ZW50KCk7XG4gICAgfSAgIFxuKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9