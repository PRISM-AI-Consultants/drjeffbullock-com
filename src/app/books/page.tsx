import type { Metadata } from "next";
import { getBooks } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BooksGrid } from "./books-grid";

export const metadata: Metadata = {
  title: "Books",
  description: "Published books by Dr. Jeff Bullock - fiction, non-fiction, and short stories.",
};

export default function BooksPage() {
  const books = getBooks();
  return (
    <>
      <PageHeader title="Books" description="Published works spanning fiction, non-fiction, and short stories." />
      <Section>
        <Container size="xl">
          <BooksGrid books={books} />
        </Container>
      </Section>
    </>
  );
}
