"use client";

import { useState, useMemo } from "react";
import { TagFilter } from "@/components/ui/tag-filter";
import { ContentGrid } from "@/components/ui/content-grid";
import { ResearchCard } from "@/components/content/research-card";
import type { ResearchEntry } from "@/lib/types";

const types = ["All", "Framework", "White Paper", "Research Brief", "Working Paper"];

export function ResearchGrid({ entries }: { entries: ResearchEntry[] }) {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return entries;
    return entries.filter((e) => e.type === activeTag.toLowerCase().replace(" ", "-"));
  }, [entries, activeTag]);

  return (
    <div>
      <div className="mb-8">
        <TagFilter tags={types} active={activeTag} onChange={setActiveTag} />
      </div>
      <ContentGrid columns={3}>
        {filtered.map((entry) => (
          <ResearchCard key={entry.slug} entry={entry} />
        ))}
      </ContentGrid>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No research entries found.</p>
      )}
    </div>
  );
}
