import { getAllForumPosts } from "@/lib/content";
import { FORUM_CATEGORIES } from "@/lib/types";
import ForumCard from "@/components/ForumCard";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent 论坛",
  description: "讨论 Codex、Hermes、OpenClaw 等主流 AI Agent 工具的最佳社区"
};

export default function ForumPage() {
  const posts = getAllForumPosts();
  return (
    <div className="container-page page-section">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare className="h-7 w-7 text-accent" />
          <h1 className="text-3xl font-bold text-text-primary">AI Agent 论坛</h1>
        </div>
        <p className="text-text-muted">讨论 Codex、Hermes、OpenClaw 等 Agent 工具，共 {posts.length} 个话题</p>
      </header>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/forum" className="px-3 py-1.5 rounded text-sm font-medium bg-accent text-white">全部</Link>
        {Object.entries(FORUM_CATEGORIES).map(([slug, name]) => (
          <Link key={slug} href={"/forum?cat=" + slug} className="px-3 py-1.5 rounded text-sm bg-bg-card border border-border-subtle text-text-muted hover:border-border transition-colors">
            {name} ({posts.filter(p => p.category === slug).length})
          </Link>
        ))}
      </div>
      <div className="space-y-3">
        {posts.map(post => (<ForumCard key={post.slug} post={post} />))}
      </div>
    </div>
  );
}