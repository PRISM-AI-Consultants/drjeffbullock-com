// GoHighLevel capture for site forms, so a lead is saved even when the notification email fails.
// Every call is a no-op (returns null) when GHL_PIT / GHL_LOCATION_ID aren't set on the deployment.

const GHL = "https://services.leadconnectorhq.com";

function headers(pit: string) {
  return {
    Authorization: `Bearer ${pit}`,
    Version: "2021-07-28",
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

// Create or update the contact by email, add tags, and optionally attach a note. Returns the contact id.
export async function saveToGhl(
  email: string,
  tags: string[],
  opts: { name?: string; note?: string } = {}
): Promise<string | null> {
  const pit = process.env.GHL_PIT;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!pit || !locationId) return null;
  try {
    const res = await fetch(`${GHL}/contacts/upsert`, {
      method: "POST",
      headers: headers(pit),
      body: JSON.stringify({ locationId, email, tags, source: "DrJeffBullock.com", ...(opts.name ? { name: opts.name } : {}) }),
    });
    if (!res.ok) {
      console.error("GHL upsert failed:", res.status, await res.text());
      return null;
    }
    const id: string | undefined = (await res.json())?.contact?.id;
    if (!id) return null;
    if (opts.note) {
      const n = await fetch(`${GHL}/contacts/${id}/notes`, {
        method: "POST",
        headers: headers(pit),
        body: JSON.stringify({ body: opts.note.slice(0, 5000) }),
      });
      if (!n.ok) console.error("GHL note failed:", n.status, await n.text());
    }
    return id;
  } catch (error) {
    console.error("GHL error:", error);
    return null;
  }
}

export function sourceTag(source: string): string {
  return source.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}
