// drjeffbullock.com/vr mirrors the VR hub (vr.prismaiconsultants.com).
// Jeff 2026-11-16: "if it's on this site it's on Dr Jeff Bullock, same status."
// The hub's index.html is the single source: cards, order, sections, art and
// ribbons (Beta, New game, In testing, past dates) are read from it, so a hub
// edit shows here within REVALIDATE seconds with no second edit and no deploy.

export const VR_HUB = "https://vr.prismaiconsultants.com/";
export const REVALIDATE = 600;

export type HubCard = {
  kind: "feature" | "poster";
  url: string;
  title: string;
  sub: string;
  description: string;
  image: string;
  imageAlt: string;
  ribbon: string;
  ribbonPast: boolean;
  chips: string[];
};

export type HubSection = {
  id: string;
  kicker: string;
  heading: string;
  intro: string;
  cards: HubCard[];
};

export type HubFeed = { sections: HubSection[]; fetchedAt: string };

const ENT: Record<string, string> = {
  amp: "&", middot: "·", rarr: "→", larr: "←", mdash: "—",
  ndash: "–", nbsp: " ", quot: '"', apos: "'", lt: "<", gt: ">",
  copy: "©", times: "×", hellip: "…", rsquo: "’",
  lsquo: "‘", ldquo: "“", rdquo: "”",
};

function text(html: string | undefined): string {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m)
    .replace(/\s+/g, " ")
    .trim();
}

function first(re: RegExp, s: string): string | undefined {
  const m = re.exec(s);
  return m ? m[1] : undefined;
}

function abs(u: string): string {
  try {
    return new URL(u, VR_HUB).toString();
  } catch {
    return u;
  }
}

function parseCard(href: string, cls: string, body: string): HubCard | null {
  const kind = cls.split(/\s+/)[0] === "feature" ? "feature" : "poster";
  const title = text(first(/<h3[^>]*>([\s\S]*?)<\/h3>/i, body));
  if (!title) return null;
  const ribbonM = /<span class="ribbon([^"]*)">([\s\S]*?)<\/span>/i.exec(body);
  const img = /<img[^>]*src="([^"]+)"[^>]*?(?:alt="([^"]*)")?/i.exec(body);
  const sub =
    kind === "feature"
      ? text(first(/<div class="series"[^>]*>([\s\S]*?)<\/div>/i, body))
      : text(first(/<span class="sub">([\s\S]*?)<\/span>/i, body));
  const description =
    kind === "feature"
      ? text(first(/<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/i, body))
      : text(first(/<p class="poster-desc"[^>]*>([\s\S]*?)<\/p>/i, body));
  const chips = [...body.matchAll(/<span class="chip">([\s\S]*?)<\/span>/gi)].map((m) => text(m[1]));
  return {
    kind,
    url: abs(href),
    title,
    sub,
    description,
    image: img ? abs(img[1]) : "",
    imageAlt: img && img[2] ? text(img[2]) : title,
    ribbon: ribbonM ? text(ribbonM[2]) : "",
    ribbonPast: ribbonM ? /\bpast\b/.test(ribbonM[1]) : false,
    chips,
  };
}

export function parseHub(html: string): HubSection[] {
  const sections: HubSection[] = [];
  const secRe = /<section class="block" id="([^"]+)">([\s\S]*?)<\/section>/gi;
  for (const sm of html.matchAll(secRe)) {
    const [, id, sbody] = sm;
    const cards: HubCard[] = [];
    const cardRe = /<a href="([^"]+)" class="((?:feature|poster)[^"]*)">([\s\S]*?)<\/a>/gi;
    for (const cm of sbody.matchAll(cardRe)) {
      const c = parseCard(cm[1], cm[2], cm[3]);
      if (c) cards.push(c);
    }
    if (!cards.length) continue;
    const head = first(/<div class="sec-head">([\s\S]*?)<\/div>\s*(?:<a|<div class="grid|<div style)/i, sbody) ?? sbody;
    sections.push({
      id,
      kicker: text(first(/<span class="kicker">([\s\S]*?)<\/span>/i, head)),
      heading: text(first(/<h2[^>]*>([\s\S]*?)<\/h2>/i, head)),
      intro: text(first(/<\/div>\s*<p>([\s\S]*?)<\/p>/i, head)),
      cards,
    });
  }
  return sections;
}

export async function getHubFeed(): Promise<HubFeed | null> {
  try {
    const res = await fetch(VR_HUB, { next: { revalidate: REVALIDATE } });
    if (!res.ok) return null;
    const sections = parseHub(await res.text());
    const count = sections.reduce((n, s) => n + s.cards.length, 0);
    if (count < 5) return null; // hub markup changed or page broken: keep the fallback list
    return { sections, fetchedAt: new Date().toISOString() };
  } catch {
    return null;
  }
}
