import { clsx, type ClassValue } from "clsx";
export function cn(...inputs: ClassValue[]) { return clsx(inputs); }
export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("zh-CN", { year:"numeric", month:"long", day:"numeric" });
}
export function getCategoryName(slug: string): string {
  const map: Record<string,string> = {
    chat: "Chat / 聊天", image: "图片生成", video: "视频生成", code: "编程助手",
    search: "搜索引擎", productivity: "效率工具", writing: "写作辅助",
    design: "设计工具", audio: "音频处理", other: "其他"
  };
  return map[slug] || slug;
}
