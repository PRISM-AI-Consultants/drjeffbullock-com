"use client";

import { useState } from "react";
import { Button } from "./button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      setSubmitted(true);
      setEmail("");
    }
  }

  if (submitted) {
    return (
      <p className="text-sm text-accent font-medium">
        You&apos;re in. Watch your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 rounded-[var(--radius-md)] border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <Button type="submit" size="md">
        Stay in the loop
      </Button>
    </form>
  );
}
