import type { Metadata } from "next";
import { getBooks } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BooksGrid } from "./books-grid";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Dr. Jeff Bullock - 5 published, 12 in progress. Fiction, non-fiction, and short stories spanning AI, learning science, historical fiction, horror, and more.",
};

export default function BooksPage() {
  const books = getBooks();
  return (
    <>
      <PageHeader title="Books" description="5 published, 12 in progress. Fiction, non-fiction, and short stories." />
      <Section>
        <Container size="xl">
          <BooksGrid books={books} />
        </Container>
      </Section>
    </>
  );
}
