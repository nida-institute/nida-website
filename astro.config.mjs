// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isProd = import.meta.env.PROD;

export default defineConfig({
  output: "static",
  site: "https://beta.nida-institute.org",
  base: import.meta.env.PROD ? "/nida-website" : "/",
  vite: { plugins: [tailwindcss()] },
});