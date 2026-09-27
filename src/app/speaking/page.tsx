import type { Metadata } from "next";
import Image from "next/image";
import { getBookCounts } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LiteYouTube } from "@/components/ui/lite-youtube";
import { SpeakingInquiryForm } from "@/components/ui/speaking-inquiry-form";
import { Mic, Users, Building2, Monitor, ArrowRight, Download, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Book Dr. Jeff Bullock for keynotes and workshops on AI that actually works. Opening keynote at the PA SHRM State Conference in 2025 and 2026. Every talk includes a live AI build with volunteers from the audience. Based in Lehigh Valley, PA.",
  openGraph: { images: ["/images/speaking/pa-shrm-2026-keynote-gesture.jpg"] },
};

const VIDEOS = {
  reel: "LD_4ZoSdz7g",
  keynote: "lAx1SRTICps",
  liveBuild: "CmFcmdVt-8k",
  testimonials: "emD7VLaE3cI",
};

const proofPoints = [
  "Opening keynote at the PA SHRM State Conference, 2025 and 2026",
  "A live AI build on stage in every talk, using real problems from the room",
  "Doctor of Pharmacy, 18 years at CVS Health",
  "Founder of PRISM AI Consultants and co-founder of VersAssist",
];

const stages = ["PA SHRM", "Lehigh University", "DeSales University", "Executive Forum of the Lehigh Valley", "Greater Lehigh Valley Chamber", "IFEL / Verizon"];

const testimonials = [
  {
    quote: "He was engaging and fun. He made everybody laugh. I didn't only learn, I was using what I learned right here.",
    name: "Angela Jeffries",
    role: "PA SHRM 2026 attendee",
  },
  {
    quote: "A lot of these AI chats have been very high level, and this was very tactical. What can we do right now, today, tomorrow?",
    name: "Anthony Fernandez",
    role: "SSP International",
  },
  {
    quote: "I saw him last year, too. So I was excited for his presentation again.",
    name: "Ala Ingros",
    role: "HR, InFirst Bank",
  },
];

const topics = [
  {
    title: "AI That Actually Works",
    tag: "Signature keynote",
    description:
      "The PA SHRM 2026 opening keynote. Volunteers bring a real problem from their job to the stage, and we solve it with AI in front of the room. Open enrollment questions, pay benchmarking, the work that eats a week. The audience leaves having watched it done, not described.",
    audience: "HR leaders, association conferences, leadership teams",
  },
  {
    title: "Capture, Connect, Direct",
    tag: "Framework talk",
    description:
      "The three habits that separate teams who get results from AI from teams who just have logins. Capture what you know, connect it to the tools, and direct the AI like a manager directs a team. Practical, repeatable, and built for people who are not technical.",
    audience: "Executives, operations teams, chambers and business groups",
  },
  {
    title: "The Operator Mindset",
    tag: "Leadership",
    description:
      "Why systems thinking beats hustle culture. How to build repeatable processes that compound over time, with AI as the force multiplier and your people still at the center.",
    audience: "Entrepreneurs, founders, operations leaders",
  },
  {
    title: "From Pharmacy to AI",
    tag: "Story keynote",
    description:
      "Eighteen years in healthcare, from pharmacy clerk to district leader at CVS Health, then a leap into entrepreneurship and AI. What it takes to reinvent a career, and why the skills you already have transfer further than you think.",
    audience: "Career changers, healthcare professionals, student and alumni events",
  },
];

const formats = [
  { icon: Mic, title: "Keynote", duration: "45 to 60 minutes", description: "Opening or closing keynote with a live AI build on stage." },
  { icon: Users, title: "Workshop", duration: "Half day or full day", description: "Hands-on. Every attendee builds something they use the next morning." },
  { icon: Building2, title: "Breakout or Panel", duration: "30 to 60 minutes", description: "Focused session, fireside chat, or panel for a conference track." },
  { icon: Monitor, title: "Virtual", duration: "Any format", description: "The same live build, delivered to a remote or hybrid audience." },
];

