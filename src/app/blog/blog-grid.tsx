"use client";

import { useState, useMemo } from "react";
import { TagFilter } from "@/components/ui/tag-filter";
import { SearchInput } from "@/components/ui/search-input";
import { ContentGrid } from "@/components/ui/content-grid";
import { BlogCard } from "@/components/content/blog-card";
import type { BlogPost } from "@/lib/types";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add("All");
    posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, [posts]);

  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
      const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [posts, activeTag, search]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <TagFilter tags={allTags.slice(0, 8)} active={activeTag} onChange={setActiveTag} />
        <SearchInput placeholder="Search posts..." value={search} onChange={setSearch} className="sm:ml-auto sm:w-64" />
      </div>
      <ContentGrid columns={3}>
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </ContentGrid>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No posts found.</p>
      )}
    </div>
  );
}
