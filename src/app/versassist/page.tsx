import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Boxes, Workflow, TrendingUp, ArrowUpRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "VersAssist - The Uber of Labor",
  description:
    "95% of entrepreneurs run solo. You cannot scale solo. VersAssist is AI-trained team members at an economical rate with block pricing, so one person can build like a company.",
  openGraph: {
    title: "VersAssist - The Uber of Labor",
    description:
      "One person, plus an AI-trained team, plus AI. That is how you scale without a payroll you cannot afford.",
  },
};

const whatYouGet = [
  {
    icon: Users,
    title: "AI-trained team members",
    body: "People trained to work with AI, ready to plug into your business. They match your knowledge, and on the things you have not learned yet, they often surpass it.",
  },
  {
    icon: Boxes,
    title: "Block pricing",
    body: "An economical, predictable rate. You buy a block of capacity and use it. A fraction of the cost of a full-time hire, with none of the overhead.",
  },
  {
    icon: Workflow,
    title: "Plugs into your workflow",
    body: "Content, research, admin, operations, delivery. The team slots into how you already work, so the busywork leaves your plate.",
  },
  {
    icon: TrendingUp,
    title: "You build on top of it",
    body: "One person with a trained team and AI can deliver what used to take a 50-person firm. That is leverage you can stack on.",
  },
];

export default function VersAssistPage() {
  return (
    <>
      <PageHeader
        title="The Uber of Labor"
        description="If you are an entrepreneur, odds are you are doing it alone. VersAssist is the team that changes that."
      />

      <div className="border-b border-border bg-muted/30">
        <Container size="xl" className="py-3">
          <p className="text-center text-xs text-muted-foreground">
            One arrow in a bigger mission: make giving go viral, and solve poverty for everyone.{" "}
            <Link href="/#dreams" className="text-accent font-medium hover:underline">See the mission</Link>
          </p>
        </Container>
      </div>

      {/* The problem */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <p className="text-5xl md:text-6xl font-extrabold tracking-tight text-accent">95%</p>
            <p className="mt-3 text-lg md:text-xl font-medium text-secondary">
              of Black entrepreneurs are solopreneurs.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
              One person. No team. Trying to scale a business by themselves. That is the ceiling, and it is the single biggest reason good businesses stay small. A structural problem needs a structural fix, and that fix is a team.
            </p>
          </div>
        </Container>
      </Section>

      {/* What it is */}
      <Section className="bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <Badge variant="accent" className="mb-4">What VersAssist is</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              The Uber of labor
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              AI-trained team members at an economical rate, with block pricing, ready when you are. One person, plus a trained team, plus AI. That is how you scale without a payroll you cannot afford.
            </p>
          </div>
        </Container>
      </Section>

      {/* What you get */}
      <Section>
        <Container size="xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
            What you get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatYouGet.map((f) => (
              <Card key={f.title} className="h-full">
                <CardHeader>
                  <f.icon className="h-6 w-6 text-accent mb-3" />
                  <h3 className="text-lg font-bold">{f.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{f.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pair with PRISM */}
      <Section className="bg-secondary text-secondary-foreground">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
              The team is half of it.
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              VersAssist gives you the team. PRISM teaches you how to use AI to direct that team. When you have both, you know how to win and you have the people to make it happen.
            </p>
            <Link href="/prism" className="inline-block mt-6">
              <Button variant="secondary" size="lg">
                See PRISM <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
              See it for yourself
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Visit VersAssist for the full story, the team, and client results.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://www.versassists.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Visit VersAssist <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
              <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">Book a call</Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
