"use client";
import Link from "next/link";
import { useState } from "react";
import { CATEGORIES, SUBCATEGORIES } from "@/lib/types";
import { Search, ChevronDown, Radar, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const isActive = (href: string) => pathname === href || (pathname?.startsWith(href + "/") ?? false);

  const filteredCats = CATEGORIES.filter(c => !query || c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenMobile(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-accent-strong text-white shadow-lg flex items-center justify-center"
        aria-label="打开导航"
      >
        <Radar className="h-5 w-5" />
      </button>

      {openMobile && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-50" onClick={() => setOpenMobile(false)} />
      )}

      <aside
        className={
          "fixed lg:sticky top-0 lg:top-16 left-0 z-50 lg:z-20 w-72 h-screen lg:h-[calc(100vh-4rem)] bg-bg-card border-r border-border-subtle transition-transform duration-200 " +
          (openMobile ? "translate-x-0" : "-translate-x-full lg:translate-x-0")
        }
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-border-subtle lg:hidden">
          <Link href="/" onClick={() => setOpenMobile(false)} className="flex items-center gap-2 text-base font-semibold text-text-primary">
            <Radar className="h-5 w-5 text-accent" />AI Radar
          </Link>
          <button onClick={() => setOpenMobile(false)} className="p-2 text-text-muted" aria-label="关闭">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 border-b border-border-subtle">
          <form action="/tools" method="get" className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-subtle" />
            <input
              name="q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索 AI 工具..."
              className="w-full pl-9 pr-3 py-2 rounded text-sm bg-bg-elevated border border-border-subtle text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent"
            />
          </form>
        </div>

        <nav className="overflow-y-auto h-[calc(100%-7rem)] py-2 pb-12">
          <Link
            href="/tools"
            onClick={() => setOpenMobile(false)}
            className={
              "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors " +
              (isActive("/tools") && !pathname?.includes("category")
                ? "bg-accent/10 text-accent border-l-2 border-accent"
                : "text-text-muted hover:text-text-primary hover:bg-bg-elevated")
            }
          >
            <span className="text-base">🚀</span>
            <span>全部工具</span>
          </Link>
          <div className="px-4 py-2 mt-1 text-[11px] font-medium text-text-subtle uppercase tracking-wider">分类</div>
          {filteredCats.map((cat) => {
            const subs = SUBCATEGORIES[cat.slug] || [];
            const expanded = expandedCat === cat.slug;
            const active = isActive("/category/" + cat.slug);
            return (
              <div key={cat.slug}>
                <div className={"flex items-center " + (active ? "bg-accent/10 border-l-2 border-accent" : "")}>
                  <Link
                    href={"/category/" + cat.slug}
                    onClick={() => setOpenMobile(false)}
                    className={
                      "flex-1 flex items-center gap-3 px-4 py-2.5 text-sm transition-colors " +
                      (active ? "text-accent" : "text-text-muted hover:text-text-primary hover:bg-bg-elevated")
                    }
                  >
                    <span className="text-base">{getEmoji(cat.slug)}</span>
                    <span className="flex-1">{cat.name}</span>
                  </Link>
                  {subs.length > 0 && (
                    <button
                      onClick={() => setExpandedCat(expanded ? null : cat.slug)}
                      className="px-3 py-2.5 text-text-subtle hover:text-text-primary"
                      aria-label="展开子分类"
                    >
                      <ChevronDown className={"h-4 w-4 transition-transform " + (expanded ? "rotate-180" : "")} />
                    </button>
                  )}
                </div>
                {expanded && subs.length > 0 && (
                  <div className="bg-bg-elevated/50 py-1">
                    {subs.map((s) => (
                      <Link
                        key={s.slug}
                        href={"/category/" + s.slug}
                        onClick={() => setOpenMobile(false)}
                        className="block pl-12 pr-4 py-1.5 text-xs text-text-muted hover:text-text-primary"
                      >
                        · {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="px-4 py-2 mt-2 text-[11px] font-medium text-text-subtle uppercase tracking-wider">其他</div>
          <Link href="/blog" onClick={() => setOpenMobile(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-muted hover:text-text-primary hover:bg-bg-elevated">
            <span className="text-base">📝</span><span>文章</span>
          </Link>
          <Link href="/news" onClick={() => setOpenMobile(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-muted hover:text-text-primary hover:bg-bg-elevated">
            <span className="text-base">📰</span><span>AI 快讯</span>
          </Link>
          <Link href="/forum" onClick={()=>setOpenMobile(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-muted hover:text-text-primary hover:bg-bg-elevated"><span className="text-base">💬</span><span>论坛</span></Link>
          <Link href="/about" onClick={() => setOpenMobile(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-muted hover:text-text-primary hover:bg-bg-elevated">
            <span className="text-base">ℹ️</span><span>关于</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}

function getEmoji(slug: string): string {
  const map: Record<string, string> = {
    chat: "💬", image: "🎨", video: "🎬", code: "💻", search: "🔍",
    productivity: "⚡", writing: "✍️", design: "🎯", audio: "🎧", other: "📦"
  };
  return map[slug] || "🔧";
}