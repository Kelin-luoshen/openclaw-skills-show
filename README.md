# OpenClaw Skills Showcase - Complete Package

## 项目概述

这是一个为 Vina（OpenClaw 自动化机器人）精心设计的高质量 Skills 清单展示网站。

## 包含内容

### 1. 前端源代码 (`client/`)
- **src/pages/Home.tsx** - 主页面组件，展示两份 Skills 清单
- **src/components/** - 可复用的 UI 组件（Card、Badge、Tabs 等）
- **src/index.css** - 全局样式和 Tailwind 配置
- **public/** - 静态资源目录

### 2. 编译后的静态文件 (`dist/`)
- **dist/public/index.html** - 打包后的 HTML 文件
- **dist/public/assets/index-*.css** - 压缩的 CSS 文件
- **dist/public/assets/index-*.js** - 压缩的 JavaScript 文件
- **dist/index.js** - Node.js 服务器入口（可选）

### 3. 后端代码 (`server/`)
- **server/index.ts** - Express 服务器配置（可选，用于生产部署）

### 4. 配置文件
- **package.json** - 项目依赖和脚本配置
- **pnpm-lock.yaml** - 依赖锁定文件

## 快速开始

### 方式 1：直接使用静态文件（推荐）

1. 将 `dist/public/` 目录下的所有文件部署到任何静态文件服务器
2. 访问 `index.html` 即可查看完整网站

```bash
# 例如使用 Python 的简单 HTTP 服务器
cd dist/public
python3 -m http.server 8000
# 访问 http://localhost:8000
```

### 方式 2：使用 Node.js 服务器

```bash
# 安装依赖
pnpm install

# 生产环境运行
NODE_ENV=production node dist/index.js
```

### 方式 3：开发环境

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
# 访问 http://localhost:5173
```

## 文件结构说明

```
openclaw-package/
├── client/                          # 前端源代码
│   ├── src/
│   │   ├── pages/Home.tsx          # 主页面
│   │   ├── components/             # UI 组件库
│   │   ├── index.css               # 全局样式
│   │   └── main.tsx                # React 入口
│   ├── public/                     # 静态资源
│   └── index.html                  # HTML 模板
├── dist/                           # 编译产物
│   ├── public/                     # 静态文件（可直接部署）
│   │   ├── index.html
│   │   └── assets/
│   └── index.js                    # 服务器文件
├── server/                         # 后端代码
│   └── index.ts
├── package.json                    # 项目配置
└── README.md                        # 本文件
```

## 技术栈

- **前端框架**: React 19 + TypeScript
- **样式**: Tailwind CSS 4
- **UI 组件**: shadcn/ui
- **路由**: Wouter
- **构建工具**: Vite
- **打包器**: esbuild
- **包管理**: pnpm

## 网站功能

✓ **两份完整的 Skills 清单**
  - 清单 1：基础 + Web3+AI+自媒体主题
  - 清单 2：完整接单闭环工作流

✓ **交互式展示**
  - 选项卡切换不同清单
  - 评分徽章和视觉反馈
  - 外链跳转到 ClawHub 详情页

✓ **响应式设计**
  - 支持桌面、平板、手机
  - 流畅的用户体验

## 部署建议

### 静态托管（推荐）
- Netlify、Vercel、GitHub Pages、Cloudflare Pages
- 只需上传 `dist/public/` 目录

### 自托管
- 任何支持 HTTP 的服务器（Nginx、Apache 等）
- 配置 `index.html` 作为默认文档

### 全栈部署
- 使用 `dist/index.js` 和 Node.js 环境
- 支持更复杂的后端功能

## 自定义和扩展

### 添加更多 Skills
编辑 `client/src/pages/Home.tsx` 中的 `skillsData` 数组，添加新的 Skill 对象。

### 修改样式
编辑 `client/src/index.css` 中的 CSS 变量和 Tailwind 配置。

### 添加新功能
在 `client/src/components/` 中创建新组件，在 `client/src/pages/` 中使用。

## 许可证

MIT

## 支持

如有问题或建议，请联系项目维护者。

---

**最后更新**: 2026-02-24
**版本**: 1.0.0
