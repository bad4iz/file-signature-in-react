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
    global.useGetCertificate = mod.exports;
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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var useDoCertsList = exports.useDoCertsList = function useDoCertsList(thumbprint) {
    var _useState = (0, _react.useState)(),
        _useState2 = _slicedToArray(_useState, 2),
        certificate = _useState2[0],
        setCertificate = _useState2[1];

    (0, _react.useMemo)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var certsApi, certsList, findCert;
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
              findCert = certsList.find(function (item) {
                return item.thumbprint === thumbprint;
              });


              setCertificate(findCert);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })), [thumbprint]);
    return certificate;
  };
});