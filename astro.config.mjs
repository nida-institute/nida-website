// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages notes:
// - Project pages: https://<user>.github.io/<repo>/  -> base: "/<repo>"
// - User/org pages: https://<user>.github.io/       -> base: "/"
export default defineConfig({
  output: "static",
  site: "https://YOUR_GITHUB_USERNAME.github.io",
  base: "/nida-website",
  vite: { plugins: [tailwindcss()] },
});
