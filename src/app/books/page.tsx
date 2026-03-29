import type { Metadata } from "next";
import { getBooks } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BooksGrid } from "./books-grid";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Dr. Jeff Bullock - 4 published, 13 in progress. Fiction, non-fiction, and short stories spanning AI, learning science, historical fiction, horror, and more.",
};

export default function BooksPage() {
  const books = getBooks();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Books by Dr. Jeff Bullock",
    numberOfItems: books.length,
    itemListElement: books.map((book, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Book",
        name: book.title,
        author: { "@type": "Person", name: "Dr. Jeff Bullock" },
        url: `https://drjeffbullock.com/books/${book.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <PageHeader title="Books" description="4 published, 13 in progress. Fiction, non-fiction, and short stories." />
      <Section>
        <Container size="xl">
          <BooksGrid books={books} />
        </Container>
      </Section>
    </>
  );
}
