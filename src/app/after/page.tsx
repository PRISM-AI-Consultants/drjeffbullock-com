import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BookCta, PromptCard } from "./after-client";

export const metadata: Metadata = {
  title: "The After",
  description:
    "Your last meeting is worth more than the meeting was. A free four question debrief prompt from Dr. Jeff Bullock, PharmD. Copy it, paste it into any AI, use it after your next call.",
  alternates: { canonical: "https://drjeffbullock.com/after" },
  openGraph: {
    title: "The After | Dr. Jeff Bullock",
    description:
      "Everybody uses AI before the meeting. The money is in the after. Free prompt, two minutes.",
    url: "https://drjeffbullock.com/after",
    type: "article",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The After: turn your last meeting into your next advantage",
  description:
    "A three step loop for debriefing any meeting with AI, using a four question prompt.",
  totalTime: "PT2M",
  author: {
    "@type": "Person",
    name: "Dr. Jeff Bullock",
    honorificSuffix: "PharmD",
    url: "https://drjeffbullock.com",
  },
  step: [
    {
      "@type": "HowToStep",
      name: "Capture",
      text: "Record the conversation three ways, not one: in person, virtual, and over the phone. Most people only think about Zoom. That is the gap. Otter, Fathom, Fireflies, Granola, any of them work.",
    },
    {
      "@type": "HowToStep",
      name: "Run it",
      text: "Paste the transcript into the AI of your choice with the four question debrief prompt.",
    },
    {
      "@type": "HowToStep",
      name: "Use it",
      text: "The distance between having the meeting and learning from the meeting goes from never to same day.",
    },
  ],
};

const steps = [
  {
    no: "01",
    title: "Capture",
    body: "Three ways, not one: in person, virtual, and over the phone. Most people only think about Zoom. That is the gap. Otter, Fathom, Fireflies, Granola, any of them work.",
  },
  {
    no: "02",
    title: "Run it",
    body: "Paste the transcript into the AI of your choice with the prompt below. No setup, no tool to buy, no account to make.",
  },
  {
    no: "03",
    title: "Use it",
    body: "The distance between having the meeting and learning from the meeting goes from never to same day.",
  },
];

export default function AfterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* ============ HERO ============ */}
      <Section className="pt-14 pb-12 md:pt-24 md:pb-16">
        <Container size="md">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="eyebrow text-accent">The After</span>
          </div>

          <h1 className="mt-6 font-display font-extrabold tracking-[-0.035em] text-[clamp(2.4rem,8.5vw,4.6rem)] leading-[0.95]">
            Your last meeting is worth more than the meeting was.
          </h1>

          <p className="mt-7 font-serif text-[clamp(1.12rem,2.6vw,1.4rem)] leading-relaxed text-foreground/75 max-w-xl">
            Everybody uses AI before the meeting. Brainstorm the idea. Draft the
            agenda. Prep the pitch.
          </p>
          <p className="mt-4 font-display text-[clamp(1.35rem,4vw,2rem)] font-bold tracking-tight leading-tight">
            The money is in the after.
          </p>

          <p className="mt-7 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            You just walked out of the discovery call, the grant meeting, the
            site visit. That conversation is the richest data you will touch all
            week, and most people let it evaporate.
          </p>
        </Container>
      </Section>

      {/* ============ THE LOOP ============ */}
      <Section className="py-0">
        <Container size="md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border-y border-border">
            {steps.map((s) => (
              <article key={s.no} className="bg-background p-6 md:p-7">
                <div className="font-display text-[2.6rem] font-extrabold leading-none text-accent/90 tabular-nums">
                  {s.no}
                </div>
                <h2 className="mt-3 font-display text-xl font-bold tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ THE PROMPT ============ */}
      <Section className="pt-14 pb-12 md:pt-20 md:pb-16">
        <Container size="md">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-display text-sm font-semibold text-accent tabular-nums">
              04
            </span>
            <span className="h-px w-8 bg-accent" />
            <span className="eyebrow text-muted-foreground">Take this with you</span>
          </div>

          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.9rem,5.5vw,2.9rem)] leading-[1.02] max-w-lg">
            The four question debrief.
          </h2>

          <div className="mt-8">
            <PromptCard />
          </div>

          <p className="mt-7 font-serif text-[1.1rem] md:text-[1.25rem] leading-relaxed text-foreground/80 max-w-xl">
            Question 3 is the one that stings. It is also the one that changes
            your close rate.
          </p>
        </Container>
      </Section>

      {/* ============ WHO / PROOF / CTA ============ */}
      <Section className="pt-0 pb-20 md:pb-28">
        <Container size="md">
          <div className="border-t border-border pt-10 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
              <div className="md:col-span-7">
                <span className="eyebrow text-muted-foreground">
                  Who this is from
                </span>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/80">
                  Dr. Jeff Bullock, PharmD. PRISM AI Consultants, Allentown PA.
                  We install AI inside service businesses so the owner stops
                  doing the work a system should do.
                </p>

                <div className="mt-9">
                  <BookCta>Book a conversation</BookCta>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Want the loop installed on your actual business?
                </p>
              </div>

              <aside className="md:col-span-5">
                <figure className="border-l-2 border-accent pl-5 md:pl-6">
                  <blockquote className="font-serif text-[1.2rem] md:text-[1.35rem] leading-snug text-foreground/90">
                    &ldquo;If anybody has any AI questions, call Dr. Jeff. He is
                    the best.&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm leading-snug text-muted-foreground">
                    <span className="font-semibold text-foreground/80">
                      Nancy Devers
                    </span>
                    <br />
                    CLE Coordinator, Bar Association of Lehigh County
                  </figcaption>
                </figure>
                <a
                  href="https://proof.prismaiconsultants.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  13 more clients, on the record
                </a>
              </aside>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
