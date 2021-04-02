"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkQuotes = void 0;

var checkQuotes = function checkQuotes(str) {
  var result = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '"') result++;
  }

  return !(result % 2);
};

exports.checkQuotes = checkQuotes;