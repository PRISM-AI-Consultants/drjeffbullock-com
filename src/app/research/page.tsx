import type { Metadata } from "next";
import { getResearch, getBooks } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { ResearchGrid } from "./research-grid";

export const metadata: Metadata = {
  title: "Research",
  description: "Original research frameworks, white papers, and briefs by Dr. Jeff Bullock. Including the Attention and Intention Framework, ECAP, and The Abundance Thesis.",
  openGraph: { images: ["/images/og-research.jpg"] },
};

export default function ResearchPage() {
  const entries = getResearch();
  // Every book with a public research archive gets a card. Black Advantage first (flagship, 20 docs).
  const researchBooks = getBooks()
    .filter((b) => b.researchUrl)
    .sort((a, b) => (a.slug === "the-black-advantage" ? -1 : b.slug === "the-black-advantage" ? 1 : 0));
  return (
    <>
      <PageHeader title="Research" description="Original frameworks, white papers, and research briefs." />
      <Section>
        <Container size="xl">
          <ResearchGrid entries={entries} />
        </Container>
      </Section>
      {researchBooks.length > 0 && (
        <Section className="border-t border-border">
          <Container size="xl">
            <span className="eyebrow text-accent">Open Source</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight">Book Research Archives</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">
              The research behind the books is public. Every claim, source, and framework document, open to read. Pick a title to open its full archive.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {researchBooks.map((b) => (
                <div key={b.slug} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
                  <h3 className="text-xl font-bold tracking-tight">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{b.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={b.researchUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="primary">
                        <BookOpen className="h-4 w-4 mr-2" /> Open Research Archive
                      </Button>
                    </a>
                    <a href={`/books/${b.slug}`}>
                      <Button size="sm" variant="secondary">About the Book</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
