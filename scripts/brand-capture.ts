/**
 * brand-capture.ts
 *
 * Playwright script to capture PRISM brand assets and extract design tokens.
 *
 * What it does:
 *   1. Loads 5 PRISM pages (Home, About, AI Coaching, Shop, Blog)
 *   2. Takes full-page screenshots to /brand/screenshots/
 *   3. Saves raw HTML to /brand/html/
 *   4. Extracts computed styles for body, h1-h3, buttons, cards, nav, footer
 *   5. Computes median tokens across all pages (token sanity step)
 *   6. Writes raw tokens to /brand/prism-tokens.raw.json
 *
 * Usage:
 *   npx playwright test scripts/brand-capture.ts
 *
 * Or run directly:
 *   npx ts-node scripts/brand-capture.ts
 */

import { chromium, Browser, Page } from "playwright";
import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const BASE_URL = "https://www.prismaiconsultants.com";

const PAGES: { slug: string; name: string; url: string }[] = [
  { slug: "home", name: "Home", url: `${BASE_URL}/` },
  { slug: "about", name: "About", url: `${BASE_URL}/about` },
  { slug: "ai-coaching", name: "AI Coaching", url: `${BASE_URL}/ai-coaching` },
  { slug: "shop", name: "Shop", url: `${BASE_URL}/shop` },
  { slug: "blog", name: "Blog", url: `${BASE_URL}/blog` },
];

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SCREENSHOT_DIR = path.join(PROJECT_ROOT, "brand", "screenshots");
const HTML_DIR = path.join(PROJECT_ROOT, "brand", "html");
const RAW_TOKENS_PATH = path.join(
  PROJECT_ROOT,
  "brand",
  "prism-tokens.raw.json"
);

// CSS selectors to extract computed styles from
const SELECTORS = [
  { name: "body", selector: "body" },
  { name: "h1", selector: "h1" },
  { name: "h2", selector: "h2" },
  { name: "h3", selector: "h3" },
  { name: "button", selector: "button" },
  { name: "card", selector: '[class*="card"], [class*="Card"], [data-testid*="card"]' },
  { name: "nav", selector: "nav, header, [role='navigation']" },
  { name: "footer", selector: "footer" },
  { name: "link", selector: "a" },
  { name: "input", selector: "input, textarea" },
];

// CSS properties we care about
const PROPERTIES = [
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "color",
  "backgroundColor",
  "borderRadius",
  "boxShadow",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "border",
  "borderColor",
  "transition",
  "opacity",
  "textTransform",
  "textDecoration",
  "gap",
  "maxWidth",
];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ExtractedStyles {
  [property: string]: string;
}

interface PageTokens {
  page: string;
  url: string;
  timestamp: string;
  elements: {
    [elementName: string]: ExtractedStyles | null;
  };
}

