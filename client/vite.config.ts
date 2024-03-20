import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE,
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        src: "/src",
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // includes("node_modules");
            if (id.indexOf("node_modules") !== -1) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  };
});
