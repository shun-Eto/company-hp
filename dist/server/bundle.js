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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/assets/modules/cors.ts":
/*!*******************************************!*\
  !*** ./src/server/assets/modules/cors.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\n\nvar options = {\n  allowedHeaders: [\"Origin\", \"X-Requested-With\", \"Content-Type\", \"Accept\", \"X-Access-Token\"],\n  credentials: true,\n  methods: \"GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE\",\n  origin: \"http://localhost:8080\",\n  preflightContinue: false\n};\n\nexports.default = function () {\n  return cors_1.default(options);\n};\n\n//# sourceURL=webpack:///./src/server/assets/modules/cors.ts?");

/***/ }),

/***/ "./src/server/assets/modules/enviroment.ts":
/*!*************************************************!*\
  !*** ./src/server/assets/modules/enviroment.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.DOMAIN = void 0;\nexports.DOMAIN = Object({\"DOMAIN_CLIENT_WWW\":\"http://localhost:8080\",\"MONGO_URI\":\"mongodb+srv://shun:Shun_831510@sopherre.hrdc0.mongodb.net/Sopherre\"}).DOMAIN || \"https://company.sopherre.com\";\n\nvar default_1 =\n/*-*-*-*-* constructor *-*-*-*-*/\nfunction default_1() {\n  _classCallCheck(this, default_1);\n\n  /*-*-*-*-* properties *-*-*-*-*/\n  this.config = {\n    DOMAIN_CLIENT_WWW: \"http://localhost:8080\" || false,\n    MONGO_URI: \"mongodb+srv://shun:Shun_831510@sopherre.hrdc0.mongodb.net/Sopherre\" || false\n  };\n};\n\nexports.default = default_1;\n\n//# sourceURL=webpack:///./src/server/assets/modules/enviroment.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  }\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\n\nvar app_root_path_1 = __importDefault(__webpack_require__(/*! app-root-path */ \"app-root-path\")); //\tcors\n\n\nvar cors_1 = __importDefault(__webpack_require__(/*! ./assets/modules/cors */ \"./src/server/assets/modules/cors.ts\")); //\tmodules\n\n\nvar EnvModule = __importStar(__webpack_require__(/*! ./assets/modules/enviroment */ \"./src/server/assets/modules/enviroment.ts\")); //\tassets\n//\tclasses\n\n\nvar envClass = new EnvModule.default();\n/********** use **********/\n\nvar app = express_1.default();\napp.use(\"/static\", express_1.default.static(app_root_path_1.default + \"/dist/public/\"));\napp.use(express_1.default.urlencoded({\n  extended: true,\n  limit: \"50mb\"\n}));\napp.use(cors_1.default());\napp.use(express_1.default.json({\n  limit: \"50mb\"\n})); //\tredirect https\n\napp.get(\"*\", function (req, res, next) {\n  console.log(\"test\");\n  var protocol = req.headers[\"x-forwarded-proto\"];\n  var hostname = req.hostname;\n  if (protocol != \"https\" && hostname !== \"localhost\") res.redirect(envClass.config.DOMAIN_CLIENT_WWW + req.url);else next();\n});\n/********** Client Server Routing **********/\n\napp.get(\"/bundle.js\", function (req, res, next) {\n  return res.sendFile(app_root_path_1.default + \"/dist/client/bundle.js\");\n});\napp.get(\"/favicon.png\", function (req, res, next) {\n  return res.sendFile(app_root_path_1.default + \"/dist/client/favicon.png\");\n}); //\tserver 以外の GET\n\napp.get(/^(?!\\/server).*$/, function (req, res, next) {\n  return res.sendFile(app_root_path_1.default + \"/dist/client/index.html\");\n});\n/********** listen **********/\n\nvar port = Object({\"DOMAIN_CLIENT_WWW\":\"http://localhost:8080\",\"MONGO_URI\":\"mongodb+srv://shun:Shun_831510@sopherre.hrdc0.mongodb.net/Sopherre\"}).PORT || 8000;\nvar server = http_1.default.createServer(app);\nserver.listen(port, function () {\n  console.log(\"Success Connected Server : port ==> \".concat(port));\n});\n/********** default **********/\n\nexports.default = app;\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/server/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/shun/Dropbox/01_Sopherre/40_Git/shun-Eto/company-hp/src/server/index.ts */\"./src/server/index.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/server/index.ts?");

/***/ }),

/***/ "app-root-path":
/*!********************************!*\
  !*** external "app-root-path" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"app-root-path\");\n\n//# sourceURL=webpack:///external_%22app-root-path%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ })

/******/ });