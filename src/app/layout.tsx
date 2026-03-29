import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { CommandPaletteWrapper } from "@/components/layout/command-palette-wrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drjeffbullock.com"),
  title: {
    default: "Dr. Jeff Bullock - AI Orchestrator. Systems Integrator. Author. Builder.",
    template: "%s | Dr. Jeff Bullock",
  },
  description:
    "The IP library and creator hub of Dr. Jeff Bullock. Books, research, games, music, and projects - all built with AI as a force multiplier.",
  openGraph: {
    title: "Dr. Jeff Bullock",
    description:
      "AI Orchestrator. Systems Integrator. Author. Builder. Proving what one person can build with AI.",
    type: "website",
    images: ["/images/hero/jeff-hero.jpg"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Jeff Bullock",
  url: "https://drjeffbullock.com",
  description:
    "The IP library and creator hub of Dr. Jeff Bullock. 17 books, 16 games, 4 research frameworks, and a 54-module AI agent system.",
  author: {
    "@type": "Person",
    name: "Dr. Jeff Bullock",
    url: "https://drjeffbullock.com/about",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://drjeffbullock.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Jeff Bullock",
  givenName: "Jeff",
  familyName: "Bullock",
  honorificPrefix: "Dr.",
  honorificSuffix: "PharmD",
  jobTitle: "CEO & Founder",
  worksFor: {
    "@type": "Organization",
    name: "PRISM AI Consultants",
    url: "https://www.prismaiconsultants.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Xavier University of Louisiana",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: "Doctor of Pharmacy (PharmD)",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Consulting",
    "Prompt Engineering",
    "Systems Integration",
    "Business Automation",
    "AI Agent Development",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Allentown",
    addressRegion: "PA",
    addressCountry: "US",
  },
  url: "https://drjeffbullock.com",
  sameAs: [
    "https://www.linkedin.com/in/drjeffbullock",
    "https://www.youtube.com/@drjeffbullock",
    "https://www.prismaiconsultants.com",
    "https://open.spotify.com/album/1iOSi2A5g4LUjSkvniwl4u",
  ],
  description:
    "PharmD turned AI consultant, author of 17 books, and CEO of PRISM AI Consultants. Based in Lehigh Valley, PA. Helps business leaders implement AI operationally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <SiteNav />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <CommandPaletteWrapper />
      </body>
    </html>
  );
}
