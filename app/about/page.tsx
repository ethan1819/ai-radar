import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = {
  title: "关于 " + SITE.name,
  description: "AI Radar 是中文 AI 工具导航与评测平台，帮你发现和选择最好的 AI 产品。"
};
export default function AboutPage() {
  return (<div className="container-page page-section max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-text-primary mb-8">关于 {SITE.name}</h1>
    <div className="space-y-6 text-text-muted leading-relaxed">
      <p className="text-lg text-text-primary">AI Radar 是一个专注 AI 工具的导航与评测平台。</p>
      <p>我们收录了市面上最流行的 AI 产品，从 ChatGPT 到 Midjourney，从 Cursor 到 Perplexity——覆盖聊天、图片、视频、编程、搜索等主流场景。</p>
      <p>每款工具我们都整理了：详细功能介绍、定价方案对比、优缺点分析、真实用户评分。同时我们也会定期发布横向对比评测和使用指南，帮你快速找到最适合自己的工具。</p>
      <h2 className="text-xl font-semibold text-text-primary mt-8">为什么做这个站？</h2>
      <p>AI 工具爆发式增长的今天，整个时代每天都有新产品上线。作为一个普通用户，你很难花时间去一个个试用、对比。AI Radar 的目标就是做你的 AI 工具「雷达」——快速扫描、精准推荐。</p>
      <h2 className="text-xl font-semibold text-text-primary mt-8">关于内容</h2>
      <p>本站的内容基于实际使用体验和公开资料整理，力求真实客观。部分工具链接带有联盟标记，如果你通过这些链接购买产品，我们可能会获得小额佣金。</p>
      <h2 className="text-xl font-semibold text-text-primary mt-8">联系我们</h2>
      <p>如果你有推荐的 AI 工具想收录，或者发现内容需要修正，欢迎随时告诉我们。</p>
    </div></div>);
}