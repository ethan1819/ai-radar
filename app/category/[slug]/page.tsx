import { getToolsByCategory, getAllTools } from "@/lib/content";
import { getCategoryName } from "@/lib/utils";
import { CATEGORIES } from "@/lib/types";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
export async function generateStaticParams() { return CATEGORIES.map((c)=>({slug:c.slug})); }
export async function generateMetadata({params}:{params:{slug:string}}):Promise<Metadata> {
  const cat = CATEGORIES.find(c=>c.slug===params.slug);
  if(!cat) return{};
  return{title: cat.name+" AI 工具推荐",description:cat.name+"分类下收录了多款优质AI工具。"};
}
export default function CategoryPage({params}:{params:{slug:string}}) {
  const cat = CATEGORIES.find(c=>c.slug===params.slug);
  if(!cat) notFound();
  const tools = getToolsByCategory(params.slug);
  const allTools = getAllTools();
  const counts: Record<string, number> = {};
  allTools.forEach(t=>{counts[t.category]=(counts[t.category]||0)+1;});
  return (<div className="container-page page-section">
    <nav className="flex items-center gap-2 text-xs text-text-subtle mb-6">
      <Link href="/">首页</Link><span>/</span><Link href="/tools">工具</Link><span>/</span>
      <span className="text-text-muted">{cat.name}</span>
    </nav>
    <h1 className="text-3xl font-bold text-text-primary mb-2">{cat.name} AI 工具</h1>
    <p className="text-text-muted mb-8">共收录 {tools.length} 款 {cat.name}</p>
    <div className="flex flex-wrap gap-2 mb-8">
      <Link href="/tools" className="px-3 py-1.5 rounded text-sm bg-bg-card border border-border-subtle text-text-muted hover:border-border transition-colors">全部</Link>
      {CATEGORIES.map(c=>(<Link key={c.slug} href={"/category/"+c.slug} className={"px-3 py-1.5 rounded text-sm "+(c.slug===params.slug?"bg-accent text-white font-medium":"bg-bg-card border border-border-subtle text-text-muted hover:border-border transition-colors")}>
        {c.name} ({counts[c.slug]||0})
      </Link>))}
    </div>
    {tools.length===0 ? (<div className="text-center py-12"><p className="text-text-muted mb-4">该分类下暂无收录工具。</p><Link href="/tools" className="btn-primary">浏览全部工具</Link></div>) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{tools.map(t=>(<ToolCard key={t.slug} tool={t}/>))}</div>)}
  </div>);
}