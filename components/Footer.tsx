import Link from "next/link";
import { SITE } from "@/lib/site";
import { CATEGORIES } from "@/lib/types";
export default function Footer() {
  return (<footer className="border-t border-border-subtle mt-24">
    <div className="container-page py-12 sm:py-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-text-primary mb-3">{SITE.name}</Link>
          <p className="text-sm text-text-muted">{SITE.tagline}</p>
        </div>
        <div><h3 className="text-sm font-medium text-text-primary mb-3">分类</h3>
          <ul className="space-y-2">{CATEGORIES.slice(0,5).map((c) => (<li key={c.slug}>
            <Link href={"/category/"+c.slug} className="text-sm text-text-muted hover:text-text-primary transition-colors">{c.name}</Link></li>))}</ul>
        </div>
        <div><h3 className="text-sm font-medium text-text-primary mb-3">分类</h3>
          <ul className="space-y-2">{CATEGORIES.slice(5,10).map((c) => (<li key={c.slug}>
            <Link href={"/category/"+c.slug} className="text-sm text-text-muted hover:text-text-primary transition-colors">{c.name}</Link></li>))}</ul>
        </div>
        <div><h3 className="text-sm font-medium text-text-primary mb-3">关于</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-text-muted hover:text-text-primary transition-colors">关于我们</Link></li>
            <li><Link href="/blog" className="text-sm text-text-muted hover:text-text-primary transition-colors">文章</Link></li>
            <li><Link href="/disclosure" className="text-sm text-text-muted hover:text-text-primary transition-colors">免责声明</Link></li>
            <li><Link href="/privacy" className="text-sm text-text-muted hover:text-text-primary transition-colors">隐私政策</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border-subtle text-center text-xs text-text-subtle">
        &copy; {new Date().getFullYear()} {SITE.name}. 本站部分链接为联盟链接，详见
        <Link href="/disclosure" className="text-accent ml-1">免责声明</Link>。</div>
    </div></footer>);
}
