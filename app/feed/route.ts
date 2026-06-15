import { SITE } from "@/lib/site";
import { getAllPosts } from "@/lib/content";

export async function GET() {
  const base = SITE.url;
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n';
  xml += "<title>" + esc(SITE.name) + "</title>\n";
  xml += "<link>" + esc(base) + "</link>\n";
  xml += "<description>" + esc(SITE.tagline) + "</description>\n";
  xml += "<language>zh-CN</language>\n";
  const posts = getAllPosts();
  for (const p of posts) {
    xml += "<item>\n";
    xml += "<title>" + esc(p.title) + "</title>\n";
    xml += "<link>" + esc(base + "/blog/" + p.slug) + "</link>\n";
    xml += "<description>" + esc(p.excerpt) + "</description>\n";
    xml += "<pubDate>" + new Date(p.publishedAt).toUTCString() + "</pubDate>\n";
    xml += "</item>\n";
  }
  xml += "</channel>\n</rss>";
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
function esc(s: string) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
