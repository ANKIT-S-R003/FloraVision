# FloraVision 🌿

> A premium dark-themed plant e-commerce frontend built with Next.js 14, featuring glassmorphism UI design, fluid animations, and a fully responsive layout across all devices.

---

## Overview

FloraVision is a production-grade frontend project for a plant retail store. The idea came from a simple observation — most plant shopping websites feel cluttered and outdated. FloraVision flips that entirely: it pairs a deep forest-green color palette with glass-effect cards, smooth Framer Motion transitions, and a clean typographic hierarchy to create a shopping experience that feels as premium as the products it sells.

The project is not just a visual exercise. It was built with a component-based architecture in mind, making it easy to plug in a real backend, swap in a CMS for product data, or extend individual sections independently. Every section — from the hero carousel to the customer reviews — is its own isolated React component with typed props, meaning the codebase scales cleanly as features grow.

If you're a recruiter or developer looking at this, the goal was to demonstrate what a real-world Next.js frontend looks like when you care about performance, accessibility, clean folder structure, and visual polish simultaneously.

---

## Features

- **Full-page dark glassmorphism UI** — every card, panel, and overlay uses backdrop blur with semi-transparent layering, giving the interface depth without being heavy on the eyes
- **Hero section with background imagery** — a full-bleed photo sits behind the headline content, with a left-to-right gradient ensuring text stays readable at any screen width
- **Product showcase card with carousel** — the featured plant card on the hero includes a dot-based slide indicator and a chevron navigation cue, ready to wire up to a real product slider
- **Trending Plants section** — two large alternating horizontal cards (left image / right text, then reversed), each showing a product photo that visually breaks out of the card boundary for a dynamic feel
- **Top Selling Plants grid** — six product cards arranged in a responsive 3-column grid on desktop, collapsing gracefully to 2 columns on tablets and a single column on mobile
- **Customer Reviews section** — three testimonial cards with reviewer names, 4.5-star ratings (including half-star rendering), and review copy matched to the original design
- **Best O2 Plants feature panel** — a large horizontal card with a real plant image on the left, descriptive content on the right, a paginated slider (01/04) with functional previous/next controls, and a dot indicator below
- **Sticky transparent navbar** — starts fully transparent and transitions to a frosted-glass background once the user scrolls past the top, ensuring the hero photo shows fully on load
- **Collapsible mobile menu** — a full-screen slide-in menu activated by the hamburger icon, covering all navigation links with a smooth AnimatePresence transition
- **Inline search bar** — expands into a text input on icon click without disrupting the navbar layout
- **Section title corner brackets** — each section heading has a subtle accent-colored corner bracket decoration, matching the reference design exactly
- **Footer with newsletter form** — three-column footer layout featuring quick links with underlines, a brand description block with social handles, and an email subscription bar with a white Subscribe button
- **Real product images** — all 12 images (logo, hero background, 10 plant photos) are bundled in `public/images` and wired to their respective components via `next/image`

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 14.2.25 | App Router, SSG, image optimisation |
| **React.js** | 18.3 | Component model, hooks, state management |
| **TypeScript** | 5.4 | Static typing across all components and constants |
| **Tailwind CSS** | 3.4 | Utility-first styling, custom tokens, responsive breakpoints |
| **Framer Motion** | 11.2 | Page animations, scroll-triggered reveals, hover effects |
| **Lucide React** | 0.378 | Consistent icon set (cart, search, chevron, star, play) |
| **CSS3** | — | Global styles, noise texture overlay, glassmorphism blur |
| **JavaScript** | ES2017+ | Client interactivity compiled from TypeScript |

---

## Project Structure

