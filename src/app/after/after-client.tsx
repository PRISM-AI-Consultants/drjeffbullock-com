"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

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
