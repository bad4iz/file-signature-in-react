(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './useGetCertificate', './useDoCertsList'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./useGetCertificate'), require('./useDoCertsList'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.useGetCertificate, global.useDoCertsList);
    global.index = mod.exports;
  }
})(this, function (exports, _useGetCertificate, _useDoCertsList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_useGetCertificate).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _useGetCertificate[key];
      }
    });
  });
  Object.keys(_useDoCertsList).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _useDoCertsList[key];
      }
    });
  });
});