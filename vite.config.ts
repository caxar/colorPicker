import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import MillionCompiler from "@million/lint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [MillionCompiler.vite(), react()],
});
