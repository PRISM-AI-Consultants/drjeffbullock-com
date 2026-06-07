import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Headset } from "lucide-react";

export const metadata: Metadata = {
  title: "Virtual Reality",
  description:
    "Step inside the work. WebXR experiences for Meta Quest 3, playable in any browser. Pharma training, AI escape rooms, immersive music videos, and the PRISM AI Innovation Hub.",
  openGraph: {
    title: "Virtual Reality - Dr. Jeff Bullock",
    description:
      "Put on a Meta Quest 3, or click any tile in your browser, and walk through what AI implementation actually feels like.",
  },
};

type VRExperience = {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  tags: string[];
  gradient: string;
  accent: string;
};

const featured = {
  title: "PRISM AI Innovation Hub - Philadelphia",
  subtitle: "2nd Annual Philadelphia Business Summit & Expo",
  description:
    "City of Philadelphia Department of Commerce. Mom Your Business. La Salle University. Six industry storefronts, real client results, scored to the original Suno anthem. Booth #5, Comms & Tech Zone.",
  url: "https://vr.prismaiconsultants.com/philly/",
  tags: ["WebXR", "Live Event", "3-Day Booth", "Booth #5"],
  liveLabel: "May 17-19",
};

const experiences: VRExperience[] = [
  {
    title: "Clean Room Training",
    subtitle: "LCCC Pharma Manufacturing",
    description:
      "7-step aseptic gowning with the Intelligence Loop. Contamination mechanics, scoring, BioWorks certificate. Built for the Eli Lilly workforce pipeline.",
    url: "https://vr.prismaiconsultants.com/lccc/pharma-training.html",
    tags: ["WebXR", "Training", "Intelligence Loop"],
    gradient: "from-emerald-900 via-teal-900 to-slate-900",
    accent: "text-emerald-300",
  },
  {
    title: "LCCC Program Overview",
    subtitle: "Science & Technology Center Partnership",
    description:
      "Full program details for the Lehigh Carbon Community College / Eli Lilly workforce pipeline. The story behind the booth and the curriculum.",
    url: "https://vr.prismaiconsultants.com/lccc/",
    tags: ["WebXR", "Program", "Workforce"],
    gradient: "from-blue-900 via-indigo-900 to-violet-900",
    accent: "text-blue-300",
  },
  {
    title: "PRISM AI Innovation Hub",
    subtitle: "Chamber Business Summit Demo",
    description:
      "Interactive virtual business district. Six industry storefronts with real client transformations. Walk the street, click the doors, hit AI Blast, see the results.",
    url: "https://vr.prismaiconsultants.com/chamber/",
    tags: ["WebXR", "Interactive", "Live Event"],
    gradient: "from-violet-900 via-purple-900 to-indigo-900",
    accent: "text-violet-300",
  },
  {
    title: "The Clock",
    subtitle: "AI Escape Room",
    description:
      "An escape room experience exploring the AI phase transition. Chaos mechanics, puzzle solving, and the moment AI transforms everything.",
    url: "https://vr.prismaiconsultants.com/genai-divide.html",
    tags: ["WebXR", "Interactive", "AI"],
    gradient: "from-indigo-900 via-violet-900 to-slate-900",
    accent: "text-indigo-300",
  },
  {
    title: "The Architect",
    subtitle: "Intelligence Loop Strategy Game",
    description:
      "Build your tower. Survive the storm. A strategy game exploring the multiplicative power of Knowledge, Action, Adaptation, and Application.",
    url: "https://vr.prismaiconsultants.com/intelligence-loop-demo.html",
    tags: ["WebXR", "Game", "Framework"],
    gradient: "from-purple-900 via-fuchsia-900 to-slate-900",
    accent: "text-fuchsia-300",
  },
  {
    title: "THIRST",
    subtitle: "An Immersive Short Story",
    description:
      "Three acts. A rooftop at dusk. Amber eyes across the room. Step into a world of shadow, candlelight, and ancient perspective.",
    url: "https://vr.prismaiconsultants.com/thirst.html",
    tags: ["WebXR", "Story", "Atmospheric"],
    gradient: "from-red-950 via-amber-950 to-black",
    accent: "text-amber-300",
  },
  {
    title: "A Prompt's Power",
    subtitle: "Immersive Music Video",
    description:
      "Seven scenes synced to the original song. Beat-reactive lighting, orbital rings, and lyrics in 3D. Jazz-rap meets cyberpunk.",
    url: "https://vr.prismaiconsultants.com/prompts-power/",
    tags: ["WebXR", "Music", "Visual"],
    gradient: "from-amber-900 via-yellow-900 to-orange-950",
    accent: "text-amber-300",
  },
  {
    title: "BTS: Through the Eras",
    subtitle: "Immersive ARMY Experience",
    description:
      "Seven eras of BTS history. Audio-reactive visuals sync to your playlist. Purple particles, era-themed worlds, and the full journey.",
    url: "https://vr.prismaiconsultants.com/bts-army/",
    tags: ["WebXR", "Music", "Interactive"],
    gradient: "from-purple-900 via-violet-900 to-indigo-950",
    accent: "text-purple-300",
  },
  {
    title: "Can I Get a PRISM Agent?",
    subtitle: "Immersive Music Video Experience",
    description:
      "74-frame anime music video synced to 85 BPM. Beat-reactive crystal particles, shockwave VFX, satellite panels, and energy tendrils. One Punch Man meets AI business.",
    url: "https://vr.prismaiconsultants.com/prism-agent/",
    tags: ["WebXR", "Music Video", "Beat-Synced"],
    gradient: "from-violet-900 via-cyan-900 to-slate-900",
    accent: "text-cyan-300",
  },
  {
    title: "Max the Flying Chicken",
    subtitle: "Interactive Storybook Preview",
    description:
      "Step inside the story. 3D barnyard, moonlit pond, and a chicken with a dream. Interactive scenes with a book preview by Layla.",
    url: "https://vr.prismaiconsultants.com/max/",
    tags: ["WebXR", "Story", "Interactive"],
    gradient: "from-sky-900 via-indigo-900 to-amber-950",
    accent: "text-sky-300",
  },
];

