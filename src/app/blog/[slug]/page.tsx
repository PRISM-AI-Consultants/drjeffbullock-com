import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
    return { title: post.title, description: post.description };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getBlogPosts().filter((p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t))).slice(0, 3);

  return (
    <Section className="pt-8">
      <Container size="md">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
          <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readingTime}</span>
        </div>

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
  );
}
