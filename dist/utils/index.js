"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toBase = require("./toBase64");

Object.keys(_toBase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toBase[key];
    }
  });
});

var _b64toBlob = require("./b64toBlob");

Object.keys(_b64toBlob).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _b64toBlob[key];
    }
  });
});