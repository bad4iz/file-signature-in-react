"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _signFactory = require("./signFactory");

Object.keys(_signFactory).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signFactory[key];
    }
  });
});