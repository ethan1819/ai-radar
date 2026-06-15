import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export default function BlogCard({ post, featured }: { post: BlogPost; featured?: boolean }) {
  return (<Link href={"/blog/"+post.slug} className="block group">
    <article className={"card-base "+(featured?"sm:p-8":"")}>
      <div className="flex flex-wrap items-center gap-2 text-xs text-text-subtle mb-3">
        <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDate(post.publishedAt)}</span>
        <span className="px-2 py-0.5 rounded bg-accent/10 text-accent">{post.category}</span>
      </div>
      <h3 className={"font-semibold text-text-primary group-hover:text-accent transition-colors "+(featured?"text-xl mb-3":"text-base mb-2")}>{post.title}</h3>
      <p className="text-sm text-text-muted line-clamp-2">{post.excerpt}</p>
      <div className="mt-3 flex items-center gap-1 text-xs text-accent font-medium">阅读全文 <ArrowRight className="h-3 w-3" /></div>
    </article></Link>);
}