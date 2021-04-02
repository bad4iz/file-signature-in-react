"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBase64 = void 0;

var toBase64 = function toBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

exports.toBase64 = toBase64;