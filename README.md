# Phuminan Kuroda — Portfolio

Personal portfolio of Phuminan Kuroda
Live: [https://phuminan-kuroda.vercel.app](https://phuminan-kuroda.vercel.app)

An editorial-style portfolio built with Next.js, TypeScript, and Tailwind CSS, deployed on Vercel. Every push to `main` redeploys automatically.

- `app/` — Root layout, font configuration (Geist Sans & Mono), and single-page routing
- `components/` — Modular UI components:
  - `Sidebar.tsx` — Fixed/sticky navigation with active-section tracking and resume download
  - `Intro.tsx` — Hero section, stats, quick facts, tech stack, and education history
  - `ProjectsBento.tsx` — Featured projects showcase with smooth auto-scroll tab switcher
  - `SectionHeading.tsx` — Minimalist section header layout
- `data/profile.ts` — Single source of truth for personal data, technical skills, and project metrics
- `public/` — Static assets (profile portrait and downloadable resume PDF)

Portrait and project content © 2026 Phuminan Kuroda.
