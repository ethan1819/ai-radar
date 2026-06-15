import Link from "next/link";
import { SITE } from "@/lib/site";
import { CATEGORIES } from "@/lib/types";
import { getFeaturedTools, getHotTools, getNewTools, getLatestPosts, getLatestNews } from "@/lib/content";
import ToolCard from "@/components/ToolCard";
import BlogCard from "@/components/BlogCard";
import NewsTimeline from "@/components/NewsTimeline";
import { ArrowRight, Search, Zap, TrendingUp, Shield, Flame, Sparkles } from "lucide-react";

export default function HomePage() {
  const featured = getFeaturedTools(6);
  const hot = getHotTools(4);
  const newTools = getNewTools(4);
  const latestPosts = getLatestPosts(3);
  const latestNews = getLatestNews(5);
  const toolCount = getFeaturedTools(999).length;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="container-page py-16 sm:py-24 lg:py-28 text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            发现最好的<span className="text-accent block sm:inline"> AI 工具</span>
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            {SITE.tagline} —— 收录 {toolCount}+ 款 AI 产品,帮你省时省钱、提升效率。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/tools" className="btn-primary gap-2"><Search className="h-4 w-4" /> 浏览全部工具</Link>
            <Link href="/blog" className="inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-medium text-text-primary bg-bg-card border border-border-subtle hover:border-border transition-colors">
              阅读最新文章 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section border-b border-border-subtle">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-text-primary">浏览分类</h2>
            <Link href="/tools" className="text-sm text-accent hover:text-accent-strong flex items-center gap-1">全部 <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={"/category/" + cat.slug} className="card-base text-center py-5 group">
                <div className="text-2xl mb-2">{getCatEmoji(cat.slug)}</div>
                <span className="text-sm text-text-muted group-hover:text-text-primary transition-colors">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {hot.length > 0 && (
        <section className="page-section border-b border-border-subtle">
          <div className="container-page">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-text-primary flex items-center gap-2"><Flame className="h-6 w-6 text-red-400" />热门 AI 工具</h2>
              <Link href="/tools" className="text-sm text-accent hover:text-accent-strong flex items-center gap-1">全部 <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {hot.map((tool) => (<ToolCard key={tool.slug} tool={tool} />))}
            </div>
          </div>
        </section>
      )}

      {newTools.length > 0 && (
        <section className="page-section border-b border-border-subtle bg-bg-elevated/30">
          <div className="container-page">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-text-primary flex items-center gap-2"><Sparkles className="h-6 w-6 text-green-400" />最新收录</h2>
              <Link href="/tools" className="text-sm text-accent hover:text-accent-strong flex items-center gap-1">全部 <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {newTools.map((tool) => (<ToolCard key={tool.slug} tool={tool} />))}
            </div>
          </div>
        </section>
      )}

      <section className="page-section border-b border-border-subtle">
        <div className="container-page">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-text-primary">精选工具</h2>
            <Link href="/tools" className="text-sm text-accent hover:text-accent-strong flex items-center gap-1">全部工具 <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featured.map((tool) => (<ToolCard key={tool.slug} tool={tool} />))}
          </div>
        </div>
      </section>

      {latestNews.length > 0 && (
        <section className="page-section border-b border-border-subtle bg-bg-elevated/30">
          <div className="container-page">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-text-primary">AI 行业快讯</h2>
              <Link href="/news" className="text-sm text-accent hover:text-accent-strong flex items-center gap-1">全部快讯 <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
            <NewsTimeline items={latestNews} />
          </div>
        </section>
      )}

      {latestPosts.length > 0 && (
        <section className="page-section">
          <div className="container-page">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-text-primary">最新文章</h2>
              <Link href="/blog" className="text-sm text-accent hover:text-accent-strong flex items-center gap-1">全部文章 <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {latestPosts.map((post) => (<BlogCard key={post.slug} post={post} />))}
            </div>
          </div>
        </section>
      )}

      <section className="page-section border-t border-border-subtle">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-text-primary mb-10">为什么用 AI Radar？</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            {benefits.map((b) => (
              <div key={b.title} className="card-base">
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-medium text-text-primary mb-2">{b.title}</h3>
                <p className="text-sm text-text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const benefits = [
  { title: "真实评测", desc: "每款工具都有详细的优缺点分析和真实用户评分,不吹不黑。", icon: <Shield className="h-5 w-5 text-accent" /> },
  { title: "持续更新", desc: "AI 行业日新月异,我们持续追踪最新工具和定价变化。", icon: <Zap className="h-5 w-5 text-accent" /> },
  { title: "中立对比", desc: "从功能、价格、体验多维度对比,帮你选出最适合的。", icon: <TrendingUp className="h-5 w-5 text-accent" /> }
];

function getCatEmoji(slug: string) {
  const map: Record<string, string> = {
    chat: "💬", image: "🎨", video: "🎬", code: "💻", search: "🔍",
    productivity: "⚡", writing: "✍️", design: "🎯", audio: "🎧", other: "📦"
  };
  return map[slug] || "🔧";
}