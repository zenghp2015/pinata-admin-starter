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
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Config',
          collapsed: false,
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
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