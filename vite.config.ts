/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
// TODO: Fix some bug in production mode "Minified React Error" environment

export default defineConfig({
  plugins: [react(), EnvironmentPlugin(["API_KEY"])],
  server: { port: 3000 },
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  root: "",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/__tests__/setupTests.ts"],
    threads: false,
    watch: false,
  },
});
