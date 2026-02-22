import type { Collection } from "@/lib/types";

export const collections: Collection[] = [
  {
    title: "Start Here",
    slug: "start-here",
    description: "The best introduction to my work across books, research, games, and writing.",
    items: [
      {
        title: "A Prompt's Tale",
        href: "/books/a-prompts-tale",
        type: "Book",
        description: "A narrative journey through AI and prompt engineering.",
      },
      {
        title: "The Attention and Intention Framework",
        href: "/research/attention-and-intention-framework",
        type: "Research",
        description: "How directed attention creates measurable outcomes.",
      },
      {
        title: "Why I Left Pharmacy for AI",
        href: "/blog/why-i-left-pharmacy-for-ai",
        type: "Blog",
        description: "The career transition that started everything.",
      },
      {
        title: "Pharmageddon",
        href: "/games/pharmageddon",
        type: "Game",
        description: "Survive the shift. A pharmacy sim built by a real pharmacist.",
      },
    ],
  },
  {
    title: "AI Operator Toolkit",
    slug: "ai-operator-toolkit",
    description: "Practical AI content for people who build, not just talk.",
    items: [
      {
        title: "AI Tools I Actually Use Every Day",
        href: "/blog/ai-tools-i-use-every-day",
        type: "Blog",
        description: "The real daily toolkit, no fluff.",
      },
      {
        title: "PRISM AI Agent System",
        href: "/projects/prism-agent-system",
        type: "Project",
        description: "50-module autonomous AI system running 24/7.",
      },
      {
        title: "The Case for Operator Energy",
        href: "/blog/the-case-for-operator-energy",
        type: "Blog",
        description: "Systems thinking over hustle culture.",
      },
    ],
  },
  {
    title: "Pharmacy to AI",
    slug: "pharmacy-to-ai",
    description: "The arc from pharmacy counter to technology CEO.",
    items: [
      {
        title: "Pharmageddon",
        href: "/games/pharmageddon",
        type: "Game",
        description: "The pharmacy experience, gamified.",
      },
      {
        title: "Pillbox",
        href: "/projects/pillbox",
        type: "Project",
        description: "A pharmacy workplace sitcom.",
      },
      {
        title: "Making a Game About Pharmacy",
        href: "/blog/making-pharmageddon",
        type: "Blog",
        description: "How Pharmageddon went from idea to playable game.",
      },
    ],
  },
  {
    title: "Black Advantage Research",
    slug: "black-advantage-research",
    description: "The economic thesis and supporting research.",
    items: [
      {
        title: "The Abundance Thesis",
        href: "/research/the-abundance-thesis",
        type: "Research",
        description: "Evidence-based economic empowerment pathways.",
      },
      {
        title: "What Mansa Musa Taught Me About Wealth",
        href: "/blog/what-mansa-musa-taught-me",
        type: "Blog",
        description: "Lessons from researching the richest person in history.",
      },
      {
        title: "Mansa Musa Multimedia Project",
        href: "/projects/mansa-musa-project",
        type: "Project",
        description: "19-track concept album with historical research.",
      },
    ],
  },
];
