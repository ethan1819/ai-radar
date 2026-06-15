锘? AI Radar 鈥?AI 宸ュ叿瀵艰喘璇勬祴绔?
> 椤圭洰鍦板潃锛歚D:\ai-radar`

## 姒傝

AI Radar 鏄竴涓?AI 宸ュ叿璇勬祴/瀵艰喘绔欙紝鏀跺綍涓绘祦 AI 浜у搧骞堕厤鏈夎缁嗚瘎娴嬨€佸姣旀枃绔犲拰鑱旂洘閾炬帴锛岄€氳繃鑱旂洘钀ラ攢璧氬彇浣ｉ噾鏀跺叆銆?
### 鎶€鏈爤

- **妗嗘灦**: Next.js 14 (App Router) + TypeScript
- **鏍峰紡**: Tailwind CSS 3.4
- **鍐呭**: Markdown (frontmatter + body)锛岄潤鎬佺敓鎴?(SSG)
- **閮ㄧ讲**: Vercel锛堝厤璐圭増鍗冲彲锛?- **缁熻**: 鍐呯疆 /robots.txt 鍜?/sitemap.xml锛涙帹鑽?Plausible锛堝厤璐归搴﹀鐢級

### 宸叉敹褰曞唴瀹?
- 8 涓瀛愬伐鍏凤紙ChatGPT / Claude / Gemini / Midjourney / Cursor / Perplexity / Notion AI / Runway锛?- 4 绡囩瀛愭枃绔狅紙ChatGPT vs Claude 瀵规瘮 / 鍏嶈垂 AI 宸ュ叿鎺ㄨ崘 / 鍥剧墖鐢熸垚宸ュ叿妯瘎 / 缂栫▼ AI 妯瘎锛?- 10 涓垎绫昏鐩栦富瑕?AI 鍦烘櫙

## 閮ㄧ讲姝ラ

### 1. 鎺ㄩ€佸埌 GitHub

```bash
cd D:\ai-radar
git init
git add .
git commit -m "init: AI Radar site"
gh repo create ai-radar --public --push --source=.
```

### 2. 鍦?Vercel 閮ㄧ讲

1. 鐧诲綍 [vercel.com](https://vercel.com)锛岀偣鍑?Add New 鈫?Project
2. 瀵煎叆鍒氬垱寤虹殑 `ai-radar` 浠撳簱
3. Framework Preset 鑷姩閫夋嫨 Next.js锛屾棤闇€鏀归厤缃?4. 鐜鍙橀噺锛?   - `NEXT_PUBLIC_SITE_URL` 鈫?浣犵殑鍩熷悕锛屽 `https://ai-radar.vercel.app`
   - `NEXT_PUBLIC_SITE_NAME` 鈫?`AI Radar`
5. 鐐瑰嚮 Deploy锛岀瓑寰呭畬鎴?
### 3. 缁戝畾鑷畾涔夊煙鍚嶏紙鍙€夛紝寮虹儓鎺ㄨ崘锛?
鍦?Vercel 椤圭洰璁剧疆 鈫?Domains 涓坊鍔犱綘鐨勫煙鍚嶏紝鐒跺悗鍦?DNS 閰嶇疆 CNAME 鎸囧悜 `cname.vercel-dns.com`

### 4. 閰嶇疆 Google Search Console

1. 鍦?Vercel 鍩熷悕涓坊鍔?`https://浣犵殑鍩熷悕`
2. 鍒?Google Search Console 楠岃瘉鎵€鏈夋潈
3. 鎻愪氦 sitemap: `https://浣犵殑鍩熷悕/sitemap.xml`

## 娣诲姞鏂板唴瀹?
### 娣诲姞鏂板伐鍏?
鍦?`content/tools/` 鏂板缓 `.md` 鏂囦欢锛宖rontmatter 鏍煎紡锛?
```yaml
---
name: 宸ュ叿鍚嶇О
tagline: 涓€鍙ヨ瘽绠€浠?category: chat  # 鍒嗙被 slug锛岃 lib/types.ts
logo: /images/宸ュ叿.svg  # 鏀?public/images/ 涓?url: https://瀹樼綉
affiliateUrl: https://鑱旂洘閾炬帴
pricing: 鍏嶈垂 / Plus $20/鏈? # 鏄剧ず鐢?rating: 4.5  # 1-5
reviewCount: 1000
publishedAt: 2026-01-01
updatedAt: 2026-06-01
pros:
  - 浼樼偣1
  - 浼樼偣2
cons:
  - 缂虹偣1
  - 缂虹偣2
features:
  - 鍔熻兘1
  - 鍔熻兘2
---

姝ｆ枃鍐呭锛屾敮鎸?Markdown 鏍煎紡
```

### 娣诲姞鏂版枃绔?
鍦?`content/blog/` 鏂板缓 `.md` 鏂囦欢锛?
```yaml
---
title: 鏂囩珷鏍囬
excerpt: 鎽樿
author: 浣滆€呭悕
category: 鍒嗙被
tags: [鏍囩1, 鏍囩2]
publishedAt: 2026-01-01
---

姝ｆ枃鍐呭
```

### 娣诲姞宸ュ叿 Logo

