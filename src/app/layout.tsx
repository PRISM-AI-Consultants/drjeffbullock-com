import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Newsreader, Instrument_Sans } from "next/font/google";
import { SiteNav } from "@/components/layout/site-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { CommandPaletteWrapper } from "@/components/layout/command-palette-wrapper";
import { AudioPlayer } from "@/components/ui/audio-player";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Display: confident editorial-modern grotesk
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Editorial serif voice (prose emphasis, pull quotes)
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Clean UI / body
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    images: ["/images/og-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jeff Bullock",
    description:
      "AI Orchestrator. Systems Integrator. Author. Builder.",
    images: ["/images/og-home.jpg"],
  },
  alternates: {
    canonical: "https://drjeffbullock.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr. Jeff Bullock",
  url: "https://drjeffbullock.com",
  description:
    "The IP library and creator hub of Dr. Jeff Bullock. 17 books, 15 games, 4 research frameworks, and an AI agent system with 34 autonomous agents.",
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
  image: "https://drjeffbullock.com/images/jeff-bullock-headshot.jpg",
  url: "https://drjeffbullock.com",
  // ⛔ DISAMBIGUATION (added 2026-08-06). Measured that day: asking an answer
  // engine "Who is Dr. Jeff Bullock?" returned healthgrades, gastroconsa,
  // wellmedhealthcare, sahealth and ssrinstitute — every cited source a
  // PHYSICIAN directory for a different person with the same name. Jeff was
  // named in the prose while every citation was about somebody else.
  // disambiguatingDescription is the schema.org property for exactly this.
  // Do not remove it, and keep it explicit that the doctorate is a PharmD and
  // that he does not practice medicine.
  disambiguatingDescription:
    "AI implementation consultant and technology entrepreneur in Allentown, Pennsylvania. Not a physician. His doctorate is a Doctor of Pharmacy (PharmD) from Xavier University of Louisiana; he does not practice medicine and is unaffiliated with any medical practice or hospital system. Founder and CEO of PRISM AI Consultants.",
  sameAs: [
    // ⛔ VERIFIED 2026-08-06 by live HTTP check. Never add a URL you have not
    // loaded. An Amazon author-page URL was guessed during this build, returned
    // 404, and was removed. sameAs is the mechanism knowledge graphs use to
    // decide these profiles are ONE entity — a dead link poisons the graph.
    "https://www.linkedin.com/in/jeffrey-bullock-pharmd",
    "https://www.linkedin.com/company/prism-ai-consultants",
    "https://www.youtube.com/@drjeffbullock",
    "https://www.instagram.com/prismaiconsultant/",
    "https://substack.com/@drjeffbullock",
    "https://www.prismaiconsultants.com",
    // Amazon author page, supplied by Jeff 2026-08-06, verified 200. High value
    // against the physician collision: a strong third-party signal that this
    // Dr. Jeff Bullock is an AUTHOR, not a doctor.
    "https://www.amazon.com/stores/Dr.-Jeff-Bullock/author/B0H7TCDNGS",
    "https://open.spotify.com/album/1iOSi2A5g4LUjSkvniwl4u",
    // Earned + local authority. Earned media drives ~84% of AI citations
    // (Muck Rack, 25M links, May 2026), and these are the pages that already
    // get cited for PRISM. Naming them here ties them to the entity.
    "https://madeinthelehighvalley.com/prismaiconsultants/",
    "https://web.lehighvalleychamber.org/Consulting-Services-Training/PRISM-AI-Consultants-17842",
    "https://www.alignable.com/allentown-pa/prism-ai-consultants",
    "https://www.bizapedia.com/pa/prism-ai-consultants-llc.html",
    "https://valiantceo.com/closing-the-ai-implementation-gap-jeffrey-bullock-of-prism-ai-consultants-on-turning-spend-into-revenue/",
  ],
  description:
    "PharmD turned AI implementation consultant, author of 17 books, and CEO of PRISM AI Consultants in Allentown, Pennsylvania. Helps business owners implement AI operationally. Not a medical doctor.",
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
      <body className={`${bricolage.variable} ${newsreader.variable} ${instrument.variable} antialiased`}>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <SiteNav />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <CommandPaletteWrapper />
        <AudioPlayer />
      </body>
    </html>
  );
}
