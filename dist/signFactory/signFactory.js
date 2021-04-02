"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSignPlugin = exports.initSign = void 0;

var _ifcPlugin = _interopRequireWildcard(require("../ifcPlugin"));

var _cryptoProCadesplugin = _interopRequireDefault(require("../crypto-pro-cadesplugin"));

var _utils = require("../crypto-pro-cadesplugin/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var initSign = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var certsApi;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _cryptoProCadesplugin.default)();

          case 3:
            certsApi = _context.sent;
            return _context.abrupt("return", {
              isCadesplugin: true,
              cadesplugin: certsApi,
              isIfcPlugin: extensionIsInstalled,
              ifcPlugin: ifcPlugin,
              signPlugin: 'cadesplugin'
            });

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              isCadesplugin: false,
              cadesplugin: null,
              isIfcPlugin: extensionIsInstalled,
              ifcPlugin: ifcPlugin,
              signPlugin: extensionIsInstalled && 'ifcPlugin'
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function initSign() {
    return _ref.apply(this, arguments);
  };
}();

exports.initSign = initSign;

var initSignPlugin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _yield$initSign, signPlugin, cadesplugin, ifcPlugin;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return initSign();

          case 2:
            _yield$initSign = _context2.sent;
            signPlugin = _yield$initSign.signPlugin;
            cadesplugin = _yield$initSign.cadesplugin;
            ifcPlugin = _yield$initSign.ifcPlugin;
            _context2.t0 = signPlugin;
            _context2.next = _context2.t0 === 'cadesplugin' ? 9 : _context2.t0 === 'ifcPlugin' ? 10 : 11;
            break;

          case 9:
            return _context2.abrupt("return", {
              getCertsList: (0, _utils.getCertsListCryptoProCadesPlugin)(cadesplugin),
              signFile: (0, _utils.signFileCryptoProCadesPlugin)(cadesplugin)
            });

          case 10:
            return _context2.abrupt("return", {
              getCertsList: (0, _ifcPlugin.getCertificateListIfcPlugin)(ifcPlugin),
              signFile: (0, _ifcPlugin.signFileIfcPlugin)(ifcPlugin)
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function initSignPlugin() {
    return _ref2.apply(this, arguments);
  };
}(); //Объект плагина для дальнейшего вызова через него публичный методов библиотеки


exports.initSignPlugin = initSignPlugin;
var ifcPlugin = null;
var extensionIsInstalled = false; //Важно!!! Для корректной работы нельзя посылать никакие вызовы в библиотеку пока она не вернет статус о том что работает, лучше вообще скрыть все кнопки через которые пользователь может взаимодействовать с плагином

function handleStatus() {
  console.log(ifcPlugin.status);

  if (ifcPlugin.status == null) {
    return;
  }

  extensionIsInstalled = ifcPlugin.status.extensionIsInstalled;
}

function initTestPage() {
  //Создание объекта плагина
  //Если в параметр передается true, то становятся доступны тестовые функции
  ifcPlugin = new _ifcPlugin.default(true); //Подпись на события из библиотеки плагина
  //События приходят каждые 5 секунд (В будущем скорее всего частота увеличится)

  ifcPlugin.listenPluginEvent('updatePluginStatus', handleStatus); //Инициализация библиотеки
  //Если в параметр передается true, то проверка наличия плагина в системе происходит через определенные промежутки времени в зависимости от браузера
  //В основном это параметр нужен для корректного отображения тробера при первом заходе на страницу. Т.к. браузерам нужно время чтобы понять что плагин установлен.

  ifcPlugin.init(true);
}

function onLoad() {
  if (document.getElementsByTagName("body").length) {
    initTestPage();
  } else {
    setTimeout(onLoad, 4);
  }
}

setTimeout(onLoad, 4);