"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCertsListCryptoProCadesPlugin = void 0;

var _luxon = require("luxon");

var _extract = require("../../utils/extract");

var _const = require("../../const");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCertsListCryptoProCadesPlugin = function getCertsListCryptoProCadesPlugin(certsApi) {
  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var certsList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return certsApi.getCertsList();

          case 2:
            certsList = _context.sent;
            return _context.abrupt("return", certsList.map(function (_ref2) {
              var subjectInfo = _ref2.subjectInfo,
                  thumbprint = _ref2.thumbprint,
                  to = _ref2.validPeriod.to;
              var name = "".concat((0, _extract.extract)(subjectInfo, 'SN='), " ").concat((0, _extract.extract)(subjectInfo, 'G=')).trim();
              var commaBeforeName = name ? ", ".concat(name) : '';

              var date = _luxon.DateTime.fromISO(to).toFormat(_const.DATE_FORMAT);

              return {
                value: thumbprint,
                label: "".concat((0, _extract.extract)(subjectInfo, 'CN=')).concat(commaBeforeName, ",  \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E ").concat(date, " ")
              };
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

exports.getCertsListCryptoProCadesPlugin = getCertsListCryptoProCadesPlugin;