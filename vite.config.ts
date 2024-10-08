import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',  // Necessary for DOM-related testing
    globals: true,         // Enables global `test` and `expect`
    setupFiles: './setupTests.ts',  // Path to setupTests to include jest-dom
  },
});
