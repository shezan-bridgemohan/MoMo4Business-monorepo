import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Force Vite to track changes inside your local package directory
      ignored: ["!**/shared-tokens/**"],
    },
  },
  optimizeDeps: {
    exclude: ["@shared/tokens"],
  },
});