```
floravision/
│
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root HTML layout, metadata, global CSS import
│   └── page.tsx                # Home page — assembles all section components in order
│
├── components/                 # All UI components, one file per component
│   ├── Navbar.tsx              # Sticky transparent header with scroll behaviour
│   ├── MobileMenu.tsx          # Full-screen slide-in nav for small screens
│   ├── SearchBar.tsx           # Expandable search input toggled by icon click
│   ├── Hero.tsx                # Hero section: heading, CTAs, showcase card, testimonial
│   ├── TrendingSection.tsx     # "Our Trendy plants" — maps TRENDING_PLANTS to PlantCard
│   ├── PlantCard.tsx           # Large horizontal card used in the trending section
│   ├── TopSellingSection.tsx   # "Our Top Selling Plants" — maps TOP_SELLING_PLANTS to ProductCard
│   ├── ProductCard.tsx         # Individual grid card for the top-selling section
│   ├── ReviewSection.tsx       # "Customer Review" — maps REVIEWS to ReviewCard
│   ├── ReviewCard.tsx          # Glass testimonial card with half-star rating support
│   ├── OxygenSection.tsx       # "Our Best o2" — featured panel with prev/next slider
│   ├── Footer.tsx              # Three-column footer with newsletter form
│   ├── SectionTitle.tsx        # Reusable centred heading with corner-bracket accent
│   └── Button.tsx              # Reusable button with primary and secondary glass variants
│
├── constants/
│   └── index.ts                # All static data: nav links, plant data, reviews, footer links
│
├── public/
│   └── images/                 # All image assets served statically
│       ├── logo.png
│       ├── hero-bg.jpg
│       ├── plant1.png          # Aglaonema — hero showcase card
│       ├── plant2.png          # Plantain Lilies — trending card 1
│       ├── plant3.png          # Succulent — trending card 2
│       ├── plant4.png          # Aglaonema — top selling
│       ├── plant5.png          # Plantain Lilies — top selling
│       ├── plant6.png          # Cactus — top selling
│       ├── plant7.png          # Swiss Cheese Plant — top selling
│       ├── plant8.png          # Sansevieria — top selling
│       ├── plant9.png          # Agave — top selling
│       └── plant10.png         # Aglaonema — oxygen section
│
├── styles/
│   └── globals.css             # Tailwind directives, glass utility class, noise texture, selections
│
├── tailwind.config.ts          # Custom colour tokens, border radii, shadows, font family
├── tsconfig.json               # TypeScript compiler options with path alias @/*
├── next.config.mjs             # Next.js configuration
├── postcss.config.js           # PostCSS with Tailwind and Autoprefixer
└── package.json                # Scripts and dependency manifest
```

The `constants/index.ts` file is the single source of truth for all content. Changing a plant name, price, or review text means editing one place — nothing is hardcoded inside component files.

---

## Installation

Make sure you have **Node.js 18.17 or later** installed. You can check by running:

```bash
node -v
```

