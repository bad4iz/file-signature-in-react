(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './crypto-pro-cadesplugin'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./crypto-pro-cadesplugin'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.cryptoProCadesplugin);
    global.utils = mod.exports;
  }
})(this, function (exports, _cryptoProCadesplugin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.extract = exports.signFile = undefined;

  var _cryptoProCadesplugin2 = _interopRequireDefault(_cryptoProCadesplugin);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

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

  function b64toBlob(b64Data) {
    var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;

    var byteCharacters = atob(b64Data);

    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  var signFile = exports.signFile = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var _ref2$file = _ref2.file,
          file = _ref2$file === undefined ? null : _ref2$file,
          thumbprint = _ref2.thumbprint;
      var header, sFileData, sBase64Data, type, certsApi, sign, contentType, blob;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!file) {
                _context.next = 16;
                break;
              }

              header = ';base64,';
              _context.next = 4;
              return toBase64(file);

            case 4:
              sFileData = _context.sent;
              sBase64Data = sFileData.substr(sFileData.indexOf(header) + header.length);
              type = sFileData.substr(0, sFileData.indexOf(header));
              _context.next = 9;
              return (0, _cryptoProCadesplugin2.default)();

            case 9:
              certsApi = _context.sent;
              _context.next = 12;
              return certsApi.signBase64(thumbprint, sBase64Data);

            case 12:
              sign = _context.sent;
              contentType = type.split(':')[1];
              blob = b64toBlob(sign, contentType);
              return _context.abrupt('return', { blob: blob, fileName: file.name + '.sig' });

            case 16:
              return _context.abrupt('return', { blob: null, fileName: null });

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function signFile(_x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var checkQuotes = function checkQuotes(str) {
    var result = 0;

    for (var i = 0; i < str.length; i++) {
      if (str[i] === '"') result++;
    }return !(result % 2);
  };

  var extract = exports.extract = function extract(from, what) {
    var certName = '';

    var begin = from.indexOf(what) + what.length;

    if (begin >= 0) {
      var end = from.indexOf(', ', begin);
      while (end > 0) {
        if (checkQuotes(from.substr(begin, end - begin))) break;
        end = from.indexOf(', ', end + 1);
      }
      certName = end < 0 ? from.substr(begin) : from.substr(begin, end - begin);
    }

    return certName;
  };
});