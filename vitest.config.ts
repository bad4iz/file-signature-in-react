/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['json-summary', 'text', 'html', 'json', 'cobertura'],
      all: true,
    },
  },
});
