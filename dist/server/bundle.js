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

/***/ "./src/server/api/Mongo/mongoModule.ts":
/*!*********************************************!*\
  !*** ./src/server/api/Mongo/mongoModule.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar mongodb_1 = __importDefault(__webpack_require__(/*! mongodb */ \"mongodb\"));\n\nvar default_1 = /*#__PURE__*/function () {\n  /********** constructor **********/\n  function default_1(root, filename) {\n    var _this = this;\n\n    _classCallCheck(this, default_1);\n\n    this.config = {\n      uri: \"mongodb+srv://shun:Shun_831510@sopherre.hrdc0.mongodb.net/Sopherre\" || false,\n      options: {\n        retryWrites: true,\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n      }\n    };\n    this.init = this.init_connect(root, filename).then(function (val) {\n      _this.connection = val;\n    });\n  }\n  /********** methods **********/\n  //\tinit_connect\n\n\n  _createClass(default_1, [{\n    key: \"init_connect\",\n    value: function init_connect(root, filename) {\n      var _this2 = this;\n\n      var message = root && filename ? \"\".concat(root, \" ---> \").concat(filename) : \"nothing\";\n      console.log(\"** MongoDB ** init_connect : \".concat(message));\n      return new Promise(function (resolve, reject) {\n        var _this2$config = _this2.config,\n            uri = _this2$config.uri,\n            options = _this2$config.options;\n        mongodb_1.default.MongoClient.connect(uri, options, function (err, result) {\n          if (!err) {\n            console.log(\"success connect MongoDB!! : \".concat(message));\n            return resolve(result);\n          } else {\n            console.log(\"failed connect MongoDB\");\n            return reject(err);\n          }\n        });\n      });\n    }\n    /********** function : findOne **********/\n\n  }, {\n    key: \"findOne\",\n    value: function findOne(args) {\n      var _this3 = this;\n\n      return new Promise(function (resolve, reject) {\n        //\tproperties\n        var dbName = args.dbName,\n            collectionName = args.collectionName,\n            options = args.options;\n        var filter = args.filter || {};\n\n        var db = _this3.connection.db(dbName);\n\n        db.collection(collectionName, function (err, collection) {\n          if (!err) {\n            collection.findOne(filter, options || {}, function (err, result) {\n              if (!err) {\n                return resolve({\n                  result: result,\n                  exist: !!result\n                });\n              } else {\n                return reject({\n                  err: err\n                });\n              }\n            });\n          } else {\n            return reject(err);\n          }\n        });\n      });\n    }\n    /********** function : findOne **********/\n\n  }, {\n    key: \"findOneAndUpdate\",\n    value: function findOneAndUpdate(args) {\n      var _this4 = this;\n\n      return new Promise(function (resolve, reject) {\n        //\tproperties\n        var dbName = args.dbName,\n            collectionName = args.collectionName,\n            filter = args.filter,\n            update = args.update,\n            options = args.options; //\tthis.(function) : connect()\n\n        /*\n         *\t1 findOne\n         *\t 1.1 !err ... success :\n         *\t 1.2 err ... failed :\n         *\t\t2 findOneAndUpdate\n         *\t\t 2.1 !err ... success :\n         *\t\t 2.2 err ... failed :\n         */\n\n        var db = _this4.connection.db(dbName);\n\n        db.collection(collectionName, function (err, collection) {\n          if (!err) {\n            //\t1 findOne\n            collection.findOne(filter, options || {}, function (err, document) {\n              if (!err) {\n                //\t1.1 !err ... success :\n                //\t2 findOneAndUpdate\n                collection.findOneAndUpdate(filter, update, function (err, result) {\n                  if (!err) {\n                    //\t2.1 !err ... success :\n                    return resolve({\n                      result: document,\n                      exist: true\n                    });\n                  } else {\n                    //\t2.2 err ... failed :\n                    return reject({\n                      err: err\n                    });\n                  }\n                });\n              } else {\n                //\t1.2 err ... failed :\n                return reject({\n                  err: err\n                });\n              }\n            });\n          } else {\n            //\tfailed : mongodb connect\n            return reject(err);\n          }\n        });\n      });\n    }\n    /********** function : find **********/\n\n  }, {\n    key: \"find\",\n    value: function find(args) {\n      var _this5 = this;\n\n      return new Promise(function (resolve, reject) {\n        //\tproperties\n        var dbName = args.dbName,\n            collectionName = args.collectionName,\n            options = args.options;\n        var filter = args.filter || {};\n        var limit = args.limit || 10;\n        var keyOrList = args.keyOrList || {};\n\n        var db = _this5.connection.db(dbName);\n\n        db.collection(collectionName, function (err, collection) {\n          if (!err) {\n            collection.find(filter, options || {}).limit(limit).sort(keyOrList).toArray(function (err, result) {\n              if (!err) {\n                return resolve({\n                  result: result,\n                  exist: result.length !== 0\n                });\n              } else {\n                return reject();\n              }\n            });\n          } else {\n            return reject(err);\n          }\n        });\n      });\n    }\n    /********** insertOne **********/\n\n  }, {\n    key: \"insertOne\",\n    value: function insertOne(args) {\n      var _this6 = this;\n\n      return new Promise(function (resolve, reject) {\n        /********** properties **********/\n        var dbName = args.dbName,\n            collectionName = args.collectionName,\n            documentData = args.documentData;\n\n        var db = _this6.connection.db(dbName);\n\n        db.collection(collectionName, function (err, collection) {\n          if (!err) {\n            collection.insertOne(documentData, function (err) {\n              if (!err) {\n                return resolve({\n                  result: true\n                });\n              } else {\n                return reject(err);\n              }\n            });\n          } else {\n            return reject(err);\n          }\n        });\n      });\n    }\n    /********** deleteOne **********/\n\n  }, {\n    key: \"deleteOne\",\n    value: function deleteOne(args) {\n      var _this7 = this;\n\n      return new Promise(function (resolve, reject) {\n        /********** properties **********/\n        var dbName = args.dbName,\n            collectionName = args.collectionName,\n            filter = args.filter;\n\n        var db = _this7.connection.db(dbName);\n\n        db.collection(collectionName, function (err, collection) {\n          if (!err) {\n            collection.deleteOne(filter, function (err) {\n              if (!err) {\n                return resolve({\n                  result: true\n                });\n              } else {\n                return reject(err);\n              }\n            });\n          } else {\n            return reject(err);\n          }\n        });\n      });\n    }\n    /********** deleteOne **********/\n\n  }, {\n    key: \"updateMany\",\n    value: function updateMany(args) {\n      var _this8 = this;\n\n      return new Promise(function (resolve, reject) {\n        /********** properties **********/\n        var dbName = args.dbName,\n            collectionName = args.collectionName,\n            filter = args.filter,\n            update = args.update;\n        var options = (args === null || args === void 0 ? void 0 : args.options) || {};\n\n        var db = _this8.connection.db(dbName);\n\n        db.collection(collectionName, function (err, collection) {\n          if (!err) {\n            collection.updateMany(filter, update, Object.assign({}, options), function (err, result) {\n              if (!err) {\n                return resolve({\n                  result: true\n                });\n              } else {\n                return reject(err);\n              }\n            });\n          } else {\n            return reject(err);\n          }\n        });\n      });\n    }\n  }]);\n\n  return default_1;\n}();\n\nexports.default = default_1;\n\n//# sourceURL=webpack:///./src/server/api/Mongo/mongoModule.ts?");

