# Afif Haziq — Portfolio

Personal portfolio site built with React + Vite + TypeScript, deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`npm run preview` serves the production build under the `/portfolio/` base path, matching the GitHub Pages deployment.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages via GitHub Actions. Ensure the repository's Settings → Pages → Source is set to "GitHub Actions".
