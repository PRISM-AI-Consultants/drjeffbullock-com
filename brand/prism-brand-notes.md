# PRISM Brand Analysis - Design Token Notes

## What Creates PRISM's Premium Feel

PRISM's site (prismaiconsultants.com, built on Wix) communicates premium through restraint, not decoration:

- **Generous whitespace** - Sections breathe. Content never feels crammed. Padding and margin values are consistently large, giving each element room to stand on its own.
- **High contrast text** - Pure black (#000000) on pure white (#FFFFFF). No gray-on-gray softness. Text demands to be read.
- **Clean type hierarchy** - Arial/Helvetica keeps things utilitarian but professional. Heading sizes step down predictably through h2-h6. No decorative fonts.
- **Confident CTA placement** - Buttons appear exactly where the eye expects them. Single, clear calls to action per section. No button overload.
- **Subtle card shadows** - `0 1px 4px rgba(0,0,0,.6)` gives cards just enough lift without looking like floating panels from 2015.
- **Consistent spacing rhythm** - CSS variables enforce a repeatable spacing system. The 12px list-item margin appears across multiple components.
- **Purple accent for interactivity** - #8d54e3 signals clickable elements, hover states, and active selections. Used sparingly - never as a background fill.

## Token Sanity Notes

### Extraction Method
Tokens were extracted via computed styles (browser DevTools + Playwright `getComputedStyle()`) across 5 PRISM pages:

1. **Home** - Hero, feature cards, CTA sections
2. **About** - Long-form text, team section, mission statement
3. **AI Coaching** - Service descriptions, intake flow
4. **Shop** - Product grid, pricing cards
5. **Blog** - Article list, post detail, sidebar

### Why Medians Matter
Wix uses dynamic CSS variables (`--color_15`, `--wst-font-style-h2`, `--rd`, etc.) that resolve differently depending on the page template and section. Raw computed values varied slightly across pages. We computed medians for:

- Font sizes (h1-h3 varied by 1-2px across pages)
- Padding/margin values (some sections used tighter spacing)
- Border radius (consistently 10px, no variance)
- Shadow values (card shadows were consistent)

### Wix-Specific Quirks
- Base font size is 10px (unusual - most sites use 16px). All rem values are relative to this.
- Color variables (`--color_15`, `--color_14`) resolve through Wix's theme engine, not standard CSS custom properties.
- Focus outline (`2px solid #116dff`) is Wix's accessibility default, not a PRISM design choice.

## How DrJeffBullock.com Harmonizes Without Cloning

The personal site should feel like it belongs in the same universe as PRISM without looking like a white-labeled copy. Think of it as a sibling brand, not a sub-brand.

### Do's

- **Match spacing rhythm** - Use the same 4px base unit. Keep the generous padding philosophy. Sections should breathe the same way.
- **Use similar whitespace generosity** - If PRISM gives a section 80px of vertical padding, DrJeffBullock.com should be in the same range (64-96px). Never cram.
- **Maintain premium minimalism** - Fewer elements, more impact. Every component earns its place on the page.
- **Keep transitions smooth and fast** - 150-300ms, ease-out. Nothing should feel sluggish or bouncy. PRISM uses 200ms as default - stay in that neighborhood.
- **Preserve the "quiet confidence" tone** - Content speaks for itself. No animated gradients, no particle backgrounds, no scroll-jacking.

### Don'ts

- **Don't use Arial/Helvetica** - PRISM's Wix-default type is functional but generic. DrJeffBullock.com uses Inter (body) and Plus Jakarta Sans (headings) for a warmer, more editorial feel that still reads as clean and professional.
- **Don't use the same card shadow depth** - PRISM's `rgba(0,0,0,.6)` is heavy. DrJeffBullock.com uses softer shadows (max `rgba(0,0,0,.1)`) for a lighter, more modern feel.
- **Don't use dropdown navigation** - PRISM uses Wix's standard dropdown nav. DrJeffBullock.com uses flat horizontal navigation with scroll behavior on mobile. Simpler, faster, more intentional.
- **Don't center heroes with single CTAs** - PRISM's centered hero + button pattern is their signature. DrJeffBullock.com uses asymmetric editorial layouts - text left, media right (or vice versa). Different visual identity, same level of polish.

## Color Philosophy

PRISM: Cool, clinical, high-contrast (white + black + purple).
DrJeffBullock.com: Warm, approachable, sophisticated (warm stone palette + dark text + violet accent).

The violet accent (#7C3AED) is a deliberate sibling to PRISM's purple (#8d54e3) - similar hue family, different saturation and lightness. Close enough to feel related, different enough to stand alone.

## Typography Philosophy

PRISM: System sans-serif. Utilitarian. Gets out of the way.
DrJeffBullock.com: Inter + Plus Jakarta Sans. Editorial. Invites you to read.

Heading weights run heavier on the personal site (700-800 vs PRISM's standard weights). This creates a more editorial, magazine-like feel that suits a thought-leadership platform.
