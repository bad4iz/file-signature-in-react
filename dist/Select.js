(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Select = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RawSelect = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  var RawSelect = exports.RawSelect = function RawSelect(_ref) {
    var value = _ref.value,
        _ref$options = _ref.options,
        options = _ref$options === undefined ? [] : _ref$options,
        _onChange = _ref.onChange;
    return _react2.default.createElement(
      "div",
      { className: "file-signature-crypto-pro__raw-select" },
      _react2.default.createElement(
        "select",
        { className: "select", onChange: function onChange(e) {
            return _onChange(e.target.value);
          } },
        options.map(function (option) {
          var optionValue = option && option.value ? option.value : option;
          var optionLabel = option && option.label ? option.label : option;
          return _react2.default.createElement(
            "option",
            { key: optionValue, value: optionValue, defaultValue: value === optionValue },
            optionLabel
          );
        })
      )
    );
  };

  var Select = function Select(_ref2) {
    var label = _ref2.label,
        other = _objectWithoutProperties(_ref2, ["label"]);

    return _react2.default.createElement(
      "label",
      null,
      _react2.default.createElement(
        "div",
        { className: "file-signature-crypto-pro__select__container" },
        label ? _react2.default.createElement(
          "div",
          { className: "file-signature-crypto-pro__select__label" },
          _react2.default.createElement(
            "span",
            { className: "file-signature-crypto-pro__select__label__text" },
            label
          )
        ) : null,
        _react2.default.createElement(RawSelect, other)
      )
    );
  };

  exports.default = Select;
});