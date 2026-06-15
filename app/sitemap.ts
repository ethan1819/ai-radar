import { getAllTools, getAllPosts, getAllNews, getAllForumPosts } from "@/lib/content";
import { CATEGORIES } from "@/lib/types";
import { SITE } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: base + "/tools", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: base + "/blog", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: base + "/news", lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: base + "/about", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
    { url: base + "/disclosure", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.2 },
    { url: base + "/privacy", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.2 }
  ];

  const toolPages = getAllTools().map((t) => ({
    url: base + "/tools/" + t.slug,
    lastModified: new Date(t.updatedAt || t.publishedAt),
    changeFrequency: "weekly" as const, priority: 0.8
  }));

  const blogPages = getAllPosts().map((p) => ({
    url: base + "/blog/" + p.slug,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: "monthly" as const, priority: 0.6
  }));

  const newsPages = getAllNews().map((n) => ({
    url: base + "/news/" + n.slug,
    lastModified: new Date(n.publishedAt),
    changeFrequency: "monthly" as const, priority: 0.5
  }));

  
  const forumPages = getAllForumPosts().map((p) => ({
    url: base + "/forum/" + p.slug,
    lastModified: new Date(p.updatedAt || p.publishedAt),
    changeFrequency: "weekly" as const, priority: 0.6
  }));
  const categoryPages = CATEGORIES.map((c) => ({
    url: base + "/category/" + c.slug,
    lastModified: new Date(),
    changeFrequency: "weekly" as const, priority: 0.7
  }));

  return [...staticPages, ...toolPages, ...blogPages, ...newsPages, ...forumPages, ...categoryPages];
}