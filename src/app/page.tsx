import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import { CollectionCard } from "@/components/content/collection-card";
import { BlogCard } from "@/components/content/blog-card";
import { BookCover } from "@/components/ui/book-cover";
import { getBooks, getBlogPosts, getResearch } from "@/lib/content";
import { collections } from "@/data/collections";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ipCategories = [
  { label: "Books", count: 17, href: "/books" },
  { label: "Research", count: 4, href: "/research" },
  { label: "Media", count: "10+", href: "/media" },
  { label: "Games", count: 16, href: "/games" },
  { label: "Music", count: "1 Album", href: "/media" },
  { label: "Projects", count: "10+", href: "/projects" },
  { label: "Blog", count: "8+", href: "/blog" },
];

const dreams = [
  {
    no: "01",
    title: "Make giving go viral",
    body: "Instagram, Facebook, and Meta engineered the most powerful habit loops in human history, and they pointed them at consumption. I want to point that same machine at generosity. When you give of yourself, you touch something bigger than you. The goal is to make that feeling as common, as shareable, and as addictive as the scroll. Giving, hacked for good.",
  },
  {
    no: "02",
    title: "Solve poverty. For everyone. Starting with my community.",
    body: "I am starting with African Americans because that is where I have the credibility to lead, and because the abundance economy can flip generational wealth in one generation instead of three. Once it is proven there, it spreads. To poor whites in Appalachia, to opioid-affected towns, to anyone the old economy locked out. One community is the start. Everybody is the goal.",
  },
];

const playbook = [
  {
    name: "David Steward",
    initials: "DS",
    image: "/images/lineage/david-steward.jpg",
    worth: "$11B+",
    owns: "Founder of World Wide Technology, a company doing roughly $20 billion a year. Forbes has ranked him the wealthiest Black person in America.",
    mine: "I am building the implementation layer for AI.",
  },
  {
    name: "Robert F. Smith",
    initials: "RS",
    image: "/images/lineage/robert-smith.jpg",
    worth: "$10B+",
    owns: "Founder of Vista Equity Partners, with around $107 billion under management. He made operational excellence the moat.",
    mine: "I built a system that turns affordable talent into expert-level output.",
  },
  {
    name: "Tyler Perry",
    initials: "TP",
    image: "/images/lineage/tyler-perry.jpg",
    worth: "$1.4B",
    owns: "Owns his studio and nearly everything he has created outright. No gatekeeper could tell him no.",
    mine: "I own an AI studio outright, for the cost of a laptop and a subscription.",
  },
];

const proof = [
  { text: "The Black Advantage, book and movement", serves: "Dream 2" },
  { text: "Generosity Platform, in build", serves: "Dream 1" },
  { text: "PRISM AI Consultants", serves: "The engine" },
  { text: "VersAssist", serves: "The engine" },
  { text: "Pharmageddon, Escape Velocity, and 16 games", serves: "Behavior change" },
  { text: "Mansa Musa and 17 books", serves: "The culture" },
  { text: "The research, from the Abundance Thesis to human performance", serves: "Best self" },
  { text: "Agent World, 33 live AI agents", serves: "How one person runs it all" },
];

const flagships = [
  { name: "Mansa Musa", sub: "19-track concept album", href: "/media", label: "Album" },
  { name: "Agent World", sub: "33 AI agents, live", href: "https://agents.prismaiconsultants.com", label: "Flagship", external: true },
  { name: "Build Universe", sub: "79 builds, full portfolio", href: "https://builds.drjeffbullock.com", label: "Flagship", external: true },
];

const testimonials = [
  { quote: "It transformed my job. I never need an assistant. It's cutting so much of my brain power off of busywork and into actually running my business.", role: "Business Owner", context: "After implementing AI workflows" },
  { quote: "Both of these save us not only a lot of time, but the thing I find even more interesting is it just makes us better. This information we wouldn't have had. We never would have found it all and synthesized it together.", role: "Managing Partner, Professional Services", context: "On AI-powered business analysis" },
  { quote: "The documents I put together are beautiful. I sent one to the CEO of my other company, and he was amazed that it only took me two minutes. For client deliverables and professional documents, nobody is touching this.", role: "Operations Director", context: "On AI-generated client deliverables" },
  { quote: "Our board loves you. Everyone was like, we need to have you back. We've had you as our keynote speaker and we want you to come back.", role: "Board Member, Non-Profit", context: "After a keynote presentation" },
  { quote: "That used to take us all day to put together manually. Does it in five minutes. It's amazing. I've made a list of other things I can do like that now.", role: "Financial Services Executive", context: "On AI-automated financial analysis" },
  { quote: "I learned so much from you. I proposed making a custom GPT for our workflow, and when I did it, everyone was amazed, asking how I did it. I told them it was Dr. Jeff who taught me.", role: "Director, Healthcare", context: "On applying PRISM coaching" },
];

