import fs from "fs";
import path from "path";
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
  Microscope,
  Heart,
  Orbit,
  Users,
  Brain,
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

const dreams = [
  {
    label: "Dream 1",
    title: "Make giving go viral",
    body: "Instagram, Facebook, and Meta engineered the most powerful habit loops in human history, and they pointed them at consumption. I want to point that same machine at generosity. When you give of yourself, you touch something bigger than you. The goal is to make that feeling as common, as shareable, and as addictive as the scroll. Giving, hacked for good.",
    icon: Heart,
  },
  {
    label: "Dream 2",
    title: "Solve poverty. For everyone. Starting with my community.",
    body: "I am starting with African Americans because that is where I have the credibility to lead, and because the abundance economy can flip generational wealth in one generation instead of three. Once it is proven there, it spreads. To poor whites in Appalachia, to opioid-affected towns, to anyone the old economy locked out. One community is the start. Everybody is the goal.",
    icon: Rocket,
  },
];

const playbook = [
  {
    name: "David Steward",
    initials: "DS",
    image: "/images/lineage/david-steward.jpg",
    worth: "Est. $11 billion+",
    owns: "Founder of World Wide Technology, a company doing roughly $20 billion a year. Forbes has ranked him the wealthiest Black person in America.",
    mine: "I am building the implementation layer for AI.",
  },
  {
    name: "Robert F. Smith",
    initials: "RS",
    image: "/images/lineage/robert-smith.jpg",
    worth: "Est. $10 billion+",
    owns: "Founder of Vista Equity Partners, with around $107 billion under management. He made operational excellence the moat.",
    mine: "I built a system that turns affordable talent into expert-level output.",
  },
  {
    name: "Tyler Perry",
    initials: "TP",
    image: "/images/lineage/tyler-perry.jpg",
    worth: "Est. $1.4 billion",
    owns: "Owns his studio and nearly everything he has created outright. No gatekeeper could tell him no.",
    mine: "I own an AI studio outright, for the cost of a laptop and a subscription.",
  },
];

const proof = [
  { text: "The Black Advantage, book and movement", serves: "Dream 2", icon: BookOpen },
  { text: "Generosity Platform, in build", serves: "Dream 1", icon: Heart },
  { text: "PRISM AI Consultants", serves: "The engine", icon: Building2 },
  { text: "VersAssist", serves: "The engine", icon: Users },
  { text: "Pharmageddon, Escape Velocity, and 16 games", serves: "Behavior change", icon: Gamepad2 },
  { text: "Mansa Musa and 17 books", serves: "The culture", icon: Music },
  { text: "The research, from the Abundance Thesis to human performance", serves: "Best self", icon: Microscope },
  { text: "Agent World, 33 live AI agents", serves: "How one person runs it all", icon: Bot },
];

