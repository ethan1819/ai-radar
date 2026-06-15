import Link from "next/link";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import type { NewsPost } from "@/lib/types";

export default function NewsTimeline({ items }: { items: NewsPost[] }) {
  const grouped = groupByDate(items);
  return (
    <div>
      {grouped.map((group) => (
        <div key={group.date} className="mb-6">
          <div className="news-timeline-day">
            <div className="news-day-label">{group.date}</div>
            {group.items.map((item) => (
              <article key={item.slug} className="news-item">
                <h3>
                  {item.sourceUrl ? (
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className="news-item-title inline-flex items-center gap-1.5">
                      {item.title}
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ) : (
                    <Link href={"/news/" + item.slug} className="news-item-title">{item.title}</Link>
                  )}
                </h3>
                <p className="news-item-excerpt">{item.excerpt}</p>
                <div className="news-item-meta">
                  {item.source && <span>来源：{item.source}</span>}
                  {item.category && (
                    <span className="inline-flex items-center gap-1">
                      <Tag className="h-3 w-3" />{item.category}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function groupByDate(items: NewsPost[]) {
  const map = new Map<string, NewsPost[]>();
  for (const it of items) {
    const d = new Date(it.publishedAt);
    const key = d.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" });
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(it);
  }
  return Array.from(map.entries()).map(([date, items]) => ({ date, items }));
}