function SectionLabel({ no, children }: { no: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-display text-sm font-semibold text-accent tabular-nums">{no}</span>
      <span className="h-px w-8 bg-accent" />
      <span className="eyebrow text-muted-foreground">{children}</span>
    </div>
  );
}

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
      {/* ============ HERO ============ */}
      <Section className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-44 h-[40rem] w-[40rem] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
        />
        <Container size="xl" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-7">
                <span className="eyebrow text-accent">Dr. Jeff Bullock, PharmD</span>
                <span className="h-px flex-1 max-w-[6rem] bg-border" />
              </div>
              <h1 className="font-display font-extrabold tracking-[-0.03em] leading-[0.92] text-[clamp(2.85rem,7.5vw,6rem)]">
                I&apos;m using AI<br />to chase two<br />dreams.
              </h1>
              <p className="mt-8 font-serif text-[clamp(1.25rem,2.6vw,1.75rem)] leading-snug text-foreground/85 max-w-xl">
                Make giving as powerful as social media. End poverty, starting in my own community.
              </p>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Everything on this page is proof it is working. The books, the games, the research, the companies. They all point at the same two things.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#dreams">
                  <Button size="lg">See the mission <ArrowRight className="h-4 w-4 ml-2" /></Button>
                </a>
                <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">Book Me to Speak</Button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="relative max-w-[400px] mx-auto lg:ml-auto">
                <span aria-hidden className="absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-accent" />
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src="/images/hero/jeff-hero.jpg"
                    alt="Dr. Jeff Bullock"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between">
                  <span className="eyebrow text-muted-foreground">Pharmacist. Builder.</span>
                  <span className="eyebrow text-muted-foreground">Allentown, PA</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============ SPEAKING AT ============ */}
      <div className="border-y border-border">
        <Container size="xl" className="py-5">
          <div className="flex items-center gap-x-8 gap-y-2 flex-wrap">
            <span className="eyebrow text-muted-foreground">Speaking at</span>
            {["SHRM Conference", "DeSales University", "IFEL / Verizon", "TSPN (100K+ viewers)", "Lehigh Valley Chamber"].map((org) => (
              <span key={org} className="font-serif italic text-[15px] text-foreground/70">{org}</span>
            ))}
          </div>
        </Container>
      </div>

      {/* ============ TWO DREAMS ============ */}
      <Section id="dreams" className="pt-20 md:pt-28">
        <Container size="xl">
          <SectionLabel no="01">The why</SectionLabel>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] max-w-2xl">
            Two dreams.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-y border-border">
            {dreams.map((d) => (
              <article key={d.no} className="bg-background p-7 md:p-10">
                <div className="font-display text-[3.5rem] md:text-[4.5rem] font-extrabold leading-none text-accent/90 tabular-nums">
                  {d.no}
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-[1.9rem] font-bold tracking-tight leading-[1.08]">
                  {d.title}
                </h3>
                <p className="mt-5 font-serif text-[1.06rem] leading-relaxed text-foreground/75">
                  {d.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 font-serif italic text-lg text-muted-foreground max-w-2xl">
            The sequence: money first, then programs, then giving. You can&apos;t give what you don&apos;t have.
          </p>
        </Container>
      </Section>

      {/* ============ BEING YOUR BEST SELF ============ */}
      <Section className="border-t border-border">
        <Container size="md">
          <SectionLabel no="+">The third piece</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-6 max-w-xl">
            Being your best self
          </h2>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/80">
            People ask why a pharmacist is researching psychedelics, learning science, attention, and human performance. Here is why. You can&apos;t build wealth or give from an empty tank. The research is about unlocking the person first. Unlock the human, and they can build. Build, and poverty falls. Give from that abundance, and it spreads.
          </p>
          <p className="mt-6 text-base text-muted-foreground max-w-xl">
            Giving, sovereignty from poverty, and becoming your best self are three sides of one thing.
          </p>
        </Container>
      </Section>

      {/* ============ THE PLAYBOOK ============ */}
      <Section className="border-t border-border">
        <Container size="xl">
          <SectionLabel no="02">It has been done, in one generation</SectionLabel>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[0.97] max-w-2xl">
            The playbook I&apos;m running.
          </h2>
          <p className="mt-6 font-serif text-lg leading-relaxed text-foreground/70 max-w-2xl">
            Three men built billion-dollar fortunes from nothing, in a single generation. All three self-made. All three Black. I am running their playbook with AI, and the cost of entry has dropped from millions to almost nothing.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10">
            {lineage.map((p) => (
              <article key={p.name} className="group">
                <div className="border-t-2 border-foreground pt-5 flex items-start gap-4">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden bg-muted">
                    {p.hasImage ? (
                      <Image src={p.image} alt={p.name} width={64} height={64} className="h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center font-display text-lg font-bold text-muted-foreground">{p.initials}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-display text-[2.25rem] font-extrabold leading-none tracking-tight tabular-nums">{p.worth}</div>
                    <h3 className="mt-1 text-sm font-semibold text-muted-foreground">{p.name}</h3>
                  </div>
                </div>
                <p className="mt-5 font-serif text-[15px] leading-relaxed text-foreground/70">{p.owns}</p>
                <p className="mt-4 text-sm font-semibold text-accent leading-snug">{p.mine}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-xs text-muted-foreground/60">
            Photos: Robert F. Smith (public domain). Tyler Perry by Philip Romano, CC BY-SA 4.0.
          </p>
        </Container>
      </Section>

      {/* ============ THE THROUGH-LINE ============ */}
      <Section className="bg-foreground text-background">
        <Container size="md">
          <span className="eyebrow text-background/50">The whole point</span>
          <blockquote className="mt-6 font-serif text-[clamp(1.6rem,3.6vw,2.9rem)] leading-[1.2] tracking-[-0.01em]">
            I am following their blueprint for one reason. <span className="text-accent">Capital.</span> You have to build it before you can give it, and capital is what changes the math for everyone. The wealth is the engine. <em>The giving is where it leads.</em>
          </blockquote>
        </Container>
      </Section>

      {/* ============ THE PROOF ============ */}
      <Section className="border-t border-border">
        <Container size="xl">
          <SectionLabel no="03">The mission, made tangible</SectionLabel>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[0.97] max-w-2xl">
            Every build serves a dream.
          </h2>
          <p className="mt-6 font-serif text-lg text-foreground/70 max-w-2xl">
            This is not a list of cool things. Each one points at the mission. Here is how it maps.
          </p>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
            {proof.map((p, i) => (
              <li key={i} className="flex items-baseline justify-between gap-4 py-4 border-b border-border">
                <span className="text-[15px] font-medium">{p.text}</span>
                <span className="eyebrow text-accent whitespace-nowrap">{p.serves}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ============ THE ENGINE ============ */}
      <Section className="border-t border-border">
        <Container size="xl">
          <SectionLabel no="04">The engine</SectionLabel>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[0.97] max-w-2xl">
            How you win.
          </h2>
          <p className="mt-6 font-serif text-lg text-foreground/70 max-w-2xl">
            Two things have to be true to scale in the AI era. You have to know how to use AI, and you have to have a team that can execute it. PRISM is the knowledge. VersAssist is the team.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-y border-border">
            {[
              { tag: "The knowledge", name: "PRISM", href: "/prism", body: "Your AI business partner. Know how to use AI, the right tools, and the workflows that move the needle in your business." },
              { tag: "The team", name: "VersAssist", href: "/versassist", body: "The Uber of labor. AI-trained team members at an economical rate, so one person can build like a company." },
            ].map((e) => (
              <Link key={e.name} href={e.href} className="group bg-background p-8 md:p-10 transition-colors hover:bg-muted/40">
                <span className="eyebrow text-accent">{e.tag}</span>
                <h3 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">{e.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">{e.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all">
                  See {e.name} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ SHOWCASE ============ */}
      <Section className="border-t border-border">
        <Container size="xl">
          <SectionLabel no="05">The work</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {featuredBook && (
              <Link href={`/books/${featuredBook.slug}`} className="group">
                <div className="overflow-hidden bg-muted">
                  <BookCover title={featuredBook.title} category={featuredBook.category} coverImage={featuredBook.coverImage} className="aspect-[3/4] transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <p className="mt-2 eyebrow text-muted-foreground">Book</p>
                <p className="text-sm font-semibold group-hover:text-accent transition-colors line-clamp-1">{featuredBook.title}</p>
              </Link>
            )}
            <Link href="/games/pharmageddon" className="group">
              <div className="aspect-[3/4] relative overflow-hidden bg-black">
                <Image src="/images/games/pharmageddon-cover.jpg" alt="Pharmageddon" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 50vw, 20vw" />
              </div>
              <p className="mt-2 eyebrow text-accent">Game</p>
              <p className="text-sm font-semibold group-hover:text-accent transition-colors">Play now</p>
            </Link>
            {flagships.map((f) => {
              const inner = (
                <>
                  <div className="aspect-[3/4] relative overflow-hidden bg-foreground text-background flex flex-col justify-between p-4">
                    <span className="h-0.5 w-8 bg-accent" />
                    <div>
                      <p className="font-display text-lg font-bold leading-tight">{f.name}</p>
                      <p className="text-xs text-background/55 mt-1">{f.sub}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-background/40 self-end group-hover:text-accent transition-colors" />
                  </div>
                  <p className="mt-2 eyebrow text-accent">{f.label}</p>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors">Explore</p>
                </>
              );
              return f.external ? (
                <a key={f.name} href={f.href} target="_blank" rel="noopener noreferrer" className="group">{inner}</a>
              ) : (
                <Link key={f.name} href={f.href} className="group">{inner}</Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ============ IP TICKER ============ */}
      <div className="border-y border-border">
        <Container size="xl" className="py-5">
          <div className="flex gap-x-8 gap-y-2 overflow-x-auto scrollbar-hide flex-wrap">
            {ipCategories.map((cat) => (
              <Link key={cat.label} href={cat.href} className="group flex items-baseline gap-2 whitespace-nowrap">
                <span className="text-sm font-semibold group-hover:text-accent transition-colors">{cat.label}</span>
                <span className="font-display text-sm font-bold text-muted-foreground tabular-nums">{cat.count}</span>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* ============ FEATURED ============ */}
      <Section className="border-t border-border">
        <Container size="xl">
          <SectionLabel no="06">Featured</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredBook && (
              <Link href={`/books/${featuredBook.slug}`} className="group grid grid-cols-3 gap-5 items-center">
                <div className="col-span-1">
                  <BookCover title={featuredBook.title} category={featuredBook.category} coverImage={featuredBook.coverImage} className="transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="col-span-2">
                  <span className="eyebrow text-accent">Featured Book</span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">{featuredBook.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">{featuredBook.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">Read more <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </Link>
            )}
            {featuredResearch && (
              <Link href={`/research/${featuredResearch.slug}`} className="group">
                <div className="aspect-[21/9] relative overflow-hidden bg-muted mb-4">
                  {featuredResearch.coverImage ? (
                    <Image src={featuredResearch.coverImage} alt={featuredResearch.title} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
                  ) : (
                    <div className="absolute inset-0 bg-foreground flex items-end p-5">
                      <span className="font-display text-background/40 text-sm font-bold uppercase tracking-wider">Research</span>
                    </div>
                  )}
                </div>
                <span className="eyebrow text-accent">Featured Research</span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">{featuredResearch.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{featuredResearch.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">Explore <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            )}
          </div>
        </Container>
      </Section>

      {/* ============ COLLECTIONS ============ */}
      <Section className="border-t border-border">
        <Container size="xl">
          <SectionLabel no="07">Collections</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Curated entry points</h2>
          <p className="font-serif italic text-muted-foreground mb-8">Ways into the work, by thread.</p>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {collections.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ LATEST POSTS ============ */}
      {latestPosts.length > 0 && (
        <Section className="border-t border-border">
          <Container size="xl">
            <div className="flex items-end justify-between mb-8">
              <div>
                <SectionLabel no="08">From the desk</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">Latest writing</h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-accent flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap">
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ============ TESTIMONIALS ============ */}
      <Section className="border-t border-border">
        <Container size="xl">
          <SectionLabel no="09">In the room</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-2">What clients say</h2>
          <p className="font-serif italic text-muted-foreground mb-12">Real quotes from real coaching sessions. No scripts, no actors.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-t-2 border-foreground pt-5">
                <blockquote className="font-serif text-lg leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4">
                  <p className="text-sm font-semibold">{t.role}</p>
                  <p className="text-xs text-muted-foreground">{t.context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ NEWSLETTER ============ */}
      <Section className="border-t border-border">
        <Container size="md">
          <div className="max-w-xl">
            <span className="eyebrow text-accent">The Operator&apos;s Edge</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold tracking-tight">
              What I am building, and what is working.
            </h2>
            <p className="mt-4 font-serif text-lg text-muted-foreground leading-relaxed">
              The AI tools behind it, with no spam and no fluff. Updates when books ship, games launch, and research drops.
            </p>
            <div className="mt-7">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
