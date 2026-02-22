"use client";

import { useState, useMemo } from "react";
import { TagFilter } from "@/components/ui/tag-filter";
import { ContentGrid } from "@/components/ui/content-grid";
import { MediaCard } from "@/components/content/media-card";
import type { MediaItem } from "@/lib/types";

const types = ["All", "Music Album", "Music Track", "Podcast", "Video", "Audio"];

export function MediaLibrary({ items }: { items: MediaItem[] }) {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return items;
    return items.filter((item) => item.type === activeTag.toLowerCase().replace(" ", "-"));
  }, [items, activeTag]);

  return (
    <div>
      <div className="mb-8">
        <TagFilter tags={types} active={activeTag} onChange={setActiveTag} />
      </div>
      <ContentGrid columns={3}>
        {filtered.map((item, i) => (
          <MediaCard key={`${item.title}-${i}`} item={item} />
        ))}
      </ContentGrid>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No media found.</p>
      )}
    </div>
  );
}
