// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import taiwindcss from "@tailwindcss/vite";

// Chỉ cần plugin của React ở đây.
export default defineConfig({
  plugins: [react(), taiwindcss()],
});
