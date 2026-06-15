import Link from "next/link";
import { SITE } from "@/lib/site";
import { Search, Radar } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg/80 backdrop-blur-lg">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-text-primary flex-shrink-0">
          <Radar className="h-5 w-5 text-accent" />
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>
        <form action="/tools" method="get" className="hidden md:flex flex-1 max-w-lg relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-subtle" />
          <input
            name="q"
            type="search"
            placeholder="搜索 AI 工具（ChatGPT、Midjourney、Cursor…）"
            className="w-full pl-9 pr-3 py-1.5 rounded text-sm bg-bg-elevated border border-border-subtle text-text-primary placeholder:text-text-subtle focus:outline-none focus:border-accent"
          />
        </form>
        <nav className="hidden md:flex items-center gap-5 text-sm flex-shrink-0">
          <Link href="/tools" className="text-text-muted hover:text-text-primary transition-colors">工具</Link>
          <Link href="/blog" className="text-text-muted hover:text-text-primary transition-colors">文章</Link>
          <Link href="/news" className="text-text-muted hover:text-text-primary transition-colors">快讯</Link>
        </nav>
        <Link href="/tools" className="md:hidden ml-auto text-text-muted">
          <Search className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}