# Sanjeev Singh Website

Official website project for Sanjeev Singh, built with React, TypeScript, Vite, and Tailwind CSS.

## Live URLs
- GitHub Pages: https://rishukumark19.github.io/website-politics-4/
- Custom domain target: https://sanjeev-singh.in

## Overview
This project is a modern political/public-profile website designed to present Sanjeev Singh’s biography, public issues, updates, and campaign/public communication in a clean editorial format.

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Pages
- Home
- About / Biography
- Issues
- News & Updates

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
```

## Deployment
This site is deployed using GitHub Pages and GitHub Actions.

## Domain Setup
The project is configured to support the custom domain:
`sanjeev-singh.in`

DNS records should point the apex domain to GitHub Pages A records, and `www` should CNAME to:
`rishukumark19.github.io`

## Notes
- Ensure Vite `base` and React Router `basename` match the deployment path.
- Keep SPA routing fallback configured for GitHub Pages.
