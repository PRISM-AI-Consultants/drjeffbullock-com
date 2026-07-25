import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Plus,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 *  DYNAMIC HOOKS. FILL BEFORE THIS PAGE GOES LIVE.
 * ------------------------------------------------------------------ *
 *  1. STRIPE_PAYMENT_LINK. The live Stripe checkout/subscription link
 *     for the $297/mo Dr. Jeff Bot plan (14-day trial). Every
 *     "Start your 14-day trial" button points here.
 *
 *  2. BOT_CHAT_URL. The live chat embed. Intended value:
 *     https://bot.drjeffbullock.com  Powers the "Try it free" section:
 *     when it is a real URL the chat iframe renders; while it is still
 *     the placeholder, a graceful fallback panel shows instead so the
 *     page never ships a broken frame.
 * ------------------------------------------------------------------ */
const STRIPE_PAYMENT_LINK = "{{STRIPE_PAYMENT_LINK}}";
const BOT_CHAT_URL = "https://drjeffbot.drjeffbullock.com";

// True only once Jeff pastes a real URL over the placeholder above.
const botChatReady = !BOT_CHAT_URL.includes("{{");

export const metadata: Metadata = {
  title: "Dr. Jeff Bot - Tell me your goal, I will walk you to the build",
  description:
    "24/7 access to Dr. Jeff Bullock, Pharm.D. Bring your goal. Dr. Jeff Bot diagnoses where your business is and prescribes the exact AI build that gets you there. $297/mo, 14-day free trial.",
  openGraph: {
    title: "Dr. Jeff Bot",
    description:
      "Bring a goal. Dr. Jeff Bot finds the gap, walks you up the User to Operator ladder, and prescribes the one build that moves it. $297/mo, 14-day free trial.",
  },
};

// The diagnose - walk - prescribe loop the bot runs on every goal.
const loopMoves = [
  {
    n: "Move 01",
    title: "Diagnose the gap",
    body: "It asks before it pitches. It narrows a vague goal to the one real bottleneck, usually money, deal flow, or the volume of conversations you are having.",
    say: "What is costing you operational drag? Where are your leverage gaps?",
  },
  {
    n: "Move 02",
    title: "Walk the ladder",
    body: "It places you on the User to Operator ladder, from typing one line into a chatbot to running your own agent stack, then hands you the next rung with a concrete first action.",
    say: "Meet you where you are, and hand you the very next step. One rung at a time.",
  },
  {
    n: "Move 03",
    title: "Prescribe the build",
    body: "The single build with the highest leverage on your goal, plus the dated play. This week do these things, this month do these things.",
    say: "Every friction point is a build you can remove. We start with one.",
  },
];

// The 7-rung User to Operator ladder. `here` marks the "you are here" rung.
const ladder = [
  {
    lv: "L1",
    name: "Foundations",
    detail: "Prompting, voice, custom instructions. Where almost everyone is stuck.",
    here: true,
  },
  {
    lv: "L2",
    name: "Desktop",
    detail: "AI working on your actual files. No uploading, no switching tools.",
  },
  {
    lv: "L3",
    name: "Connectors",
    detail: "Gmail, Calendar, Drive. The first big unlock. Now it can act.",
  },
  {
    lv: "L4",
    name: "Work tools",
    detail: "Co-working inside Canva, Figma, Monday, Asana.",
  },
  {
    lv: "L5",
    name: "Computer use",
    detail: "The terminal and the browser. It starts operating the machine.",
  },
  {
    lv: "L6",
    name: "Building",
    detail: "VS Code plus Claude. You start building in the editor.",
  },
  {
    lv: "L7",
    name: "Infrastructure",
    detail: "Your own server, API key, and domains. You own the stack.",
  },
];

// Real goals owners bring, and the first move each becomes.
const asks = [
  {
    q: "Get me more leads without cold outreach.",
    r: "Reframe to deal flow, then a speed to lead system so no inquiry ever sits waiting.",
    goal: "Growth",
  },
  {
    q: "Turn my book into a business.",
    r: "One manuscript becomes a catalog. Course, content, audiobook, and a site that sells it.",
    goal: "Leverage",
  },
  {
    q: "Automate the admin that eats my week.",
    r: "Name the repeated tasks, keep the human on judgment, automate the rest into a flow.",
    goal: "Time back",
  },
  {
    q: "Launch a site this weekend.",
    r: "Pick the offer, draft the page, ship it live. Start from the middle, with a rough draft already on the screen.",
    goal: "Ship it",
  },
  {
    q: "Make my content without me being the bottleneck.",
    r: "Your teaching and calls become transcripts. The posts flow from there, you keep the taste.",
    goal: "Reach",
  },
];

