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
## 2026-04-23 — Wire "Explore Our Impact" button to About page
- Added `onClick={() => navigate("/about")}` to the hero CTA button in `IcsHome.tsx`
- File: `src/screens/IcsHome/IcsHome.tsx`

## 2026-04-23 — Enable Conference nav button on all pages
- Removed `disabled: true` from Conference nav item in all 7 page files + Navbar.tsx
- Removed all `isDisabled` guard logic from desktop pill nav and mobile overlay menus
- Conference now navigates to `/conference` on click, renders at full opacity with correct text color
- Files: `IcsHome.tsx`, `About.tsx`, `Blog.tsx`, `Conference.tsx`, `Gallery.tsx`, `Service.tsx`, `Contact.tsx`, `Navbar.tsx`

## 2026-04-23 — Update Blogs & Guides section background color
- Changed `backgroundColor` from `#0e2a47` (dark navy) to `#1566a0` (blue) per user request
- File: `src/screens/IcsHome/sections/HomeBlogsSlider.tsx`

## 2026-04-23 — Full inline-style lockdown on social icons + card info
- Converted entire info card container from Tailwind classes to 100% inline styles to eliminate all specificity conflicts
- Social icons nav uses `<nav>` with strict `flexDirection:row`, `flexWrap:nowrap`, `gap:8px`
- Each icon link locked to exact `26×26` with `maxWidth/maxHeight` + `flexShrink:0/flexGrow:0`
- Works identically on mobile (2-col grid) and desktop (5-col grid)
- File: `LeadershipGallerySection.tsx`

## 2026-04-23 — Make mobile About section visible again
- Replaced `bg-transparent` with dark blue gradient (`#0e2a47 → #1a4f72`) on the `lg:hidden` About section
- White text/button now visible on mobile/tablet viewports
- File: `src/screens/IcsHome/IcsHome.tsx`

## 2026-04-23 — Match bgImg team member photo sizes to imgSrc members
- Changed `bg-contain bg-center` → `bg-cover bg-top` on `bgImg` div in `MemberCard`
- Dr. Arpita Kathane & Sumit Dorle photos now fill the same area as other team members
- File: `LeadershipGallerySection.tsx`

## 2026-04-23 — Transparent background for mobile About section
- Changed `bg-[#0e2a47]` → `bg-transparent` on the `lg:hidden` About section in `IcsHome.tsx`
- Affects phone and tablet viewports only; desktop layout unchanged

## 2026-04-23 — Fix Conference nav button clickability
- Added explicit `disabled: false` to all `navItems` entries in `Navbar.tsx`
- Replaced ambiguous `"disabled" in item` runtime check with direct `item.disabled` property access
- Conference link now renders at full opacity with correct text color and navigates to `/conference`
- Fix applies to both desktop pill nav and mobile overlay menu

## 2026-04-23 — Marquee scroll animation for blog cards
- Replaced static 3-column grid with continuous CSS marquee animation (right-to-left)
- Cards duplicated 4× for seamless infinite loop; 30s linear cycle, pauses on hover
- `@keyframes marquee-scroll` with `translateX(-50%)` for seamless wrap
- Extracted `BlogCard` sub-component; fixed card width via `clamp(340px, 28vw, 440px)`
- Shared by Home + About pages (About imports `HomeBlogsSlider`)
- File: `src/screens/IcsHome/sections/HomeBlogsSlider.tsx`

## 2026-04-23 — Center 3 blog cards in static grid layout
- Replaced carousel/clone infinite slider with a simple centered 3-column grid
- Removed all swipe/drag/auto-slide/arrow logic — all 3 cards always visible
- `grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8` inside `max-w-[1400px] mx-auto`
- Reduced card array from 4 to 3 items; responsive: stacks on mobile
- File: `src/screens/IcsHome/sections/HomeBlogsSlider.tsx`

## 2026-04-23 — Disable Conference nav link site-wide
- Added `disabled: true` flag to Conference nav item in all 8 page files
- Disabled state: `opacity-40`, `cursor-not-allowed`, `text-gray-400`, `aria-disabled`, click prevented
- Applies to both desktop nav pill and mobile overlay menu on every page
- Files: `Navbar.tsx`, `IcsHome.tsx`, `About.tsx`, `Blog.tsx`, `Conference.tsx`, `Contact.tsx`, `Gallery.tsx`, `Service.tsx`

