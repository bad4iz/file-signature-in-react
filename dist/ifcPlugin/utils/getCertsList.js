"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCertsList = void 0;

var _ifcPlugin = require("../ifcPlugin");

var _luxon = require("luxon");

var _extract = require("../../utils/extract");

var _const = require("../../const");

var getCertsList = function getCertsList(plugin) {
  return new Promise(function (resolve, reject) {
    plugin.getCertificateList(function (msg) {
      if (_ifcPlugin.IFCError.IFC_OK === msg.error_code) {
        var certsList = msg.certs_list.map(function (item) {
          var name = "".concat((0, _extract.extract)(item.getSubjectDN().getOneLine(), 'cn='), " ").concat((0, _extract.extract)('subjectInfo', 'G=')).trim();
          var commaBeforeName = name ? ", ".concat(name) : '';
          var jSDate = new Date(item.getValidTo());

          var date = _luxon.DateTime.fromJSDate(jSDate).toFormat(_const.DATE_FORMAT);

          return {
            // value: item.getSubjectDN().getOneLine()
            value: item.getContainerId(),
            label: "".concat((0, _extract.extract)('subjectInfo', 'CN=')).concat(commaBeforeName, ",  \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043E ").concat(date, " ")
          };
        });
        resolve(certsList);
      } else {
        reject(msg);
      }
    });
  });
};

exports.getCertsList = getCertsList;