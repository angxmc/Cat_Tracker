import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 3000, // Change port to 3000
    proxy: {
      "/api" : "http://localhost:3001" // This made them communicate with each other :)
    }
  },
  build: {
    outDir: "dist",
    manifest: true,
    // rollupOptions: {
    //   input: "./src/main.jsx",
    // },
  },
});
