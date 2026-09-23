# VineaDigital Landing Page (React + Vite)

A React rebuild of the VineaDigital landing page. All copy, links, prices and
colors live in **one file** — `src/config.js` — so you can restyle or rewrite
the whole site without touching component code.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
```

## Project structure

```
src/
  config.js                # <-- edit this for all text/links/prices/theme
  App.jsx                  # assembles every section
  App.css                  # all styles, keyed to CSS variables from config.theme
  components/
    Icon.jsx                # shared SVG icon set (referenced by name in config)
    Navbar.jsx
    Hero.jsx
    Features.jsx
    Transformation.jsx      # the "offline → online" flow + stat cards
    Projects.jsx
    Pricing.jsx
    ProcessWhyAbout.jsx     # "How It Works" / "Why Choose Us" / "About" row
    FAQ.jsx                 # accordion, keyboard/click accessible
    CtaAndFooter.jsx        # bottom CTA band + footer
```

## What's configurable in `src/config.js`

- **brand** — name, tagline, initials shown in the logo mark
- **nav** — every nav link and the header CTA button
- **hero** — headline, subhead, both hero buttons, trust points, and the
  browser/phone mockup copy
- **features** — the 5 "what we build" cards (title, description, icon)
- **transformation** — the offline→online flow steps and the two stat cards
- **projects** — the 4 portfolio cards (title, tag, meta, gradient)
- **pricing** — all 3 pricing tiers, their features and CTA buttons
- **process** — the "How It Works" numbered steps
- **whyUs** — the "Why Choose Us" checklist and the trio of stats
- **about** — your name, bio, and the row of "worked with" logo tiles
- **faq** — every question/answer pair
- **cta** — the closing call-to-action band, including the WhatsApp number
- **footer** — footer links and copyright line
- **social** — the footer's social icons; each has a `label`, `name` and
  real `href` — point these at your actual profiles
- **theme** — colors and fonts; these are injected as CSS custom properties
  at the top of `App.jsx`, so changing a hex value here re-skins the entire
  site immediately

## Swapping placeholder visuals

The hero mockup, phone mockup, project thumbnails and the "transformation"
photo are all CSS gradients (no external images), so the project has zero
image dependencies out of the box. To use real photos:

- Replace `.browser-body`, `.phone-screen`, `.project-thumb`, and
  `.transform-photo` in `App.css` with `background-image` rules, **or**
- Pass an `image` URL through `config.js` and render an `<img>` inside the
  relevant component instead of the placeholder `<div>`.

## Notes

- Icons are inline SVGs in `components/Icon.jsx`, referenced by name
  (e.g. `icon: "cart"`) from `config.js` — add new ones there if you add
  new feature/flow items.
- The FAQ accordion and mobile nav toggle are plain `useState`, no extra
  dependencies required.
- Styling is plain CSS (no Tailwind/UI library) so the project has exactly
  two runtime dependencies: `react` and `react-dom`.
