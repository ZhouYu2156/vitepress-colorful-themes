// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

// 导入样式文件 - 注意顺序很重要
// 首先导入基础CSS
import './style.css'
// 然后导入主题CSS
import './styles/themes.css'
// 添加用于主题过渡的View Transitions样式
import './styles/theme-transitions.css'
// Element Plus主题样式覆盖
import './styles/element-overrides.css'

export default {
  extends: DefaultTheme,
  // 扩展默认的Layout，而不是替换它
  Layout,
  enhanceApp({ app, router, siteData }) {},
} satisfies Theme
