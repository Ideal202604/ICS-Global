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
## 2026-04-22 — Wire "Join the Community" to /contact + unify Contact navbar logo
- Added `onClick={() => navigate("/contact")}` to "Join the Community" button in `IcsHome.tsx` header
- Contact page navbar logo replaced with same `<img>` tag + URL as IcsHome (`ics-png-1.png` from animaapp/mo9jwd9r`)
- Also updated mobile overlay logo in Contact.tsx to match

## 2026-04-22 — Fix bgImg cards photo visibility in LeadershipGallerySection
- Changed `bg-cover` → `bg-contain bg-no-repeat` + `inset: 8px` on bgImg divs so photo isn't cropped
- Affects Dr. Arpita Kathane and Sumit Dorle cards
- File: `src/screens/IcsHome/sections/LeadershipGallerySection/LeadershipGallerySection.tsx`

## 2026-04-22 — Mobile hamburger toggle added to ALL pages
- Added 3-white-line hamburger + full-screen blue gradient overlay to About, Service, Blog, Gallery, Conference
- Each page highlights its own active nav item in the `bg-[#1a4f72]` pill; Connect CTA at bottom
- Pattern: `useState(false)` for `menuOpen`, hamburger is `lg:hidden`, overlay is `fixed inset-0 z-50`
- Files: `About.tsx`, `Service.tsx`, `Blog.tsx`, `Gallery.tsx`, `Conference.tsx`

## 2026-04-22 — Fix mobile hamburger visibility in IcsHome
- Root cause: `IcsHome.tsx` has its own inline navbar (not using `<Navbar>` component) — had NO hamburger button
- Added `useState` import + `menuOpen` state to `IcsHome.tsx`
- Added 3-white-line hamburger button (`lg:hidden`) next to CTA in the inline header
- Added full-screen blue gradient overlay with white card, active pill on Home, X close, Connect CTA
- File: `src/screens/IcsHome/IcsHome.tsx`

## 2026-04-22 — Navbar mobile menu redesign
- Replaced simple dropdown with full-screen blue gradient overlay matching design reference
- White rounded card with nav links; active item highlighted with `bg-[#1a4f72]` pill
- X close button top-right, ICS logo top-left inside overlay; hamburger (3 white lines) unchanged
- "Connect" CTA pill at bottom of white card
- File: `src/components/Navbar/Navbar.tsx`

## 2026-04-22 — SEO Fix: Correct SVG icon extensions
- Previous session saved SVG content inside `.png` files — fixed by deleting `.png` and recreating as `.svg`
- Updated `index.html`: favicon → `image/svg+xml`, apple-touch-icon, og:image, twitter:image, JSON-LD logo all → `.svg`
- Updated `static/site.webmanifest`: icon entries now reference `.svg` files with correct MIME type `image/svg+xml`
- Files: `static/favicon.svg`, `static/apple-touch-icon.svg`, `static/og-image.svg`, `index.html`, `static/site.webmanifest`

## 2026-04-22 — SEO Setup (initial)
- Wrote `index.html`: title, lang, viewport, meta description/author/keywords, canonical, OG (Facebook/Twitter), JSON-LD schema (Org + WebSite + WebPage + EducationalOrg)
- Created `static/site.webmanifest`, `static/robots.txt` (Google/Bing/Perplexity allow + Sitemap URL), `static/sitemap.xml` (6 routes), `static/llms.txt`
- `vite.config.ts` publicDir is `./static` — all static assets serve from root correctly

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
