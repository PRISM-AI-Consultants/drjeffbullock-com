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

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/books`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/research`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/media`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/games`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/speaking`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${BASE_URL}/books/${book.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const researchPages: MetadataRoute.Sitemap = research.map((entry) => ({
    url: `${BASE_URL}/research/${entry.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${BASE_URL}/games/${game.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
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
