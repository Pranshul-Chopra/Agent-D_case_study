# Agent-D: Why I Removed the AI
> A case study in product judgment · Pranshul Chopra · October 2026

Status: in progress, pending the client's decision and a legal review.

---

## Overview

A single-page, static case study web application built with React, TypeScript, Vite, and Tailwind CSS.

### Key Highlights
- **Zero Third-Party Trackers or Remote Fonts:** Strict system font stack and zero third-party scripts.
- **Accessible & Responsive:** Meets WCAG 4.5:1 minimum contrast, visible focus states, full keyboard navigation, and responsive scaling down to 360 px width.
- **Sticky Table of Contents:** Fast navigation with section tracking on desktop, collapsible drawer on mobile.
- **Decision Table & Timeline:** Interactive breakdown of Cloud AI vs Local AI vs Rule-Based suggestions.
- **Vercel-Ready:** Pre-configured `vercel.json` with strict HTTP security headers (`nosniff`, `frame deny`, `strict-origin-when-cross-origin`) and SPA fallbacks.

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Production Build

```bash
# Build static production bundle
npm run build
```

The production output will be generated in `dist/`.
