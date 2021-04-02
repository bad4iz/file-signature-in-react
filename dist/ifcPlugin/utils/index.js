"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getCertificateListIfcPlugin = require("./getCertificateListIfcPlugin");

Object.keys(_getCertificateListIfcPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getCertificateListIfcPlugin[key];
    }
  });
});

var _signFileIfcPlugin = require("./signFileIfcPlugin");

Object.keys(_signFileIfcPlugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signFileIfcPlugin[key];
    }
  });
});