const upcomingEvents = [
  { event: "High Center Nonprofit: Turning Data into Storytelling for Fundraising", date: "October 7, 2026", iso: "2026-10-07", venue: "S. Dale High Leadership Center, Lancaster, PA", type: "Panel" },
  { event: "ALCA Mid-Atlantic 2026, General Session", date: "November 9, 2026", iso: "2026-11-09", venue: "Falls Church Marriott Fairview Park, VA", type: "General Session" },
  { event: "McKinney Media Headshot Happy Hour", date: "November 19, 2026", iso: "2026-11-19", venue: "The Swiftwater, Pocono region, PA", type: "Talk" },
  { event: "SEPA SHRM Chapter Meeting", date: "January 19, 2027", iso: "2027-01-19", venue: "Southeastern PA", type: "Talk" },
];

const pastEvents = [
  { event: "PA SHRM 2026 Annual Conference, Opening Keynote", date: "September 11, 2026", iso: "2026-09-11", venue: "Wyndham Lancaster Resort, Lancaster, PA", type: "Keynote" },
  { event: "The High Center (Elizabethtown College), KL2 Peer Group", date: "August 25, 2026", iso: "2026-08-25", venue: "Allentown, PA", type: "Workshop" },
  { event: "Ideas to Income Summit: Build It Live With AI", date: "August 19, 2026", iso: "2026-08-19", venue: "Virtual", type: "Summit" },
  { event: "Allentown Area Real Estate Investors Club", date: "June 17, 2026", iso: "2026-06-17", venue: "Allentown, PA", type: "Guest Speaker" },
  { event: "Delta Sigma Theta, Collin County Alumni Chapter: Delta and AI", date: "May 4, 2026", iso: "2026-05-04", venue: "Virtual", type: "Panel" },
  { event: "Lehigh Valley Business Summit: AI in Action", date: "April 30, 2026", iso: "2026-04-30", venue: "DeSales University, Center Valley, PA", type: "Panel" },
  { event: "Zoellner Arts Center: AI in Arts and Culture", date: "April 28, 2026", iso: "2026-04-28", venue: "Lehigh University, Bethlehem, PA", type: "Talk and Panel" },
  { event: "AABLC Masterclass: ROI from AI", date: "March 20, 2026", iso: "2026-03-20", venue: "Greater Lehigh Valley Chamber (virtual)", type: "Masterclass" },
  { event: "Allentown School District College and Career Symposium", date: "March 10, 2026", iso: "2026-03-10", venue: "Muhlenberg College, Allentown, PA", type: "Panel" },
  { event: "IFEL / Verizon AI Readiness Series", date: "January to April 2026", iso: "2026-01-29", venue: "Virtual (content, storytelling, and research sessions)", type: "Webinars" },
  { event: "Executive Forum of the Lehigh Valley: Beyond the Buzz, Real AI for Real Business", date: "November 19, 2025", iso: "2025-11-19", venue: "DeSales University, Center Valley, PA", type: "Presenter" },
  { event: "Lehigh University MBA AI Workshop", date: "October 13, 2025", iso: "2025-10-13", venue: "Lehigh University, Bethlehem, PA", type: "Workshop" },
  { event: "PA SHRM 2025 State Conference, Opening Keynote", date: "September 12, 2025", iso: "2025-09-12", venue: "The Penn Stater, State College, PA", type: "Keynote" },
  { event: "Faulkner Automotive Group AI Training", date: "May 21, 2025", iso: "2025-05-21", venue: "Downingtown, PA", type: "Workshop" },
  { event: "Central Keystone Valley HR Professionals: AI Strategies for HR Leaders", date: "January 15, 2025", iso: "2025-01-15", venue: "Virtual", type: "Talk" },
];

