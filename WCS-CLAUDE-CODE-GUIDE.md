# WOMEN'S COLIVING SUMMIT — CLAUDE CODE PROMPT GUIDE
## One prompt to set up the full Next.js project. Paste this into Claude Code along with the HTML design files.

---

# HOW TO USE THIS FILE

1. Clone the repo: `git clone https://github.com/colivingcait/womenscolivingsummit.git`
2. Open Claude Code in that directory
3. Copy the FULL prompt below (everything between the --- lines)
4. Paste it into Claude Code
5. Let it build — review when done
6. The HTML design files are included in this repo as reference. Claude Code should match them EXACTLY.

---
---

# MASTER SETUP PROMPT — PASTE THIS INTO CLAUDE CODE

```
I need you to set up a Next.js 14 website for the Women's Coliving Summit and convert 7 existing HTML design files into React/Tailwind components. The HTML files are the source of truth for design — match them EXACTLY.

## PROJECT SETUP

Create a Next.js 14 project (App Router) with TypeScript and Tailwind CSS in this repo.

Install:
- next
- react
- tailwindcss
- @types/react

No other dependencies needed right now. This is a static marketing site — no auth, no database, no CMS yet.

## BRAND DESIGN SYSTEM

### Colors (configure in tailwind.config.ts as custom colors)

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Wine | #58303d | bg-wine, text-wine | Primary dark — hero sections, accent backgrounds, footer |
| Wine Dark | #3d2029 | bg-wine-dark | Footer background, button hover states |
| Gold | #C69B3C | bg-gold, text-gold | Primary accent — buttons, eyebrows, hover states, CTAs |
| Gold Light | #DCBE7B | text-gold-light | Italic emphasis text on dark backgrounds |
| Gold Dark | #9E7A2A | text-gold-dark | Links on light backgrounds, button hover |
| Gold Pale | #EDE0C3 | bg-gold-pale | Note/alert backgrounds |
| Ivory | #F4EADE | bg-ivory | Secondary light background |
| Cream | #FAF7F2 | bg-cream | Primary light background, form inputs |
| White | #FFFFFF | bg-white | Primary canvas |
| Blush | #F0E3DC | bg-blush | Tertiary light background |
| Text | #3D2B30 | text-body | Primary body text |
| Text Mid | #7A6269 | text-body-mid | Secondary body text |
| Text Light | #A8949A | text-body-light | Tertiary/muted text |

### Borders
- Default: rgba(196,149,90,0.2) — gold-tinted
- Wine: rgba(88,48,61,0.08) — subtle wine-tinted

### Typography (import via Google Fonts in layout.tsx)

- **Headings:** Cormorant Garamond — weight 400, line-height 1.06, letter-spacing -0.025em
  - Italic emphasis words: font-style italic, font-weight 300, color gold (or gold-light on dark backgrounds)
  - h1: clamp(44px, 5.8vw, 72px)
  - h2: clamp(34px, 4.2vw, 56px)  
  - h3: clamp(20px, 2vw, 26px)

- **Body:** DM Sans — weight 300, size 15px, line-height 1.8, color text-mid

- **Eyebrow labels:** DM Sans — 10px, weight 500, letter-spacing 0.18em, uppercase, color gold
  - Has a 20px gold line before the text (::before pseudo-element)
  - Variant: centered (no line), light (gold-light color for dark backgrounds)

- **Buttons:** DM Sans — 11px, weight 500, letter-spacing 0.09em, uppercase, padding 16px 38px, NO border-radius (square corners)
  - Variants: gold bg, wine bg, outline (gold border), outline-light (white border for dark bgs)
  - Hover: translateY(-2px) + box-shadow, transition cubic-bezier(.16,1,.3,1)

### Animations
- **Scroll reveal:** opacity 0→1, translateY(40px→0), 0.85s cubic-bezier(0.16, 1, 0.3, 1)
  - Staggered delays: 0.12s, 0.24s, 0.36s, 0.48s
  - Trigger at threshold 0.12 with rootMargin '0px 0px -40px 0px'
- **Hero animation:** @keyframes with same curve, staggered delays for eyebrow, h1, subtitle, CTAs
- **Card hover glow:** radial-gradient that follows mouse position via CSS custom properties

## SHARED COMPONENTS (create in /components/)

Build these reusable components used across all pages:

### Nav (/components/Nav.tsx)
- Fixed top, frosted glass (backdrop-blur-24px on white/90% opacity)
- Left: "Women's Coliving Summit" wordmark in Cormorant Garamond, "Summit" in italic gold
- Right: About, Agenda, Speakers, Sponsors, WCS 2025, FAQ links + gold "Get My Ticket" button
- All links go to /about, /agenda, /speakers, /sponsors, /wcs-2025, /faq
- "Get My Ticket" links to https://www.eventbrite.com (placeholder — will be replaced)
- Mobile: hamburger menu at 1024px breakpoint, full-screen overlay menu
- Adds .scrolled class on scroll > 60px (subtle box-shadow)

### Footer (/components/Footer.tsx)
- Background: wine-dark (#3d2029)
- 4-column grid: Brand (logo + tagline), Navigate (all page links), Connect (Instagram, Facebook, LinkedIn, Email), Get Involved (Buy Tickets, Sponsor WCS, Apply to Speak)
- Email signup form: "Stay in the Loop" — first name + email + "Count Me In" button
- Bottom bar: copyright + Hello@LustraHouse.com
- Sponsor WCS and Apply to Speak links should trigger modals (see below)

### SponsorModal (/components/SponsorModal.tsx)
- Frosted wine overlay, centered white modal, scrollable
- Fields: Name, Company/Brand, Email, Phone (optional), Interest message
- On submit: mailto Hello@LustraHouse.com with pre-filled subject "WCS 2026 Sponsor Inquiry — [Company]"
- Triggered from: sponsor buttons across the site, footer "Sponsor WCS" link

### SpeakerModal (/components/SpeakerModal.tsx)
- Same modal style as sponsor
- Fields: Name, Email, Company (optional), Coliving Experience, Proposed Topic, Social/Website (optional)
- On submit: mailto Hello@LustraHouse.com with pre-filled subject "WCS 2026 Speaker Application — [Name]"
- Triggered from: speakers page, footer "Apply to Speak" link

### Eyebrow (/components/Eyebrow.tsx)
- Props: text, centered (boolean), light (boolean)
- The gold line + uppercase label pattern used everywhere

### Button (/components/Button.tsx)
- Props: variant (gold, wine, outline, outline-light), href or onClick, children
- Square corners, exact sizing and hover states from design system

### RevealOnScroll (/components/RevealOnScroll.tsx)
- Wrapper component using IntersectionObserver
- Props: delay (number), children
- Handles the scroll-triggered fade-up animation

### ExitIntentPopup (/components/ExitIntentPopup.tsx)
- Triggers once when mouse leaves viewport toward top
- Email signup: "Don't miss this." — first name + email + "Keep Me Posted"
- Dismiss: "No thanks, I'll find my own way back"
- Fires only once per session

## PAGES (create in /app/)

Convert each HTML file into a Next.js page. The HTML files are included in this repo as reference — match the design EXACTLY.

### / (index.html → /app/page.tsx)
Home page. Sections: Hero, Photo Strip, About Preview, Highlights (wine bg), Agenda Preview, Numbers, Community Photo, Audience (Who It's For), Speakers Carousel (auto-scrolling, 45s loop, pauses on hover), Testimonials (wine bg), Sponsors Preview, FAQ Preview (3 questions), Final CTA (wine bg)

### /about (about.html → /app/about/page.tsx)
About page. Sections: Page Hero, Our Story, Founders (two-column bios — Caitlyn Verdugo | Coliving Cait + Jasmine Brown), Mission (wine bg), CTA Band

### /agenda (agenda.html → /app/agenda/page.tsx)
Agenda page. Sections: Page Hero, 2026 Coming Soon (wine bg with 3 preview cards), Our Approach philosophy section, 2025 Full Agenda (two-column day layout), CTA Band

### /speakers (speakers.html → /app/speakers/page.tsx)
Speakers page. Sections: Page Hero, 2026 Speaker Grid (8 placeholder cards), What Our Speakers Bring (wine bg, 3 value cards), Apply to Speak CTA + modal, CTA Band

### /sponsors (sponsors.html → /app/sponsors/page.tsx)
Sponsors page. Sections: Page Hero, 2026 Sponsor Placeholders, Why Sponsor WCS (wine bg, 3 value cards), Past 2025 Sponsors (Lunspro Home Inspections, Anchor Mortgage, Erika Krupansky Photography), Become a Sponsor CTA + modal, CTA Band

### /wcs-2025 (wcs-2025.html → /app/wcs-2025/page.tsx)
WCS 2025 Recap. Sections: Page Hero, Fun Facts/Stats (wine bg — Sold Out, 75 Women, 2 Days, 3 Sponsors), Photo Gallery (9 placeholders, mixed grid), Topics Covered (6 cards), Photo Strip, Testimonials (wine bg, 4 quotes), 2025 Sponsors, CTA Band

### /faq (faq.html → /app/faq/page.tsx)
FAQ page. 12 accordion Q&As with smooth expand/collapse animation. "How do I become a sponsor?" and "How do I apply to speak?" link to their respective modals. Contact section with Hello@LustraHouse.com prominently displayed. CTA Band.

## BRAND RULES (enforce everywhere)

- Always spell "coliving" as one word, no hyphen, no capital C mid-sentence
- Never use the word "landlord" — use "housing operator" or "community builder"
- Never include specific property addresses more specific than "Atlanta metro" or "Georgia"
- Tagline: "Women building wealth — one room at a time."
- CTA rally cry: "Build the room. Own the future."
- Email: Hello@LustraHouse.com
- All "Get My Ticket" buttons link to https://www.eventbrite.com (placeholder)

## DEPLOYMENT

After building:
1. Make sure `next.config.ts` has `output: 'export'` for static export (this is a static site)
2. Run `npm run build` to verify it builds clean
3. Commit everything and push to the GitHub repo
4. I'll connect Vercel separately

Build the full project now. Start with the shared components, then build each page. Match the HTML design files exactly.
```

---
---

# AFTER THE BUILD

Once Claude Code finishes:
1. Review each page in the browser (`npm run dev`)
2. Compare against the HTML design files
3. Ask Claude Code to fix anything that doesn't match
4. When happy: `git add . && git commit -m "Initial WCS site build" && git push`
5. Go to vercel.com → Import the repo → Deploy
6. Connect womenscolivingsummit.com in Vercel domain settings