// Honest objection handling.
const objections = [
  {
    heard: "I am not technical.",
    body: "You do not have to be. Dr. Jeff is not a coder either. The skill is directing AI, structuring what you want, and stress testing the output. What you need is a better compass, and that is exactly what it hands you.",
    line: "You direct it. It does the building.",
  },
  {
    heard: "Will it replace me?",
    body: "The frame is the great leveler. You get your human team and an AI team you direct. Humans stay on taste, judgment, verification, and accountability. The real risk is standing still while others build.",
    line: "Multiplication always wins. Be the one running it.",
  },
  {
    heard: "Will it actually sound like me, and get things right?",
    body: "Dr. Jeff Bot is trained on Dr. Jeff's real frameworks, books, and coaching, which is what makes it different from generic AI with none of your material. It leads with the answer, gives you something usable first, and keeps a human in the loop to sharpen it. When it does not know something, it says so and points you to Dr. Jeff, rather than making it up.",
    line: "Proof of reality is the whole point. It shows its work and flags what it is unsure of.",
    wide: true,
  },
];

const includes = [
  {
    lead: "24/7 access",
    rest: " to Dr. Jeff Bullock, trained on his real frameworks.",
  },
  { lead: "", rest: "Goal to build diagnosis. Bring a goal, get the one first move." },
  {
    lead: "",
    rest: "The User to Operator ladder, mapped to where you are today.",
  },
  {
    lead: "",
    rest: "Dr. Jeff's prompting method, stress test, and grade then elevate.",
  },
  { lead: "", rest: "Dated plays. What to do this week, what to do this month." },
];

