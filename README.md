# 小小怪卡密 - 官方教程文档站

小小怪卡密验证系统 Pro 的官方教程站点，部署于 GitHub + Cloudflare Pages。

## 技术选型

| 方案 | 说明 |
|------|------|
| **HTML + CSS + JS**（当前） | 零构建、直接部署，适合教程文档类静态站点 |
| VitePress / Docsify | 若后续文档量增大，可迁移为多页 Markdown 文档站 |

## 本地预览

直接用浏览器打开 `index.html`，或使用任意静态服务器：

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

访问 http://localhost:8080 即可预览。

## Cloudflare Pages 部署

### 方式一：GitHub 连接（推荐）

1. 将本仓库推送到 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. 选择本仓库，配置如下：
   - **Framework preset**: None
   - **Build command**: （留空）
   - **Build output directory**: `/`（根目录）
4. 点击 **Save and Deploy**

### 方式二：Wrangler CLI 手动上传

```bash
npx wrangler pages deploy . --project-name=doc-xxgkami-pro
```

### 自定义域名

在 Cloudflare Pages 项目设置中添加自定义域名，例如 `doc.xxgkami.com`。

## 目录结构

```
doc-xxgkami-pro/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式
├── js/
│   └── main.js         # 交互脚本
├── image/
│   └── icon.png        # Logo / Favicon
└── README.md
```

## 相关链接

- 官方网站：https://www.xxgkami.com/
- 在线 Demo：https://demo.xxgkami.com/
- GitHub 仓库：https://github.com/xxg-yyds/xxgkami-pro
- 视频教程：https://www.bilibili.com/video/BV1Hs766FE4j
