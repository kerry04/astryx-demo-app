# SokoResult · Astryx demo

Standalone demo of Meta's Astryx design system (v0.7.11, MIT, beta), themed to
SokoResult's picked design — dark #07070D, violet #5B3BFF, YES mint #3BE3A8,
NO tomato #FF7461, light #F6F5F9, Inter. No SokoResult code lives here; this
is the sandbox where Astryx is proven before it touches the real repo.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # tsc + vite build
```

## What's in it

- `src/soko-theme.ts` — the Soko theme: `defineTheme` extending Astryx's
  neutral theme, overriding only semantic tokens (surfaces, text, accent,
  success/error, borders, purple/green/red hues, Inter).
- `src/Root.tsx` — holds the light/dark mode state above Astryx's `<Theme>`.
- `src/App.tsx` — one demo page, every control an Astryx component: market
  card (YES/NO badges, probability bar, Buy YES/NO), search input, alerts
  switch + email input with validation, buttons & badges, a dialog.
  All data is demo data — no real markets, no real money.
- `AGENTS.md` / `GEMINI.md` — agent cheat sheets installed by
  `npx @astryxdesign/cli init`. Run `npm run astryx -- <cmd>` for the CLI
  (`component`, `docs`, `template`, `theme`).

## Pinned versions

- `@astryxdesign/core` 0.7.11
- `@astryxdesign/theme-neutral` 0.7.11
- `@astryxdesign/cli` 0.7.11 (dev)
- `@stylexjs/stylex` 0.19.1
- React 19.3.1

Astryx is beta (v0.x) — breaking changes per minor release are expected, so
versions are pinned exact. No canary charts package is used (none stable yet).
