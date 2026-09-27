"use client";

import { useState } from "react";
import { Button } from "./button";

const field =
  "w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

export function SpeakingInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    event: "",
    date: "",
    location: "",
    audienceSize: "",
    audience: "",
    format: "Keynote",
    notes: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const message = [
      `Organization: ${form.organization}`,
      `Event: ${form.event}`,
      `Date(s): ${form.date}`,
      `Location: ${form.location}`,
      `Audience size: ${form.audienceSize}`,
      `Who is in the room: ${form.audience}`,
      `Format: ${form.format}`,
      "",
      form.notes || "(no extra notes)",
    ].join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Speaking inquiry: ${form.event || form.organization}`,
          message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Something went wrong. Email info@prismaiconsultants.com directly.");
      }
    } catch {
      setError("Something went wrong. Email info@prismaiconsultants.com directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-border bg-card p-8 text-center">
        <h3 className="text-xl font-bold">Got it. Your date is on our desk.</h3>
        <p className="mt-2 text-muted-foreground">
          We will reply to confirm availability and send the speaker kit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className="block text-sm font-medium">
        Your name
        <input required value={form.name} onChange={set("name")} className={`mt-1.5 ${field}`} />
      </label>
      <label className="block text-sm font-medium">
        Email
        <input required type="email" value={form.email} onChange={set("email")} className={`mt-1.5 ${field}`} />
      </label>
      <label className="block text-sm font-medium">
        Organization
        <input required value={form.organization} onChange={set("organization")} className={`mt-1.5 ${field}`} />
      </label>
      <label className="block text-sm font-medium">
        Event name
        <input value={form.event} onChange={set("event")} className={`mt-1.5 ${field}`} />
      </label>
      <label className="block text-sm font-medium">
        Date or date range
        <input required value={form.date} onChange={set("date")} placeholder="e.g. March 12, 2027" className={`mt-1.5 ${field}`} />
      </label>
      <label className="block text-sm font-medium">
        Location
        <input value={form.location} onChange={set("location")} placeholder="City, or virtual" className={`mt-1.5 ${field}`} />
      </label>
      <label className="block text-sm font-medium">
        Audience size
        <select value={form.audienceSize} onChange={set("audienceSize")} className={`mt-1.5 ${field}`}>
          <option value="">Choose one</option>
          <option>Under 50</option>
          <option>50 to 200</option>
          <option>200 to 500</option>
          <option>500+</option>
        </select>
      </label>
      <label className="block text-sm font-medium">
        Format
        <select value={form.format} onChange={set("format")} className={`mt-1.5 ${field}`}>
          <option>Keynote</option>
          <option>Workshop</option>
          <option>Breakout</option>
          <option>Panel or fireside</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label className="block text-sm font-medium sm:col-span-2">
        Who is in the room?
        <input value={form.audience} onChange={set("audience")} placeholder="e.g. HR leaders, chamber members, executives" className={`mt-1.5 ${field}`} />
      </label>
      <label className="block text-sm font-medium sm:col-span-2">
        Anything else we should know?
        <textarea rows={4} value={form.notes} onChange={set("notes")} className={`mt-1.5 resize-none ${field}`} />
      </label>
      {error && <p className="text-sm text-red-500 sm:col-span-2">{error}</p>}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Sending..." : "Check my date"}
        </Button>
      </div>
    </form>
  );
}
