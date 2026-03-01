import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { CollectionCard } from "@/components/content/collection-card";
import { BlogCard } from "@/components/content/blog-card";
import { getBooks, getBlogPosts, getResearch } from "@/lib/content";
import { collections } from "@/data/collections";
import {
  BookOpen,
  FlaskConical,
  Headphones,
  Gamepad2,
  Music,
  FolderOpen,
  PenLine,
  ArrowRight,
  Rocket,
  Building2,
  Bot,
  Clapperboard,
  Microscope,
  Heart,
} from "lucide-react";

const ipCategories = [
  { label: "Books", count: 8, icon: BookOpen, href: "/books" },
  { label: "Research", count: 3, icon: FlaskConical, href: "/research" },
  { label: "Media", count: "10+", icon: Headphones, href: "/media" },
  { label: "Games", count: 11, icon: Gamepad2, href: "/games" },
  { label: "Music", count: "1 Album", icon: Music, href: "/media" },
  { label: "Projects", count: "10+", icon: FolderOpen, href: "/projects" },
  { label: "Blog", count: "8+", icon: PenLine, href: "/blog" },
];

const achievements = [
  { icon: BookOpen, text: "8 books (4 published, 4 in progress)" },
  { icon: Building2, text: "2 companies: PRISM AI Consultants + VersAssist" },
  { icon: Bot, text: "54-module AI system with 33 autonomous agents running 24/7" },
  { icon: Gamepad2, text: "11 playable games and interactive experiences" },
  { icon: Music, text: "A 19-track concept album (Mansa Musa)" },
  { icon: Microscope, text: "3 original research frameworks" },
  { icon: Clapperboard, text: "A sitcom pilot (Pillbox)" },
  { icon: Rocket, text: "All built with AI as a force multiplier" },
];

export default function HomePage() {
  const books = getBooks();
  const posts = getBlogPosts();
  const research = getResearch();
  const featuredBook = books.find((b) => b.featured) || books[0];
  const featuredResearch = research.find((r) => r.featured) || research[0];
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* Editorial Hero - Asymmetric layout, NOT centered */}
      <Section className="pt-20 md:pt-28 pb-12">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95]">
                Dr. Jeff
                <br />
                Bullock
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-secondary font-medium">
                Author. Builder. Researcher. Operator.
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                This is what happens when one person uses AI as a force
                multiplier. Books, research, games, music, companies, and
                code - all shipped, all real.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {featuredBook && (
                <Link
                  href={`/books/${featuredBook.slug}`}
                  className="aspect-[3/4] rounded-[var(--radius-lg)] bg-muted border border-border flex items-end p-4 hover:shadow-md transition-all group"
                >
                  <div>
                    <Badge>Book</Badge>
                    <p className="mt-2 text-sm font-bold group-hover:text-accent transition-colors">
                      {featuredBook.title}
                    </p>
                  </div>
                </Link>
              )}
              <Link
                href="/games/pharmageddon"
                className="aspect-[3/4] rounded-[var(--radius-lg)] bg-muted border border-border flex items-end p-4 hover:shadow-md transition-all group"
              >
                <div>
                  <Badge variant="accent">Game</Badge>
                  <p className="mt-2 text-sm font-bold group-hover:text-accent transition-colors">
                    Pharmageddon
                  </p>
                </div>
              </Link>
              <Link
                href="/media"
                className="aspect-[3/4] rounded-[var(--radius-lg)] bg-muted border border-border flex items-end p-4 hover:shadow-md transition-all group"
              >
                <div>
                  <Badge>Album</Badge>
                  <p className="mt-2 text-sm font-bold group-hover:text-accent transition-colors">
                    Mansa Musa
                  </p>
                </div>
              </Link>
              {featuredResearch && (
                <Link
                  href={`/research/${featuredResearch.slug}`}
                  className="aspect-[3/4] rounded-[var(--radius-lg)] bg-muted border border-border flex items-end p-4 hover:shadow-md transition-all group"
                >
                  <div>
                    <Badge variant="accent">Research</Badge>
                    <p className="mt-2 text-sm font-bold group-hover:text-accent transition-colors">
                      {featuredResearch.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* IP Ticker / Quick Access */}
      <div className="border-y border-border bg-muted/30">
        <Container size="xl" className="py-6">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {ipCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-[var(--radius-lg)] border border-border bg-card hover:shadow-sm hover:border-accent/30 transition-all group"
              >
                <cat.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <div>
                  <p className="text-sm font-semibold">{cat.label}</p>
                  <p className="text-xs text-muted-foreground">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Featured Spotlight */}
      <Section>
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">
            Featured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredBook && (
              <Card href={`/books/${featuredBook.slug}`} variant="featured">
                <CardHeader>
                  <Badge>Featured Book</Badge>
                  <h3 className="mt-3 text-2xl font-bold">{featuredBook.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{featuredBook.description}</p>
                  <p className="mt-4 text-sm text-accent font-medium flex items-center gap-1">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </CardContent>
              </Card>
            )}
            {featuredResearch && (
              <Card href={`/research/${featuredResearch.slug}`} variant="featured">
                <CardHeader>
                  <Badge variant="accent">Featured Research</Badge>
                  <h3 className="mt-3 text-2xl font-bold">{featuredResearch.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{featuredResearch.description}</p>
                  <p className="mt-4 text-sm text-accent font-medium flex items-center gap-1">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </Container>
      </Section>

      {/* Collections */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">
            Collections
          </h2>
          <p className="text-muted-foreground mb-8">
            Curated entry points into my work
          </p>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {collections.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* What I've Built */}
      <Section>
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">
            What I&apos;ve Built
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-[var(--radius-lg)] border border-border bg-card"
              >
                <a.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium">{a.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <Section className="bg-muted/30">
          <Container size="xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Latest Posts
              </h2>
              <Link
                href="/blog"
                className="text-sm text-accent font-medium flex items-center gap-1 hover:underline"
              >
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* The Mission */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight mb-8">
              The Mission
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-[var(--radius-lg)] border border-border bg-card">
                <Heart className="h-6 w-6 text-accent mx-auto mb-3" />
                <p className="text-lg font-semibold">
                  Make giving as popular as social media
                </p>
              </div>
              <div className="p-6 rounded-[var(--radius-lg)] border border-border bg-card">
                <Rocket className="h-6 w-6 text-accent mx-auto mb-3" />
                <p className="text-lg font-semibold">
                  Solve poverty starting with African Americans
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Newsletter */}
      <Section className="bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight mb-2">
              Stay in the loop
            </h2>
            <p className="text-muted-foreground mb-6">
              New books, research, games, and projects - delivered when they ship.
            </p>
            <div className="flex justify-center">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
