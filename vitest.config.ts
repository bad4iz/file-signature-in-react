/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom', // or 'jsdom', 'node'
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['json-summary', 'text', 'html', 'json', 'cobertura'],
      all: true,
    },
  },
});
