(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./crypto-pro-cadesplugin", "./Select", "./utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./crypto-pro-cadesplugin"), require("./Select"), require("./utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.cryptoProCadesplugin, global.Select, global.utils);
    global.SelectCert = mod.exports;
  }
})(this, function (exports, _react, _cryptoProCadesplugin, _Select, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _cryptoProCadesplugin2 = _interopRequireDefault(_cryptoProCadesplugin);

  var _Select2 = _interopRequireDefault(_Select);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
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

  var useDoCertsList = function useDoCertsList(callbackError) {
    return (0, _react.useMemo)(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var certsApi, certsList, list;
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
              list = certsList.map(function (_ref2) {
                var subjectInfo = _ref2.subjectInfo,
                    thumbprint = _ref2.thumbprint;
                return {
                  value: thumbprint,
                  label: (0, _utils.extract)(subjectInfo, "CN=")
                };
              });
              return _context.abrupt("return", list);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })), []);
  };

  var SelectCert = function SelectCert(_ref3) {
    var _ref3$setThumbprint = _ref3.setThumbprint,
        setThumbprint = _ref3$setThumbprint === undefined ? function (_) {
      return _;
    } : _ref3$setThumbprint,
        _ref3$Component = _ref3.Component,
        Component = _ref3$Component === undefined ? _Select2.default : _ref3$Component,
        callbackError = _ref3.callbackError;

    var _useState = (0, _react.useState)([{ value: "подпись", label: "подпись" }]),
        _useState2 = _slicedToArray(_useState, 2),
        listSert = _useState2[0],
        setListSert = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        selectItem = _useState4[0],
        setSelectItem = _useState4[1];

    useDoCertsList(callbackError).then(setListSert).catch(function (e) {
      return callbackError(String(e));
    });

    (0, _react.useEffect)(function () {
      if (selectItem) {
        setThumbprint(selectItem);
      } else {
        setThumbprint(listSert[0].value);
      }
    }, [selectItem, listSert, setThumbprint]);

    var onChange = function onChange(_ref4) {
      var value = _ref4.target.value;
      return setSelectItem(value);
    };

    return _react2.default.createElement(Component, {
      defaultValue: listSert[0].value,
      label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",
      name: "thumbprint",
      options: listSert,
      onChange: onChange
    });
  };

  exports.default = SelectCert;
});