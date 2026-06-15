import type { Metadata } from "next";
export const metadata = { title: "隐私政策", description: "AI Radar 的隐私政策与数据处理说明。" };
export default function PrivacyPage() {
  return (<div className="container-page page-section max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold text-text-primary mb-8">隐私政策</h1>
    <div className="space-y-4 text-text-muted leading-relaxed">
      <p>AI Radar 重视您的隐私。本政策说明我们如何收集、使用和保护您的信息。</p>
      <p>本站不收集任何个人信息，不设用户注册。</p>
    </div></div>);
}