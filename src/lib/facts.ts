// Public numbers shared by every PRISM property. Generated daily on the VPS by
// ~/prism/site-facts/build_facts.py from live sources; check_facts.py alerts when any site drifts.
// Never type a stat into a page: read it from here.
const FACTS_URL = "https://builds.drjeffbullock.com/facts.json";

// Last known values, used only if the feed cannot be reached at build/revalidate time.
const FALLBACK: Record<string, string> = {
  client_builds: "100+",
  community_members: "650+",
  coaching_sessions: "750+",
  games_live: "20",
  books_published: "17",
  books_titles: "20",
  build_universe_public: "69",
};

export type FactKey = keyof typeof FALLBACK;

export async function getFacts(): Promise<Record<string, string>> {
  try {
    const res = await fetch(FACTS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK;
    const doc = (await res.json()) as { facts: Record<string, { display: string }> };
    const live = Object.fromEntries(Object.entries(doc.facts).map(([k, f]) => [k, f.display]));
    return { ...FALLBACK, ...live };
  } catch {
    return FALLBACK;
  }
}
