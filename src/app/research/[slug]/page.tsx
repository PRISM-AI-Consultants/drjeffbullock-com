import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getResearch, getResearchEntry } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { MDXContent } from "@/components/content/mdx-content";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return getResearch().map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const entry = getResearchEntry(slug);
    if (!entry) return { title: "Not Found" };
    const url = `https://drjeffbullock.com/research/${slug}`;
    const ogImage = entry.coverImage || "/images/og-research.jpg";
    return {
      title: entry.title,
      description: entry.description,
      alternates: { canonical: url },
      openGraph: {
        title: entry.title,
        description: entry.description,
        url,
        type: "article",
        images: [ogImage],
      },
      twitter: {
        card: "summary_large_image",
        title: entry.title,
        description: entry.description,
        images: [ogImage],
      },
    };
  });
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getResearchEntry(slug);
  if (!entry) notFound();

  return (
    <Section className="pt-8">
      <Container size="md">
        <Link href="/research" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Research
        </Link>

        {entry.coverImage && (
          <div className="aspect-[21/9] rounded-[var(--radius-lg)] mb-8 relative overflow-hidden">
            <Image
              src={entry.coverImage}
              alt={entry.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="accent">{entry.type.replace("-", " ")}</Badge>
          <Badge variant="outline">{entry.category}</Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{entry.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{entry.description}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {new Date(entry.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
        </p>

        <div className="mt-8 pt-8 border-t border-border">
          <MDXContent source={entry.content} />
        </div>
      </Container>
    </Section>
  );
}
