import { getAllPosts } from "@/lib/content";
import BlogCard from "@/components/BlogCard";
import type { Metadata } from "next";
export const metadata = { title: "AI 工具文章", description: "AI 工具评测、对比、使用技巧和行业趋势分析。" };
export default function BlogPage() {
  const posts = getAllPosts();
  return (<div className="container-page page-section">
    <h1 className="text-3xl font-bold text-text-primary mb-2">文章</h1>
    <p className="text-text-muted mb-8">AI 工具评测、对比和使用指南，帮你做出更好的选择。</p>
    {posts.length===0 ? (<p className="text-text-muted text-center py-12">暂无文章，敬请期待。</p>) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {posts.map((post)=>(<BlogCard key={post.slug} post={post} />))}
      </div>
    )}
  </div>);
}