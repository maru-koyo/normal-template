import { resolve } from "path";
import { defineConfig } from "vite";
import vitePluginSsinc from "vite-plugin-ssinc";

const root = resolve(__dirname, "src");

export default defineConfig({
  root,
  base: "./",

  server: {
    port: 1234,
    host: true,
    open: false,
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    vitePluginSsinc({
      includeExtensions: ["html"],
    }),
  ],
});
