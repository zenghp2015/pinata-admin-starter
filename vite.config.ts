import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import svgLoader from "vite-svg-loader";

import { TDesignResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [
        TDesignResolver({
          library: "vue-next",
        }),
      ],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [
        TDesignResolver({
          library: "vue-next",
        }),
      ],
      dts: true,
    }),
    svgLoader(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5200,
  },
});
