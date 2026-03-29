"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who is Dr. Jeff Bullock?",
    answer:
      "Dr. Jeff Bullock is a Doctor of Pharmacy (PharmD) from Xavier University of Louisiana who spent 18 years at CVS Health before founding PRISM AI Consultants in 2023. He is the author of 18 books, creator of 16 browser-based games, producer of a 19-track concept album, and builder of a 54-module AI agent system. He is based in Lehigh Valley, Pennsylvania.",
  },
  {
    question: "What is PRISM AI Consultants?",
    answer:
      "PRISM AI Consultants is an AI consulting firm founded by Dr. Jeff Bullock in June 2023. PRISM helps business leaders implement AI for revenue generation, time savings, and operational efficiency through weekly strategy sessions, custom AI agent development, and hands-on coaching.",
  },
  {
    question: "What books has Dr. Jeff Bullock written?",
    answer:
      "Dr. Bullock has authored 18 books across fiction and non-fiction. Published titles include A Prompt's Tale (AI/prompt engineering), The Unburdening, The Inheritance, and The Compliant. Books in advanced editing include MANSA (historical fiction, 9.38/10), Far Transfer (learning science, 9.9/10), and 813 (horror thriller, 9.15/10). His catalog spans AI education, learning science, economic frameworks, historical fiction, horror, sci-fi, and manifestation fiction.",
  },
  {
    question: "What is prompt engineering?",
    answer:
      "Prompt engineering is the practice of crafting effective instructions for AI systems to get useful, accurate results. Dr. Bullock's book A Prompt's Tale teaches this through narrative storytelling rather than technical jargon, making AI accessible to business owners and professionals.",
  },
  {
    question: "Does Dr. Jeff Bullock speak at events?",
    answer:
      "Yes. Dr. Bullock delivers keynotes and workshops on AI implementation, leadership, and building with technology. Past events include SHRM Conference, DeSales University, IFEL workshops, and TSPN (reaching over 100K combined live and replay viewers). He offers keynote addresses (60-90 minutes), half-day workshops (3-4 hours), and full-day integrations (6-8 hours).",
  },
  {
    question: "What is VersAssist?",
    answer:
      "VersAssist is a company co-founded by Dr. Bullock in 2024 that provides AI-trained virtual teams to help businesses scale operations without the overhead of traditional hiring.",
  },
  {
    question: "How can I book Dr. Jeff Bullock to speak?",
    answer:
      "Visit the Speaking page on this site or book a call directly through Calendly at calendly.com/prismaiconsultants/introductory-call. Include your event date, format, and audience size for the fastest response.",
  },
  {
    question: "What games has Dr. Jeff Bullock created?",
    answer:
      "Dr. Bullock has created 16 browser-based games including Pharmageddon (pharmacy sim), Max the Flying Chicken (educational platformer based on his daughter's book), The Breadman (rhythm game), Objection Blaster (sales training), and Grid Guardian (strategy defense). All games are playable for free at prismstudios.app.",
  },
  {
    question: "What is the Mansa Musa album?",
    answer:
      '"Mansa Musa: More Than Gold" is a 19-track concept album exploring the legacy of Mansa Musa, the richest person in history. It was produced using AI-generated music and is available on Spotify. The album accompanies the novel MANSA, which tells the story through the eyes of treasury architect Sekou Kante.',
  },
  {
    question: "What is Far Transfer about?",
    answer:
      "Far Transfer is a non-fiction book built on a 6-Domain cognitive architecture covering Attention, Knowledge, Skill, Reasoning, Metacognition, and Execution. It provides 14 actionable protocols for training your brain to retain and apply what you learn across different contexts. The companion app Honed (gethoned.app) implements all 14 protocols digitally.",
  },
  {
    question: "What is The Black Advantage about?",
    answer:
      "The Black Advantage presents an economic framework for ending African American poverty in one generation. It introduces the Abundance Flywheel, Dollar Router (a financial technology tool at dollarrouter.app), Digital Susu, and community governance protocols. Every chapter opens with a real story and includes actionable Builder's Checklists.",
  },
  {
    question: "Where is Dr. Jeff Bullock located?",
    answer:
      "Dr. Bullock is based in the Lehigh Valley region of Pennsylvania (Allentown area). PRISM AI Consultants serves clients both locally in Eastern Pennsylvania and nationwide.",
  },
  {
    question: "How do I implement AI in my business?",
    answer:
      "Start by identifying your highest-value repetitive tasks and the decisions that consume the most time. Dr. Bullock's approach through PRISM AI Consultants focuses on practical implementation rather than theory. Visit prismaiconsultants.com to learn about consulting packages, or read A Prompt's Tale for a foundational understanding of working with AI.",
  },
  {
    question: "What is the AI Hustle show?",
    answer:
      "AI Hustle with Dr. Jeff is a weekly LinkedIn Live show airing Tuesdays at 2 PM ET. It covers practical AI implementation for business owners with no theory, just actionable strategies and real examples from Dr. Bullock's consulting work.",
  },
  {
    question: "What research has Dr. Jeff Bullock published?",
    answer:
      "Dr. Bullock has published four original research frameworks: The Attention and Intention Framework (cognitive science), The Physics of the Mind (cognitive outcomes), ECAP: Endocannabinoid-Associated Pathways (neurocognitive science), and The Abundance Thesis (economic empowerment for African Americans).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// Metadata must be in a separate file for client components
// See layout.tsx or use generateMetadata in a server wrapper

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-[var(--radius-lg)] bg-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/30 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold leading-snug pr-2">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="Frequently Asked Questions"
        description="Common questions about Dr. Jeff Bullock, PRISM AI Consultants, books, games, research, and speaking engagements."
      />

      <Section>
        <Container size="md">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