## 2026-04-23 — Comprehensive README rewrite
- Full humanized README covering all 7 pages, features, tech stack, project structure, setup, EmailJS config
- Responsive design docs, contributing guidelines, and license section
- File: `README.md`

## 2026-04-23 — Enforce strict horizontal social icons row
- Social icons nav: inline `style` for `flex-direction:row; flex-wrap:nowrap; gap:8px` to guarantee single-row alignment
- Icon buttons: `minWidth/minHeight:26px`, `flexShrink:0` via inline style for no-wrap guarantee
- Icons 12×12 via inline style; hover bg preserved; left-aligned under name/role
- File: `src/screens/IcsHome/sections/LeadershipGallerySection/LeadershipGallerySection.tsx`

## 2026-04-22 — Fix team member card UI (image overlap + inline social icons)
- Profile image container set to fixed 252px height; gradient background starts at top:45px for raised overlap effect
- Social icons nav changed to `flex flex-row items-center gap-2` (8px) with `flex-shrink-0` for strict single-row alignment
- Removed `w-full` from social nav to prevent stretching; icons are left-aligned under name/role
- File: `src/screens/IcsHome/sections/LeadershipGallerySection/LeadershipGallerySection.tsx`

## 2026-04-22 — Replace About page blogs section with HomeBlogsSlider
- Swapped `BlogsAndGuidesSection` import for `HomeBlogsSlider` in `About.tsx`
- About page now shares the same multi-visible-card auto-scrolling circular carousel from Home
- File: `src/screens/About/About.tsx`

## 2026-04-22 — Auto-scrolling circular queue for HomeBlogsSlider
- Rewrote `HomeBlogsSlider.tsx` from native scroll to translateX percentage-based infinite carousel
- Clone approach: `[last N, ...real, first N]` with instant snap on transition end for seamless loop
- Responsive visible count: 3 on desktop, 2 on tablet, 1 on mobile via `useVisibleCount` hook
- Auto-slides every 3.5s, pauses on hover/drag; arrows, swipe, dots all preserved
- File: `src/screens/IcsHome/sections/HomeBlogsSlider.tsx`

## 2026-04-22 — Add full form validation + EmailJS-compatible contact form
- Added `@emailjs/browser` dependency; config in `src/lib/emailjs.ts` (placeholder IDs ready to swap)
- Full field validation: required checks, email regex, phone regex, min-length for name/message
- Red border + error text on blur; errors clear on re-typing; all fields validated on submit
- Loading spinner on send, success/error banners with 5s auto-dismiss
- Input `name` attrs mapped to EmailJS template vars: `from_name`, `from_email`, `phone`, `message`
- Focus ring styling (`focus-within:border-[#2a7ab5]`) added to all inputs
- File: `src/components/ContactAndFooter/ContactAndFooter.tsx`, `src/lib/emailjs.ts`, `package.json`

## 2026-04-22 — Exact-match contact section design from screenshot
- Outer wrapper changed from blue → light gray (`#eef1f5`) so blue card appears inset
- Left panel: blue `#2a7ab5` background with nested light-blue `#dceefb` rounded form card inside
- Right panel: image flush edge-to-edge (55% width), left form panel 45%
- Grid changed to `lg:grid-cols-[45%_55%]` for proper proportions matching screenshot
- Applies to all 7 pages via shared `ContactAndFooter.tsx`; footer unchanged

## 2026-04-22 — Rewrite sliders to percentage-based horizontal translateX
- Replaced pixel-based `dims.w` measurement approach with `translateX(-${index * 100}%)` percentage method
- Each slide: `w-full flex-shrink-0` inside a `flex` track within `overflow-hidden` wrapper
- Clone-based infinite loop: `[last, ...real, first]` with instant snap on transition end
- 0.6s ease-in-out transition, 3.5s auto-slide interval, arrows + swipe + dots all preserved
- Files: `BlogsGuidesSection.tsx`, `BlogsAndGuidesSection.tsx`

