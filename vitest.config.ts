/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['html', 'text', 'json-summary', 'json'],
      provider: 'istanbul', // or 'c8'
      all: true,
    },
  },
})
