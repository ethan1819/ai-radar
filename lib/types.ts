export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  subCategory?: string;
  description: string;
  logo: string;
  url: string;
  affiliateUrl?: string;
  pricing: string;
  rating: number;
  reviewCount: number;
  pros: string[];
  cons: string[];
  features: string[];
  tags?: string[];
  isHot?: boolean;
  isNew?: boolean;
  featured?: boolean;
  body: string;
  publishedAt: string;
  updatedAt?: string;
}

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  source?: string;
  sourceUrl?: string;
  category: string;
  body: string;
  publishedAt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  body: string;
  publishedAt: string;
  updatedAt?: string;
}

export const CATEGORIES = [
  { slug: "chat", name: "Chat / 聊天", icon: "MessageCircle" },
  { slug: "image", name: "图片生成", icon: "Image" },
  { slug: "video", name: "视频生成", icon: "Video" },
  { slug: "code", name: "编程助手", icon: "Terminal" },
  { slug: "search", name: "搜索引擎", icon: "Search" },
  { slug: "productivity", name: "效率工具", icon: "Zap" },
  { slug: "writing", name: "写作辅助", icon: "PenTool" },
  { slug: "design", name: "设计工具", icon: "Palette" },
  { slug: "audio", name: "音频处理", icon: "Headphones" },
  { slug: "other", name: "其他", icon: "Box" }
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const CATEGORY_MAP: Record<string, { name: string; icon: string }> = {};
for (const c of CATEGORIES) { CATEGORY_MAP[c.slug] = { name: c.name, icon: c.icon }; }

export const SUBCATEGORIES: Record<string, { slug: string; name: string }[]> = {
  image: [
    { slug: "image-illustration", name: "AI 图片插画生成" },
    { slug: "image-bg-removal", name: "AI 图片背景移除" },
    { slug: "image-inpainting", name: "AI 图片物体抹除" },
    { slug: "image-upscale", name: "AI 图片无损放大" },
    { slug: "image-restore", name: "AI 图片优化修复" },
    { slug: "image-product", name: "AI 商品图生成" },
    { slug: "image-3d", name: "AI 3D 模型生成" }
  ],
  video: [
    { slug: "video-generation", name: "AI 视频生成" },
    { slug: "video-edit", name: "AI 视频剪辑" },
    { slug: "video-avatar", name: "AI 数字人" }
  ],
  code: [
    { slug: "code-completion", name: "AI 代码补全" },
    { slug: "code-chat", name: "AI 编程对话" },
    { slug: "code-agent", name: "AI 编程 Agent" }
  ],
  chat: [
    { slug: "chat-general", name: "通用聊天" },
    { slug: "chat-roleplay", name: "角色扮演" },
    { slug: "chat-character", name: "AI 角色" }
  ],
  writing: [
    { slug: "writing-copy", name: "营销文案" },
    { slug: "writing-academic", name: "学术写作" },
    { slug: "writing-translate", name: "翻译工具" }
  ],
  audio: [
    { slug: "audio-tts", name: "AI 配音" },
    { slug: "audio-music", name: "AI 音乐生成" },
    { slug: "audio-transcribe", name: "AI 语音转写" }
  ],
  design: [
    { slug: "design-ui", name: "UI 设计" },
    { slug: "design-logo", name: "Logo 生成" },
    { slug: "design-ppt", name: "PPT 生成" }
  ],
  search: [
    { slug: "search-answer", name: "AI 问答搜索" },
    { slug: "search-academic", name: "学术搜索" }
  ],
  productivity: [
    { slug: "prod-notes", name: "AI 笔记" },
    { slug: "prod-meeting", name: "AI 会议" },
    { slug: "prod-office", name: "AI 办公" }
  ],
  other: []
};

export const COMMON_TAGS: Record<string, { name: string; color: string }> = {
  free: { name: "免费", color: "green" },
  freemium: { name: "部分免费", color: "yellow" },
  paid: { name: "付费", color: "red" },
  cn: { name: "国内", color: "accent" },
  en: { name: "海外", color: "blue" },
  open: { name: "开源", color: "green" },
  api: { name: "API", color: "purple" },
  noLogin: { name: "免登录", color: "green" },
  cnSupport: { name: "中文友好", color: "accent" }
};
export const FORUM_CATEGORIES: Record<string, string> = {
  agent: 'Agent 工具讨论',
  codex: 'Codex',
  hermes: 'Hermes',
  openclaw: 'OpenClaw',
  general: '综合讨论',
  share: '经验分享'
};

export interface ForumPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  replyCount: number;
  body: string;
  publishedAt: string;
  updatedAt?: string;
}
