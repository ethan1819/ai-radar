"use client";
import { useState } from "react";
import Link from "next/link";
import { Star, ExternalLink, DollarSign, Flame, Sparkles } from "lucide-react";
import { getCategoryName } from "@/lib/utils";
import { COMMON_TAGS } from "@/lib/types";
import type { Tool } from "@/lib/types";

export default function ToolCard({ tool }: { tool: Tool }) {
  const stars = Math.round(tool.rating);
  const [logoError, setLogoError] = useState(false);
  return (
    <article className="card-base flex flex-col h-full group relative">
      {(tool.isHot || tool.isNew) && (
        <div className="absolute top-3 right-3 flex gap-1.5 z-10">
          {tool.isHot && (
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium bg-red-500/15 text-red-400 border border-red-500/20">
              <Flame className="h-2.5 w-2.5" />热
            </span>
          )}
          {tool.isNew && (
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-500/15 text-green-400 border border-green-500/20">
              <Sparkles className="h-2.5 w-2.5" />新
            </span>
          )}
        </div>
      )}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded flex-shrink-0 bg-bg-elevated flex items-center justify-center text-lg font-semibold text-accent overflow-hidden">
          (!logoError && tool.logo ? <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" loading="lazy" onError={() => setLogoError(true)} /> : <span className="text-base font-semibold text-accent">{tool.name.charAt(0)}</span>)
        </div>
        <div className="min-w-0 flex-1 pr-16">
          <Link href={"/tools/"+tool.slug} className="block">
            <h3 className="font-semibold text-text-primary truncate group-hover:text-accent transition-colors">{tool.name}</h3>
          </Link>
          <p className="text-xs text-text-subtle mt-0.5">{tool.tagline}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({length:5}).map((_,i) => (
          <Star key={i} className={"h-3.5 w-3.5 "+(i<stars?"text-yellow fill-yellow":"text-border-strong")} />
        ))}
        <span className="text-xs text-text-subtle ml-1">({tool.reviewCount.toLocaleString()})</span>
      </div>
      <p className="text-sm text-text-muted line-clamp-2 mb-3 flex-1">{tool.description}</p>
      {tool.tags && tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {tool.tags.slice(0, 3).map((tag) => {
            const t = COMMON_TAGS[tag];
            return (
              <span key={tag} className="px-1.5 py-0.5 rounded text-[10px] bg-accent/10 text-text-muted">
                {t ? t.name : tag}
              </span>
            );
          })}
        </div>
      )}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border-subtle">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-accent/10 text-accent">
          {getCategoryName(tool.category)}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-subtle flex items-center gap-1">
            <DollarSign className="h-3 w-3" />{tool.pricing.split(" /")[0]}
          </span>
          <a href={tool.affiliateUrl||tool.url} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-xs !px-3 !py-1.5 gap-1">
            访问 <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}