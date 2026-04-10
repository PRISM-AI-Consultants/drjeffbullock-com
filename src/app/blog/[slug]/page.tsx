import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts, getBlogPost } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { MDXContent } from "@/components/content/mdx-content";
import { ArrowLeft, Clock } from "lucide-react";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getBlogPost(slug);
    if (!post) return { title: "Not Found" };
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        authors: ["Dr. Jeff Bullock"],
        url: `https://drjeffbullock.com/blog/${slug}`,
        ...(post.coverImage && {
          images: [{
            url: `https://drjeffbullock.com${post.coverImage}`,
            width: 1200,
            height: 630,
            alt: post.title,
          }],
        }),
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        ...(post.coverImage && {
          images: [`https://drjeffbullock.com${post.coverImage}`],
        }),
      },
      alternates: {
        canonical: `https://drjeffbullock.com/blog/${slug}`,
      },
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getBlogPosts().filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t))).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: "Dr. Jeff Bullock" },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "Dr. Jeff Bullock",
      url: "https://drjeffbullock.com",
    },
    mainEntityOfPage: `https://drjeffbullock.com/blog/${post.slug}`,
    ...(post.coverImage && { image: `https://drjeffbullock.com${post.coverImage}` }),
    keywords: post.tags.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://drjeffbullock.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://drjeffbullock.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://drjeffbullock.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
    <Section className="pt-8">
      <Container size="md">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
          <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readingTime}</span>
        </div>

        {post.coverImage && (
          <div className="aspect-[16/9] rounded-[var(--radius-lg)] mb-8 relative overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <MDXContent source={post.content} />
        </div>

        {/* Author Bio */}
        <div className="mt-12 flex gap-4 items-start p-6 rounded-[var(--radius-lg)] border border-border bg-muted/30">
          <div className="shrink-0 h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-xl font-bold text-accent">JB</span>
          </div>
          <div>
            <p className="font-bold text-foreground">Dr. Jeff Bullock, PharmD</p>
            <p className="text-sm text-muted-foreground mt-1">
              CEO of PRISM AI Consultants. PharmD from Xavier University of Louisiana. 18 years at CVS Health, now building AI systems that run real businesses. 749+ coaching sessions delivered, 34 autonomous agents in production.
            </p>
            <div className="mt-2 flex gap-3">
              <a href="https://www.linkedin.com/in/jeffrey-bullock-pharmd/" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">LinkedIn</a>
              <a href="https://prismaiconsultants.com" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">PRISM AI</a>
            </div>
          </div>
        </div>

        {/* Cross-sell CTA */}
        <div className="mt-12 p-6 rounded-[var(--radius-lg)] border border-accent/30 bg-accent/5 text-center">
          <p className="text-sm font-semibold mb-1">Want to go deeper?</p>
          <p className="text-sm text-muted-foreground mb-4">
            Book a call to discuss how AI can work for your specific business.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-[var(--radius-md)] text-sm hover:bg-accent/90 transition-colors">
              Book a Call
            </a>
            <Link href="/speaking" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-[var(--radius-md)] text-sm font-medium hover:bg-muted/50 transition-colors">
              Invite Jeff to Speak
            </Link>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="space-y-4">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block p-4 rounded-[var(--radius-lg)] border border-border hover:shadow-sm transition-all">
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
    </>
  );
}
