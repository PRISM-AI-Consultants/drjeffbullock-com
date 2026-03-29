import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Dr. Jeff Bullock, PRISM AI Consultants, books, games, research, speaking engagements, and AI consulting.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
