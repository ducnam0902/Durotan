import { defineConfig } from 'vitest/config';
import path from 'path';
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.ts'],
    alias: {
      '@durotan': path.resolve(__dirname, './src'),
    },
    reporters: ['default'],
    coverage: {
      reporter: 'lcov',
    },
  },
});
