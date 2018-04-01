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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _formModel = __webpack_require__(2);

var _formModel2 = _interopRequireDefault(_formModel);

var _formPresenter = __webpack_require__(3);

var _formPresenter2 = _interopRequireDefault(_formPresenter);

var _formView = __webpack_require__(4);

var _formView2 = _interopRequireDefault(_formView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.content');
  var formView = new _formView2.default(form);
  var formModel = new _formModel2.default();
  var formPresenter = new _formPresenter2.default(formView, formModel);
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormModel = function () {
  function FormModel() {
    _classCallCheck(this, FormModel);
  }

  _createClass(FormModel, [{
    key: 'sendToServer',
    value: function sendToServer(data) {
      console.log('Модель обработала данные');
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('\u0421\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u0438\u043D\u044F\u043B \u0434\u0430\u043D\u043D\u044B\u0435 <b>' + data + '</b>');
        }, 1000);
      });
    }
  }]);

  return FormModel;
}();

exports.default = FormModel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormPresenter = function () {
  function FormPresenter(view, model) {
    _classCallCheck(this, FormPresenter);

    this.view = view;
    this.model = model;
    this.view.onSubmitCb = this.onSubmit.bind(this);
  }

  _createClass(FormPresenter, [{
    key: 'onSubmit',
    value: function onSubmit(data) {
      var _this = this;

      console.log('Данные отправлены в модель');
      this.view.printLog('Данные отправлены в модель');
      this.model.sendToServer(data).then(function (res) {
        console.log('Получены данные из модели');
        _this.view.printLog('Получены данные из модели');
        _this.view.printStatus(res);
      });
    }
  }, {
    key: 'onAddToLog',
    value: function onAddToLog(data) {
      this.model.addToLog(data);
      var logs = this.model.getLog();
      this.view.printLog(logs);
    }
  }]);

  return FormPresenter;
}();

exports.default = FormPresenter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormView = function () {
  function FormView(el) {
    var _this = this;

    _classCallCheck(this, FormView);

    this.el = el;
    this.input = el.querySelector('.view-stub__input');
    this.button = el.querySelector('.view-stub__apply');
    this.output = el.querySelector('.view-stub__label');
    this.label = el.querySelector('.log');
    this.onSubmitCb = function () {};

    this.button.addEventListener('click', function (e) {
      console.log('Нажата кнопка');
      _this.printLog('Нажата кнопка');
      _this.onSubmitCb(_this.input.value);
      _this.input.value = '';
      _this.input.focus();
    });
  }

  _createClass(FormView, [{
    key: 'printStatus',
    value: function printStatus(data) {
      console.log('Обновлены данные компонента');
      this.printLog('Обновлены данные компонента');
      this.output.innerHTML = data;
    }
  }, {
    key: 'printLog',
    value: function printLog(log) {
      this.label.innerHTML += log + '<br>';
    }
  }]);

  return FormView;
}();