/***/ }),

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
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  }\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\n\nvar app_root_path_1 = __importDefault(__webpack_require__(/*! app-root-path */ \"app-root-path\")); //\tcors\n\n\nvar cors_1 = __importDefault(__webpack_require__(/*! ./assets/modules/cors */ \"./src/server/assets/modules/cors.ts\")); //\tmodules\n\n\nvar EnvModule = __importStar(__webpack_require__(/*! ./assets/modules/enviroment */ \"./src/server/assets/modules/enviroment.ts\")); //\tassets\n//\tclasses\n\n\nvar envClass = new EnvModule.default();\n/********** use **********/\n\nvar app = express_1.default();\napp.use(\"/static\", express_1.default.static(app_root_path_1.default + \"/dist/public/\"));\napp.use(express_1.default.urlencoded({\n  extended: true,\n  limit: \"50mb\"\n}));\napp.use(cors_1.default());\napp.use(express_1.default.json({\n  limit: \"50mb\"\n})); //\tredirect https\n\napp.get(\"*\", function (req, res, next) {\n  console.log(\"test\");\n  var protocol = req.headers[\"x-forwarded-proto\"];\n  var hostname = req.hostname;\n  if (protocol != \"https\" && hostname !== \"localhost\") res.redirect(envClass.config.DOMAIN_CLIENT_WWW + req.url);else next();\n});\n/********** Client Server Routing **********/\n\napp.get(\"/bundle.js\", function (req, res, next) {\n  return res.sendFile(app_root_path_1.default + \"/dist/client/bundle.js\");\n});\napp.get(\"/favicon.png\", function (req, res, next) {\n  return res.sendFile(app_root_path_1.default + \"/dist/client/favicon.png\");\n}); //\tserver 以外の GET\n\napp.get(/^(?!\\/server).*$/, function (req, res, next) {\n  return res.sendFile(app_root_path_1.default + \"/dist/client/index.html\");\n});\n/*-*-*-*-* Server Routing *-*-*-*-*/\n\nvar contactRouter = __importStar(__webpack_require__(/*! ./routes/contact/index */ \"./src/server/routes/contact/index.ts\"));\n\napp.use(\"/contact\", contactRouter.default);\n/********** listen **********/\n\nvar port = Object({\"DOMAIN_CLIENT_WWW\":\"http://localhost:8080\",\"MONGO_URI\":\"mongodb+srv://shun:Shun_831510@sopherre.hrdc0.mongodb.net/Sopherre\"}).PORT || 3000;\nvar server = http_1.default.createServer(app);\nserver.listen(port, function () {\n  console.log(\"Success Connected Server : port ==> \".concat(port));\n});\n/********** default **********/\n\nexports.default = app;\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "./src/server/routes/contact/index.ts":
/*!********************************************!*\
  !*** ./src/server/routes/contact/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  }\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar express_1 = __webpack_require__(/*! express */ \"express\"); //  modules\n\n\nvar SubmitModule = __importStar(__webpack_require__(/*! ./modules/submit */ \"./src/server/routes/contact/modules/submit.ts\")); //  router\n\n\nvar router = express_1.Router(); //  classes\n\nvar submitClass = new SubmitModule.default();\n/*-*-*-*-* Submit *-*-*-*-*/\n//  message\n\nrouter.post(\"/submit/message\", function (req, res) {\n  var body = req.body;\n  submitClass.submit_message(body).then(function (val) {\n    return res.status(200).json(Object.assign({}, val));\n  }).catch(function (err) {\n    return res.status(400).json(Object.assign({}, err));\n  });\n});\nexports.default = router;\n\n//# sourceURL=webpack:///./src/server/routes/contact/index.ts?");

/***/ }),

/***/ "./src/server/routes/contact/modules/submit.ts":
/*!*****************************************************!*\
  !*** ./src/server/routes/contact/modules/submit.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function get() {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  }\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n}); //  api\n\nvar MongoModule = __importStar(__webpack_require__(/*! ../../../api/Mongo/mongoModule */ \"./src/server/api/Mongo/mongoModule.ts\")); //  classes\n\n\nvar mongoClass = new MongoModule.default(\"blogs\", \"submit\");\n\nvar default_1 = /*#__PURE__*/function () {\n  /*-*-*-*-* properties *-*-*-*-*/\n  function default_1() {\n    _classCallCheck(this, default_1);\n  }\n  /*-*-*-*-* methods *-*-*-*-*/\n  //  submit_message\n\n\n  _createClass(default_1, [{\n    key: \"submit_message\",\n    value: function submit_message(body) {\n      return new Promise(function (resolve, reject) {\n        return resolve({});\n      });\n    }\n  }]);\n\n  return default_1;\n}();\n\nexports.default = default_1;\n\n//# sourceURL=webpack:///./src/server/routes/contact/modules/submit.ts?");

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

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ })

/******/ });