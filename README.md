<div align="center">

# MD Sahil Johan Islam — Portfolio

**A cinematic, scroll-driven developer portfolio — 300-frame canvas hero, motion-rich sections, and a fully responsive design system.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=black)](https://gsap.com/)
[![License](https://img.shields.io/badge/license-All%20rights%20reserved-lightgrey)](#-license)

[Overview](#-overview) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure) · [Configuration](#-configuration) · [Deployment](#-deployment)

</div>

---

## 📖 Overview

This is the personal portfolio of **MD Sahil Johan Islam**, a full-stack mobile developer and machine learning enthusiast. It is a single-page application built with **React + Vite** that presents experience, projects, and skills through a polished, animated interface.

The centerpiece is a **scroll-driven image-sequence animation**: as you scroll, a fixed `<canvas>` scrubs through **300 pre-rendered frames**, layered underneath the page content to create a cinematic, "video-like" background without the weight of an actual video.

---

## ✨ Features

- 🎬 **Scroll-driven canvas hero** — 300 frames scrubbed smoothly via a momentum-lerp render loop, with offscreen GPU pre-rendering and pooled image loading (concurrency-limited) so the canvas is never blank.
- ⏳ **Custom boot loader** — an animated progress ring around the brand logo with a live status label, shimmering progress bar, and exact percentage, followed by a slide-up reveal.
- 🧭 **Sectioned one-page layout** — Hero, About, Tech Stack, Projects, Certifications, Education, Milestones, and Contact.
- 🎨 **Motion system** — reveal-on-scroll, parallax, stagger, count-up stats, tilt cards, and floating icon backgrounds (GSAP + Motion).
- 🌌 **Floating background layer** — deterministic, seeded decorations (tech logos, landmarks, food & travel icons) that drift subtly behind sections.
- 🧑‍💻 **Terminal-style Tech Stack** — a macOS-window-styled panel listing the stack and self-assessed skill categories.
- 🗂️ **Project showcase** — responsive project cards with tech tags, repo links, and index numbering.
- 📬 **Contact form** — posts to a configurable endpoint (e.g. Formspree) with a graceful `mailto:` fallback, plus email/GitHub/LinkedIn links.
- 🔗 **Brand favicon** — the SJI gradient mark rendered as an SVG favicon for the browser tab.
- ♿ **Accessibility & performance** — respects `prefers-reduced-motion`, uses `IntersectionObserver` to pause the render loop offscreen, and preloads with `img.decode()` for smooth playback.
- 📱 **Responsive** — fluid `clamp()` typography/spacing with dedicated breakpoints down to ~320px-wide phones.

---

## 🧰 Tech Stack

| Category | Technology |
| --- | --- |
| Framework | React 19 |
| Build tool | Vite 8 (`@vitejs/plugin-react`) |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) + hand-written CSS in `src/index.css` |
| Animation | GSAP 3, Motion (`motion`) |
| Icons | lucide-react, react-icons |
| Utilities | clsx, tailwind-merge |
| Language | JavaScript (JSX) + TypeScript for tooling/types |
| Linting | oxlint |
| Type checking | TypeScript (`tsc --noEmit`) |
| Fonts | Inter (body), Outfit (display) — Google Fonts |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 20.19+** or **22.12+** (required by Vite 8)
- **npm** (a `package-lock.json` is committed)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/RAZERBOY786/mdsahilji.git
cd mdsahilji

# 2. Install dependencies
npm install

# 3. (Optional) Create your local env file
cp .env.example .env
```

### Run the dev server

```bash
npm run dev
```

Vite starts a local server (default **http://localhost:5173**) with hot module replacement.

---

## 📜 Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Locally preview the production build |
| `npm run lint` | Run **oxlint** over the project |
| `npm run typecheck` | Run TypeScript in `--noEmit` mode |

---

## 📁 Project Structure

```text
new-po/
├─ public/
│  ├─ favicon.svg            # Brand favicon (SJI gradient mark)
│  ├─ icons.svg              # Social/util icon sprite
│  └─ frames-web/            # 300 scroll-animation frames (JPG)  ← large asset
├─ src/
│  ├─ assets/                # SVG logos used by the Education section
│  ├─ components/
│  │  ├─ ui/                 # Small reusable UI pieces
│  │  ├─ BootLoader.jsx      # Loading screen (progress ring + status)
│  │  ├─ Certifications.jsx  # Certifications grid
│  │  ├─ CertificateCard.jsx # Individual certificate card
│  │  ├─ Contact.jsx         # Contact form + social links
│  │  ├─ Education.jsx       # Education timeline
│  │  ├─ FloatingBg.jsx      # Seeded floating-icon background
│  │  ├─ Footer.jsx          # Site footer
│  │  ├─ Logo.jsx            # "SJI" gradient mark (orange / blue tones)
│  │  ├─ MagicBento.jsx/.css # Bento-style layout pieces
│  │  ├─ Milestones.jsx      # Achievements / milestones
│  │  ├─ Navbar.jsx          # Top navigation
│  │  ├─ Projects.jsx        # Project data + showcase grid
│  │  ├─ ScrollFloat.jsx/.css# Floating scroll elements
│  │  └─ ...
│  ├─ lib/utils.ts           # `cn()` class-merge helper
│  ├─ App.jsx                # Page composition (all sections)
│  ├─ index.css              # Global styles, keyframes, design tokens
│  ├─ tailwind.css           # Tailwind entry
│  ├─ main.jsx               # React root
│  ├─ ProgressRail.jsx       # Section progress indicator
│  ├─ ScrollAnimation.jsx    # Canvas frame sequencer + loader orchestration
│  ├─ ScrollProgressContext.jsx
│  ├─ TiltCard.jsx           # 3D tilt interaction
│  └─ use*.js                # Custom hooks (parallax, reveal, count-up, tilt, …)
├─ index.html                # App entry + favicon/meta tags
├─ standalone-hero.html      # Standalone scroll-hero demo
├─ vite.config.js            # Vite + React + Tailwind, `@` → ./src alias
├─ package.json
└─ .env.example
```

---

## ⚙️ Configuration

Environment variables are read via Vite's `import.meta.env` (prefix required: `VITE_`).

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_FORM_ENDPOINT` | No | URL the contact form POSTs to (e.g. a Formspree endpoint). If unset, the form gracefully falls back to opening the user's mail client via `mailto:`. |

Example `.env`:

```dotenv
VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
```

### Contact details

Email, GitHub, and LinkedIn links live in `src/components/Contact.jsx` and `src/components/Footer.jsx` — update them there if needed.

### Scroll animation frames

- Frames live in `public/frames-web/` and are named `ezgif-frame-002.jpg … ezgif-frame-300.jpg`.
- The loader auto-detects missing frames, so you can add/remove frames freely.
- Tune behavior in `src/ScrollAnimation.jsx`: `FRAME_COUNT`, `FIRST_FRAME`, `FRAMES_DIR`, `PRELOAD_CONCURRENCY`, and `MIN_LOADER_MS`.

---

## 🏗️ Build & Preview

```bash
npm run build     # outputs to dist/
npm run preview   # serves dist/ locally
```

---

## 🌐 Deployment

The app is a static SPA and deploys to any static host.

**Vercel / Netlify**

- Build command: `npm run build`
- Output directory: `dist`

**GitHub Pages**

If you host under a sub-path (e.g. `username.github.io/mdsahilji/`), set the base in `vite.config.js`:

```js
export default defineConfig({
  base: '/mdsahilji/',
  // ...existing config
})
```

> **Note:** The bundled scroll frames are a sizable asset set. Ensure your host's bandwidth/limits accommodate them, or consider compressing the frames.

---

## 🧑‍💻 Notes for Contributors

- Components live in `src/components/`; page-level sections are composed in `src/App.jsx`.
- Design tokens (colors, fonts, keyframes) are defined at the top of `src/index.css`.
- Run `npm run lint` and `npm run build` before opening a pull request.
- Motion is globally reduced when the user enables *prefers-reduced-motion*.

---

## 🤝 Connect

- **GitHub:** [@RAZERBOY786](https://github.com/RAZERBOY786)
- **LinkedIn:** [sahil-islam-a2b9941b3](https://www.linkedin.com/in/sahil-islam-a2b9941b3)
- **Email:** [islamsahil752@gmail.com](mailto:islamsahil752@gmail.com)

---

## 📄 License

© 2026 **MD Sahil Johan Islam**. All rights reserved.

This repository is shared for portfolio and demonstration purposes. Please do not copy, redistribute, or reuse the design, content, or code without permission.

<div align="center"><sub>Built with React, Vite, Tailwind CSS & a lot of frames.</sub></div>
