import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

import { InlineConfig } from "vitest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
  testMatch: ['src/**/*.{spec,test}.{ts,tsx}'],
} as UserConfig & { test: InlineConfig });
