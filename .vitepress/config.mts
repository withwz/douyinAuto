import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Douyin Auto",
  description: "抖音自动化脚本",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '运营Note', link: '/概览' }
    ],

    sidebar: [
      {
        text: '运营Note',
        items: [
          { text: '概览', link: '/概览' },
          { text: '作品发布', link: '/作品发布' },
          { text: '作品评论', link: '/作品评论' },
          { text: '私信回复', link: '/私信回复' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/withwz/douyinAuto' }
    // ]
  },
  srcDir: './', // 设置为根目录
  base: '/'
})
