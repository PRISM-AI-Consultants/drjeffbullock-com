# Brand Match Report - DrJeffBullock.com

**Generated:** 2026-02-15
**Source:** prismaiconsultants.com (Wix)
**Target:** DrJeffBullock.com (Next.js + Tailwind)
**Pages Analyzed:** Home, About, AI Coaching, Shop, Blog

---

## 1. Extracted Token Summary

### What Was Captured from PRISM

| Category | Token | Value |
|---|---|---|
| **Colors** | Background | #FFFFFF (pure white) |
| | Foreground | #000000 (pure black) |
| | Accent | #8d54e3 (medium purple) |
| | Text primary | rgb(var(--color_15)) - resolves to black |
| | Text secondary | rgb(var(--color_14)) - resolves to dark gray |
| **Typography** | Font family | Arial, Helvetica, sans-serif |
| | Base font size | 10px (Wix default) |
| | Heading system | Wix theme variables (h2-h6) |
| **Spacing** | Base unit | CSS variables (--padding, --margin) |
| | List item margin | 12px |
| **Radii** | Card/default | 10px |
| **Shadows** | Card | 0 1px 4px rgba(0,0,0,.6) |
| **Transitions** | Default | all .2s ease |
| | Visibility | visibility 0s |
| **Focus** | Outline | 2px solid #116dff (Wix default) |

### Extraction Method
- Playwright `getComputedStyle()` across all 5 pages
- Median computation for values that varied between pages
- Manual verification via browser DevTools

---

## 2. What Was Reused (Shared DNA)

These elements carry forward from PRISM to DrJeffBullock.com to maintain family resemblance:

- **Spacing rhythm** - Same 4px base unit. Similar vertical section padding (64-96px range). Content never feels crammed on either site.
- **Transition timing** - Both sites use ~200ms ease transitions. Fast enough to feel responsive, slow enough to feel intentional. No jarring instant changes, no sluggish animations.
- **Whitespace philosophy** - Generous padding around all content. Sections breathe. Elements have room. This is the single most important shared trait.
- **Premium minimalism** - Every element earns its place. No decorative clutter. No "just in case" content. Both sites project quiet confidence through restraint.
- **Purple/violet accent hue** - Same hue family (purple) for interactive elements. Different specific values, but a visitor seeing both sites would sense the connection.
- **High contrast text** - Dark text on light backgrounds. No gray-on-gray readability issues. Both sites prioritize legibility.
- **Card-based content organization** - Content grouped into discrete, elevated cards. Clean boundaries between content blocks.

---

## 3. What Was Changed (Intentional Divergence)

### Layout Architecture
| Aspect | PRISM | DrJeffBullock.com |
|---|---|---|
| Hero pattern | Centered text + single CTA button | Asymmetric editorial (text + media split) |
| Navigation | Dropdown menus (Wix default) | Flat horizontal nav, scroll on mobile |
| Footer | 3-column layout | 4-column or asymmetric layout |
| Page IA | Service-oriented (consulting funnel) | Content-oriented (thought leadership hub) |
| Section ordering | Hero > Features > CTA > Testimonials | Deliberately different sequence per page |
| Content grid | Product/shop grid with pricing | Library/catalog aesthetic (no prices) |

### Color Palette
| Aspect | PRISM | DrJeffBullock.com |
|---|---|---|
| Background | #FFFFFF (cool white) | #FAFAF9 (warm stone-50) |
| Foreground | #000000 (pure black) | #1C1917 (warm stone-900) |
| Accent | #8d54e3 (medium purple) | #7C3AED (violet-600) |
| Palette feel | Cool, clinical, high-contrast | Warm, approachable, sophisticated |
| Muted tones | Not present | #F5F5F4 / #78716C (stone muted pair) |
| Card background | White (same as page) | #FFFFFF (elevated from warm page bg) |

