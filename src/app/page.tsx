import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { CollectionCard } from "@/components/content/collection-card";
import { BlogCard } from "@/components/content/blog-card";
import { BookCover } from "@/components/ui/book-cover";
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
  Orbit,
} from "lucide-react";

const ipCategories = [
  { label: "Books", count: 17, icon: BookOpen, href: "/books" },
  { label: "Research", count: 4, icon: FlaskConical, href: "/research" },
  { label: "Media", count: "10+", icon: Headphones, href: "/media" },
  { label: "Games", count: 16, icon: Gamepad2, href: "/games" },
  { label: "Music", count: "1 Album", icon: Music, href: "/media" },
  { label: "Projects", count: "10+", icon: FolderOpen, href: "/projects" },
  { label: "Blog", count: "8+", icon: PenLine, href: "/blog" },
];

const achievements = [
  { icon: BookOpen, text: "17 books (4 published, 13 in progress)" },
  { icon: Building2, text: "2 companies: PRISM AI Consultants + VersAssist" },
  { icon: Bot, text: "54-module AI system with 24 autonomous agents" },
  { icon: Gamepad2, text: "16 playable games and interactive experiences" },
  { icon: Music, text: "A 19-track concept album (Mansa Musa)" },
  { icon: Microscope, text: "4 original research frameworks" },
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
      {/* Editorial Hero - Asymmetric layout with headshot */}
      <Section className="pt-20 md:pt-28 pb-12">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95]">
                Dr. Jeff
                <br />
                Bullock
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-secondary font-medium">
                AI Orchestrator. Systems Integrator. Author. Builder.
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                This is what happens when one person uses AI as a force
                multiplier. Books, research, games, music, companies, and
                code - all shipped, all real.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/books">
                  <Button size="lg">Explore My Work <ArrowRight className="h-4 w-4 ml-2" /></Button>
                </Link>
                <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">Book Me to Speak</Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] max-w-[420px] mx-auto lg:ml-auto rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg">
                <Image
                  src="/images/hero/jeff-hero.jpg"
                  alt="Dr. Jeff Bullock - professional headshot"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured In / Speaking At */}
      <div className="border-y border-border bg-muted/30">
        <Container size="xl" className="py-5">
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Speaking at</p>
            {["SHRM Conference", "DeSales University", "IFEL / Verizon", "TSPN (100K+ viewers)", "Lehigh Valley Chamber"].map((org) => (
              <span key={org} className="text-sm font-medium text-muted-foreground/70">{org}</span>
            ))}
          </div>
        </Container>
      </div>

      {/* Showcase Grid - Visual preview cards */}
      <Section className="bg-muted/30 py-8">
        <Container size="xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {featuredBook && (
              <Link
                href={`/books/${featuredBook.slug}`}
                className="group rounded-[var(--radius-lg)] overflow-hidden border border-border bg-card hover:shadow-md transition-all"
              >
                <BookCover
                  title={featuredBook.title}
                  category={featuredBook.category}
                  coverImage={featuredBook.coverImage}
                  className="aspect-[3/4]"
                />
                <div className="p-3">
                  <Badge className="mb-1">Book</Badge>
                  <p className="text-sm font-bold group-hover:text-accent transition-colors line-clamp-1">
                    {featuredBook.title}
                  </p>
                </div>
              </Link>
            )}
            <Link
              href="/games/pharmageddon"
              className="group rounded-[var(--radius-lg)] overflow-hidden border border-border bg-card hover:shadow-md transition-all"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-black">
                <Image
                  src="/images/games/pharmageddon-cover.jpg"
                  alt="Pharmageddon - Survive the Shift"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="p-3">
                <Badge variant="accent">Game</Badge>
                <p className="text-sm font-bold group-hover:text-accent transition-colors mt-1">Play Now</p>
              </div>
            </Link>
            <Link
              href="/media"
              className="group rounded-[var(--radius-lg)] overflow-hidden border border-border bg-card hover:shadow-md transition-all"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-amber-800 via-yellow-900 to-orange-950 relative flex items-center justify-center">
                <div className="text-center p-4">
                  <Music className="h-12 w-12 text-amber-300/80 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg">Mansa Musa</p>
                  <p className="text-white/60 text-xs mt-1">19-Track Concept Album</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
              </div>
              <div className="p-3">
                <Badge>Album</Badge>
                <p className="text-sm font-bold group-hover:text-accent transition-colors mt-1">Listen</p>
              </div>
            </Link>
            <a
              href="https://agents.prismaiconsultants.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[var(--radius-lg)] overflow-hidden border border-border bg-card hover:shadow-md transition-all"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-cyan-900 via-teal-900 to-slate-900 relative flex items-center justify-center">
                <div className="text-center p-4">
                  <Bot className="h-12 w-12 text-cyan-300/80 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg">Agent World</p>
                  <p className="text-white/60 text-xs mt-1">24 AI Agents - Live</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              </div>
              <div className="p-3">
                <Badge variant="accent">Flagship</Badge>
                <p className="text-sm font-bold group-hover:text-accent transition-colors mt-1">Explore</p>
              </div>
            </a>
            <a
              href="https://builds.drjeffbullock.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[var(--radius-lg)] overflow-hidden border border-border bg-card hover:shadow-md transition-all"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative flex items-center justify-center">
                <div className="text-center p-4">
                  <Orbit className="h-12 w-12 text-purple-300/80 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg">Build Universe</p>
                  <p className="text-white/60 text-xs mt-1">79 Builds - Full Portfolio</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
              </div>
              <div className="p-3">
                <Badge variant="accent">Flagship</Badge>
                <p className="text-sm font-bold group-hover:text-accent transition-colors mt-1">Explore</p>
              </div>
            </a>
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
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="col-span-1">
                      <BookCover
                        title={featuredBook.title}
                        category={featuredBook.category}
                        coverImage={featuredBook.coverImage}
                      />
                    </div>
                    <div className="col-span-2 flex flex-col justify-center">
                      <Badge className="w-fit">Featured Book</Badge>
                      <h3 className="mt-3 text-2xl font-bold">{featuredBook.title}</h3>
                    </div>
                  </div>
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
                  <div className="aspect-[21/9] rounded-[var(--radius-md)] mb-4 relative overflow-hidden">
                    {featuredResearch.coverImage ? (
                      <Image
                        src={featuredResearch.coverImage}
                        alt={featuredResearch.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 flex items-center justify-center">
                        <div className="text-center">
                          <FlaskConical className="h-10 w-10 text-sky-300/70 mx-auto mb-2" />
                          <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Research</p>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
                      </div>
                    )}
                  </div>
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

      {/* What Clients Say - Real quotes from real sessions */}
      <Section>
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">
            What Clients Say
          </h2>
          <p className="text-muted-foreground mb-8">
            Real quotes from real coaching sessions. No scripts, no actors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "It transformed my job. I never need an assistant. It's cutting so much of my brain power off of busywork and into actually running my business.",
                role: "Business Owner",
                context: "After implementing AI workflows",
              },
              {
                quote: "Both of these save us not only a lot of time, but the thing I find even more interesting is it just makes us better. This information we wouldn't have had. We never would have found it all and synthesized it together.",
                role: "Managing Partner, Professional Services",
                context: "On AI-powered business analysis",
              },
              {
                quote: "The documents I put together are beautiful. I sent one to the CEO of my other company, and he was amazed that it only took me two minutes. For client deliverables and professional documents, nobody is touching this.",
                role: "Operations Director",
                context: "On AI-generated client deliverables",
              },
              {
                quote: "Our board loves you. Everyone was like, we need to have you back. We've had you as our keynote speaker and we want you to come back.",
                role: "Board Member, Non-Profit",
                context: "After a keynote presentation",
              },
              {
                quote: "That used to take us all day to put together manually. Does it in five minutes. It's amazing. I've made a list of other things I can do like that now.",
                role: "Financial Services Executive",
                context: "On AI-automated financial analysis",
              },
              {
                quote: "I learned so much from you. I proposed making a custom GPT for our workflow, and when I did it, everyone was amazed, asking how I did it. I told them it was Dr. Jeff who taught me.",
                role: "Director, Healthcare",
                context: "On applying PRISM coaching",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-[var(--radius-lg)] border border-border bg-card"
              >
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm font-semibold">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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
              The Operator&apos;s Edge
            </h2>
            <p className="text-muted-foreground mb-2">
              What I am building, what is working, and the AI tools behind it. No spam, no fluff.
            </p>
            <p className="text-xs text-muted-foreground mb-6">
              Join business owners and operators who get updates when books ship, games launch, and research drops.
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
