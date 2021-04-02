"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signFileCryptoProCadesPlugin = void 0;

var _utils = require("../../utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signFileCryptoProCadesPlugin = function signFileCryptoProCadesPlugin(certsApi) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var _ref$file, file, thumbprint, header, sFileData, sBase64Data, type, sign, contentType, blob;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$file = _ref.file, file = _ref$file === void 0 ? null : _ref$file, thumbprint = _ref.thumbprint;

              if (!file) {
                _context.next = 14;
                break;
              }

              header = ';base64,';
              _context.next = 5;
              return (0, _utils.toBase64)(file);

            case 5:
              sFileData = _context.sent;
              sBase64Data = sFileData.substr(sFileData.indexOf(header) + header.length);
              type = sFileData.substr(0, sFileData.indexOf(header));
              _context.next = 10;
              return certsApi.signBase64(thumbprint, sBase64Data);

            case 10:
              sign = _context.sent;
              contentType = type.split(':')[1];
              blob = (0, _utils.b64toBlob)(sign, contentType);
              return _context.abrupt("return", {
                blob: blob,
                fileName: "".concat(file.name, ".sig")
              });

            case 14:
              return _context.abrupt("return", {
                blob: null,
                fileName: null
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};

exports.signFileCryptoProCadesPlugin = signFileCryptoProCadesPlugin;