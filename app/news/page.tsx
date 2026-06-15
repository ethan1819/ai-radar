import Link from "next/link";
import { getAllNews } from "@/lib/content";
import NewsTimeline from "@/components/NewsTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 行业快讯",
  description: "每日更新 AI 行业最新动态,包括大模型发布、产品更新、融资消息、研究突破等。"
};

export default function NewsPage() {
  const news = getAllNews();
  return (
    <div className="container-page page-section">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text-primary mb-2">AI 行业快讯</h1>
        <p className="text-text-muted">每日追踪 AI 行业最新动态,目前共 {news.length} 条</p>
      </header>
      {news.length > 0 ? (
        <NewsTimeline items={news} />
      ) : (
        <p className="text-text-muted">暂无快讯。</p>
      )}
    </div>
  );
}