import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllForumPosts, getForumPostBySlug } from "@/lib/content";
import { FORUM_CATEGORIES } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() { return getAllForumPosts().map(p => ({ slug: p.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getForumPostBySlug(params.slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

export default function ForumDetail({ params }: { params: { slug: string } }) {
  const post = getForumPostBySlug(params.slug);
  if (!post) notFound();
  const catName = FORUM_CATEGORIES[post.category] || post.category;

  return (
    <article className="container-page page-section max-w-3xl">
      <Link href="/forum" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent mb-6">
        <ArrowLeft className="h-4 w-4" /> 返回论坛
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">{post.title}</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-text-subtle mb-8 pb-8 border-b border-border-subtle">
        <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{formatDate(post.publishedAt)}</span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-accent/10 text-accent">{catName}</span>
        <span className="inline-flex items-center gap-1"><MessageSquare className="h-3.5 w-3.5" />{post.replyCount} 回复</span>
      </div>
      <div className="prose-custom">
        {post.body.split("\n\n").map((par: string, i: number) => <p key={i}>{par}</p>)}
      </div>
      <div className="mt-12 pt-8 border-t border-border-subtle">
        <h2 className="text-lg font-semibold text-text-primary mb-4">讨论专区</h2>
        <div className="card-base text-center py-8">
          <MessageSquare className="h-8 w-8 text-accent mx-auto mb-3" />
          <p className="text-text-muted text-sm mb-2">参与讨论需要启用 GitHub Discussions 评论系统</p>
          <p className="text-xs text-text-subtle">
            设置方法：在环境变量中配置你的 GitHub 仓库即可启用实时评论
          </p>
        </div>
      </div>
    </article>
  );
}