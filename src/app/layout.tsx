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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <SiteNav />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <CommandPaletteWrapper />
      </body>
    </html>
  );
}