export default function HomePage() {
  const books = getBooks();
  const posts = getBlogPosts();
  const research = getResearch();
  const featuredBook = books.find((b) => b.featured) || books[0];
  const featuredResearch = research.find((r) => r.featured) || research[0];
  const latestPosts = posts.slice(0, 3);
  const lineage = playbook.map((p) => ({
    ...p,
    hasImage: fs.existsSync(path.join(process.cwd(), "public", p.image)),
  }));

  return (
    <>
      {/* Editorial Hero - purpose first */}
      <Section className="relative overflow-hidden pt-20 md:pt-28 pb-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-44 -right-40 h-[36rem] w-[36rem] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
        />
        <Container size="xl" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-accent uppercase tracking-[0.18em]">
                Dr. Jeff Bullock, PharmD
              </p>
              <h1 className="mt-5 font-heading font-extrabold tracking-tight leading-[0.98] text-[clamp(2.5rem,6vw,4.75rem)]">
                I&apos;m using AI to chase two dreams.
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-secondary font-medium max-w-xl">
                Make giving as powerful as social media. End poverty, starting in my own community.
              </p>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Everything on this page is proof it is working. The books, the games, the research, the companies. They all point at the same two things.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#dreams">
                  <Button size="lg">See the mission <ArrowRight className="h-4 w-4 ml-2" /></Button>
                </a>
                <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">Book Me to Speak</Button>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[var(--radius-xl)] bg-accent/10"
              />
              <div className="aspect-[3/4] max-w-[400px] mx-auto lg:ml-auto rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-lg">
                <Image
                  src="/images/hero/jeff-hero.jpg"
                  alt="Dr. Jeff Bullock - professional headshot"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 400px"
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

      {/* THE TWO DREAMS - the why, up top */}
      <Section id="dreams">
        <Container size="xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Why I do all of this</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
            Two dreams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dreams.map((d) => (
              <div key={d.label} className="p-7 rounded-[var(--radius-lg)] border border-border bg-card">
                <d.icon className="h-7 w-7 text-accent mb-4" />
                <Badge className="mb-3">{d.label}</Badge>
                <h3 className="text-2xl font-bold tracking-tight">{d.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-semibold text-secondary">
            The sequence: money first, then programs, then giving. You can&apos;t give what you don&apos;t have.
          </p>
        </Container>
      </Section>

      {/* BEING YOUR BEST SELF - the third thread */}
      <Section className="bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <Brain className="h-7 w-7 text-accent mx-auto mb-4" />
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">The third piece</p>
            <h2 className="text-3xl font-extrabold tracking-tight mb-5">Being your best self</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              People ask why a pharmacist is researching psychedelics, learning science, attention, and human performance. Here is why. You can&apos;t build wealth or give from an empty tank. The research is about unlocking the person first. Unlock the human, and they can build. Build, and poverty falls. Give from that abundance, and it spreads. Giving, sovereignty from poverty, and becoming your best self are three sides of one thing.
            </p>
          </div>
        </Container>
      </Section>

      {/* THE PLAYBOOK - Steward, Smith, Perry */}
      <Section>
        <Container size="xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-[0.18em] mb-3">It has been done, in one generation</p>
          <h2 className="font-heading font-extrabold tracking-tight text-[clamp(1.9rem,4vw,3rem)] mb-4 max-w-3xl">
            The playbook I&apos;m running
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10 text-lg">
            Three men built billion-dollar fortunes from nothing, in a single generation. All three self-made. All three Black. I am running their playbook with AI, and the cost of entry has dropped from millions to almost nothing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lineage.map((p) => (
              <div key={p.name} className="group p-6 rounded-[var(--radius-lg)] border border-border bg-card flex flex-col transition-shadow hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 flex-shrink-0 rounded-full overflow-hidden border border-border bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center">
                    {p.hasImage ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <span className="text-xl font-extrabold text-secondary">{p.initials}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight">{p.name}</h3>
                    <p className="mt-0.5 font-heading text-2xl font-extrabold tracking-tight">{p.worth}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed flex-1">{p.owns}</p>
                <p className="mt-5 pt-4 border-t border-border text-sm font-semibold text-secondary">{p.mine}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground/70">
            Photos: Robert F. Smith (public domain). Tyler Perry by Philip Romano, CC BY-SA 4.0.
          </p>
        </Container>
      </Section>

      {/* THE THROUGH-LINE - build to give */}
      <Section className="bg-secondary text-secondary-foreground">
        <Container size="md">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-foreground/60 mb-4">The whole point</p>
            <h2 className="font-heading font-extrabold tracking-tight text-[clamp(1.75rem,4vw,2.75rem)] mb-5">
              Here is the point.
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed opacity-90 max-w-2xl mx-auto">
              I am following their blueprint for one reason. Capital. You have to build it before you can give it, and capital is what changes the math for everyone. When you have it, you stop asking for permission and start making things happen. The wealth is the engine. The giving is where it leads.
            </p>
          </div>
        </Container>
      </Section>

      {/* THE PROOF - mission made tangible */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">The mission, made tangible</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Every build serves a dream
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            This is not a list of cool things. Each one points at the mission. Here is how it maps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {proof.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-[var(--radius-lg)] border border-border bg-card"
              >
                <p.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{p.text}</p>
                  <Badge variant="accent" className="mt-2">{p.serves}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* THE ENGINE - how you win */}
      <Section>
        <Container size="xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">The engine</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            How you win
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Two things have to be true to scale in the AI era. You have to know how to use AI, and you have to have a team that can execute it. PRISM is the knowledge. VersAssist is the team. Together, that is the whole game.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/prism" className="group block">
              <Card className="h-full">
                <CardHeader>
                  <Badge variant="accent" className="w-fit mb-2">The knowledge</Badge>
                  <h3 className="text-xl font-bold">PRISM</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Your AI business partner. Know how to use AI, the right tools, and the workflows that move the needle in your business.</p>
                  <p className="mt-4 text-sm text-accent font-medium flex items-center gap-1">See PRISM <ArrowRight className="h-3.5 w-3.5" /></p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/versassist" className="group block">
              <Card className="h-full">
                <CardHeader>
                  <Badge variant="accent" className="w-fit mb-2">The team</Badge>
                  <h3 className="text-xl font-bold">VersAssist</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">The Uber of labor. AI-trained team members at an economical rate, so one person can build like a company.</p>
                  <p className="mt-4 text-sm text-accent font-medium flex items-center gap-1">See VersAssist <ArrowRight className="h-3.5 w-3.5" /></p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Showcase Grid - visual proof */}
      <Section className="py-8">
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
                  <p className="text-white/60 text-xs mt-1">33 AI Agents - Live</p>
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

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <Section>
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
      <Section className="bg-muted/30">
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

      {/* Newsletter */}
      <Section>
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