interface RawTokenOutput {
  extractedAt: string;
  source: string;
  pages: PageTokens[];
  medians: {
    [elementName: string]: ExtractedStyles;
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Compute the median of an array of numeric strings (e.g., "16px", "14px").
 * Returns the median value with its unit, or the most common non-numeric value.
 */
function medianValue(values: string[]): string {
  if (values.length === 0) return "";
  if (values.length === 1) return values[0];

  // Try to parse as numbers (strip units)
  const numericPattern = /^(-?\d+(?:\.\d+)?)(px|rem|em|%|vh|vw)?$/;
  const parsed: { value: number; unit: string }[] = [];

  for (const v of values) {
    const match = v.trim().match(numericPattern);
    if (match) {
      parsed.push({ value: parseFloat(match[1]), unit: match[2] || "" });
    }
  }

  // If most values are numeric, compute numeric median
  if (parsed.length >= values.length * 0.5) {
    parsed.sort((a, b) => a.value - b.value);
    const mid = Math.floor(parsed.length / 2);
    const median =
      parsed.length % 2 === 0
        ? (parsed[mid - 1].value + parsed[mid].value) / 2
        : parsed[mid].value;
    const unit = parsed[mid].unit;
    // Round to 1 decimal if needed
    const rounded = Math.round(median * 10) / 10;
    return `${rounded}${unit}`;
  }

  // For non-numeric values (font families, colors, etc.), return most common
  const counts = new Map<string, number>();
  for (const v of values) {
    counts.set(v, (counts.get(v) || 0) + 1);
  }
  let maxCount = 0;
  let mostCommon = values[0];
  for (const [val, count] of counts) {
    if (count > maxCount) {
      maxCount = count;
      mostCommon = val;
    }
  }
  return mostCommon;
}

/**
 * Compute median tokens across all pages for each element type.
 */
function computeMedians(
  pages: PageTokens[]
): { [elementName: string]: ExtractedStyles } {
  const medians: { [elementName: string]: ExtractedStyles } = {};

  // Collect all element names across pages
  const allElementNames = new Set<string>();
  for (const page of pages) {
    for (const name of Object.keys(page.elements)) {
      allElementNames.add(name);
    }
  }

  for (const elementName of allElementNames) {
    // Collect all property values across pages for this element
    const propertyValues: { [prop: string]: string[] } = {};

    for (const page of pages) {
      const styles = page.elements[elementName];
      if (!styles) continue;

      for (const [prop, value] of Object.entries(styles)) {
        if (!propertyValues[prop]) {
          propertyValues[prop] = [];
        }
        if (value && value !== "none" && value !== "normal" && value !== "") {
          propertyValues[prop].push(value);
        }
      }
    }

    // Compute median for each property
    const medianStyles: ExtractedStyles = {};
    for (const [prop, values] of Object.entries(propertyValues)) {
      if (values.length > 0) {
        medianStyles[prop] = medianValue(values);
      }
    }

    medians[elementName] = medianStyles;
  }

  return medians;
}

// ---------------------------------------------------------------------------
// Extraction
// ---------------------------------------------------------------------------

async function extractStyles(
  page: Page,
  selectors: typeof SELECTORS,
  properties: string[]
): Promise<{ [elementName: string]: ExtractedStyles | null }> {
  const results: { [elementName: string]: ExtractedStyles | null } = {};

  for (const { name, selector } of selectors) {
    const styles = await page.evaluate(
      ({ sel, props }) => {
        const el = document.querySelector(sel);
        if (!el) return null;

        const computed = window.getComputedStyle(el);
        const extracted: { [key: string]: string } = {};

        for (const prop of props) {
          try {
            extracted[prop] = computed.getPropertyValue(
              // Convert camelCase to kebab-case for getPropertyValue
              prop.replace(/([A-Z])/g, "-$1").toLowerCase()
            );

            // Also try direct property access (works for camelCase properties)
            if (!extracted[prop]) {
              extracted[prop] = (computed as any)[prop] || "";
            }
          } catch {
            extracted[prop] = "";
          }
        }

        return extracted;
      },
      { sel: selector, props: properties }
    );

    results[name] = styles;
  }

  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("=== PRISM Brand Capture ===\n");

  // Ensure output directories exist
  ensureDir(SCREENSHOT_DIR);
  ensureDir(HTML_DIR);

  const browser: Browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
  });

  const allPageTokens: PageTokens[] = [];

  for (const { slug, name, url } of PAGES) {
    console.log(`\n--- Processing: ${name} (${url}) ---`);
    const page = await context.newPage();

    try {
      // Navigate and wait for network idle
      await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 30000,
      });

      // Give Wix a moment to finish rendering (it hydrates lazily)
      await page.waitForTimeout(3000);

      // 1. Full-page screenshot
      const screenshotPath = path.join(
        SCREENSHOT_DIR,
        `prism-${slug}.png`
      );
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
      });
      console.log(`  Screenshot saved: ${screenshotPath}`);

      // 2. Save HTML
      const html = await page.content();
      const htmlPath = path.join(HTML_DIR, `prism-${slug}.html`);
      fs.writeFileSync(htmlPath, html, "utf-8");
      console.log(`  HTML saved: ${htmlPath}`);

      // 3. Extract computed styles
      const elements = await extractStyles(page, SELECTORS, PROPERTIES);
      console.log(
        `  Extracted styles for: ${Object.keys(elements)
          .filter((k) => elements[k] !== null)
          .join(", ")}`
      );

      const pageTokens: PageTokens = {
        page: name,
        url,
        timestamp: new Date().toISOString(),
        elements,
      };

      allPageTokens.push(pageTokens);
    } catch (err) {
      console.error(`  ERROR processing ${name}:`, err);

      // Still record the page even if extraction failed
      allPageTokens.push({
        page: name,
        url,
        timestamp: new Date().toISOString(),
        elements: {},
      });
    } finally {
      await page.close();
    }
  }

  // 4. Compute medians across all pages (token sanity step)
  console.log("\n--- Computing median tokens across all pages ---");
  const medians = computeMedians(allPageTokens);

  for (const [element, styles] of Object.entries(medians)) {
    const propCount = Object.keys(styles).length;
    console.log(`  ${element}: ${propCount} properties`);
  }

  // 5. Write raw tokens output
  const output: RawTokenOutput = {
    extractedAt: new Date().toISOString(),
    source: BASE_URL,
    pages: allPageTokens,
    medians,
  };

  fs.writeFileSync(RAW_TOKENS_PATH, JSON.stringify(output, null, 2), "utf-8");
  console.log(`\nRaw tokens written to: ${RAW_TOKENS_PATH}`);

  // Cleanup
  await context.close();
  await browser.close();

  console.log("\n=== Brand capture complete ===");
  console.log(`  Screenshots: ${SCREENSHOT_DIR}/`);
  console.log(`  HTML: ${HTML_DIR}/`);
  console.log(`  Raw tokens: ${RAW_TOKENS_PATH}`);
}

// Run
main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