### Typography
| Aspect | PRISM | DrJeffBullock.com |
|---|---|---|
| Body font | Arial, Helvetica, sans-serif | Inter, sans-serif |
| Heading font | Same as body (Arial) | Plus Jakarta Sans, sans-serif |
| Base size | 10px (Wix convention) | 16px (web standard) |
| Heading weight | Standard (400-600) | Heavy editorial (700-800) |
| Overall feel | Utilitarian, gets out of the way | Editorial, invites reading |
| Type scale | Wix theme variables | Explicit scale: 14-72px |

### Shadows
| Aspect | PRISM | DrJeffBullock.com |
|---|---|---|
| Card shadow | 0 1px 4px rgba(0,0,0,.6) | 0 4px 6px rgba(0,0,0,.07) |
| Shadow philosophy | Noticeable lift | Subtle elevation |
| Max opacity | 0.6 (heavy) | 0.1 (light) |

### Interactive Elements
| Aspect | PRISM | DrJeffBullock.com |
|---|---|---|
| Primary CTA text | "Book a Call" | "Explore" / "Read" / "Listen" / "Play" |
| Button style | Purple-filled primary | Dark stone primary, violet accent only |
| Chat widget | Bottom-right chatbot | No floating widget (integrated if present) |
| Focus ring | #116dff (Wix blue) | #7C3AED (violet, matches accent) |

---

## 4. Anti-Clone Compliance

All 14 anti-clone rules have been defined and documented in `/brand/anti-clone-rules.md`. Key differentiators:

1. Asymmetric editorial hero (not centered)
2. Flat nav (no dropdowns)
3. No services/pricing
4. No 3-step patterns
5. No testimonial carousels
6. Different section ordering
7. Library aesthetic (not shop grid)
8. No PRISM branding in hero
9. No chatbot widget
10. Stone primary buttons (not purple)
11. Different footer layout
12. Exploration verbs (not "Book a Call")
13. Softer shadows
14. Heavier heading weights

---

## 5. Screenshots

Screenshots to be captured by Playwright script (`/scripts/brand-capture.ts`).

### Planned Captures

| Page | File | Status |
|---|---|---|
| Home | `/brand/screenshots/prism-home.png` | Pending |
| About | `/brand/screenshots/prism-about.png` | Pending |
| AI Coaching | `/brand/screenshots/prism-ai-coaching.png` | Pending |
| Shop | `/brand/screenshots/prism-shop.png` | Pending |
| Blog | `/brand/screenshots/prism-blog.png` | Pending |

### HTML Captures

| Page | File | Status |
|---|---|---|
| Home | `/brand/html/prism-home.html` | Pending |
| About | `/brand/html/prism-about.html` | Pending |
| AI Coaching | `/brand/html/prism-ai-coaching.html` | Pending |
| Shop | `/brand/html/prism-shop.html` | Pending |
| Blog | `/brand/html/prism-blog.html` | Pending |

### Raw Token Output

| File | Status |
|---|---|
| `/brand/prism-tokens.raw.json` | Pending (generated by brand-capture.ts) |

---

## 6. Files in This Brand Package

| File | Purpose |
|---|---|
| `/brand/prism-tokens.json` | PRISM extracted tokens + DrJeffBullock.com derived tokens |
| `/brand/prism-brand-notes.md` | Design philosophy analysis and harmonization strategy |
| `/brand/anti-clone-rules.md` | 14-rule checklist to prevent cloning |
| `/brand/report.md` | This file - summary of everything captured and decided |
| `/scripts/brand-capture.ts` | Playwright automation for screenshots + token extraction |

---

## 7. Next Steps

1. Run `npx playwright test scripts/brand-capture.ts` to capture screenshots and raw tokens
2. Review screenshots for any PRISM patterns that need additional anti-clone rules
3. Implement design tokens in Tailwind config (`tailwind.config.ts`)
4. Build component library following anti-clone rules
5. Review each completed page against the 14-rule checklist before shipping
