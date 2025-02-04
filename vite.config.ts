import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@constant": path.resolve(__dirname, "./app/constant"),
      "@components": path.resolve(__dirname, "./app/components"),
      "@hooks": path.resolve(__dirname, "./app/hooks"),
      "@helper": path.resolve(__dirname, "./app/utils/helper"),
      "@utils": path.resolve(__dirname, "./app/utils"),
      "@locales": path.resolve(__dirname, "./app/locales"),
      "@validation": path.resolve(__dirname, "./app/utils/validation"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
