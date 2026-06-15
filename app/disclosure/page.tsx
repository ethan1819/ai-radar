import type { Metadata } from "next";
export const metadata = { title: "免责声明", description: "AI Radar 的免责声明与联盟链接披露。" };
export default function DisclosurePage() {
  return (<div className="container-page page-section max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-text-primary mb-8">免责声明</h1>
    <div className="space-y-4 text-text-muted leading-relaxed">
      <p>AI Radar 提供 AI 工具评测、导航和对比信息。使用本站内容即表示您同意以下条款：</p>
      <h2 className="text-xl font-semibold text-text-primary mt-8">信息准确性</h2>
      <p>本站内容基于实际使用体验和公开资料整理。虽然我们尽力确保信息的准确性，但 AI 工具的功能、定价和政策可能随时调整。</p>
      <h2 className="text-xl font-semibold text-text-primary mt-8">联盟链接披露</h2>
      <p>本站部分工具链接为联盟链接。如果您通过这些链接购买产品，我们可能会获得稍量佣金。这不会增加您的购买成本。</p>
      <h2 className="text-xl font-semibold text-text-primary mt-8">不构成专业建议</h2>
      <p>本站内容仅供参考。</p>
    </div></div>);
}