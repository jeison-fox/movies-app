import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [svgr(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/vitest-setup.ts',
  },
});
