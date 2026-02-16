# AI Horizons
[![GitHub Pages Deployment](https://github.com/robert-laws/ai-horizons/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/robert-laws/ai-horizons/actions/workflows/pages/pages-build-deployment)

AI Horizons is a single-page, interview-ready portfolio site for an Emerging Technologies/AI Librarian role. It is built with vanilla HTML/CSS/JS plus Bootstrap and Font Awesome, and is designed to deploy directly on GitHub Pages.

## Live Structure

- `index.html` (single-page experience with Home + Q1-Q5 sections)
- `assets/css/styles.css` (custom design tokens, layout, interactions)
- `assets/js/data.js` (content and interactive data contracts)
- `assets/js/components.js` (feature initializers)
- `assets/js/main.js` (`window.AIHorizons.init()` bootstrap)
- `assets/img/` (placeholder visuals)

## Features Included

- Sticky anchor navigation (`#home`, `#q1-projects`, `#q2-integration`, `#q3-ethics`, `#q4-literacy`, `#q5-future`)
- Accordion walkthroughs
- Resource Finder filter/search
- Scenario simulator quiz
- Ethical dilemma flip cards
- Discussion prompt copy-to-clipboard
- 10-question AI literacy quiz with scoring tiers
- 2026-2035 forecast timeline slider
- Future-tech poll with mock aggregate bars
- Embedded resources with fallback links
- Footer CTA with Formspree-ready form

## Replace Placeholders Before Interview

1. Update sample responses marked with `[PLACEHOLDER: ...]` in `index.html`.
2. Replace `assets/img/hero-placeholder.svg` and `assets/img/timeline-placeholder.svg` with your own visuals (keep same filenames or update paths).
3. Update contact email and LinkedIn in the footer.
4. Set your real Formspree endpoint in `index.html`:
   - Current: `https://formspree.io/f/YOUR_FORM_ID`
   - Replace `YOUR_FORM_ID` with your live ID.

## GitHub Pages Deployment (Root of `main`)

1. Push the repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Save and wait for the Pages build.
5. Your site should publish at:
   - `https://robert-laws.github.io/ai-horizons/`

## Local Preview

Open `index.html` directly in a browser, or run a simple static server from repo root.

## Accessibility/SEO Notes

- Skip link + semantic landmarks included.
- ARIA labels/states for key interactive components.
- Meta tags for SEO and social preview are set in `index.html`.
- Motion respects `prefers-reduced-motion`.
