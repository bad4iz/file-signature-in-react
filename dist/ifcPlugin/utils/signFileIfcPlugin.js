"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signFileIfcPlugin = void 0;

var _utils = require("../../utils");

var _ifcPlugin = require("../ifcPlugin");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signFileIfcPlugin = function signFileIfcPlugin(ifcPlugin) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var thumbprint, file, signFile, header, sFileData, sBase64Data, type, sign, contentType, blob;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              thumbprint = _ref.thumbprint, file = _ref.file;

              if (file) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", {
                blob: null,
                fileName: null
              });

            case 3:
              signFile = function signFile(sBase64Data) {
                return new Promise(function (resolve, reject) {
                  ifcPlugin.signDataBase64CadesBesDetached(thumbprint, '', sBase64Data, function (msg) {
                    if (_ifcPlugin.IFCError.IFC_OK === msg.error_code) {
                      resolve(msg.sign_value);
                    } else {
                      reject(msg);
                    }
                  }, 0);
                });
              };

              header = ';base64,';
              _context.next = 7;
              return (0, _utils.toBase64)(file);

            case 7:
              sFileData = _context.sent;
              sBase64Data = sFileData.substr(sFileData.indexOf(header) + header.length);
              type = sFileData.substr(0, sFileData.indexOf(header));
              _context.next = 12;
              return signFile(sBase64Data);

            case 12:
              sign = _context.sent;
              contentType = type.split(':')[1];
              blob = (0, _utils.b64toBlob)(sign, contentType);
              return _context.abrupt("return", {
                blob: blob,
                fileName: "".concat(file.name, ".sig")
              });

            case 16:
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

exports.signFileIfcPlugin = signFileIfcPlugin;