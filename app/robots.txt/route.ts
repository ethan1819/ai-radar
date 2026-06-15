import { SITE } from "@/lib/site";
export async function GET() {
  const base = SITE.url;
  return new Response("User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: " + base + "/sitemap.xml\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
