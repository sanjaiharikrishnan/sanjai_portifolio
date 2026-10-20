# Sanjai Harikrishnan — React Portfolio

A responsive, multi-page portfolio built with React, Vite, React Router, Lucide icons, and JSON-driven content.

## Run locally

1. Install Node.js LTS: https://nodejs.org/
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Edit your content

Most portfolio content lives in `src/data/portfolio.json`. Update the profile, experience, skills, projects, education, links, and contact information there without changing the page components.

## Pages

- `/` — Home
- `/about` — About and skills
- `/projects` — Project portfolio
- `/experience` — Work experience and education
- `/contact` — Contact details

## Before publishing

- Verify every project description and performance metric is accurate.
- Replace the example GitHub URL if you want to show your GitHub profile.
- Add your own project screenshots to `public/images/` and update the project data if desired.
- Deploy the `dist/` folder to a static host such as Azure Static Web Apps, Vercel, or Netlify.
