# FloraVision

Dark green, glassmorphism plant e-commerce frontend built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

npm install
npm run dev

Open http://localhost:3000

## Notes

- All product/plant photography is left as labeled placeholder boxes (`.image-placeholder`) per spec — swap with real images by replacing those divs with `next/image`.
- Color tokens, spacing, and section order follow the original design brief exactly (background #0D1A12, glass cards rgba(255,255,255,0.06), accent #89C64A).
- Components are split by responsibility under `components/`: Navbar, Hero, TrendingSection, TopSellingSection, ProductCard, PlantCard, ReviewSection, ReviewCard, OxygenSection, Footer, Button, SectionTitle, MobileMenu, SearchBar.
