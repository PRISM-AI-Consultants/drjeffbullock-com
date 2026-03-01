import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Rocket,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Building2,
  BookOpen,
  Bot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Dr. Jeff Bullock - pharmacist turned AI CEO, author, game developer, music producer, and researcher.",
};

const timeline = [
  { year: "2008", icon: GraduationCap, title: "Doctor of Pharmacy", description: "Graduated from Xavier University of Louisiana with a Pharm.D." },
  { year: "2008-2021", icon: Briefcase, title: "CVS Health", description: "14 years at a Fortune 10 healthcare organization. Pharmacy clerk to district leader." },
  { year: "2021", icon: Lightbulb, title: "Full-Time Entrepreneur", description: "Left corporate healthcare to build businesses full-time." },
  { year: "2023", icon: Building2, title: "Founded PRISM AI Consultants", description: "Launched an AI consulting firm to help businesses implement AI for real results." },
  { year: "2024", icon: Building2, title: "Co-Founded VersAssist", description: "Built an AI-enhanced virtual assistant agency - the Uber of labor." },
  { year: "2025", icon: BookOpen, title: "Published 4 Books", description: "A Prompt's Tale, The Unburdening, The Inheritance, and The Compliant." },
  { year: "2025", icon: Bot, title: "54-Module AI Agent System", description: "Built a sovereign AI system with 33 autonomous agents running 24/7." },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/drjeffbullock/" },
  { label: "YouTube", href: "https://www.youtube.com/@drjeffbullock" },
  { label: "PRISM AI", href: "https://www.prismaiconsultants.com" },
  { label: "Skool Community", href: "https://www.skool.com/prism-university" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" description="Pharmacist. CEO. Author. Builder. Proving what one person can build with AI." />

      {/* Bio */}
      <Section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="aspect-square rounded-[var(--radius-xl)] overflow-hidden border border-border">
                <Image
                  src="/images/jeff-bullock-headshot.jpg"
                  alt="Dr. Jeff Bullock"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold tracking-tight mb-6">Dr. Jeff Bullock</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I spent 14 years behind pharmacy counters and in healthcare leadership before walking away to build something different. Not because pharmacy was wrong for me - it taught me systems thinking, pressure management, and how to serve people under impossible constraints. But when AI arrived, I saw something bigger.
                </p>
                <p>
                  I founded PRISM AI Consultants in June 2023 to help business leaders implement AI - not as a buzzword, but as a real operational tool. Since then, I have personally coached over 75 executives, entrepreneurs, and business owners on making AI work for their specific situations.
                </p>
                <p>
                  But this site is not about PRISM. This is my personal library - the proof of what happens when you use AI as a force multiplier across every creative and intellectual domain you care about. Eight books (four published, four in progress). Eleven playable games and interactive experiences. A 19-track concept album. Three original research frameworks. A sitcom pilot. Two companies. And a 54-module AI agent system with 33 autonomous agents running 24/7.
                </p>
                <p>
                  I did not build all of this alone. I built it with AI. And that is the point.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section className="bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight mb-8">The Mission</h2>
            <div className="space-y-6">
              <div className="p-8 rounded-[var(--radius-lg)] border border-border bg-card">
                <Heart className="h-8 w-8 text-accent mx-auto mb-4" />
                <p className="text-xl font-bold">Make giving as popular as social media</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  What if generosity had the same reach and engagement as Instagram?
                </p>
              </div>
              <div className="p-8 rounded-[var(--radius-lg)] border border-border bg-card">
                <Rocket className="h-8 w-8 text-accent mx-auto mb-4" />
                <p className="text-xl font-bold">Solve poverty starting with African Americans</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Evidence-based economic empowerment through technology, education, and strategic advantage.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container size="md">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">Timeline</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <p className="text-xs text-accent font-bold">{item.year}</p>
                  <h3 className="font-bold mt-0.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Companies */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <Badge variant="accent">CEO &amp; Founder</Badge>
                <h3 className="mt-3 text-2xl font-bold">PRISM AI Consultants</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AI consulting firm helping businesses implement AI for revenue, time savings, and operational ease. 75+ leaders coached.</p>
                <a href="https://www.prismaiconsultants.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline">
                  Visit PRISM <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge variant="accent">CEO &amp; Co-Founder</Badge>
                <h3 className="mt-3 text-2xl font-bold">VersAssist</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">The Uber of labor. AI-trained teams that help businesses scale operations without the overhead of traditional hiring.</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Connect */}
      <Section>
        <Container size="md">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8 text-center">Connect</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-[var(--radius-lg)] border border-border bg-card hover:shadow-sm hover:border-accent/30 transition-all text-sm font-medium flex items-center gap-2"
              >
                {link.label} <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
