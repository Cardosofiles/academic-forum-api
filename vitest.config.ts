import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  css: {
    postcss: { plugins: [] },
  },
  test: {
    environment: "node",
    hookTimeout: 120_000,
    testTimeout: 30_000,
  },
});