Logo 鍥剧墖鏀惧湪 `public/images/` 鐩綍涓嬶紝frontmatter 鐨?`logo` 瀛楁鍐?`/images/鏂囦欢鍚?svg`銆?
鐩墠鐢?emoji 鍗犱綅锛堝彇棣栧瓧姣嶏級锛屽缓璁敤 48x48 鐨?SVG 鎴?PNG銆?
## 鏈湴寮€鍙?
```bash
cd D:\ai-radar
npm run dev     # http://localhost:3000
npm run build   # 鏋勫缓鐢熶骇鐗堟湰
npm run start   # 杩愯鐢熶骇鐗堟湰
```

## 鑱旂洘璐﹀彿娉ㄥ唽娓呭崟

杩欐槸**涓婄嚎鍓嶅繀椤诲畬鎴愮殑姝ラ**锛屽惁鍒欑綉绔欐病鏈夋敹鍏ユ潵婧愶紙娉ㄥ唽鍏嶈垂銆佸緢蹇級锛?
| 骞冲彴 | 娉ㄥ唽鍦板潃 | 澶囨敞 |
|------|----------|------|
| 娣樺疂鑱旂洘 | https://pub.alimama.com | 闃块噷鏃椾笅锛屼剑閲?5-50%锛岄渶瀹炲悕璁よ瘉 |
| 浜笢鑱旂洘 | https://union.jd.com | 浜笢鑱旂洘锛屼剑閲?1-10% |
| 鎷煎澶氬澶氳繘瀹?| https://jinbao.pinduoduo.com | 鎷煎澶?CPS |
| 浠€涔堝€煎緱涔?| 鐢宠鍏ラ┗ | 濂藉唴瀹瑰钩鍙颁細涓诲姩鎺?|
| ChatGPT 鑱旂洘 | OpenAI 瀹樻柟 | 鐩存帴閾炬帴锛屾棤闇€娉ㄥ唽鍗冲彲 CTA |

**鏇挎崲鑱旂洘閾炬帴**: 鍦ㄦ墍鏈夊伐鍏?Markdown 鏂囦欢鐨?`affiliateUrl` 瀛楁涓～鍏ヤ綘鐨勮仈鐩熸帹骞块摼鎺ャ€?
## 鎺ㄥ箍娓犻亾 SOP

### 姣忔棩 2 灏忔椂宸ヤ綔娴?
| 鏃堕棿娈?| 浠诲姟 | 鑰楁椂 |
|--------|------|------|
| 鍓?60 鍒嗛挓 | 鍐?1 绡囧唴瀹癸紙宸ュ叿 or 鏂囩珷锛?| 60min |
| 涓棿 20 鍒嗛挓 | 閰嶅浘 + 鎺掔増妫€鏌?+ 鏈湴 build 纭 | 20min |
| 涓棿 10 鍒嗛挓 | 鍙戝竷鍒扮煡涔?/ 灏忕孩涔?/ 鍏紬鍙凤紙AI 甯敼鍐欐憳瑕侊級 | 10min |
| 鏈€鍚?30 鍒嗛挓 | 鏁版嵁澶嶇洏锛堟悳绱㈡帶鍒跺彴鐪嬪睍鐜?鐐瑰嚮 + 鑱旂洘鍚庡彴鐪嬩剑閲戯級 | 30min |

### 鍐呭绛栫暐

- **绗?1-2 鍛?*: 鎶?8 涓瀛愬伐鍏疯ˉ榻愬埌 20 涓紙瑕嗙洊鎵€鏈夊垎绫伙級
- **绗?3-4 鍛?*: 姣忓懆 3-5 绡囧姣?妯瘎鏂囩珷
- **绗?5-12 鍛?*: 姣忓ぉ 1 绡囨柊鍐呭锛岃仛鐒﹂暱灏惧叧閿瘝
- **3 涓湀鍚?*: 鍥炲ご鐪嬫悳绱㈡祦閲忔暟鎹紝鑱氱劍 TOP 10 杞寲鐨勫伐鍏锋寔缁洿鏂?
### 鍏抽敭璇嶇瓥鐣?
宸ュ叿鍚?+ "璇勬祴" / "瀵规瘮" / "鎬庝箞鏍? / "濂界敤鍚? 鏄渶楂樿浆鍖栧叧閿瘝銆備緥濡傦細
- "Cursor 璇勬祴"銆?ChatGPT 鍜?Claude 鍝釜濂?銆?Midjourney 澶氬皯閽?

## 绔欑偣缁撴瀯

```
/
鈹溾攢鈹€ /tools           鍏ㄩ儴宸ュ叿锛堝垪琛級
鈹溾攢鈹€ /tools/[slug]    宸ュ叿璇︽儏椤碉紙璇勬祴銆佷紭缂虹偣銆佸畾浠凤級
鈹溾攢鈹€ /blog            鍏ㄩ儴鏂囩珷
鈹溾攢鈹€ /blog/[slug]     鏂囩珷璇︽儏
鈹溾攢鈹€ /category/[slug] 鎸夊垎绫绘祻瑙?鈹溾攢鈹€ /about           鍏充簬
鈹溾攢鈹€ /disclosure      鍏嶈矗澹版槑锛堣仈鐩熼摼鎺ユ姭闇诧級
鈹溾攢鈹€ /privacy         闅愮鏀跨瓥
鈹溾攢鈹€ /sitemap.xml     绔欑偣鍦板浘
鈹溾攢鈹€ /robots.txt      鐖櫕瑙勫垯
鈹斺攢鈹€ /feed            RSS 璁㈤槄
```