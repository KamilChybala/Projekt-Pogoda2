import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/Projekt-Pogoda2/",
  plugins: [react()],
  server: {
    port: 5173
  }
});