import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";

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

const VERSASSIST_SITE = "https://www.versassists.com";
const INTRO_CALL = "https://calendly.com/versassist/30min";

const whatYouGet = [
  {
    title: "AI-trained team members",
    body: "People trained to work with AI, ready to plug into your business. They match your knowledge, and on the things you have not learned yet, they often surpass it.",
  },
  {
    title: "Block pricing",
    body: "An economical, predictable rate. You buy a block of capacity and use it. A fraction of the cost of a full-time hire, with none of the overhead.",
  },
  {
    title: "Plugs into your workflow",
    body: "Content, research, admin, operations, delivery. The team slots into how you already work, so the busywork leaves your plate.",
  },
  {
    title: "You build on top of it",
    body: "One person with a trained team and AI can deliver what used to take a 50-person firm. That is leverage you can stack on.",
  },
];

export default function VersAssistPage() {
  return (
    <>
      {/* Brand hero — deep navy with a global-network motif */}
      <section className="relative overflow-hidden bg-[#081826] text-[#EAF6F8]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* connection dot field */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: "radial-gradient(rgba(34,199,214,0.9) 1px, transparent 1.4px)",
              backgroundSize: "34px 34px",
              maskImage: "radial-gradient(120% 90% at 70% 20%, black, transparent 75%)",
              WebkitMaskImage: "radial-gradient(120% 90% at 70% 20%, black, transparent 75%)",
            }}
          />
          {/* teal energy sweep */}
          <div
            className="absolute -right-32 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full opacity-50 blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(34,199,214,0.45), transparent 62%)" }}
          />
          <div
            className="absolute -left-40 -bottom-40 h-[34rem] w-[34rem] rounded-full opacity-40 blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(56,132,255,0.35), transparent 62%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#081826]" />
        </div>

        <Container size="xl" className="relative">
          <div className="max-w-3xl py-20 md:py-28">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#22C7D6]">
              VersAssist
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              The Uber
              <br />
              of Labor.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              If you are an entrepreneur, odds are you are doing it alone. VersAssist is the AI-trained
              team that changes that. One person, plus a trained team, plus AI, building like a
              company.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={VERSASSIST_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#22C7D6] px-7 py-3.5 text-base font-semibold text-[#04141d] shadow-[0_0_40px_-8px_rgba(34,199,214,0.7)] transition hover:bg-[#3ad6e4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Visit versassists.com
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={INTRO_CALL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white/90 transition hover:border-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a call
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission strip */}
      <div className="border-b border-border bg-muted/30">
        <Container size="xl" className="py-3">
          <p className="text-center text-xs text-muted-foreground">
            One arrow in a bigger mission: make giving go viral, and solve poverty for everyone.{" "}
            <Link href="/#dreams" className="font-medium text-accent hover:underline">
              See the mission
            </Link>
          </p>
        </Container>
      </div>

      {/* The problem — the 95% */}
      <Section>
        <Container size="lg">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-7xl font-extrabold tracking-tight text-[#0E9BAA] md:text-8xl">95%</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                of Black entrepreneurs are solopreneurs.
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                One person. No team. Trying to scale a business by themselves. That is the ceiling, and
                it is the single biggest reason good businesses stay small. A structural problem needs a
                structural fix, and that fix is a team.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What VersAssist is */}
      <Section className="bg-muted/30">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              The Uber of labor
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              AI-trained team members at an economical rate, with block pricing, ready when you are.
              One person, plus a trained team, plus AI. That is how you scale without a payroll you
              cannot afford.
            </p>
          </div>
        </Container>
      </Section>

      {/* What you get — editorial numbered list */}
      <Section>
        <Container size="xl">
          <div className="grid gap-y-4 md:grid-cols-12 md:gap-x-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">What you get</h2>
              <p className="mt-3 max-w-xs text-muted-foreground">
                A team and a price built for one person who refuses to stay small.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="divide-y divide-border border-t border-border">
                {whatYouGet.map((f, i) => (
                  <div key={f.title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 md:gap-8">
                    <span className="text-lg font-extrabold tabular-nums text-[#0E9BAA]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{f.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-muted-foreground">{f.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pair with PRISM */}
      <Section className="bg-secondary text-secondary-foreground">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              The team is half of it.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-90">
              VersAssist gives you the team. PRISM teaches you how to use AI to direct that team. When
              you have both, you know how to win and you have the people to make it happen.
            </p>
            <Link href="/prism" className="mt-6 inline-block">
              <Button variant="secondary" size="lg">
                See PRISM <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Anthem video */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Relentless execution</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The VersAssist anthem. A global team that keeps the work moving while you sleep, the Uber of labor.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl border border-border shadow-lg">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/P0JYZzLHWfE"
                title="Relentless Execution | VersAssist Official Anthem"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Closing CTA — back to the real site */}
      <section className="relative overflow-hidden bg-[#081826] text-[#EAF6F8]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1"
          style={{ background: "linear-gradient(90deg, #3884FF, #22C7D6, #17B0C4)" }}
        />
        <Container size="md" className="py-20 text-center md:py-24">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">See it for yourself</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Visit VersAssist for the full story, the team, and client results.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={VERSASSIST_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#22C7D6] px-7 py-3.5 text-base font-semibold text-[#04141d] shadow-[0_0_40px_-8px_rgba(34,199,214,0.7)] transition hover:bg-[#3ad6e4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit versassists.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={INTRO_CALL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white/90 transition hover:border-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a call
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
