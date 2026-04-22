<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-04-22 — SEO Setup (latest)
- Rewrote `index.html`: title, lang, viewport, meta description/author/keywords, canonical, OG (Facebook/Twitter), JSON-LD schema (Org + WebSite + WebPage + EducationalOrg)
- Created `static/favicon.png`, `static/apple-touch-icon.png`, `static/og-image.png` (SVG-based, no .ico)
- Created `static/site.webmanifest`, `static/robots.txt` (Google/Bing/Perplexity allow + Sitemap URL), `static/sitemap.xml` (6 routes), `static/llms.txt`
- `vite.config.ts` publicDir is `./static` — all static assets serve from root correctly
- Files: `index.html`, `static/*`

## 2026-04-22
## 2026-04-22 — SEO Setup (latest)
- Rewrote `index.html`: title, lang, viewport, meta description/author/keywords, canonical, OG (Facebook/Twitter), JSON-LD schema (Org + WebSite + WebPage + EducationalOrg)
- Created `static/favicon.png`, `static/apple-touch-icon.png`, `static/og-image.png` (SVG-based, no .ico)
- Created `static/site.webmanifest`, `static/robots.txt` (Google/Bing/Perplexity allow + Sitemap URL), `static/sitemap.xml` (6 routes), `static/llms.txt`
- `vite.config.ts` publicDir is `./static` — all static assets serve from root correctly
- Files: `index.html`, `static/*`

## 2026-04-22
- Hero About Us block: split into `lg:hidden` mobile section + `hidden lg:block` absolute desktop block — fixes overflow/collision on all breakpoints
- Desktop: About Us stays bottom-right inside hero bg via absolute positioning (max-width 650px, px-24)
- Mobile/Tablet: About Us rendered as a separate `<section>` with bg-[#0e2a47], full-width, stacked below hero
- `tailwind.css`: added breakpoint-specific `min-height` for #home section (520px mobile, 600px tablet, clamp desktop)
- Files: `IcsHome.tsx`, `tailwind.css`

## 2026-04-22
- Fixed desktop extra whitespace: reduced `lg:py-*` on all sections in IcsHome, CampusExperienceSection, ContactSupportSection
- Hero: replaced `min-h-screen` with `min-h-[560px] lg:min-h-0` to prevent full-viewport-height gap
- Conference CTA, Core Philosophy, Trusted By, Team, Solutions sections: all tightened to `lg:py-10`
- Added `@media (min-width: 992px)` global rules in `tailwind.css` to zero out inter-section margins
- Files: `IcsHome.tsx`, `CampusExperienceSection.tsx`, `ContactSupportSection.tsx`, `tailwind.css`

## 2026-04-21
- Fixed ConferenceCtaSection invisible: changed image from `h-auto` to `absolute inset-0` and added `relative z-10` overlay with `min-h` so content is always visible
- File: `src/screens/IcsHome/IcsHome.tsx`

## 2026-04-21
- Fixed SyntaxError in Gallery.tsx: removed raw injected text from inside JSX `src` attribute at line 140; rewrote file cleanly
- Confirmed Gallery.tsx is clean and complete; ran `npm run dev` to start the project
- Rewrote Gallery.tsx: removed fixed `min-w-[1920px]`, replaced absolute positioning with responsive flex/grid layout, `useNavigate` routing, proper footer positioning
- Wired "Gallery" nav link to `/gallery` in IcsHome, About, Service, Blog screens
- All 5 screens now have fully consistent, functioning nav with correct routes

## 2026-04-21 (latest)
- Removed stray `</parameter>` tag from `src/screens/About/index.ts` that caused SyntaxError on line 2
- Previously removed same stray tag from `src/index.tsx`

## 2026-04-21
- Removed the entire About Us / HeroIntroSection block from IcsHome.tsx
- Deleted its import; Solutions section now appears directly after the Hero
- File: `src/screens/IcsHome/IcsHome.tsx`

## 2026-04-20
- Fixed invisible About Us paragraph — removed `text-transparent` class from `<p>` in HeroIntroSection
- File: `src/screens/IcsHome/sections/HeroIntroSection/HeroIntroSection.tsx`

## 2026-04-20
- Fixed name "Pankaj Kathane" → "Mrunal Gadre" for Client Relations & Delivery Manager role
- Made all team cards equal height using `h-full`, `flex-1`, and `items-stretch` on grid
- File: `src/screens/IcsHome/sections/LeadershipGallerySection/LeadershipGallerySection.tsx`
</changelog>
