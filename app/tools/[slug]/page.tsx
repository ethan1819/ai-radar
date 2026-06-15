import { notFound } from "next/navigation";
import Link from "next/link";
import { getToolBySlug, getAllTools, getRelatedTools } from "@/lib/content";
import { getCategoryName, formatDate } from "@/lib/utils";
import { COMMON_TAGS } from "@/lib/types";
import RatingStars from "@/components/RatingStars";
import ToolCard from "@/components/ToolCard";
import { ExternalLink, Check, Clock, DollarSign, Tag, Flame, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() { return getAllTools().map((t) => ({ slug: t.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};
  return { title: tool.name + " 评测 2026", description: tool.tagline };
}

export default function ToolDetail({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();
  const related = getRelatedTools(tool.slug, tool.category, 3);

  return (
    <div className="container-page page-section">
      <nav className="flex items-center gap-2 text-xs text-text-subtle mb-6">
        <Link href="/">首页</Link><span>/</span><Link href="/tools">工具</Link><span>/</span>
        <Link href={"/category/"+tool.category}>{getCategoryName(tool.category)}</Link><span>/</span>
        <span className="text-text-muted">{tool.name}</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-10">
        <div className="w-16 h-16 rounded-lg bg-bg-elevated flex items-center justify-center text-2xl font-bold text-accent flex-shrink-0 border border-border-subtle overflow-hidden">
          {tool.logo ? <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" /> : tool.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl font-bold text-text-primary">{tool.name}</h1>
            {tool.isHot && (
              <span className="badge-hot"><Flame className="h-3 w-3" />热门</span>
            )}
            {tool.isNew && (
              <span className="badge-new"><Sparkles className="h-3 w-3" />新品</span>
            )}
          </div>
          <p className="text-text-muted mt-1 text-lg">{tool.tagline}</p>
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <RatingStars rating={tool.rating} reviewCount={tool.reviewCount} size="md" />
            <span className="inline-flex items-center gap-1 text-xs text-text-subtle">
              <Clock className="h-3.5 w-3.5" />更新于 {tool.updatedAt ? formatDate(tool.updatedAt) : formatDate(tool.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-accent/10 text-accent">
              {getCategoryName(tool.category)}
            </span>
          </div>
          {tool.tags && tool.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tool.tags.map((t) => {
                const info = COMMON_TAGS[t];
                return (
                  <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-bg-elevated border border-border-subtle text-text-muted">
                    {info ? info.name : t}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <a href={tool.affiliateUrl||tool.url} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary flex-shrink-0 w-full sm:w-auto justify-center">
          去使用 <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="card-base flex items-center gap-3">
          <DollarSign className="h-5 w-5 text-accent" />
          <div><p className="text-xs text-text-subtle">定价</p><p className="text-sm font-medium text-text-primary">{tool.pricing}</p></div>
        </div>
        <div className="card-base flex items-center gap-3">
          <div className="text-accent text-lg">★</div>
          <div><p className="text-xs text-text-subtle">用户评分</p><p className="text-sm font-medium text-text-primary">{tool.rating}/5 ({tool.reviewCount.toLocaleString()})</p></div>
        </div>
        <div className="card-base flex items-center gap-3">
          <Tag className="h-5 w-5 text-accent" />
          <div><p className="text-xs text-text-subtle">分类</p><Link href={"/category/"+tool.category} className="text-sm font-medium text-accent">{getCategoryName(tool.category)}</Link></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <div className="card-base">
          <h2 className="text-lg font-semibold text-green flex items-center gap-2 mb-4"><Check className="h-5 w-5" /> 优点</h2>
          <ul className="space-y-2">{tool.pros.map((p,i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted"><Check className="h-4 w-4 text-green mt-0.5 flex-shrink-0" />{p}</li>
          ))}</ul>
        </div>
        <div className="card-base">
          <h2 className="text-lg font-semibold text-red flex items-center gap-2 mb-4">&#x2717; 缺点</h2>
          <ul className="space-y-2">{tool.cons.map((c,i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-muted"><Check className="h-4 w-4 text-red mt-0.5 flex-shrink-0 rotate-45" />{c}</li>
          ))}</ul>
        </div>
      </div>

      {tool.features.length>0 && (
        <div className="card-base mb-10">
          <h2 className="text-lg font-semibold text-text-primary mb-4">主要功能</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {tool.features.map((f,i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-text-muted py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{f}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="card-base mb-12">
        <div className="prose-custom max-w-none" dangerouslySetInnerHTML={{__html: renderMd(tool.body)}} />
      </div>

      {related.length>0 && (
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">相关工具推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {related.map((t) => (<ToolCard key={t.slug} tool={t} />))}
          </div>
        </section>
      )}
    </div>
  );
}

function renderMd(md: string) {
  const lines = md.split("\n");
  let html = "";
  let inList = false;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith("## ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += "<h2>" + esc(t.slice(3)) + "</h2>";
    } else if (t.startsWith("- ")) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += "<li>" + esc(t.slice(2)) + "</li>";
    } else if (t) {
      if (inList) { html += "</ul>"; inList = false; }
      html += "<p>" + esc(t) + "</p>";
    }
  }
  if (inList) html += "</ul>";
  return html;
}

function esc(s: string) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }