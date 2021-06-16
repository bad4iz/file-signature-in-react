(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./SelectCert", "./utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./SelectCert"), require("./utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SelectCert, global.utils);
    global.FileSignatureCriptoPro = mod.exports;
  }
})(this, function (exports, _react, _SelectCert, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _SelectCert2 = _interopRequireDefault(_SelectCert);

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

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var FileSignatureCriptoPro = function FileSignatureCriptoPro(_ref) {
    var _ref$callback = _ref.callback,
        callback = _ref$callback === undefined ? function (_) {
      return _;
    } : _ref$callback,
        _ref$file = _ref.file,
        file = _ref$file === undefined ? null : _ref$file,
        _ref$files = _ref.files,
        files = _ref$files === undefined ? null : _ref$files,
        _ref$clear = _ref.clear,
        clear = _ref$clear === undefined ? false : _ref$clear,
        SelectComponent = _ref.SelectComponent,
        _ref$ButtonComponent = _ref.ButtonComponent,
        ButtonComponent = _ref$ButtonComponent === undefined ? function (props) {
      return _react2.default.createElement(
        "button",
        _extends({ className: "button btn_green btn_sign" }, props),
        "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C"
      );
    } : _ref$ButtonComponent,
        _ref$callbackError = _ref.callbackError,
        callbackError = _ref$callbackError === undefined ? function (_) {
      return _;
    } : _ref$callbackError;

    var _useState = (0, _react.useState)(null),
        _useState2 = _slicedToArray(_useState, 2),
        thumbprint = _useState2[0],
        setThumbprint = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        sign = _useState4[0],
        setSign = _useState4[1];

    var _useState5 = (0, _react.useState)(null),
        _useState6 = _slicedToArray(_useState5, 2),
        fileNameSign = _useState6[0],
        setFileNameSign = _useState6[1];

    var cleanOut = function cleanOut() {
      setSign(null);
      setFileNameSign(null);
    };

    if (clear && (sign || fileNameSign)) {
      cleanOut();
    }

    var signing = function signing() {
      if (file) {
        (0, _utils.signFile)({ thumbprint: thumbprint, file: file }).then(function (_ref2) {
          var fileName = _ref2.fileName,
              blob = _ref2.blob;

          console.log(fileName);
          callback({ fileNameSign: fileName, sign: blob });
          setSign(blob);
          setFileNameSign(fileName);
        }).catch(function (e) {
          return callbackError(String(e));
        });
      }
      if (files && files.length) {
        var signs = [];

        Promise.all(Array.from(files).map(function (item) {
          return (0, _utils.signFile)({ thumbprint: thumbprint, file: item }).then(function (_ref3) {
            var fileName = _ref3.fileName,
                blob = _ref3.blob;

            signs.push({ fileNameSign: fileName, sign: blob });
          });
        })).then(function () {
          return callback(signs);
        });
      }
    };

    return !sign && (file || files && files.length) && _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_SelectCert2.default, { setThumbprint: setThumbprint, callbackError: callbackError, Component: SelectComponent }),
      thumbprint && _react2.default.createElement(ButtonComponent, { disabled: !thumbprint, onClick: signing })
    );
  };

  exports.default = FileSignatureCriptoPro;
});