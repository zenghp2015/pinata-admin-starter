import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress',
  description: 'Just playing around.',
  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/config/' },
      // { text: '插件', link: '/guide' },
      // { text: '主题', link: '/guide' },
      // { text: '生态系统', link: '/guide' },
      // { text: '开源项目', link: '/guide' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsed: false,
          items: []
        },
        { text: '快速开始', link: '/guide/' },
        { text: '路由和菜单', link: '/guide/one' },
        { text: '权限控制', link: '/guide/two' },
        { text: '项目构建', link: '/guide/two' },
        { text: '项目部署', link: '/guide/two' },
        { text: '个性化配置', link: '/guide/two' },
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            { text: '配置1', link: '/config/' },
            { text: '配置2', link: '/config/three' },
            { text: '配置3', link: '/config/four' }
          ]
        }
      ],
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },

 

  // vite配置
  vite: {
    server: {
      host: '0.0.0.0',
      port:5210
    }
  }
})