import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNews, getNewsBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Calendar, ExternalLink, Tag } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllNews().map(n => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const n = getNewsBySlug(params.slug);
  if (!n) return {};
  return { title: n.title, description: n.excerpt };
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const n = getNewsBySlug(params.slug);
  if (!n) notFound();

  return (
    <article className="container-page page-section max-w-3xl">
      <Link href="/news" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent mb-6">
        <ArrowLeft className="h-4 w-4" /> 返回快讯列表
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">{n.title}</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-text-subtle mb-8 pb-8 border-b border-border-subtle">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />{formatDate(n.publishedAt)}
        </span>
        {n.source && <span>来源：{n.source}</span>}
        {n.category && (
          <span className="inline-flex items-center gap-1"><Tag className="h-3.5 w-3.5" />{n.category}</span>
        )}
      </div>
      <div className="prose-custom">
        {n.body.split("\n\n").map((p, i) => (<p key={i}>{p}</p>))}
      </div>
      {n.sourceUrl && (
        <div className="mt-10 pt-6 border-t border-border-subtle">
          <a href={n.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary gap-2">
            阅读原文 <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
    </article>
  );
}