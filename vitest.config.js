"use strict";
exports.__esModule = true;
/// <reference types="vitest" />
var vite_1 = require("vite");
exports["default"] = (0, vite_1.defineConfig)({
    test: {
        coverage: {
            // you can include other reporters, but 'json-summary' is required, json is recommended
            reporter: ['html', 'text', 'json-summary', 'json'],
            all: true
        }
    }
});
