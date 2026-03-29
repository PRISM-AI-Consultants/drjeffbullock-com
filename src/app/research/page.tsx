import type { Metadata } from "next";
import { getResearch } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ResearchGrid } from "./research-grid";

export const metadata: Metadata = {
  title: "Research",
  description: "Original research frameworks, white papers, and briefs by Dr. Jeff Bullock. Including the Attention and Intention Framework, ECAP, and The Abundance Thesis.",
  openGraph: { images: ["/images/og-research.jpg"] },
};

export default function ResearchPage() {
  const entries = getResearch();
  return (
    <>
      <PageHeader title="Research" description="Original frameworks, white papers, and research briefs." />
      <Section>
        <Container size="xl">
          <ResearchGrid entries={entries} />
        </Container>
      </Section>
    </>
  );
}
