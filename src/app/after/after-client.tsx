"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Download } from "lucide-react";

export const THE_PROMPT = `Here is the transcript of a meeting I just ran. Answer four things:
1. What did they actually say they wanted, in their own words?
2. What did I miss or talk past?
3. Where did I talk when I should have asked a question?
4. What is the ONE thing I should do differently in the next meeting?`;

const CALENDLY = "https://calendly.com/prismaiconsultants/introductory-call";
const ALLOWED_SOURCES = ["bni", "keynote", "li", "email", "card", "yt"];

/**
 * Reads the ?s= source tag so a booking can be traced back to the room it came
 * from. This is the whole point of the card: it is the first time "did the
 * asset actually produce a client" becomes answerable.
 */
export function useSource() {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("s");
    if (raw && ALLOWED_SOURCES.includes(raw.toLowerCase())) {
      setSource(raw.toLowerCase());
    }
  }, []);

  return source;
}

export function PromptCard() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    // Confirm optimistically. This page gets scanned off a QR code on whatever
    // phone is in someone's hand, and navigator.clipboard can be blocked or
    // hang outright in an in-app browser. Feedback must never depend on it.
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);

    try {
      await navigator.clipboard.writeText(THE_PROMPT);
      return;
    } catch {
      // fall through to the legacy path below
    }

    try {
      const el = document.createElement("textarea");
      el.value = THE_PROMPT;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    } catch {
      // The prompt is fully visible and selectable on screen either way.
    }
  }

  return (
    <div className="relative border border-border bg-card">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-accent" />

      <pre className="overflow-x-auto px-5 py-6 sm:px-7 sm:py-8 font-mono text-[0.9rem] sm:text-[0.97rem] leading-[1.75] text-foreground whitespace-pre-wrap break-words">
        {THE_PROMPT}
      </pre>

      <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-3.5 sm:px-7">
        <span className="eyebrow text-muted-foreground">Paste into any AI</span>
        <button
          type="button"
          onClick={copy}
          aria-live="polite"
          className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" aria-hidden />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" aria-hidden />
              Copy the prompt
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function BookCta({ children }: { children: React.ReactNode }) {
  const source = useSource();
  const href = source ? `${CALENDLY}?utm_source=after-${source}` : CALENDLY;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-accent px-7 py-4 font-display text-base font-bold tracking-tight transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
    >
      {/* globals.css has an unlayered `a { color: inherit }`, and unlayered
          rules beat Tailwind's layered utilities regardless of specificity, so
          a text utility on the <a> silently loses. The .on-accent class also
          flips the label with the theme, because neither white nor near-black
          clears AA on both accent values. See globals.css. */}
      <span className="on-accent">{children}</span>
    </a>
  );
}

/**
 * Shown only to people who scanned the code from the keynote stage. Everyone
 * else on /after sees the page unchanged. The deck and the printed handout both
 * promise a template, so this is the thing that has to actually be here when
 * 350 people scan at once.
 */
export function KeynoteKit() {
  const source = useSource();
  if (source !== "keynote") return null;

  return (
    <div className="mt-8 border border-border bg-card">
      <div className="h-[3px] bg-accent" />
      <div className="px-5 py-6 sm:px-7 sm:py-7">
        <span className="eyebrow text-muted-foreground">
          From the PA SHRM stage
        </span>
        <p className="mt-3 font-display text-[1.3rem] md:text-[1.5rem] font-bold tracking-tight leading-tight">
          The Monday Morning Workflow Template
        </p>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">
          The four steps with blanks to fill in, one fully worked HR example, the
          tool and cost map, and the do-not list for employee data. Six pages, no
          form, no email.
        </p>
        <a
          href="/downloads/monday-morning-workflow-template.pdf"
          className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity duration-200 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
        >
          <Download className="h-4 w-4" aria-hidden />
          Download the template
        </a>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Want the deep version of step one?{" "}
          <a
            href="https://www.amazon.com/dp/B0HD9GXT13"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Transcript Alchemy
          </a>{" "}
          is 101 ways to turn a transcript into money, insight, and legacy.
        </p>
      </div>
    </div>
  );
}
