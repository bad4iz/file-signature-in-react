(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "crypto-pro-cadesplugin", "./Select", "./utils", "./utils/hooks"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("crypto-pro-cadesplugin"), require("./Select"), require("./utils"), require("./utils/hooks"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.cryptoProCadesplugin, global.Select, global.utils, global.hooks);
    global.SelectCert = mod.exports;
  }
})(this, function (exports, _react, _cryptoProCadesplugin, _Select, _utils, _hooks) {
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

  var SelectCert = function SelectCert(_ref) {
    var _ref$setThumbprint = _ref.setThumbprint,
        setThumbprint = _ref$setThumbprint === undefined ? function (_) {
      return _;
    } : _ref$setThumbprint,
        _ref$Component = _ref.Component,
        Component = _ref$Component === undefined ? _Select2.default : _ref$Component,
        callbackError = _ref.callbackError;

    var _useState = (0, _react.useState)([{ value: "подпись", label: "подпись" }]),
        _useState2 = _slicedToArray(_useState, 2),
        listSert = _useState2[0],
        setListSert = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        selectItem = _useState4[0],
        setSelectItem = _useState4[1];

    (0, _hooks.useDoCertsList)(callbackError).then(setListSert).catch(function (e) {
      return callbackError(String(e));
    });

    (0, _react.useEffect)(function () {
      if (selectItem) {
        setThumbprint(selectItem);
      } else {
        setThumbprint(listSert[0].value);
      }
    }, [selectItem, listSert, setThumbprint]);

    var onChange = function onChange(value) {
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