const faqs = [
  {
    q: "What exactly is Dr. Jeff Bot?",
    a: "It is a subscription AI version of Dr. Jeff Bullock, Pharm.D., founder and CEO of PRISM AI Consultants. It is trained on his real frameworks and coaching, so it works like a goal achievement partner. You bring a goal, it diagnoses where your business is, walks you up the ladder, and prescribes the specific AI build that gets you there.",
    open: true,
  },
  {
    q: "Who is it for?",
    a: "Business owners who know AI matters but do not know what to build first. If you have tried a few tools and felt like you were getting generic junk back, that almost always comes down to the input you give it. Dr. Jeff Bot fixes that.",
  },
  {
    q: "How is this different from just using ChatGPT or Claude?",
    a: "Generic AI does not have Dr. Jeff's frameworks, his diagnostic, or his method for turning a goal into a single first build. This is his approach, on call. It leads with the answer, gives you something usable first, and always ends on a concrete next step.",
  },
  {
    q: "What does it cost, and is there a trial?",
    a: "$297 per month, with a 14-day free trial. You are not charged during the trial and you can cancel anytime.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. Dr. Jeff is not a coder either. The skill is directing AI, and the bot teaches you to do exactly that. If you can talk, you can drive it. It will even show you how to turn on voice dictation so you can just speak.",
  },
  {
    q: "Will it replace working with the real Dr. Jeff and PRISM?",
    a: "It is the on-call layer. It diagnoses and prescribes, and it points you to PRISM when a goal calls for a custom build that the team installs, builds, and runs with you. Off-the-shelf gets you started. A custom build scales it.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Dr. Jeff Bot",
  description:
    "A subscription AI version of Dr. Jeff Bullock, Pharm.D., trained on his real frameworks and coaching. Bring a goal, get a diagnosis and the specific AI build that gets you there.",
  brand: { "@type": "Brand", name: "PRISM AI Consultants" },
  offers: {
    "@type": "Offer",
    price: "297.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://drjeffbullock.com/dr-jeff-bot",
  },
};

export default function DrJeffBotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* ============================ HERO ============================ */}
      {/* Asymmetric editorial hero: copy left, live chat mock right.     */}
      <Section className="pt-14 md:pt-20">
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <div>
              <span className="eyebrow text-muted-foreground">
                AI implementation for business owners
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tight md:text-6xl">
                Tell me your goal. I will walk you to the{" "}
                <span className="relative whitespace-nowrap text-accent">
                  AI build
                </span>{" "}
                that gets you there.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                24/7 access to Dr. Jeff Bullock, Pharm.D., trained on his real
                frameworks. Bring a goal. Dr. Jeff Bot finds the gap, walks you
                up the User to Operator ladder, and prescribes the one build
                that moves it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {/* ⛔ href = STRIPE_PAYMENT_LINK (see top of file) */}
                <a href={STRIPE_PAYMENT_LINK}>
                  <Button size="lg">
                    Start your 14-day trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#try">
                  <Button size="lg" variant="secondary">
                    Try it free first
                  </Button>
                </a>
              </div>
              <p className="mt-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-bold text-foreground">$297/mo</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                14-day free trial
                <span className="h-1 w-1 rounded-full bg-border" />
                cancel anytime
              </p>
            </div>

            {/* Live chat mock. A first-class page element, not a floating widget. */}
            <div className="w-full">
              <div
                className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-card shadow-md"
                role="img"
                aria-label="Sample conversation with Dr. Jeff Bot. The owner says they want more leads but hate cold outreach. Dr. Jeff Bot reframes the goal to deal flow and prescribes a first build."
              >
                <div className="h-1 w-full bg-accent" />
                <div className="flex items-center gap-3 border-b border-border p-4">
                  <span
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-sm font-extrabold text-accent-foreground"
                    aria-hidden="true"
                  >
                    JB
                  </span>
                  <span className="leading-tight">
                    <b className="block text-sm">Dr. Jeff Bot</b>
                    <span className="text-xs text-muted-foreground">
                      Founder and CEO, PRISM
                    </span>
                  </span>
                  <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                    <i className="inline-block h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-500/25" />
                    online
                  </span>
                </div>
                <div className="flex flex-col gap-3 bg-muted/40 p-4">
                  <div className="max-w-[86%] self-end rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-sm font-medium text-accent-foreground">
                    I want more leads, but I hate cold outreach.
                  </div>
                  <div className="max-w-[86%] self-start rounded-2xl rounded-bl-sm border border-border bg-card px-3.5 py-2.5 text-sm text-muted-foreground">
                    Then leads is the goal. Cold outreach is just one path, and
                    it is the one draining you. So the real gap is{" "}
                    <b className="text-foreground">deal flow</b>, agreed?
                  </div>
                  <div className="max-w-[86%] self-end rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-sm font-medium text-accent-foreground">
                    Yeah. That is exactly it.
                  </div>
                  <div className="max-w-[86%] self-start rounded-2xl rounded-bl-sm border border-border bg-card px-3.5 py-2.5 text-sm text-muted-foreground">
                    Good. Here is your first build. A speed to lead system on
                    your own site, so every inquiry gets answered in seconds and
                    nothing sits waiting. That is where your money is leaking.
                    Want the step by step?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credibility strip: real, verifiable, no invented claims. */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
            <span className="eyebrow text-muted-foreground">
              Who you are talking to
            </span>
            {[
              "Pharm.D., founder and CEO of PRISM AI Consultants",
              "18 years at CVS Health, clerk to district leader",
              "Host of AI Hustle with Dr. Jeff",
              "Author of A Prompt's Power and The Black Advantage",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check className="h-4 w-4 flex-none text-accent" />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================ THE LOOP ============================ */}
      <Section className="border-y border-border bg-muted/30">
        <Container size="xl">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">
              The loop it runs on every goal
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Most AI advice hands you tips. This diagnoses, then prescribes.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Prompt libraries and half-finished courses leave you stuck on the
              real question, which is what to build first. Dr. Jeff Bot runs the
              same three moves Dr. Jeff runs live with clients.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {loopMoves.map((m) => (
              <div key={m.n} className="border-t-2 border-accent pt-5">
                <span className="font-serif text-sm font-semibold text-accent">
                  {m.n}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight">
                  {m.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
                <p className="mt-4 border-l-2 border-border pl-3 font-serif text-sm italic text-muted-foreground">
                  {m.say}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================ THE LADDER ============================ */}
      <Section>
        <Container size="xl">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">
              The User to Operator ladder
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              The bottleneck was never the tool. It was knowing what to ask.
            </h2>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                Stop being a User. Start being an Operator.
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The models are free and everyone has them. Almost nobody climbs
                past the bottom rung. Dr. Jeff Bot finds the rung you are
                standing on and gets you to the next one, on your real work, not
                in a sandbox.
              </p>
              <p className="mt-6 border-l-[3px] border-accent pl-4 font-serif text-lg leading-snug italic text-foreground">
                An AI model is just a mirror. It reflects what you bring to it.
              </p>
            </div>

            <ol className="flex flex-col">
              {ladder.map((rung) => (
                <li
                  key={rung.lv}
                  className={
                    rung.here
                      ? "-mx-3 grid grid-cols-[2.5rem_1fr] items-baseline gap-4 rounded-[var(--radius-md)] border-b border-border bg-accent/10 px-3 py-4"
                      : "grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-border px-0 py-4 last:border-b-0"
                  }
                >
                  <span
                    className={
                      rung.here
                        ? "text-xs font-bold tracking-widest text-accent"
                        : "text-xs font-bold tracking-widest text-muted-foreground"
                    }
                  >
                    {rung.lv}
                  </span>
                  <span>
                    <b className="text-base">{rung.name}</b>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {rung.detail}
                    </span>
                    {rung.here && (
                      <span className="mt-1 inline-block text-xs font-bold uppercase tracking-wide text-accent">
                        Most owners start here
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* ============================ WHAT TO ASK ============================ */}
      <Section className="border-y border-border bg-muted/30" id="ask">
        <Container size="xl">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">Bring a real goal</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              You bring the goal. It brings the build.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Talk to it the way you would brief a smart new hire. Here is how a
              goal becomes a first move.
            </p>
          </div>

          <div className="mt-12 border-t border-border">
            {asks.map((a) => (
              <div
                key={a.q}
                className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-border py-6 sm:grid-cols-[1.1fr_1fr_auto] sm:items-center"
              >
                <p className="font-serif text-xl tracking-tight text-foreground md:text-2xl">
                  <span className="mr-1.5 font-serif text-2xl text-border">
                    &ldquo;
                  </span>
                  {a.q}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {a.r}
                </p>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground sm:text-right">
                  {a.goal}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================ OBJECTIONS ============================ */}
      <Section>
        <Container size="xl">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">Honest answers</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              The three things owners always worry about.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {objections.map((o) => (
              <div
                key={o.heard}
                className={
                  o.wide
                    ? "rounded-[var(--radius-lg)] border border-border bg-card p-7 shadow-sm md:col-span-2"
                    : "rounded-[var(--radius-lg)] border border-border bg-card p-7 shadow-sm"
                }
              >
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  You might be thinking
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight">
                  &ldquo;{o.heard}&rdquo;
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {o.body}
                </p>
                <p className="mt-4 font-serif text-base italic text-foreground">
                  {o.line}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================ PRICING ============================ */}
      <Section className="border-y border-border bg-muted/30" id="pricing">
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow text-muted-foreground">Pricing</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                One number. The partner is on call, day and night.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A developer to stand up an agent stack runs into the thousands,
                and you still cannot drive it. A generic course costs a couple
                hundred and nothing runs on your business. Dr. Jeff Bot is the
                compass and the coach, always there the moment you have a goal or
                get stuck.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Start with the trial. Bring one real goal this week and watch it
                turn into a build.
              </p>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-card p-8 shadow-md">
              <div className="-mx-8 -mt-8 mb-8 h-1 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Dr. Jeff Bot
              </span>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-serif text-5xl font-bold tracking-tight">
                  $297
                </span>
                <span className="text-base font-semibold text-muted-foreground">
                  / month
                </span>
              </div>
              <Badge variant="accent" className="mt-4 gap-1.5 py-1">
                <Clock className="h-3.5 w-3.5" />
                14-day free trial
              </Badge>

              <ul className="mt-8 flex flex-col gap-3.5 border-t border-border pt-8">
                {includes.map((inc) => (
                  <li
                    key={inc.rest}
                    className="grid grid-cols-[auto_1fr] items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <span>
                      {inc.lead && (
                        <b className="font-semibold text-foreground">
                          {inc.lead}
                        </b>
                      )}
                      {inc.rest}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ⛔ href = STRIPE_PAYMENT_LINK (see top of file) */}
              <a href={STRIPE_PAYMENT_LINK} className="mt-8 block">
                <Button size="lg" className="w-full">
                  Start your 14-day trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                No charge for 14 days. Cancel anytime.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================ TRY IT FREE ============================ */}
      <Section id="try">
        <Container size="xl">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">Try it free</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Do not take our word for it. Ask it something.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Bring a real goal right now. See what the diagnosis feels like
              before you start the trial.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-border bg-card shadow-md">
            <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="h-2.5 w-2.5 rounded-full bg-border" />
                <i className="h-2.5 w-2.5 rounded-full bg-border" />
                <i className="h-2.5 w-2.5 rounded-full bg-border" />
              </span>
              <span className="text-sm tabular-nums text-muted-foreground">
                bot.drjeffbullock.com
              </span>
              <span className="ml-auto text-xs font-bold uppercase tracking-widest text-accent">
                Live
              </span>
            </div>

            {/*
              ⛔ The chat embed uses BOT_CHAT_URL (top of file).
              While it is still the placeholder, the fallback panel renders so
              the page never ships a broken iframe. Once Jeff pastes the real
              URL (https://bot.drjeffbullock.com), the iframe renders instead.
            */}
            {botChatReady ? (
              <iframe
                title="Chat with Dr. Jeff Bot"
                src={BOT_CHAT_URL}
                loading="lazy"
                className="block h-[560px] w-full border-0 bg-muted/40"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 bg-muted/40 px-6 py-20 text-center">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-accent-foreground"
                  aria-hidden="true"
                >
                  JB
                </span>
                <p className="max-w-md leading-relaxed text-muted-foreground">
                  The live chat opens here once the embed URL is connected. In
                  the meantime, open Dr. Jeff Bot in a new tab and bring it a
                  goal.
                </p>
                {/* ⛔ href = BOT_CHAT_URL (see top of file) */}
                <a href={BOT_CHAT_URL} target="_blank" rel="noopener noreferrer">
                  <Button>
                    Open the chat
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ============================ FAQ ============================ */}
      <Section className="border-y border-border bg-muted/30">
        <Container size="md">
          <div className="max-w-2xl">
            <span className="eyebrow text-muted-foreground">Questions</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Before you start.
            </h2>
          </div>

          <div className="mt-10 border-t border-border">
            {faqs.map((f) => (
              <details
                key={f.q}
                open={f.open}
                className="group border-b border-border"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="ml-auto h-5 w-5 flex-none text-muted-foreground transition-transform duration-200 group-open:rotate-45 group-open:text-accent" />
                </summary>
                <p className="max-w-[70ch] pb-6 leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================ FINAL CTA ============================ */}
      <Section>
        <Container size="md">
          <div className="text-center">
            <div
              className="mx-auto mb-8 h-[3px] w-16 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #0099FF, #00C2D1, #FF4D8D, #FFB347, #FF4D2A)",
              }}
            />
            <h2 className="mx-auto max-w-[20ch] text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Bring one goal. Walk out with a build.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              The people thriving stopped running faster and started building.
              Start there tonight, with one real goal.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {/* ⛔ href = STRIPE_PAYMENT_LINK (see top of file) */}
              <a href={STRIPE_PAYMENT_LINK}>
                <Button size="lg">
                  Start your 14-day trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#try">
                <Button size="lg" variant="secondary">
                  Try it free
                </Button>
              </a>
            </div>
            <p className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="font-bold text-foreground">$297/mo</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              14-day free trial
              <span className="h-1 w-1 rounded-full bg-border" />
              cancel anytime
            </p>
            <p className="mt-10 font-serif text-lg italic text-muted-foreground">
              This is AI Hustle with Dr. Jeff, and remember, be nice to
              yourself.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Dr. Jeff Bot is the compass that gets you started. When a goal
              calls for a custom build,{" "}
              <Link href="/prism" className="font-medium text-accent hover:underline">
                PRISM installs it, builds it, and runs it with you
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
