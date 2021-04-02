"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIfcPlugin = createIfcPlugin;

var _ifcPlugin = require("../ifcPlugin");

var add_to_main_log_ln = console.log;

function createIfcPlugin(ifcPlugin) {
  add_to_main_log_ln("js lib version: " + ifcPlugin.getLibVersion());
  return new Promise(function (resolve, reject) {
    ifcPlugin.create('', '', function (msg) {
      add_to_main_log_ln("create result: " + _ifcPlugin.IFCError.getErrorDescription(msg.error_code));

      if (_ifcPlugin.IFCError.IFC_OK === msg.error_code) {
        ifcPlugin.getPluginVersion(function (msg) {
          add_to_main_log_ln("getPluginVersion result: " + _ifcPlugin.IFCError.getErrorDescription(msg.error_code));

          if (_ifcPlugin.IFCError.IFC_OK === msg.error_code) {
            add_to_main_log_ln("plugin version: " + msg.version);
            resolve();
          }
        });
      }
    });
  });
}