import { getAllTools, getAllCategories } from "@/lib/content";
import { getCategoryName } from "@/lib/utils";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "全部 AI 工具",
  description: "收录多款 AI 工具,覆盖聊天、图片、视频、编程等分类。持续更新中,帮你找到最合适的 AI 助手。"
};

export default function ToolsPage({ searchParams }: { searchParams?: { q?: string } }) {
  const allTools = getAllTools();
  const categories = getAllCategories();
  const query = (searchParams?.q || "").trim().toLowerCase();
  const tools = query
    ? allTools.filter(t => {
        const haystack = [t.name, t.tagline, t.description, t.category, ...(t.tags || [])].join(" ").toLowerCase();
        return haystack.includes(query);
      })
    : allTools;

  return (
    <div className="container-page page-section">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">全部 AI 工具</h1>
        <p className="text-text-muted">收录 {allTools.length} 款 AI 工具,持续更新中</p>
      </header>
      <form action="/tools" method="get" className="relative mb-6 max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-subtle" />
        <input name="q" type="search" defaultValue={query} placeholder="搜索工具名、功能、标签..."
          className="w-full pl-10 pr-4 py-2.5 rounded text-sm bg-bg-card border border-border-subtle text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent" />
      </form>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/tools" className={"px-3 py-1.5 rounded text-sm font-medium " + (query ? "bg-bg-card border border-border-subtle text-text-muted" : "bg-accent text-white")}>
          全部{query ? "" : ` (${allTools.length})`}
        </Link>
        {categories.map((cat) => (
          <Link key={cat.slug} href={"/category/"+cat.slug} className="px-3 py-1.5 rounded text-sm bg-bg-card border border-border-subtle text-text-muted hover:border-border transition-colors">
            {getCategoryName(cat.slug)} ({cat.count})
          </Link>
        ))}
      </div>
      {query && <p className="text-sm text-text-muted mb-4">搜索 &quot;<span className="text-accent">{query}</span>&quot; 找到 {tools.length} 个结果</p>}
      {tools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tools.map((tool) => (<ToolCard key={tool.slug} tool={tool} />))}
        </div>
      ) : (
        <div className="text-center py-16 text-text-muted">
          <p className="mb-4">没有找到匹配 &quot;{query}&quot; 的工具</p>
          <Link href="/tools" className="btn-primary">查看全部</Link>
        </div>
      )}
    </div>
  );
}