import type { Metadata } from "next";
import Image from "next/image";
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
  description: "Book Dr. Jeff Bullock for keynotes and workshops on AI implementation. Featured at SHRM, DeSales University, IFEL, and TSPN (100K+ viewers). Based in Lehigh Valley, PA.",
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
    description: "18 years in healthcare, then a leap into entrepreneurship and AI. The lessons learned, the mistakes made, and why the best time to pivot is now.",
    audience: "Career changers, healthcare professionals, anyone considering a pivot",
  },
  {
    title: "Building with AI: From Idea to Shipped Product",
    description: "How one person built 54 AI modules, written 17 books, shipped 16 games, and produced a 19-track album, all with AI as a co-pilot.",
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

const upcomingEvents = [
  { event: "Lehigh Valley Business Summit", date: "April 30, 2026", venue: "DeSales University, Center Valley, PA", type: "Keynote / Panel" },
];

const pastEvents = [
  { event: "McKinney Media Headshot Happy Hour", date: "March 11, 2026", venue: "The Jone(s) Collective, Allentown, PA", type: "Guest Segment" },
  { event: "IFEL Ask the Expert: AI Storytelling Techniques", date: "February 26, 2026", venue: "IFEL", type: "Workshop" },
  { event: "AI Hustle with Dr. Jeff", date: "Weekly, Tuesdays 2PM ET", venue: "LinkedIn Live", type: "Live Show" },
  { event: "YouTube Live with Dr. Jeff", date: "Weekly, Thursdays 2PM ET", venue: "YouTube", type: "Live Show" },
  { event: "IFEL Verizon Digital Small Business Readiness Workshop", date: "January 29, 2026", venue: "IFEL", type: "Workshop" },
  { event: "Faulkner Automotive AI Presentation", date: "November 19, 2025", venue: "DeSales University", type: "Speaking" },
  { event: "SHRM Speaking Event", date: "September 11-13, 2025", venue: "SHRM Conference", type: "Conference" },
  { event: "Gerald Haman / TSPN Keynote Discussion", date: "September 8, 2025", venue: "TSPN (40K Zoom + 60K YouTube viewers)", type: "Keynote" },
  { event: "Jeff and Layla AI Speaking Event", date: "April 26, 2025", venue: "Philadelphia, PA", type: "Speaking" },
];

const eventPhotos = [
  { src: "/images/events/carter-1.jpg", alt: "Dr. Jeff Bullock presenting at Faulkner Automotive AI event" },
  { src: "/images/events/carter-2.jpg", alt: "Dr. Jeff Bullock speaking on AI implementation" },
  { src: "/images/events/carter-3.jpg", alt: "Dr. Jeff Bullock at a PRISM AI speaking event" },
  { src: "/images/events/chamber-event.jpg", alt: "Dr. Jeff Bullock at a Chamber of Commerce event" },
];

const eventsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...pastEvents.map((evt) => ({
      "@type": "Event",
      name: evt.event,
      description: `Dr. Jeff Bullock ${evt.type.toLowerCase()} at ${evt.venue}`,
      performer: { "@type": "Person", name: "Dr. Jeff Bullock" },
      organizer: { "@type": "Organization", name: evt.venue.split(",")[0] },
      eventAttendanceMode: evt.venue.includes("LinkedIn") || evt.venue.includes("YouTube") || evt.venue.includes("Zoom")
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
      ...(evt.date.includes("-") && !evt.date.includes("Weekly") && {
        startDate: evt.date,
      }),
    })),
    ...upcomingEvents.map((evt) => ({
      "@type": "Event",
      name: evt.event,
      startDate: evt.date,
      location: {
        "@type": "Place",
        name: evt.venue,
      },
      performer: { "@type": "Person", name: "Dr. Jeff Bullock" },
      eventStatus: "https://schema.org/EventScheduled",
    })),
  ],
};

