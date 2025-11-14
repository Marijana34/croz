import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://react-beginner.victoriousisland-676f7f51.westus2.azurecontainerapps.io",
        changeOrigin: true,
      },
    },
  },
});
