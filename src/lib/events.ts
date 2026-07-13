// Reads the public "Dr. Jeff Bullock — Public Events" Google Calendar
// (owned by info@prismaiconsultants.com) via its public iCal feed, so events
// Jeff adds from his phone appear on the site automatically. If the feed is
// unreachable or a parse fails, we fall back to the static list below so the
// homepage section never breaks.

export type SiteEvent = {
  when: string;
  title: string;
  tag: string;
  where: string;
  note: string;
  sort: number;
};

const ICAL_URL =
  "https://calendar.google.com/calendar/ical/c_7522044a225af34dc3652c07c0b2fd0559ed4734efb2500c98f759ab32be759f%40group.calendar.google.com/public/basic.ics";

const FALLBACK: SiteEvent[] = [
  { when: "Jul 25–26", title: "The Weekend: User-to-Operator Live Install", tag: "Workshop", where: "Lehigh Valley, PA", note: "Two days installing AI directly into your business. Limited seats.", sort: 20260725 },
  { when: "Wed · Jul 29", title: "BNI Feature Presentation", tag: "BNI", where: "Lehigh Valley, PA", note: "My chapter spotlight. Visitors welcome, come see how referral works.", sort: 20260729 },
  { when: "Wednesdays", title: "BNI Chapter Meeting", tag: "BNI", where: "Lehigh Valley, PA", note: "Weekly. Want to visit? Reach out and come as my guest.", sort: 99999901 },
  { when: "Wednesdays", title: "1 Million Cups", tag: "Networking", where: "Lehigh Valley, PA", note: "Free and open. Founders, coffee, and real conversation.", sort: 99999902 },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"];
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const BYDAY: Record<string, number> = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };

function unescape(s: string): string {
  return s.replace(/\\n/g, " ").replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\\\/g, "\\").trim();
}

// "20260725" -> local Date; "20260715T090000Z" -> Date
function parseDt(raw: string): { date: Date; dateOnly: boolean } {
  const m = raw.match(/(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2}))?/);
  if (!m) return { date: new Date(NaN), dateOnly: true };
  const [, y, mo, d, hh, mm, ss] = m;
  if (hh === undefined) return { date: new Date(+y, +mo - 1, +d), dateOnly: true };
  return { date: new Date(+y, +mo - 1, +d, +hh, +mm, +ss || 0), dateOnly: false };
}

function tagFor(summary: string): string {
  const s = summary.toLowerCase();
  if (s.includes("bni")) return "BNI";
  if (s.includes("weekend") || s.includes("install") || s.includes("workshop")) return "Workshop";
  if (s.includes("cups") || s.includes("network")) return "Networking";
  return "Community";
}

export async function getEvents(): Promise<SiteEvent[]> {
  try {
    const res = await fetch(ICAL_URL, { next: { revalidate: 1800 } });
    if (!res.ok) return FALLBACK;
    const raw = (await res.text()).replace(/\r\n[ \t]/g, "");
    const blocks = raw.split("BEGIN:VEVENT").slice(1);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const out: SiteEvent[] = [];

    for (const b of blocks) {
      const body = b.split("END:VEVENT")[0];
      const get = (key: string) => {
        const m = body.match(new RegExp(`\\n${key}[^:\\n]*:([^\\n]*)`));
        return m ? m[1].trim() : "";
      };
      const summary = unescape(get("SUMMARY"));
      if (!summary) continue;
      const dtStartRaw = get("DTSTART");
      const dtEndRaw = get("DTEND");
      const rrule = get("RRULE");
      const { date: start, dateOnly } = parseDt(dtStartRaw);
      if (isNaN(start.getTime())) continue;
      const end = dtEndRaw ? parseDt(dtEndRaw).date : start;

      let when: string;
      let sort: number;
      const recurring = /FREQ=WEEKLY/.test(rrule);
      if (recurring) {
        const byday = (rrule.match(/BYDAY=([A-Z]{2})/) || [])[1];
        const dow = byday && byday in BYDAY ? BYDAY[byday] : start.getDay();
        when = DAYS[dow];
        sort = 99999900 + dow;
      } else {
        // all-day multi-day: DTEND is exclusive, so a >1 day span is a range
        const spanDays = Math.round((end.getTime() - start.getTime()) / 86400000);
        if (dateOnly && spanDays > 1) {
          const last = new Date(end.getTime() - 86400000);
          when =
            start.getMonth() === last.getMonth()
              ? `${MONTHS[start.getMonth()]} ${start.getDate()}–${last.getDate()}`
              : `${MONTHS[start.getMonth()]} ${start.getDate()} – ${MONTHS[last.getMonth()]} ${last.getDate()}`;
        } else {
          when = `${DOW[start.getDay()]} · ${MONTHS[start.getMonth()]} ${start.getDate()}`;
        }
        // hide past single events (use end for all-day exclusive)
        const cutoff = dateOnly ? new Date(end.getTime() - 86400000) : end;
        if (cutoff < now) continue;
        sort = start.getFullYear() * 10000 + (start.getMonth() + 1) * 100 + start.getDate();
      }

      out.push({
        when,
        title: summary,
        tag: tagFor(summary),
        where: unescape(get("LOCATION")),
        note: unescape(get("DESCRIPTION")),
        sort,
      });
    }

    out.sort((a, b) => a.sort - b.sort);
    return out.length ? out.slice(0, 8) : FALLBACK;
  } catch {
    return FALLBACK;
  }
}
