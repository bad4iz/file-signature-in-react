(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "crypto-pro-cadesplugin", "../../utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("crypto-pro-cadesplugin"), require("../../utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.cryptoProCadesplugin, global.utils);
    global.useDoCertsList = mod.exports;
  }
})(this, function (exports, _react, _cryptoProCadesplugin, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useDoCertsList = undefined;

  var _cryptoProCadesplugin2 = _interopRequireDefault(_cryptoProCadesplugin);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var useDoCertsList = exports.useDoCertsList = function useDoCertsList(callbackError) {
    return (0, _react.useMemo)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var certsApi, certsList;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _cryptoProCadesplugin2.default)();

            case 2:
              certsApi = _context.sent;
              _context.next = 5;
              return certsApi.getCertsList();

            case 5:
              certsList = _context.sent;
              return _context.abrupt("return", certsList.map(function (_ref2) {
                var subjectInfo = _ref2.subjectInfo,
                    thumbprint = _ref2.thumbprint;
                return {
                  value: thumbprint,
                  label: (0, _utils.extract)(subjectInfo, "CN=")
                };
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })), []);
  };
});