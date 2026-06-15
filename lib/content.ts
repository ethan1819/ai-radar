import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Tool, BlogPost, NewsPost, ForumPost } from "./types";

const TOOLS_DIR = path.join(process.cwd(), "content", "tools");
const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const NEWS_DIR = path.join(process.cwd(), 'content', 'news')
const FORUM_DIR = path.join(process.cwd(), 'content', 'forum');

function readMdFile<T>(filePath: string): T | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const slug = path.basename(filePath, path.extname(filePath));
    return { ...data, slug, body: content } as unknown as T;
  } catch { return null; }
}

function readAllMd<T>(dir: string): T[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith(".md"))
    .map(f => readMdFile<T>(path.join(dir, f)))
    .filter((t): t is T => t !== null);
}

function sortByDateDesc<T extends { publishedAt: string }>(arr: T[]): T[] {
  return arr.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getAllTools(): Tool[] { return sortByDateDesc(readAllMd<Tool>(TOOLS_DIR)); }
export function getToolBySlug(slug: string): Tool | null { return readMdFile<Tool>(path.join(TOOLS_DIR, slug + ".md")); }
export function getAllPosts(): BlogPost[] { return sortByDateDesc(readAllMd<BlogPost>(BLOG_DIR)); }
export function getPostBySlug(slug: string): BlogPost | null { return readMdFile<BlogPost>(path.join(BLOG_DIR, slug + ".md")); }
export function getAllNews(): NewsPost[] { return sortByDateDesc(readAllMd<NewsPost>(NEWS_DIR)); }
export function getNewsBySlug(slug: string): NewsPost | null { return readMdFile<NewsPost>(path.join(NEWS_DIR, slug + ".md")); }

export function getToolsByCategory(category: string): Tool[] { return getAllTools().filter(t => t.category === category); }
export function getRelatedTools(currentSlug: string, category: string, count = 4): Tool[] {
  return getAllTools().filter(t => t.slug !== currentSlug && t.category === category).slice(0, count);
}
export function getHotTools(count = 6): Tool[] { return getAllTools().filter(t => t.isHot).slice(0, count); }
export function getNewTools(count = 6): Tool[] { return getAllTools().filter(t => t.isNew).slice(0, count); }
export function getFeaturedTools(count = 6): Tool[] {
  const all = getAllTools();
  const featured = all.filter(t => t.featured);
  const rest = all.filter(t => !t.featured);
  return [...featured, ...rest].slice(0, count);
}
export function getLatestPosts(count = 3): BlogPost[] { return getAllPosts().slice(0, count); }
export function getLatestNews(count = 8): NewsPost[] { return getAllNews().slice(0, count); }
export function getAllForumPosts(): ForumPost[] { return sortByDateDesc(readAllMd<ForumPost>(FORUM_DIR)); }
export function getForumPostBySlug(slug: string): ForumPost | null { return readMdFile<ForumPost>(path.join(FORUM_DIR, slug + '.md')); }
export function getForumByCategory(cat: string): ForumPost[] { return getAllForumPosts().filter(p => p.category === cat); }
export function getLatestForum(count = 10): ForumPost[] { return getAllForumPosts().slice(0, count); }
import { CATEGORIES } from './types';

export function getAllCategories(): { slug: string; count: number }[] {
  const tools = getAllTools();
  const counts: Record<string, number> = {};
  for (const t of tools) counts[t.category] = (counts[t.category] || 0) + 1;
  return CATEGORIES.filter(c => counts[c.slug]).map(c => ({ slug: c.slug, count: counts[c.slug] }));
}
export function getAllTags(): { tag: string; count: number }[] {
  const tools = getAllTools();
  const counts: Record<string, number> = {};
  for (const t of tools) for (const tag of t.tags || []) counts[tag] = (counts[tag] || 0) + 1;
  return Object.entries(counts).map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count);
}