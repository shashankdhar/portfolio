# Shashank Dhar — Portfolio

> **Frontend Platform Engineer**  
> Building the systems behind the interface: runtimes, protocols, and compilers that power enterprise cloud and AI interfaces.

[![Deploy to GitHub Pages](https://github.com/shashankdhar/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/shashankdhar/portfolio/actions/workflows/deploy.yml)

🌐 **Live Website**: [shashankdhar.github.io/portfolio](https://shashankdhar.github.io/portfolio/)

---

## Overview

A minimal, typography-driven personal portfolio designed with an ambient atmospheric horizon glow, token-by-token streaming animation, and zero-layout-shift rendering.

### Tech Stack

- **Core**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: 
  - Display: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif)
  - Body: [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans)
  - Technical / Metadata: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **CI/CD**: GitHub Actions $\rightarrow$ GitHub Pages

---

## Architecture & Design Decisions

1. **Content Isolation**: All copy lives in [`src/content.ts`](./src/content.ts), completely decoupling site copy from layout and component logic.
2. **Streaming Agentic UI**: The lede paragraph streams in token-by-token with realistic LLM-paced cadencing, blinking caret, and automated loop transitions without causing layout shifts.
3. **Accessibility First**: Respects `prefers-reduced-motion` to immediately display static content without animation.
4. **Performance**: Zero runtime overhead, clean CSS radial mesh lighting, and sub-100ms cold builds.

---

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- Yarn or npm

### Installation

```bash
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

### Production Build

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

---

## License

MIT © [Shashank Dhar](https://github.com/shashankdhar)
