import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type {
  Book,
  BlogPost,
  Game,
  Project,
  ResearchEntry,
} from "./types";

const contentDir = path.join(process.cwd(), "content");

function getFiles(dir: string): string[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

function readFile(dir: string, filename: string) {
  const fullPath = path.join(contentDir, dir, filename);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx?$/, "");
  return { data, content, slug };
}

export function getBooks(): Book[] {
  return getFiles("books")
    .map((f) => {
      const { data, content, slug } = readFile("books", f);
      return {
        ...data,
        slug,
        content,
      } as Book;
    })
    .sort((a, b) => (a.featured ? -1 : 1) - (b.featured ? -1 : 1));
}

export function getBook(slug: string): Book | undefined {
  const files = getFiles("books");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  const { data, content } = readFile("books", file);
  return { ...data, slug, content } as Book;
}

export function getResearch(): ResearchEntry[] {
  return getFiles("research")
    .map((f) => {
      const { data, content, slug } = readFile("research", f);
      return { ...data, slug, content } as ResearchEntry;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getResearchEntry(slug: string): ResearchEntry | undefined {
  const files = getFiles("research");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  const { data, content } = readFile("research", file);
  return { ...data, slug, content } as ResearchEntry;
}

export function getGames(): Game[] {
  return getFiles("games")
    .map((f) => {
      const { data, content, slug } = readFile("games", f);
      return { ...data, slug, content } as Game;
    })
    .sort((a, b) => (a.featured ? -1 : 1) - (b.featured ? -1 : 1));
}

export function getGame(slug: string): Game | undefined {
  const files = getFiles("games");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  const { data, content } = readFile("games", file);
  return { ...data, slug, content } as Game;
}

export function getBlogPosts(): BlogPost[] {
  return getFiles("blog")
    .map((f) => {
      const { data, content, slug } = readFile("blog", f);
      const stats = readingTime(content);
      return {
        ...data,
        slug,
        content,
        readingTime: stats.text,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const files = getFiles("blog");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  const { data, content } = readFile("blog", file);
  const stats = readingTime(content);
  return { ...data, slug, content, readingTime: stats.text } as BlogPost;
}

export function getProjects(): Project[] {
  return getFiles("projects")
    .map((f) => {
      const { data, content, slug } = readFile("projects", f);
      return { ...data, slug, content } as Project;
    })
    .sort((a, b) => (a.featured ? -1 : 1) - (b.featured ? -1 : 1));
}

export function getProject(slug: string): Project | undefined {
  const files = getFiles("projects");
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return undefined;
  const { data, content } = readFile("projects", file);
  return { ...data, slug, content } as Project;
}