const photos = [
  { src: "/images/speaking/pa-shrm-2026-ballroom.jpg", alt: "The full ballroom at the PA SHRM 2026 opening keynote" },
  { src: "/images/speaking/pa-shrm-2026-keynote-podium.jpg", alt: "Dr. Jeff Bullock at the PA SHRM podium" },
  { src: "/images/speaking/pa-shrm-2026-live-build.jpg", alt: "Dr. Jeff Bullock running a live AI build on stage with a volunteer" },
  { src: "/images/speaking/pa-shrm-2026-stage-crowd.jpg", alt: "The PA SHRM 2026 stage seen over the audience" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoObject",
      name: "Full Keynote: AI That Actually Works | PA SHRM 2026 | Dr. Jeff Bullock",
      description: "Dr. Jeff Bullock's opening keynote at the PA SHRM 2026 Annual Conference, including live AI builds with audience volunteers.",
      thumbnailUrl: `https://i.ytimg.com/vi/${VIDEOS.keynote}/hqdefault.jpg`,
      uploadDate: "2026-09-26",
      duration: "PT34M25S",
      embedUrl: `https://www.youtube.com/embed/${VIDEOS.keynote}`,
      contentUrl: `https://www.youtube.com/watch?v=${VIDEOS.keynote}`,
    },
    ...upcomingEvents.map((evt) => ({
      "@type": "Event",
      name: evt.event,
      startDate: evt.iso,
      eventStatus: "https://schema.org/EventScheduled",
      performer: { "@type": "Person", name: "Dr. Jeff Bullock" },
      location: { "@type": "Place", name: evt.venue },
    })),
    ...pastEvents.map((evt) => ({
      "@type": "Event",
      name: evt.event,
      startDate: evt.iso,
      performer: { "@type": "Person", name: "Dr. Jeff Bullock" },
      eventAttendanceMode: evt.venue.toLowerCase().includes("virtual")
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: evt.venue },
    })),
  ],
};