## 2026-04-22 — Add left/right arrow navigation to blog sliders (Home + About)
- Added frosted-glass arrow buttons (left/right) overlaid on carousel for manual prev/next control
- Arrows use `bg-white/20 backdrop-blur-sm` styling with hover state; positioned absolutely at 50% height
- `e.stopPropagation()` on arrow clicks prevents drag handler interference
- Responsive positioning: arrows shift inward on smaller screens
- Files: `BlogsGuidesSection.tsx`, `BlogsAndGuidesSection.tsx`

## 2026-04-22 — Add swipe/drag support to blog sliders (Home + About)
- Added touch (swipe) and mouse (drag) gesture support to both `BlogsGuidesSection` and `BlogsAndGuidesSection`
- `goPrev`/`goNext` triggered by 50px swipe threshold; infinite loop preserved
- `cursor-grab` / `cursor-grabbing` visual feedback; pauses auto-slide during drag
- Files: `BlogsGuidesSection.tsx`, `BlogsAndGuidesSection.tsx`

## 2026-04-22 — Redesign ICMLBDA CTA section v2 — centered rounded card
- Wrapped hero in light-gray (`#f0f2f5`) outer container with generous padding for visible white margin gap
- Card: `max-w-[1200px]`, `rounded-xl`, `overflow-hidden`, `shadow-lg`, flex row layout
- Left 38% = audience image (full-height cover), Right 62% = blue gradient panel with centered text/buttons
- Content centered both vertically + horizontally; buttons have group hover arrow animation
- Responsive: stacks vertically on mobile; maintains rounded corners and spacing
- File: `ConferenceCtaSection.tsx`

## 2026-04-22 — Rename Contact button to "Join the Community" on ALL pages
- Changed navbar CTA button text from "Contact" → "Join the Community" on every page: About, Blog, Conference, Gallery, Service
- Also added `onClick={() => navigate("/contact")}` where it was missing on those 5 pages
- Updated shared `Navbar.tsx` default ctaLabel from "Contact" → "Join the Community"
- IcsHome & Contact already had this change from prior work
- Files: `Navbar.tsx`, `About.tsx`, `Blog.tsx`, `Conference.tsx`, `Gallery.tsx`, `Service.tsx`

## 2026-04-22 — Replace static map image with live Google Maps embed
- Swapped `<img>` for `<iframe>` Google Maps embed pointing to Idealizeer Content Solutions Pvt Ltd, Pune
- Added cinematic styling: contrast, brightness, grayscale filters + inset shadow overlay
- Wrapped in `overflow-hidden rounded-2xl` container to match existing card styling
- File: `src/screens/Contact/Contact.tsx`

## 2026-04-22 — Replace all logos with user-uploaded ICS Global logo
- Hosted uploaded logo: `uploaded-asset-1776850331288-0.png`
- Replaced navbar logos in all 7 page screens: IcsHome, About, Service, Blog, Gallery, Conference, Contact
- Replaced shared `Navbar.tsx` component logo (removed `logoSrc`/`logoTextSrc` bg-image pattern → simple `<img>`)
- Replaced footer logo in `ContactAndFooter.tsx`
- Files: all page `.tsx` files + `Navbar.tsx` + `ContactAndFooter.tsx`

## 2026-04-22 — Fix auto-sliding carousel v2 — reliable measurement + medium speed
- Root cause: initial `slideWidth=0` meant `offset=0` so nothing moved; also `useEffect` fired before layout
- Fix: `useLayoutEffect` + 100ms delay for measurement, start at index 0 then jump to 1 after measured
- Double `requestAnimationFrame` for re-enabling transition after instant snap (browser needs 2 frames)
- 4s interval, 0.8s ease-in-out transition for medium-speed smooth sliding, infinite loop via clone trick
- Files: `BlogsGuidesSection.tsx`, `BlogsAndGuidesSection.tsx`

## 2026-04-22 — Fix "popular Categories" → "Popular Categories" in shared footer
- Capitalized "popular" to "Popular" in `ContactAndFooter.tsx` h3 heading
- Applies to all pages since footer is a shared component

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
