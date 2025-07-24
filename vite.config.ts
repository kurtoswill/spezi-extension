import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "src/manifest.json", dest: "." },
        { src: "public/*", dest: "." }
      ]
    })
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: "src/popup.html",
      },
      output: {
        entryFileNames: "[name].js",
      }
    }
  }
});
