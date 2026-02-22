import type { MediaItem } from "@/lib/types";

export const mediaItems: MediaItem[] = [
  {
    title: "Mansa Musa",
    type: "music-album",
    description:
      "A 19-track concept album exploring the legacy of Mansa Musa - the richest person in history - through original AI-generated music. Tracks span the journey from Timbuktu to Mecca and back.",
    date: "2025-01-15",
    duration: "19 tracks",
  },
  {
    title: "AI Hustle with Dr. Jeff",
    type: "podcast",
    description:
      "Weekly LinkedIn Live exploring practical AI implementation for business owners. No theory - just what works.",
    date: "2026-01-01",
  },
  {
    title: "City of Gold",
    type: "music-track",
    description: "From the Mansa Musa album. A celebration of Timbuktu at its peak.",
    date: "2025-01-15",
    album: "Mansa Musa",
    trackNumber: 1,
  },
  {
    title: "The Griot's Tale",
    type: "music-track",
    description: "From the Mansa Musa album. The oral historian recounts the empire's rise.",
    date: "2025-01-15",
    album: "Mansa Musa",
    trackNumber: 2,
  },
  {
    title: "Knowledge is Wealth",
    type: "music-track",
    description: "From the Mansa Musa album. The connection between learning and lasting prosperity.",
    date: "2025-01-15",
    album: "Mansa Musa",
    trackNumber: 3,
  },
  {
    title: "Timbuktu Rising",
    type: "music-track",
    description: "From the Mansa Musa album. The building of an intellectual capital.",
    date: "2025-01-15",
    album: "Mansa Musa",
    trackNumber: 4,
  },
  {
    title: "Darlene's Dedication",
    type: "music-track",
    description: "An original tribute song honoring a life of service and love.",
    date: "2025-06-01",
  },
  {
    title: "The Physics of the Mind",
    type: "video",
    description:
      "A visual exploration of the Attention and Intention Framework - how directed focus creates measurable cognitive outcomes.",
    date: "2025-09-01",
    duration: "12 min",
  },
  {
    title: "Grit",
    type: "audio",
    description: "A talk on perseverance, purpose, and why the long game always wins.",
    date: "2025-03-01",
    duration: "8 min",
  },
  {
    title: "PRISM AI Podcast",
    type: "podcast",
    description:
      "AI implementation insights for business leaders. Real strategies from real engagements.",
    date: "2025-11-01",
  },
];
