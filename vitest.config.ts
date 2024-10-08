import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',  // Simulates browser-like environment for React components
    globals: true,         // Use global test functions like `describe`, `it`, `expect`
    setupFiles: './setupTests.ts',  // Global test setup file
  },
});
