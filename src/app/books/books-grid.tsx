"use client";

import { useState, useMemo } from "react";
import { TagFilter } from "@/components/ui/tag-filter";
import { SearchInput } from "@/components/ui/search-input";
import { ContentGrid } from "@/components/ui/content-grid";
import { BookCard } from "@/components/content/book-card";
import type { Book } from "@/lib/types";

const categories = ["All", "Fiction", "Non-Fiction", "Short Story"];

export function BooksGrid({ books }: { books: Book[] }) {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return books.filter((b) => {
      const matchesTag = activeTag === "All" || b.category === activeTag.toLowerCase().replace(" ", "-");
      const matchesSearch = !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.description.toLowerCase().includes(search.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [books, activeTag, search]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <TagFilter tags={categories} active={activeTag} onChange={setActiveTag} />
        <SearchInput placeholder="Search books..." value={search} onChange={setSearch} className="sm:ml-auto sm:w-64" />
      </div>
      <ContentGrid columns={4}>
        {filtered.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </ContentGrid>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No books found.</p>
      )}
    </div>
  );
}
