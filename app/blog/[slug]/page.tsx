import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
export async function generateStaticParams() { return getAllPosts().map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}
export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return (<div className="container-page page-section">
    <nav className="flex items-center gap-2 text-xs text-text-subtle mb-6">
      <Link href="/">首页</Link><span>/</span><Link href="/blog">文章</Link><span>/</span>
      <span className="text-text-muted">{post.title}</span>
    </nav>
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-text-subtle mb-4">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="px-2 py-0.5 rounded text-xs bg-accent/10 text-accent">{post.category}</span>
          {post.tags.map((tag) => (<span key={tag} className="text-xs text-text-subtle">#{tag}</span>))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">{post.title}</h1>
        <p className="mt-3 text-lg text-text-muted">{post.excerpt}</p>
      </header>
      <div className="prose-custom max-w-none" dangerouslySetInnerHTML={{ __html: renderBody(post.body) }} />
    </article></div>);
}
function renderBody(md: string) {
  return md.split("\n").map(l => {
    const t = l.trim();
    if (t.startsWith("## ")) return "<h2>" + esc(t.slice(3)) + "</h2>";
    if (t.startsWith("- ")) return "<li>" + esc(t.slice(2)) + "</li>";
    if (t) return "<p>" + esc(t) + "</p>";
    return "";
  }).join("\n");
}
function esc(s: string) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
