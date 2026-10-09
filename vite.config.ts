import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/**
 * Shared Vite/TanStack adapter configures React, Tailwind, path aliases,
 * TanStack Start, and the production build pipeline.
 */
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
