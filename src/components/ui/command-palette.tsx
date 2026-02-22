"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SearchItem } from "@/lib/types";

interface CommandPaletteProps {
  items: SearchItem[];
}

export function CommandPalette({ items }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = useMemo(() => {
    if (!query) return items.slice(0, 8);
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [items, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery("");
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const handleSelect = useCallback(
    (item: SearchItem) => {
      handleClose();
      router.push(item.href);
    },
    [handleClose, router]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) handleClose();
        else handleOpen();
      }
      if (e.key === "/" && !open && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        handleOpen();
      }
      if (!open) return;
      if (e.key === "Escape") {
        handleClose();
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        handleSelect(filtered[selectedIndex]);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, filtered, selectedIndex, handleOpen, handleClose, handleSelect]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative mx-auto mt-[15vh] w-full max-w-lg px-4">
        <div className="rounded-[var(--radius-xl)] border border-border bg-card shadow-lg overflow-hidden">
          <div className="flex items-center gap-3 px-4 border-b border-border">
            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search books, research, blog, games, projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 py-3.5 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
            />
            <button onClick={handleClose} className="text-muted-foreground hover:text-foreground p-1">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto py-2">
            {filtered.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-8">No results found.</p>
            ) : (
              filtered.map((item, i) => (
                <button
                  key={item.href}
                  onClick={() => handleSelect(item)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors",
                    i === selectedIndex ? "bg-muted" : "hover:bg-muted/50"
                  )}
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                  </div>
                  <span className="flex-shrink-0 ml-3 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {item.type}
                  </span>
                </button>
              ))
            )}
          </div>
          <div className="border-t border-border px-4 py-2 flex items-center gap-4 text-xs text-muted-foreground">
            <span><kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-[10px]">↑↓</kbd> navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-[10px]">↵</kbd> select</span>
            <span><kbd className="px-1.5 py-0.5 rounded border border-border bg-muted text-[10px]">esc</kbd> close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
