"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getCertsListCryptoProCadesPlugin = require("./getCertsListCryptoProCadesPlugin");

Object.keys(_getCertsListCryptoProCadesPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getCertsListCryptoProCadesPlugin[key];
    }
  });
});

var _signFileCryptoProCadesPlugin = require("./signFileCryptoProCadesPlugin");

Object.keys(_signFileCryptoProCadesPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signFileCryptoProCadesPlugin[key];
    }
  });
});