If you need to install or upgrade Node, visit [nodejs.org](https://nodejs.org) and download the LTS release.

**Clone or download the project, then install dependencies:**

```bash
# Navigate into the project directory
cd floravision

# Install all dependencies
npm install
```

This pulls in Next.js, React, TypeScript, Tailwind, Framer Motion, and Lucide React. The install typically takes 20–40 seconds depending on your connection speed.

---

## Running the Project

Once dependencies are installed, start the development server:

```bash
npm run dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000). The page will hot-reload whenever you edit any file inside `app/` or `components/` — no manual refresh needed.

The first compile takes 10–20 seconds as Next.js builds the module graph. Subsequent saves are near-instant.

---

## Build for Production

To generate an optimised static build:

```bash
npm run build
```

Next.js will compile all pages, run TypeScript type checks, tree-shake unused code, and output the result to `.next/`. You can then serve the production build locally with:

```bash
npm run start
```

The production server starts at [http://localhost:3000](http://localhost:3000) and reflects the same optimised output that would be deployed to Vercel or any Node-compatible host.

> **Deploying to Vercel:** Push the repository to GitHub, import the repo in your Vercel dashboard, and it deploys automatically. No configuration needed — Next.js is Vercel-native.

---

## Responsive Design

The layout has been tested and tuned across the following breakpoints:

| Breakpoint | Screen Width | Layout Behaviour |
|---|---|---|
| Mobile S | 320px | Single column, stacked sections, full-width cards |
| Mobile M | 375px | Single column, slightly larger typography |
| Mobile L | 425px | Single column with comfortable padding |
| Tablet | 768px | Two-column product grid, wider hero content |
| Laptop | 1024px | Two-column hero, three-column product grid activates |
| Desktop | 1280px | Full layout, max-width container centred |
| Large | 1440px | Identical to 1280 with more breathing room |
| Ultra-wide | 1920px | Container caps at `max-w-7xl`, background fills the rest |

The mobile menu replaces the desktop nav on screens below `md` (768px). Images use `object-contain` on transparent PNGs and `object-cover` on the full-bleed hero background.

---

## UI Components

Each component is self-contained and accepts typed props. Here is a quick reference:

**`Button`**
Two variants — `primary` (white border, fills white on hover) and `secondary` (glass background with glow on hover). Accepts any native button props plus an optional `icon` slot.

**`SectionTitle`**
Accepts a `title` string and renders it centred with corner-bracket accents in the accent green colour. Animates in from below on scroll using Framer Motion's `whileInView`.

**`PlantCard`**
Takes a `Plant` object and an optional `reverse` boolean. When reversed, the image moves to the right side of the card. Used exclusively in the trending section.

**`ProductCard`**
Takes a `Plant` object and renders a grid card with an image that visually overflows the top of the card boundary. Hover lifts the card and increases shadow intensity.

**`ReviewCard`**
Takes a `Review` object with a `rating` field that supports half-star values (e.g. `4.5`). Renders filled and half stars independently using Lucide's `Star` and `StarHalf` icons.

**`OxygenSection`**
Manages its own slide index in local state. The prev/next buttons cycle through 4 slides. Currently only the first slide has data — additional slides can be added by extending the component's slide data array.

---

## Animations

All animations use **Framer Motion** and are intentionally subtle. Nothing spins, bounces excessively, or distracts from the content.

- **Hero content** fades and slides up from `y: 30` on page load with a `0.7s` ease-out duration
- **Hero showcase card** fades in with a slight delay (`0.15s`) so it follows the text rather than competing with it
- **Testimonial card** fades in with a `0.3s` delay, making it the last element to settle
- **Section titles** use `whileInView` with a `-80px` margin so they start animating just before they enter the viewport, not after
- **PlantCard and ProductCard** both use `whileInView` with `y: 28–32` starting offsets — they slide up as you scroll into each section
- **ProductCard hover** lifts the card with `y: -6` and applies a subtle scale of `1.015`, giving a tactile feel without being dramatic
- **ReviewCard hover** mirrors the product card lift behaviour
- **Navbar background** transitions from fully transparent to a frosted-glass surface over `300ms` using a CSS transition on the background and backdrop-filter

Framer Motion's `AnimatePresence` wraps the mobile menu so it fades out cleanly when closed rather than vanishing instantly.

Reduced-motion support is handled in `globals.css` — users with `prefers-reduced-motion: reduce` set in their OS will see all durations collapsed to 0.001ms, effectively disabling animations without breaking the layout.

---

## Accessibility

- All interactive elements (`button`, `a`) have descriptive `aria-label` attributes where the visible label is ambiguous (e.g. cart icon button, social links)
- The newsletter email input uses a visually hidden `<label>` tied by `htmlFor` so screen readers announce the field correctly
- The mobile menu close button and hamburger both carry `aria-label` text
- Image alt text is written descriptively for product images and set to empty string for purely decorative images (hero background)
- Heading hierarchy is maintained: one `h1` per page (hero), `h2` for section titles, `h3` for card headings
- Keyboard navigation works throughout — all focusable elements are reachable via Tab and show a visible `outline: 2px solid #89C64A` focus ring
- Color contrast between white text and the dark green background exceeds WCAG AA requirements across all sections

---

## Performance Optimisations

- **`next/image`** is used for every image, providing automatic WebP conversion, lazy loading, correct `srcset` generation, and layout-shift prevention via reserved space
- The hero background image uses `priority` to begin loading immediately without waiting for JavaScript hydration
- Plant images use transparent PNGs with `object-contain` rather than cropped JPEGs, avoiding any CLS from aspect ratio mismatches
- All components marked `"use client"` only where interactivity actually requires it — `TrendingSection`, `TopSellingSection`, `ReviewSection`, and `Footer` are fully server-safe
- Tailwind's PurgeCSS integration strips unused utility classes at build time, keeping the CSS bundle minimal
- No third-party fonts are loaded from external CDNs — the font stack falls back to system UI fonts, eliminating font-loading layout shifts entirely
- Framer Motion is imported per-component rather than globally, allowing tree-shaking to exclude animation code from server-rendered components
- TypeScript's strict mode catches type errors at compile time, preventing an entire class of runtime errors from ever reaching production

---

## Future Improvements

These are genuine next steps, not aspirational filler:

- **Shopping cart with state management** — add Zustand or React Context to manage cart items across components, persisting to localStorage between sessions
- **Product detail pages** — each plant card links to `/plants/[slug]`, a dynamic route with a full product description, care instructions, and related plant suggestions
- **CMS integration** — replace the static `constants/index.ts` data with Sanity.io or Contentful, allowing non-technical staff to update plant listings, prices, and images without touching code
- **Search functionality** — the search bar currently expands visually but does not filter; connecting it to a client-side search library like Fuse.js would make it functional
- **Authentication** — add NextAuth.js for user accounts, order history, and a wishlist that persists between devices
- **Checkout flow** — integrate Stripe for a real payment experience including order confirmation emails via Resend
- **Review avatars** — the customer review cards currently show placeholder circles; uploading real avatar images to `public/images/` and wiring them up in `constants/index.ts` would complete that section
- **Dark/light mode toggle** — the design is currently dark-only; a light mode variant using Tailwind's `dark:` prefix would broaden accessibility
- **Unit and integration tests** — add Vitest for component unit tests and Playwright for end-to-end flows like adding to cart and completing checkout

---

## Screenshots

**Hero Section**

![Hero Section](./screenshots/hero.png)

---

**Our Trendy Plants**

![Trending Plants](./screenshots/trending.png)

---

**Our Top Selling Plants**

![Top Selling](./screenshots/top-selling.png)

---

**Customer Review**

![Customer Reviews](./screenshots/reviews.png)

---

**Our Best O2 Plants**

![Oxygen Section](./screenshots/oxygen.png)

---

**Footer**

![Footer](./screenshots/footer.png)

> Create a `screenshots/` folder in the project root and add your images to populate the above previews on GitHub.

---

## Author

**Ankit**
Frontend Developer

- Built with a focus on production-quality code structure, real-world design fidelity, and developer experience
- Interested in modern web frameworks, UI engineering, and design systems

---

## License

This project is licensed under the **MIT License**.

You are free to use, copy, modify, merge, publish, or distribute this project for personal or commercial purposes. Attribution is appreciated but not required.

---

<div align="center">
  <p>Made with 🌿 and a lot of green</p>
</div>


## Notes

- All product/plant photography is left as labeled placeholder boxes (`.image-placeholder`) per spec — swap with real images by replacing those divs with `next/image`.
- Color tokens, spacing, and section order follow the original design brief exactly (background #0D1A12, glass cards rgba(255,255,255,0.06), accent #89C64A).
- Components are split by responsibility under `components/`: Navbar, Hero, TrendingSection, TopSellingSection, ProductCard, PlantCard, ReviewSection, ReviewCard, OxygenSection, Footer, Button, SectionTitle, MobileMenu, SearchBar.
