import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dr. Jeff Bullock for speaking, AI consulting, media, or collaboration. Book a call on Calendly. Based in Lehigh Valley, Pennsylvania. Serving clients nationwide.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dr. Jeff Bullock",
  description:
    "AI consultant, author, and speaker helping business leaders implement AI. Based in Lehigh Valley, Pennsylvania. Serving clients locally and nationwide.",
  url: "https://drjeffbullock.com",
  telephone: "",
  email: "jeff@prismaiconsultants.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Allentown",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Allentown" },
    { "@type": "City", name: "Bethlehem" },
    { "@type": "City", name: "Easton" },
    { "@type": "State", name: "Pennsylvania" },
    { "@type": "Country", name: "United States" },
  ],
  sameAs: [
    "https://www.linkedin.com/in/drjeffbullock",
    "https://www.youtube.com/@drjeffbullock",
    "https://www.prismaiconsultants.com",
  ],
  priceRange: "$$",
};

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/drjeffbullock/" },
  { label: "YouTube", href: "https://www.youtube.com/@drjeffbullock" },
  { label: "PRISM AI", href: "https://www.prismaiconsultants.com" },
  { label: "Email", href: "mailto:jeff@prismaiconsultants.com" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <PageHeader title="Contact" description="Speaking, media, collaboration, or just want to connect." />

      {/* Book a Call CTA */}
      <Section>
        <Container size="xl">
          <div className="rounded-[var(--radius-lg)] border border-accent/30 bg-accent/5 p-8 mb-12 text-center">
            <Calendar className="h-8 w-8 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold tracking-tight mb-2">Book a Call</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              The fastest way to connect. Whether it is speaking, consulting, media, or collaboration, start with a 15-minute introductory call.
            </p>
            <a href="https://calendly.com/prismaiconsultants/introductory-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Schedule on Calendly <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold mb-6">Or send a message</h2>
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
                <h3 className="font-bold mb-4">Other ways to connect</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
                      >
                        {link.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-sm text-muted-foreground mt-1">Lehigh Valley, Pennsylvania. Serving clients locally and nationwide.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-[var(--radius-lg)] border border-border bg-muted/50 p-6">
                <h3 className="font-bold mb-2">Response time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24-48 hours. For speaking inquiries, please include your event date, format, and audience size.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
