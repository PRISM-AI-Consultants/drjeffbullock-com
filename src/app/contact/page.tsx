import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/ui/contact-form";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dr. Jeff Bullock - speaking, media, collaboration, and general inquiries.",
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
      <PageHeader title="Contact" description="Speaking, media, collaboration, or just want to connect." />
      <Section>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
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
