import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BlogGrid } from "./blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on AI, business, pharmacy, and building things that matter.",
  openGraph: { images: ["/images/og-blog.jpg"] },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <>
      <PageHeader title="Blog" description="Writing on AI, business, pharmacy, and building things that matter." />
      <Section>
        <Container size="xl">
          <BlogGrid posts={posts} />
        </Container>
      </Section>
    </>
  );
}
