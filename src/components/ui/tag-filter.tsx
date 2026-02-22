"use client";

import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
}

export function TagFilter({ tags, active, onChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150",
            active === tag
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-border hover:text-foreground"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
