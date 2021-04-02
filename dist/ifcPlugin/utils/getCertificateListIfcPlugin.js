"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCertificateListIfcPlugin = void 0;

var _createIfcPlugin = require("./createIfcPlugin");

var _getCertsList = require("./getCertsList");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCertificateListIfcPlugin = function getCertificateListIfcPlugin(plugin) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _createIfcPlugin.createIfcPlugin)(plugin);

          case 2:
            _context.next = 4;
            return (0, _getCertsList.getCertsList)(plugin);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

exports.getCertificateListIfcPlugin = getCertificateListIfcPlugin;