exports.default = FormView;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWNhMTExMDhmNjA2MjdlYTUxYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL2Zvcm1Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcHJlc2VudGVyL2Zvcm1QcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXcvZm9ybVZpZXcuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtVmlldyIsImZvcm1Nb2RlbCIsImZvcm1QcmVzZW50ZXIiLCJGb3JtTW9kZWwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIkZvcm1QcmVzZW50ZXIiLCJ2aWV3IiwibW9kZWwiLCJvblN1Ym1pdENiIiwib25TdWJtaXQiLCJiaW5kIiwicHJpbnRMb2ciLCJzZW5kVG9TZXJ2ZXIiLCJ0aGVuIiwicmVzIiwicHJpbnRTdGF0dXMiLCJhZGRUb0xvZyIsImxvZ3MiLCJnZXRMb2ciLCJGb3JtVmlldyIsImVsIiwiaW5wdXQiLCJidXR0b24iLCJvdXRwdXQiLCJsYWJlbCIsImUiLCJ2YWx1ZSIsImZvY3VzIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBTUMsT0FBT0YsU0FBU0csYUFBVCxDQUF1QixVQUF2QixDQUFiO0FBQ0EsTUFBTUMsV0FBVyx1QkFBYUYsSUFBYixDQUFqQjtBQUNBLE1BQU1HLFlBQVkseUJBQWxCO0FBQ0EsTUFBTUMsZ0JBQWdCLDRCQUFrQkYsUUFBbEIsRUFBNEJDLFNBQTVCLENBQXRCO0FBQ0QsQ0FMRCxFOzs7Ozs7QUNMQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUJFLFM7Ozs7Ozs7aUNBQ05DLEksRUFBTTtBQUNqQkMsY0FBUUMsR0FBUixDQUFZLDBCQUFaO0FBQ0EsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLHlJQUFtQ0osSUFBbkM7QUFDRCxTQUZELEVBRUcsSUFGSDtBQUdELE9BSk0sQ0FBUDtBQUtEOzs7Ozs7a0JBUmtCRCxTOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0NBUSxhO0FBQ25CLHlCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUN2QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRCxJQUFMLENBQVVFLFVBQVYsR0FBdUIsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQXZCO0FBQ0Q7Ozs7NkJBRVFaLEksRUFBTTtBQUFBOztBQUNiQyxjQUFRQyxHQUFSLENBQVksNEJBQVo7QUFDQSxXQUFLTSxJQUFMLENBQVVLLFFBQVYsQ0FBbUIsNEJBQW5CO0FBQ0EsV0FBS0osS0FBTCxDQUFXSyxZQUFYLENBQXdCZCxJQUF4QixFQUNHZSxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JmLGdCQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDQSxjQUFLTSxJQUFMLENBQVVLLFFBQVYsQ0FBbUIsMkJBQW5CO0FBQ0EsY0FBS0wsSUFBTCxDQUFVUyxXQUFWLENBQXNCRCxHQUF0QjtBQUNELE9BTEg7QUFNRDs7OytCQUVVaEIsSSxFQUFNO0FBQ2YsV0FBS1MsS0FBTCxDQUFXUyxRQUFYLENBQW9CbEIsSUFBcEI7QUFDQSxVQUFNbUIsT0FBTyxLQUFLVixLQUFMLENBQVdXLE1BQVgsRUFBYjtBQUNBLFdBQUtaLElBQUwsQ0FBVUssUUFBVixDQUFtQk0sSUFBbkI7QUFDRDs7Ozs7O2tCQXRCa0JaLGE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDREFjLFE7QUFDbkIsb0JBQVlDLEVBQVosRUFBZ0I7QUFBQTs7QUFBQTs7QUFDZCxTQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLQyxLQUFMLEdBQWFELEdBQUczQixhQUFILENBQWlCLG1CQUFqQixDQUFiO0FBQ0EsU0FBSzZCLE1BQUwsR0FBY0YsR0FBRzNCLGFBQUgsQ0FBaUIsbUJBQWpCLENBQWQ7QUFDQSxTQUFLOEIsTUFBTCxHQUFjSCxHQUFHM0IsYUFBSCxDQUFpQixtQkFBakIsQ0FBZDtBQUNBLFNBQUsrQixLQUFMLEdBQWFKLEdBQUczQixhQUFILENBQWlCLE1BQWpCLENBQWI7QUFDQSxTQUFLZSxVQUFMLEdBQWtCLFlBQVksQ0FBRSxDQUFoQzs7QUFFQSxTQUFLYyxNQUFMLENBQVkvQixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFDa0MsQ0FBRCxFQUFPO0FBQzNDMUIsY0FBUUMsR0FBUixDQUFZLGVBQVo7QUFDQSxZQUFLVyxRQUFMLENBQWMsZUFBZDtBQUNBLFlBQUtILFVBQUwsQ0FBZ0IsTUFBS2EsS0FBTCxDQUFXSyxLQUEzQjtBQUNBLFlBQUtMLEtBQUwsQ0FBV0ssS0FBWCxHQUFtQixFQUFuQjtBQUNBLFlBQUtMLEtBQUwsQ0FBV00sS0FBWDtBQUNELEtBTkQ7QUFPRDs7OztnQ0FFVzdCLEksRUFBTTtBQUNoQkMsY0FBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0EsV0FBS1csUUFBTCxDQUFjLDZCQUFkO0FBQ0EsV0FBS1ksTUFBTCxDQUFZSyxTQUFaLEdBQXdCOUIsSUFBeEI7QUFDRDs7OzZCQUVRRSxHLEVBQUs7QUFDWixXQUFLd0IsS0FBTCxDQUFXSSxTQUFYLElBQTJCNUIsR0FBM0I7QUFDRDs7Ozs7O2tCQTFCa0JtQixRIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWNhMTExMDhmNjA2MjdlYTUxYjgiLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgRm9ybU1vZGVsIGZyb20gJy4vbW9kZWwvZm9ybU1vZGVsJztcclxuaW1wb3J0IEZvcm1QcmVzZW50ZXIgZnJvbSAnLi9wcmVzZW50ZXIvZm9ybVByZXNlbnRlcic7XHJcbmltcG9ydCBGb3JtVmlldyBmcm9tICcuL3ZpZXcvZm9ybVZpZXcnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICBjb25zdCBmb3JtVmlldyA9IG5ldyBGb3JtVmlldyhmb3JtKTtcclxuICBjb25zdCBmb3JtTW9kZWwgPSBuZXcgRm9ybU1vZGVsKCk7XHJcbiAgY29uc3QgZm9ybVByZXNlbnRlciA9IG5ldyBGb3JtUHJlc2VudGVyKGZvcm1WaWV3LCBmb3JtTW9kZWwpO1xyXG59KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tYWluLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1Nb2RlbCB7XHJcbiAgc2VuZFRvU2VydmVyKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCfQnNC+0LTQtdC70Ywg0L7QsdGA0LDQsdC+0YLQsNC70LAg0LTQsNC90L3Ri9C1Jyk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKGDQodC10YDQstC10YAg0L/RgNC40L3Rj9C7INC00LDQvdC90YvQtSA8Yj4ke2RhdGF9PC9iPmApO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21vZGVsL2Zvcm1Nb2RlbC5qcyIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtUHJlc2VudGVyIHtcclxuICBjb25zdHJ1Y3Rvcih2aWV3LCBtb2RlbCkge1xyXG4gICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgIHRoaXMudmlldy5vblN1Ym1pdENiID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25TdWJtaXQoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ9CU0LDQvdC90YvQtSDQvtGC0L/RgNCw0LLQu9C10L3RiyDQsiDQvNC+0LTQtdC70YwnKTtcclxuICAgIHRoaXMudmlldy5wcmludExvZygn0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINCyINC80L7QtNC10LvRjCcpO1xyXG4gICAgdGhpcy5tb2RlbC5zZW5kVG9TZXJ2ZXIoZGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfQn9C+0LvRg9GH0LXQvdGLINC00LDQvdC90YvQtSDQuNC3INC80L7QtNC10LvQuCcpO1xyXG4gICAgICAgIHRoaXMudmlldy5wcmludExvZygn0J/QvtC70YPRh9C10L3RiyDQtNCw0L3QvdGL0LUg0LjQtyDQvNC+0LTQtdC70LgnKTtcclxuICAgICAgICB0aGlzLnZpZXcucHJpbnRTdGF0dXMocmVzKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkFkZFRvTG9nKGRhdGEpIHtcclxuICAgIHRoaXMubW9kZWwuYWRkVG9Mb2coZGF0YSk7XHJcbiAgICBjb25zdCBsb2dzID0gdGhpcy5tb2RlbC5nZXRMb2coKTtcclxuICAgIHRoaXMudmlldy5wcmludExvZyhsb2dzKTtcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9wcmVzZW50ZXIvZm9ybVByZXNlbnRlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WaWV3IHtcclxuICBjb25zdHJ1Y3RvcihlbCkge1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gICAgdGhpcy5pbnB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2lucHV0Jyk7XHJcbiAgICB0aGlzLmJ1dHRvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2FwcGx5Jyk7XHJcbiAgICB0aGlzLm91dHB1dCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy52aWV3LXN0dWJfX2xhYmVsJyk7XHJcbiAgICB0aGlzLmxhYmVsID0gZWwucXVlcnlTZWxlY3RvcignLmxvZycpO1xyXG4gICAgdGhpcy5vblN1Ym1pdENiID0gZnVuY3Rpb24gKCkge307XHJcblxyXG4gICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygn0J3QsNC20LDRgtCwINC60L3QvtC/0LrQsCcpO1xyXG4gICAgICB0aGlzLnByaW50TG9nKCfQndCw0LbQsNGC0LAg0LrQvdC+0L/QutCwJyk7XHJcbiAgICAgIHRoaXMub25TdWJtaXRDYih0aGlzLmlucHV0LnZhbHVlKTtcclxuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaW50U3RhdHVzKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCfQntCx0L3QvtCy0LvQtdC90Ysg0LTQsNC90L3Ri9C1INC60L7QvNC/0L7QvdC10L3RgtCwJyk7XHJcbiAgICB0aGlzLnByaW50TG9nKCfQntCx0L3QvtCy0LvQtdC90Ysg0LTQsNC90L3Ri9C1INC60L7QvNC/0L7QvdC10L3RgtCwJyk7XHJcbiAgICB0aGlzLm91dHB1dC5pbm5lckhUTUwgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpbnRMb2cobG9nKSB7XHJcbiAgICB0aGlzLmxhYmVsLmlubmVySFRNTCArPSBgJHtsb2d9PGJyPmA7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdmlldy9mb3JtVmlldy5qcyJdLCJzb3VyY2VSb290IjoiIn0=