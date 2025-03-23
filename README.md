# VitePress Colorful Themes | VitePress 多彩主题

<p align="center">
  <img src="./public/logo.png" width="200" alt="VitePress Colorful Theme" style="max-width: 100%;border-radius: 50%">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vitepress-colorful-themes"><img src="https://img.shields.io/npm/v/vitepress-colorful-themes.svg" alt="npm package"></a>
  <a href="https://github.com/ZhouYu2156/vitepress-colorful-themes/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/vitepress-colorful-themes.svg" alt="license"></a>
  <a href="https://www.npmjs.com/package/vitepress-colorful-themes"><img src="https://img.shields.io/npm/dt/vitepress-colorful-themes.svg" alt="npm downloads"></a>
</p>

[English](#English) | [中文](#中文)

---

<h2 id="English">English</h2>

A beautiful theme extension for VitePress with 16 colorful preset themes and smooth theme switching animations.

## Features

- 🎨 16 beautiful preset themes
- 🌓 Support for both light and dark modes
- 🔄 Smooth theme switching animation using View Transitions API
- 💾 Theme preference persistence
- 🌈 Mobile-friendly theme selector

## Installation

```bash
# npm
npm install vitepress-colorful-themes

# yarn
yarn add vitepress-colorful-themes

# pnpm
pnpm add vitepress-colorful-themes
```

You also need to install the peer dependencies if they are not already in your project:

```bash
# npm
npm install element-plus @element-plus/icons-vue
npm install -D unplugin-auto-import unplugin-vue-components

# yarn
yarn add element-plus @element-plus/icons-vue
yarn add -D unplugin-auto-import unplugin-vue-components

# pnpm
pnpm add element-plus @element-plus/icons-vue
pnpm add -D unplugin-auto-import unplugin-vue-components
```

## Usage

1. Create or modify your `.vitepress/theme/index.ts` file:

```ts
import type { Theme } from 'vitepress'
import ColorfulTheme from 'vitepress-colorful-themes'

// Option 1: Simply import and export
export default ColorfulTheme

// Option 2: Extend with custom configuration
export default {
  extends: ColorfulTheme,
  Layout, // Custom layout if needed
  enhanceApp({ app, router, siteData }) {
    // Your custom app enhancement
  },
} satisfies Theme
```

2. Configure automatic import for Element Plus in your `.vitepress/config.mts`:

```ts
import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ... your other config
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // Make sure your VitePress can resolve TypeScript files
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
  },
})
```

3. Start your VitePress development server:

```bash
npm run docs:dev
```

## 🔄 Update Log

### v1.0.2 (2024-03-25)
- 🎨 **Optimization**: Improved brand button style, increased font weight to 600, making it more rounded and readable
- 🖋️ **Typography**: Optimized site-wide fonts, added Chinese font support, improved overall readability and aesthetics
- 📱 **Adaptation**: Enhanced navigation item text style for a more consistent visual experience
- 🧩 **Interface**: Added custom scrollbar style, delicate and rounded, supporting light/dark modes

### v1.0.1 (2024-03-23)
- 🐞 **Fixed**: Fixed the issue of insufficient brand button text color contrast in light mode, now button text is clearly visible in all themes
- 📖 **Documentation**: Added detailed documentation about theme switching

### v1.0.0 (2024-03-20)
- 🎉 **Release**: Initial release, including 15+ preset themes and theme management system
- ✨ **Features**: Support for light/dark mode, theme persistence and smooth transition effects

## License

[MIT](./LICENSE) License © 2023 [ZhouYu](https://github.com/ZhouYu2156)

---

<h2 id="中文">中文</h2>

一个为 VitePress 提供 16 种精美预设主题和平滑主题切换动画的主题扩展。

## 特性

- 🎨 16种精美预设主题
- 🌓 支持亮色/暗色模式
- 🔄 使用View Transitions API实现平滑主题切换动画
- 💾 主题偏好持久化存储
- 🌈 移动设备友好的主题选择器

## 安装

```bash
# npm
npm install vitepress-colorful-themes

# yarn
yarn add vitepress-colorful-themes

# pnpm
pnpm add vitepress-colorful-themes
```

你还需要安装以下peer依赖（如果它们尚未在你的项目中）：

```bash
# npm
npm install element-plus @element-plus/icons-vue
npm install -D unplugin-auto-import unplugin-vue-components

# yarn
yarn add element-plus @element-plus/icons-vue
yarn add -D unplugin-auto-import unplugin-vue-components

# pnpm
pnpm add element-plus @element-plus/icons-vue
pnpm add -D unplugin-auto-import unplugin-vue-components
```

## 使用方法

1. 创建或修改 `.vitepress/theme/index.ts` 文件：

```ts
import type { Theme } from 'vitepress'
import ColorfulTheme from 'vitepress-colorful-themes'

// 方式一：直接导入再导出
export default ColorfulTheme

// 方式二：扩展自定义配置
export default {
  extends: ColorfulTheme,
  Layout, // 如需要可以使用自定义布局
  enhanceApp({ app, router, siteData }) {
    // 你的自定义应用增强
  },
} satisfies Theme
```

2. 在 `.vitepress/config.mts` 中配置 Element Plus 的自动导入：

```ts
import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ... 你的其他配置
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // Make sure your VitePress can resolve TypeScript files
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    }
  },
})
```

3. 启动 VitePress 开发服务器：

```bash
npm run docs:dev
```

## 更新日志

### v1.0.2 (2024-03-25)
- 🎨 **优化**: 改进品牌按钮样式，增加字重至 600，使其更圆润、更易读
- 🖋️ **排版**: 优化全站字体，添加中文字体支持，提高整体可读性和美观度
- 📱 **适配**: 增强导航栏项文字样式，提供更一致的视觉体验
- 🧩 **界面**: 添加自定义滚动条样式，细腻圆润，支持亮色/暗色模式

### v1.0.1 (2024-03-23)
- 🐞 **修复**: 修复了亮色模式下品牌按钮文字颜色对比度不足的问题，现在按钮文字在所有主题和模式下都清晰可见
- 📖 **文档**: 添加了关于主题切换的详细说明文档

### v1.0.0 (2024-03-20)
- 🎉 **发布**: 首次发布，包含16种预设主题和主题管理系统
- ✨ **功能**: 支持亮色/暗色模式，主题持久化和平滑过渡效果

## 许可证

[MIT](./LICENSE) 许可证 © 2023 [ZhouYu](https://github.com/ZhouYu2156)