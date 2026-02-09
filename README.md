# Promptlator Website

Lightweight static site marketing the Promptlator Chrome extension. No build step; pure HTML/CSS/JS.

## Structure
- `index.html` — page markup and sections.
- `assets/css/style.css` — styles, gradients, responsive layout.
- `assets/js/main.js` — CTA links, Formspree submit, optional GA4.
- `assets/img/` — logo and screenshots.
- `assets/media/demo.mp4` — logo loop used as muted hero background.
- `netlify.toml` — zero-config Netlify deploy (also fine for GitHub Pages without it).

## Configure
Edit `assets/js/main.js`:
- `STORE_URL` — public Chrome Web Store link (update when live).
- `FORM_ENDPOINT` — Formspree endpoint (already set to `https://formspree.io/f/xkovgkyg`).
- `GA_MEASUREMENT_ID` — GA4 ID (replace `G-XXXXXXX` to enable).

Replace media (optional):
- Swap screenshots at `assets/img/screenshot-*.jpg` if you have new captures.
- Replace `assets/media/demo.mp4` if you want a different background loop.

## Deploy (Netlify)
1. Push this repo to GitHub.
2. Netlify → **New site from Git** → pick repo.
3. Build command: _empty_ (none). Publish directory: `/` (root).
4. Deploy.

## Deploy (GitHub Pages)
1. Push to GitHub.
2. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`.
3. Save. Site will be at `https://<user>.github.io/<repo>/`.

## Local preview
Open `index.html` directly in a browser or serve with any static server (e.g., `python3 -m http.server`).
