import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic, Users, Building2, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Dr. Jeff Bullock delivers keynotes and workshops on AI implementation, leadership, and building with technology.",
};

const topics = [
  {
    title: "AI Implementation for Business Leaders",
    description: "How to move from AI curiosity to AI competence. Practical frameworks for identifying high-impact use cases, building internal capability, and measuring ROI.",
    audience: "C-suite, leadership teams, board members",
  },
  {
    title: "The Operator Mindset",
    description: "Why systems thinking beats hustle culture. How to build repeatable processes that compound over time using AI as a force multiplier.",
    audience: "Entrepreneurs, founders, operations leaders",
  },
  {
    title: "From Pharmacy to AI: A Career Reinvention Story",
    description: "14 years in healthcare, then a leap into AI entrepreneurship. The lessons learned, the mistakes made, and why the best time to pivot is now.",
    audience: "Career changers, healthcare professionals, anyone considering a pivot",
  },
  {
    title: "Building with AI: From Idea to Shipped Product",
    description: "How one person built 50+ AI modules, published 4 books, shipped 2 games, and produced a 19-track album - all with AI as a co-pilot.",
    audience: "Creators, developers, solo founders",
  },
];

const formats = [
  {
    icon: Mic,
    title: "Keynote Address",
    duration: "60-90 minutes",
    description: "Visionary keynote for organization-wide alignment, leadership summits, and conferences.",
  },
  {
    icon: Users,
    title: "Half-Day Workshop",
    duration: "3-4 hours",
    description: "Applied and strategic - tool implementation, group exercises, department-specific action plans.",
  },
  {
    icon: Building2,
    title: "Full-Day Integration",
    duration: "6-8 hours",
    description: "Custom rollout playbooks, department action plans, hands-on tool walkthroughs, implementation roadmaps.",
  },
];

const pastAppearances = [
  { event: "AI Hustle with Dr. Jeff - LinkedIn Live", date: "Weekly, Tuesdays 2PM ET", type: "Live Show" },
  { event: "YouTube Live with Dr. Jeff", date: "Weekly, Thursdays 2PM ET", type: "Live Show" },
  { event: "PRISM AI Business Workshops", date: "Ongoing", type: "Workshop" },
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        title="Speaking"
        description="Keynotes and workshops that change how organizations think about AI - and what they do about it the next morning."
      />

      {/* Speaker Intro */}
      <Section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">About the Speaker</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dr. Jeff Bullock is the Founder and CEO of PRISM AI Consultants and co-founder of VersAssist. He earned his Doctor of Pharmacy from Xavier University of Louisiana and spent 14 years at CVS Health - a Fortune 10 organization - rising from community pharmacist to upper leadership.
                </p>
                <p>
                  In 2021, he left corporate healthcare to become a full-time entrepreneur. When ChatGPT launched, he immediately saw the potential. He founded PRISM AI Consultants in June 2023 and has since personally coached over 75 business leaders on AI implementation.
                </p>
                <p>
                  He is the author of multiple books, creator of 2 playable games, producer of a 19-track concept album, and builder of a 50-module autonomous AI system. He does not just talk about what AI can do - he shows what he has built with it.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
                <h3 className="font-bold mb-4">Credentials</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>Doctor of Pharmacy (Pharm.D.), Xavier University of Louisiana</li>
                  <li>14 years at CVS Health (Fortune 10)</li>
                  <li>75+ business leaders coached on AI implementation</li>
                  <li>CEO of PRISM AI Consultants + VersAssist</li>
                  <li>Author of 4 published books</li>
                  <li>Builder of 50+ module AI agent system</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Topics */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">Speaking Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <Card key={topic.title}>
                <CardHeader>
                  <h3 className="text-lg font-bold">{topic.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Best for:</span> {topic.audience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Formats */}
      <Section>
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">Formats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((format) => (
              <div key={format.title} className="p-6 rounded-[var(--radius-lg)] border border-border bg-card">
                <format.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg font-bold">{format.title}</h3>
                <p className="text-sm text-accent font-medium mt-1">{format.duration}</p>
                <p className="mt-3 text-sm text-muted-foreground">{format.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Past Appearances */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">Appearances</h2>
          <div className="space-y-3">
            {pastAppearances.map((appearance) => (
              <div key={appearance.event} className="flex items-center justify-between p-4 rounded-[var(--radius-lg)] border border-border bg-card">
                <div>
                  <h3 className="font-bold text-sm">{appearance.event}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{appearance.date}</p>
                </div>
                <Badge variant="outline">{appearance.type}</Badge>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Booking CTA */}
      <Section>
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight mb-3">Book Dr. Jeff</h2>
            <p className="text-muted-foreground mb-6">
              Interested in having Dr. Jeff speak at your event or organization?
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get in touch <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