export default function VRPage() {
  return (
    <>
      <PageHeader
        title="Step Inside the Work"
        description="Put on a Meta Quest 3, or click any tile in your browser, and walk through what AI implementation actually feels like."
      />

      {/* Featured: Philadelphia Business Summit */}
      <Section>
        <Container size="xl">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card variant="featured" className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-[16/10] md:aspect-auto bg-gradient-to-br from-emerald-900 via-violet-900 to-slate-900 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(34,197,94,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.12) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="relative text-center px-6">
                    <div
                      className="text-5xl md:text-6xl font-extrabold tracking-[0.2em] text-emerald-300"
                      style={{ textShadow: "0 0 40px rgba(34,197,94,0.5)" }}
                    >
                      PHILLY
                    </div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      Independence to Innovation
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 ring-1 ring-emerald-500/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {featured.liveLabel}
                    </span>
                    <Badge variant="accent">Featured</Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {featured.subtitle}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {featured.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-6 text-sm font-medium text-accent flex items-center gap-1">
                    Walk the booth
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                </div>
              </div>
            </Card>
          </a>
        </Container>
      </Section>

      {/* Experience grid */}
      <Section className="pt-0">
        <Container size="xl">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              All Experiences
            </h2>
            <p className="text-sm text-muted-foreground hidden sm:block">
              Built with Three.js. WebXR for Quest 3. No app store required.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <a
                key={exp.url}
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full overflow-hidden flex flex-col">
                  <div
                    className={`relative aspect-video bg-gradient-to-br ${exp.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    <Headset className={`h-10 w-10 ${exp.accent} opacity-80`} />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]" />
                  </div>
                  <CardHeader>
                    <h3 className="text-lg font-bold leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-medium text-accent mt-1">
                      {exp.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <Badge key={t} variant="outline" className="text-[10px]">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-4 text-xs font-medium text-accent flex items-center gap-1">
                      Open experience
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech footer */}
      <Section className="bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h3 className="text-lg font-bold tracking-tight">How to view</h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Every experience runs in any modern browser. For the full effect,
              put on a Meta Quest 3, open the browser, and visit the link. Six
              degrees of freedom, hand tracking, room-scale. No downloads, no
              app store.
            </p>
            <div className="mt-6 flex justify-center gap-3 flex-wrap text-xs text-muted-foreground/80 font-medium">
              <span>Three.js r160</span>
              <span className="text-muted-foreground/40">|</span>
              <span>WebXR for Quest 3</span>
              <span className="text-muted-foreground/40">|</span>
              <span>PBR Materials</span>
              <span className="text-muted-foreground/40">|</span>
              <span>Bloom Post-Processing</span>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
