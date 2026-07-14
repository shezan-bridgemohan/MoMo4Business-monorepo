import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared/ui-components": fileURLToPath(
        new URL("../../packages/ui-components/src/index.ts", import.meta.url),
      ),
    },
  },
  server: {
    watch: {
      // Force Vite to track changes inside your local package directory
      ignored: ["!**/shared-tokens/**", "!**/ui-components/**"],
    },
  },
  optimizeDeps: {
    exclude: ["@shared/tokens", "@shared/ui-components"],
  },
});