export default function SpeakingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      <PageHeader
        title="Speaking"
        description="Keynotes and workshops that change how organizations think about AI - and what they do about it the next morning."
      />

      {/* Speaker Intro with Photo */}
      <Section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">About the Speaker</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dr. Jeff Bullock is the Founder and CEO of PRISM AI Consultants and CEO and Co-Founder of VersAssist. He earned his Doctor of Pharmacy from Xavier University of Louisiana and spent 18 years at CVS Health - a Fortune 10 organization - rising from pharmacy clerk to district leader.
                </p>
                <p>
                  In 2021, he left corporate healthcare to become a full-time entrepreneur. When ChatGPT launched, he immediately saw the potential. He founded PRISM AI Consultants in June 2023 and has since personally coached hundreds of business leaders on AI implementation.
                </p>
                <p>
                  He is the author of 17 books, creator of 16 playable games, producer of a 19-track concept album, and builder of a 54-module autonomous AI system with 33 agents. He does not just talk about what AI can do. He shows what he has built with it.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border">
                <Image
                  src="/images/jeff-bullock-speaking.jpg"
                  alt="Dr. Jeff Bullock speaking"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
                <h3 className="font-bold mb-4">Credentials</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>Doctor of Pharmacy (Pharm.D.), Xavier University of Louisiana</li>
                  <li>18 years at CVS Health (Fortune 10)</li>
                  <li>Hundreds of business leaders coached on AI implementation</li>
                  <li>CEO of PRISM AI Consultants</li>
                  <li>CEO and Co-Founder of VersAssist</li>
                  <li>Official IFEL partner for AI education programming</li>
                  <li>Author of 17 books (4 published, 13 in progress)</li>
                  <li>Builder of 54-module AI agent system with 33 agents</li>
                </ul>
                <a
                  href="https://speaker.prismaiconsultants.com/Dr-Jeff-Bullock-Speaker-Kit-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent font-medium hover:underline"
                >
                  Download Speaker Kit (PDF)
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Speaking Reel */}
      <Section className="bg-muted/30">
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">In Action</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="rounded-[var(--radius-lg)] overflow-hidden border border-border">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ailEgmj7N6c"
                  title="Dr. Jeff Bullock - AI Speaking"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {eventPhotos.map((photo) => (
                <div key={photo.src} className="rounded-[var(--radius-lg)] overflow-hidden border border-border bg-card">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            Faulkner Automotive AI Presentation at DeSales University, Chamber events, and LinkedIn Live
          </p>
        </Container>
      </Section>

      {/* Topics */}
      <Section>
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
      <Section className="bg-muted/30">
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

      {/* Appearances */}
      <Section>
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Appearances</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Featured speaker at IFEL workshops, DeSales University, SHRM conferences, and TSPN - reaching over 100K combined live and replay viewers. Official IFEL partner for AI education programming.
          </p>

          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Upcoming
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.event} className="flex items-center justify-between p-4 rounded-[var(--radius-lg)] border border-green-500/30 bg-green-500/5">
                    <div>
                      <h4 className="font-bold text-sm">{event.event}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{event.venue} - {event.date}</p>
                    </div>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/30">Upcoming</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          <div>
            <h3 className="text-lg font-bold mb-4">Past Events</h3>
            <div className="space-y-3">
              {pastEvents.map((event) => (
                <div key={event.event} className="flex items-center justify-between p-4 rounded-[var(--radius-lg)] border border-border bg-card">
                  <div>
                    <h4 className="font-bold text-sm">{event.event}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{event.venue} - {event.date}</p>
                  </div>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* What Audiences Say */}
      <Section>
        <Container size="xl">
          <h2 className="text-3xl font-extrabold tracking-tight mb-8">What Audiences Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[var(--radius-lg)] border border-border bg-card">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;Our board loves you. Everyone was like, we need to have you back.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold">Board Member, Non-Profit</p>
            </div>
            <div className="p-6 rounded-[var(--radius-lg)] border border-border bg-card">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;All that you did in that one hour, it was just like, oh my God. I don't get excited about a whole lot of stuff, but I saw something I could do with it.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold">Entrepreneur, Services</p>
            </div>
            <div className="p-6 rounded-[var(--radius-lg)] border border-border bg-card">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;I saw your music video. It was like, amazing. It was Hollywood.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold">Business Owner</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Booking CTA */}
      <Section className="bg-muted/30">
        <Container size="sm">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight mb-3">Book Dr. Jeff</h2>
            <p className="text-muted-foreground mb-6">
              Interested in having Dr. Jeff speak at your event or organization?
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  Book a Call <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
              <a href="https://speaker.prismaiconsultants.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  Full Speaker Kit
                </Button>
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Includes downloadable speaker one-sheet, bio, session descriptions, and tech requirements.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
