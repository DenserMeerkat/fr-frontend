import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://marketdata.neueda.com/API",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart({ customViteReactPlugin: true, target: "vercel" }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
