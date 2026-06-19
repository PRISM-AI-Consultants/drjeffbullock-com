import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Compass, Wrench, Workflow, GraduationCap, ArrowUpRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "PRISM - Your AI Business Partner",
  description:
    "The AI tools are powerful and costly. Knowing how to use them is the difference. PRISM teaches you to operate AI inside your real business, then builds and runs the systems with you.",
  openGraph: {
    title: "PRISM - Your AI Business Partner",
    description:
      "The tools are everywhere. The skill to use them is rare. PRISM gives you that skill.",
  },
};

const whatYouGet = [
  {
    icon: Compass,
    title: "Strategy with Dr. Jeff",
    body: "Weekly strategy on where AI moves the needle in your business. Not theory. The specific moves that save time and make money this month.",
  },
  {
    icon: Wrench,
    title: "Know the tools",
    body: "The AI tools are powerful and often costly. We show you which ones matter for your business and exactly how to use them well.",
  },
  {
    icon: Workflow,
    title: "Workflows built for you",
    body: "We build AI workflows around how you actually operate, so the value shows up in your day, not in a slide deck.",
  },
  {
    icon: GraduationCap,
    title: "Deliverables you can use",
    body: "Documents, analyses, and assets produced with AI that you put to work immediately. The output is the product.",
  },
];

export default function PrismPage() {
  return (
    <>
      <PageHeader
        title="Know How to Use AI"
        description="The tools are everywhere. The skill to use them is rare. That skill is what PRISM gives you."
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
            <p className="text-lg md:text-xl font-medium text-secondary">
              Everyone has access to AI now. Almost no one knows how to use it.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
              AI is the biggest lever of our lifetime. The tools are powerful, and many of them are expensive. They only pay off when you know how to use them inside your business. That know-how is the gap, and closing it is the whole point of PRISM.
            </p>
          </div>
        </Container>
      </Section>

      {/* What it is */}
      <Section className="bg-muted/30">
        <Container size="md">
          <div className="text-center">
            <Badge variant="accent" className="mb-4">What PRISM is</Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Your AI business partner
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              PRISM teaches you to operate AI inside your actual business, then builds and runs the systems with you. The right tools, the right workflows, weekly strategy, and working software that ships in days. You walk in unsure where to start. You walk out running.
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

      {/* Pair with VersAssist */}
      <Section className="bg-secondary text-secondary-foreground">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
              The knowledge is half of it.
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              PRISM teaches you how to use AI. VersAssist gives you the AI-trained team to execute it. When you have both, you know how to win and you have the people to make it happen. That is the piece most people are missing.
            </p>
            <Link href="/versassist" className="inline-block mt-6">
              <Button variant="secondary" size="lg">
                See VersAssist <ArrowRight className="h-4 w-4 ml-2" />
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
              Start with a conversation
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Book an introductory call, or visit PRISM for the full picture.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Book an intro call <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
              <a href="https://www.prismaiconsultants.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">Visit PRISM</Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
