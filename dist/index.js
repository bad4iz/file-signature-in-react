(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./FileSignatureCriptoPro"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./FileSignatureCriptoPro"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FileSignatureCriptoPro);
    global.index = mod.exports;
  }
})(this, function (exports, _FileSignatureCriptoPro) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_FileSignatureCriptoPro).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});