# VitePress 多彩主题

<p align="center">
  <img src="./public/logo.png" width="200" alt="VitePress 多彩主题" style="border-radius: 50%; overflow: hidden;">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vitepress-colorful-themes"><img src="https://img.shields.io/npm/v/vitepress-colorful-themes.svg" alt="npm 包"></a>
  <a href="https://github.com/ZhouYu2156/vitepress-colorful-themes/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/vitepress-colorful-themes.svg" alt="许可证"></a>
  <a href="https://www.npmjs.com/package/vitepress-colorful-themes"><img src="https://img.shields.io/npm/dt/vitepress-colorful-themes.svg" alt="npm 下载"></a>
</p>

一个为 VitePress 提供 16 种精美预设主题和平滑主题切换动画的主题扩展。

## 特性

- 🎨 16种精美预设主题
- 🌓 支持亮色/暗色模式
- 🔄 使用View Transitions API实现平滑主题切换动画
- 💾 主题偏好持久化存储
- 🌈 移动设备友好的主题选择器

## 安装

```bash
npm install vitepress-colorful-themes
```

## 使用方法

### 基础用法

1. 创建或修改 `.vitepress/theme/index.ts` 文件：

```ts
// .vitepress/theme/index.ts
import ColorfulTheme from 'vitepress-colorful-themes'

export default ColorfulTheme
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
  },
})
```

3. 安装必要的依赖：

```bash
npm install element-plus @element-plus/icons-vue
npm install -D unplugin-auto-import unplugin-vue-components
```

4. 启动 VitePress 开发服务器：

```bash
npm run docs:dev
```

### 自定义布局

如果你想自定义主题布局，可以这样做：

```ts
// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import ColorfulTheme from 'vitepress-colorful-themes'
import MyLayout from './MyLayout.vue'

export default {
  extends: ColorfulTheme,
  Layout: MyLayout
} satisfies Theme
```

然后在 `MyLayout.vue` 中：

```vue
<script setup lang="ts">
import { Layout } from 'vitepress-colorful-themes'
// 你的自定义组件
import MyCustomComponent from './MyCustomComponent.vue'
</script>

<template>
  <Layout>
    <!-- 可以通过插槽自定义部分内容 -->
    <template #aside-top>
      <MyCustomComponent />
    </template>
  </Layout>
</template>
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