export default function SpeakingPage() {
  const bookCounts = getBookCounts();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero: reel first, proof beside it */}
      <Section className="pt-10 md:pt-14">
        <Container size="xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Speaking</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">
            The AI keynote where the audience watches it get built.
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-2xl">
                <LiteYouTube id={VIDEOS.reel} title="Dr. Jeff Bullock speaker reel, PA SHRM 2026" priority />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Speaker reel, PA SHRM 2026 opening keynote (1:36)</p>
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <ul className="space-y-4">
                {proofPoints.map((p) => (
                  <li key={p} className="flex gap-3 text-base">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#inquire" className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-6 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
                  Check your date <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#keynote" className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-border px-6 text-base font-medium transition-colors hover:bg-muted">
                  Watch the full keynote
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stages strip */}
      <div className="border-y border-border bg-muted/30">
        <Container size="xl">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="text-xs font-medium normal-case tracking-normal">Stages include</span>
            {stages.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </Container>
      </div>

      {/* Full keynote + live build */}
      <Section id="keynote">
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight">See the whole talk</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Most speakers send a two-minute reel. Here is the full opening keynote from PA SHRM 2026, and a live build where an HR volunteer brought her open enrollment problem to the stage.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <div className="aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-border">
                <LiteYouTube id={VIDEOS.keynote} title="Full Keynote: AI That Actually Works, PA SHRM 2026" />
              </div>
              <p className="mt-3 font-semibold">Full keynote: AI That Actually Works</p>
              <p className="text-sm text-muted-foreground">PA SHRM 2026 opening keynote, 34 minutes, with chapters</p>
            </div>
            <div>
              <div className="aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-border">
                <LiteYouTube id={VIDEOS.liveBuild} title="Live on Stage: Solving Open Enrollment with AI, PA SHRM 2026" />
              </div>
              <p className="mt-3 font-semibold">Live on stage: solving open enrollment with AI</p>
              <p className="text-sm text-muted-foreground">A real problem from the room, solved in front of the audience, 7 minutes</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {photos.map((photo) => (
              <div key={photo.src} className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-lg)] border border-border">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* What audiences say */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight">What the room said</h2>
          <p className="mt-3 text-muted-foreground">Recorded right after the PA SHRM 2026 keynote.</p>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-border">
                <LiteYouTube id={VIDEOS.testimonials} title="What HR leaders said after the PA SHRM 2026 keynote" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:col-span-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="rounded-[var(--radius-lg)] border border-border bg-card p-5">
                  <blockquote className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-3 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-muted-foreground">, {t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <a
            href="https://proof.prismaiconsultants.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            <ShieldCheck className="h-4 w-4" /> See the full proof library: client results, recordings, and receipts
          </a>
        </Container>
      </Section>

      {/* Topics */}
      <Section>
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Talks</h2>
          <p className="mt-3 text-muted-foreground">Every talk includes a live AI build. Each one is tailored to the room.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {topics.map((topic) => (
              <Card key={topic.title}>
                <CardHeader>
                  <Badge variant="outline" className="w-fit">{topic.tag}</Badge>
                  <h3 className="mt-2 text-xl font-bold">{topic.title}</h3>
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

      {/* Formats + fees */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Formats</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {formats.map((format) => (
              <div key={format.title} className="rounded-[var(--radius-lg)] border border-border bg-card p-6">
                <format.icon className="mb-4 h-7 w-7 text-accent" />
                <h3 className="text-lg font-bold">{format.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{format.duration}</p>
                <p className="mt-3 text-sm text-muted-foreground">{format.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Fees:</span> keynotes $10,000 to $20,000. Workshops $7,500 to $15,000. Multi-session packages are available.
          </p>
        </Container>
      </Section>

      {/* About + appearances */}
      <Section>
        <Container size="xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">About the speaker</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Dr. Jeff Bullock is the Founder and CEO of PRISM AI Consultants and CEO and co-founder of VersAssist. He earned his Doctor of Pharmacy from Xavier University of Louisiana and spent 18 years at CVS Health, rising from pharmacy clerk to district leader.
                </p>
                <p>
                  He founded PRISM AI Consultants in June 2023 and has coached business leaders across more than 750 sessions on putting AI to work. He is the author of {bookCounts.published} published books and chairs engagement for the African American Business Leaders Council of the Greater Lehigh Valley Chamber.
                </p>
                <p>He does not just talk about what AI can do. He builds it in front of you.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://speaker.prismaiconsultants.com/Dr-Jeff-Bullock-Speaker-Kit-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  <Download className="h-4 w-4" /> Speaker kit (PDF): bios, headshots, tech needs
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Coming up</h2>
              <div className="mt-4 mb-10 space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.event} className="flex items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-accent/40 bg-accent/5 p-4">
                    <div>
                      <h3 className="text-sm font-bold">{event.event}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">{event.venue}, {event.date}</p>
                    </div>
                    <Badge variant="outline" className="flex-shrink-0">{event.type}</Badge>
                  </div>
                ))}
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Recent stages</h2>
              <div className="mt-4 space-y-3">
                {pastEvents.map((event) => (
                  <div key={event.event} className="flex items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-border bg-card p-4">
                    <div>
                      <h3 className="text-sm font-bold">{event.event}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">{event.venue}, {event.date}</p>
                    </div>
                    <Badge variant="outline" className="flex-shrink-0">{event.type}</Badge>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Also live every week: AI Hustle with Dr. Jeff on LinkedIn Live, Tuesdays at 2 PM ET.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Inquiry */}
      <Section id="inquire" className="scroll-mt-20 border-t border-border bg-muted/30">
        <Container size="md">
          <h2 className="text-3xl font-extrabold tracking-tight">Check your date</h2>
          <p className="mt-3 mb-8 text-muted-foreground">
            Tell us about the event. You will hear back from a person on the PRISM team, not an autoresponder.
          </p>
          <SpeakingInquiryForm />
          <p className="mt-6 text-sm text-muted-foreground">
            Prefer to talk first?{" "}
            <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">
              Book a short intro call
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
