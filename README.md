# Nida Website (Astro + Markdown + Tailwind + GitHub Pages)

This project uses **Astro Content Collections** for page text in **Markdown**.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

Markdown files live here:

- `src/content/pages/`

## GitHub Pages config

Edit `astro.config.mjs`:

- `site: "https://YOUR_GITHUB_USERNAME.github.io"`
- `base: "/YOUR_REPO_NAME"` (project pages at `/<repo>/`)
- If your repo is `YOUR_GITHUB_USERNAME.github.io`, set `base: "/"`

Then in GitHub:

- **Settings → Pages → Build and deployment → Source: GitHub Actions**

