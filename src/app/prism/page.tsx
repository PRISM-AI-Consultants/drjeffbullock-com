import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";

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

const PRISM_SITE = "https://www.prismaiconsultants.com";
const INTRO_CALL = "https://calendly.com/prismaiconsultants/introductory-call";

const whatYouGet = [
  {
    title: "Strategy with Dr. Jeff",
    body: "Weekly strategy on where AI moves the needle in your business. Not theory. The specific moves that save time and make money this month.",
  },
  {
    title: "Know the tools",
    body: "The AI tools are powerful and often costly. We show you which ones matter for your business and exactly how to use them well.",
  },
  {
    title: "Workflows built for you",
    body: "We build AI workflows around how you actually operate, so the value shows up in your day, not in a slide deck.",
  },
  {
    title: "Deliverables you can use",
    body: "Documents, analyses, and assets produced with AI that you put to work immediately. The output is the product.",
  },
];

export default function PrismPage() {
  return (
    <>
      {/* Brand hero — near-black with a literal prism refraction */}
      <section className="relative overflow-hidden bg-[#0A0A0A] text-[#F5F5F4]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* soft pink core glow */}
          <div
            className="absolute -right-40 -top-40 h-[46rem] w-[46rem] rounded-full opacity-50 blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(255,20,147,0.35), transparent 62%)" }}
          />
          {/* refraction beam: white light fanning into the spectrum */}
          <div
            className="absolute right-[6%] top-1/2 h-[36rem] w-[44rem] -translate-y-1/2 rotate-[18deg] opacity-70 blur-2xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(245,245,244,0.9) 0%, rgba(245,245,244,0.15) 14%, rgba(0,153,255,0.55) 34%, rgba(0,194,209,0.55) 50%, rgba(255,77,141,0.55) 66%, rgba(255,179,71,0.55) 82%, rgba(255,77,42,0.55) 100%)",
              maskImage: "linear-gradient(90deg, black, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, black, transparent)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#0A0A0A]" />
        </div>

        <Container size="xl" className="relative">
          <div className="grid items-center gap-12 py-20 md:grid-cols-[1.15fr_.85fr] md:py-28">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF1493]">
                PRISM AI Consultants
              </span>
              <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
                Know how to
                <br />
                use AI.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                The tools are everywhere. The skill to use them is rare. That skill, applied inside
                your real business, is what PRISM gives you.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={PRISM_SITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#FF1493] px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(255,20,147,0.7)] transition hover:bg-[#ff3aa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Visit prismaiconsultants.com
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={INTRO_CALL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white/90 transition hover:border-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book an intro call
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div
                className="absolute inset-0 -z-0 rounded-full opacity-70 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(255,20,147,0.4), transparent 60%)" }}
              />
              <Image
                src="/images/prism-logo.png"
                alt="PRISM"
                width={520}
                height={520}
                priority
                className="relative z-10 mx-auto h-auto w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              />
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

      {/* The gap — editorial statement */}
      <Section>
        <Container size="lg">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground md:col-span-3 md:pt-2">
              The gap
            </p>
            <div className="md:col-span-9">
              <p className="text-2xl font-bold leading-snug tracking-tight md:text-4xl">
                Everyone has access to AI now. Almost no one knows how to use it.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                AI is the biggest lever of our lifetime. The tools are powerful, and many of them are
                expensive. They only pay off when you know how to use them inside your business. That
                know-how is the gap, and closing it is the whole point of PRISM.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What PRISM is */}
      <Section className="bg-muted/30">
        <Container size="lg">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Your AI business partner
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              PRISM teaches you to operate AI inside your actual business, then builds and runs the
              systems with you. The right tools, the right workflows, weekly strategy, and working
              software that ships in days. You walk in unsure where to start. You walk out running.
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
                Four things that turn AI from a buzzword into revenue.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="divide-y divide-border border-t border-border">
                {whatYouGet.map((f, i) => (
                  <div key={f.title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 md:gap-8">
                    <span className="text-lg font-extrabold tabular-nums text-[#FF1493]">
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

      {/* Pair with VersAssist */}
      <Section className="bg-secondary text-secondary-foreground">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              The knowledge is half of it.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-90">
              PRISM teaches you how to use AI. VersAssist gives you the AI-trained team to execute it.
              When you have both, you know how to win and you have the people to make it happen. That
              is the piece most people are missing.
            </p>
            <Link href="/versassist" className="mt-6 inline-block">
              <Button variant="secondary" size="lg">
                See VersAssist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Closing CTA — back to the real site */}
      <section className="relative overflow-hidden bg-[#0A0A0A] text-[#F5F5F4]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, #0099FF, #00C2D1, #FF4D8D, #FFB347, #FF4D2A)",
          }}
        />
        <Container size="md" className="py-20 text-center md:py-24">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Start with a conversation
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            See the full picture at PRISM, or book an introductory call with Dr. Jeff.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={PRISM_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#FF1493] px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(255,20,147,0.7)] transition hover:bg-[#ff3aa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit prismaiconsultants.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={INTRO_CALL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white/90 transition hover:border-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book an intro call
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
