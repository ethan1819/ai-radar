import Link from "next/link";
import { MessageSquare, Calendar, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { ForumPost } from "@/lib/types";

export default function ForumCard({ post }: { post: ForumPost }) {
  return (
    <Link href={"/forum/" + post.slug} className="block group">
      <article className="card-base">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors text-base mb-1">
              {post.title}
            </h3>
            <p className="text-sm text-text-muted line-clamp-2 mb-3">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-text-subtle">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />{formatDate(post.publishedAt)}
              </span>
              {post.tags && post.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-1.5 py-0.5 rounded bg-accent/10 text-accent">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-text-subtle flex-shrink-0">
            <MessageSquare className="h-4 w-4" />
            <span>{post.replyCount}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}