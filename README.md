# AI Horizons
[![GitHub Pages Deployment](https://github.com/robert-laws/ai-horizons/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/robert-laws/ai-horizons/actions/workflows/pages/pages-build-deployment)

AI Horizons is an interview-ready portfolio site for an Emerging Technologies/AI Librarian role. It is built with vanilla HTML/CSS/JS plus Bootstrap and Font Awesome, and is designed to deploy directly on GitHub Pages.

## Live Structure

- `index.html` (homepage + Q1-Q5 interview sections)
- `tools.html` (dedicated AI tools catalog for research, citation, and academic library workflows)
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
- Dedicated AI tools page (Consensus, Elicit, scite, Zotero, and more) with features and library use cases

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

## Deployment Operations

- Production URL: `https://robert-laws.github.io/ai-horizons/`
- Deployment status badge: shown at the top of this README.
- Deployment workflow runs are available at:
  - `https://github.com/robert-laws/ai-horizons/actions/workflows/pages/pages-build-deployment`

### Verify a fresh deployment

1. Open the deployment badge link and confirm the latest run is successful.
2. Open the production URL in a private/incognito browser window.
3. Hard refresh (`Cmd+Shift+R` on macOS) to bypass cached assets.
4. Confirm:
   - Top navigation anchors scroll to all sections.
   - Quiz/poll/accordion interactions load.
   - Images and CSS load without 404 errors.

### Common deployment fixes

1. Site shows 404:
   - Re-check **Settings > Pages** is set to `main` and `/ (root)`.
2. Changes not visible:
   - Wait for the latest Pages workflow to complete, then hard refresh.
3. Form submissions fail:
   - Replace `YOUR_FORM_ID` in `index.html` with your real Formspree ID.

## Local Preview

Open `index.html` directly in a browser, or run a simple static server from repo root.

## Accessibility/SEO Notes

- Skip link + semantic landmarks included.
- ARIA labels/states for key interactive components.
- Meta tags for SEO and social preview are set in `index.html`.
- Motion respects `prefers-reduced-motion`.
