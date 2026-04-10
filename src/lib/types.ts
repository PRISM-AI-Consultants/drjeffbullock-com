export interface Book {
  title: string;
  slug: string;
  category: "fiction" | "non-fiction" | "short-story" | "novel";
  status: "published" | "in-progress";
  coverImage?: string;
  description: string;
  genres: string[];
  formats: ("paperback" | "ebook" | "audiobook")[];
  publishDate?: string;
  featured?: boolean;
  purchaseUrl?: string;
  downloadUrl?: string;
  audioUrl?: string;
  companionAppUrl?: string;
  companionAppName?: string;
  researchUrl?: string;
  editScore?: number;
  editStatus?: string;
  content: string;
}

export interface ResearchEntry {
  title: string;
  slug: string;
  type: "framework" | "research-brief" | "white-paper" | "working-paper";
  category: "economics" | "science" | "technology" | "education" | "cognition";
  description: string;
  date: string;
  featured?: boolean;
  pdfUrl?: string;
  coverImage?: string;
  content: string;
}

export interface MediaItem {
  title: string;
  type:
    | "talk"
    | "interview"
    | "podcast"
    | "music-album"
    | "music-track"
    | "video"
    | "audio";
  description: string;
  date: string;
  duration?: string;
  thumbnailUrl?: string;
  externalUrl?: string;
  embedUrl?: string;
  album?: string;
  trackNumber?: number;
  spotifyUrl?: string;
}

export interface Game {
  title: string;
  slug: string;
  genre: string;
  platforms: string[];
  description: string;
  playUrl?: string;
  featured?: boolean;
  coverImage?: string;
  content: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  featured?: boolean;
  coverImage?: string;
  readingTime: string;
  content: string;
}

export interface Project {
  title: string;
  slug: string;
  type:
    | "company"
    | "app"
    | "agent"
    | "game"
    | "game-app"
    | "sitcom"
    | "music"
    | "experiment"
    | "framework"
    | "platform";
  status: "active" | "completed" | "in-development";
  description: string;
  url?: string;
  spotifyUrl?: string;
  featured?: boolean;
  coverImage?: string;
  content: string;
}

export interface Collection {
  title: string;
  slug: string;
  description: string;
  items: CollectionItem[];
}

export interface CollectionItem {
  title: string;
  href: string;
  type: string;
  description: string;
}

export interface SearchItem {
  title: string;
  href: string;
  type: string;
  description: string;
}
