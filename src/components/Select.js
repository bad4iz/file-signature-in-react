"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.RawSelect = void 0;
var RawSelect = function (_a) {
    var value = _a.value, _b = _a.options, options = _b === void 0 ? [] : _b, onChange = _a.onChange;
    return (<div className="file-signature-crypto-pro__raw-select">
    <select className="select" onChange={function (e) { return onChange(e.target.value); }}>
      {options.map(function (option) {
            var _a, _b;
            var optionValue = (_a = option === null || option === void 0 ? void 0 : option.value) !== null && _a !== void 0 ? _a : '';
            var optionLabel = (_b = option === null || option === void 0 ? void 0 : option.label) !== null && _b !== void 0 ? _b : '';
            return (<option key={optionValue} value={optionValue} defaultValue={value === optionValue}>
            {optionLabel}
          </option>);
        })}
    </select>
  </div>);
};
exports.RawSelect = RawSelect;
var Select = function (_a) {
    var label = _a.label, other = __rest(_a, ["label"]);
    return (<label>
      <div className="file-signature-crypto-pro__select__container">
        <div className="file-signature-crypto-pro__select__label">
          <span className="file-signature-crypto-pro__select__label__text">{label}</span>
        </div>
        <exports.RawSelect {...other}/>
      </div>
    </label>);
};
exports["default"] = Select;
