# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Minimal, high-performance personal portfolio website for Shashank Dhar (Frontend Platform Engineer), built with **Vite**, **React 19**, **Tailwind CSS v4**, and typography from **Instrument Serif**, **Instrument Sans**, and **JetBrains Mono**. Deployed via GitHub Actions to GitHub Pages.

## Commands

```bash
# Start development server
yarn dev

# Type check & build for production
yarn build

# Preview production build
yarn preview

# Run ESLint
yarn lint
```

## Architecture

- **Framework**: Vite SPA (React 19)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Copy**: Isolated in `src/content.ts` (single source of truth for site copy)
- **Animation**: Native token streaming in `src/App.tsx` with zero layout shift and `prefers-reduced-motion` detection
- **Deployment**: `.github/workflows/deploy.yml` triggers on push to `main`
