import type { MetadataRoute } from "next";
import { getBooks } from "@/lib/content";
import { getResearch } from "@/lib/content";
import { getGames } from "@/lib/content";
import { getBlogPosts } from "@/lib/content";
import { getProjects } from "@/lib/content";

const BASE_URL = "https://drjeffbullock.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const books = getBooks();
  const research = getResearch();
  const games = getGames();
  const posts = getBlogPosts();
  const projects = getProjects();

  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/books`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/research`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/media`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/games`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/speaking`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${BASE_URL}/books/${book.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const researchPages: MetadataRoute.Sitemap = research.map((entry) => ({
    url: `${BASE_URL}/research/${entry.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${BASE_URL}/games/${game.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...bookPages,
    ...researchPages,
    ...gamePages,
    ...blogPages,
    ...projectPages,
  ];
}
