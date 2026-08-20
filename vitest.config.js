"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="vitest" />
var config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        coverage: {
            // you can include other reporters, but 'json-summary' is required, json is recommended
            all: false,
            reporter: ['json-summary', 'text', 'html', 'json', 'cobertura'],
        },
        environment: 'happy-dom', // or 'jsdom', 'node'
    },
});
