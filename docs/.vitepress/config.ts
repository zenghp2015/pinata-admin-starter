import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: '/docs',
  title: 'pinata-admin',
  description: 'Just playing around.',
  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: "更新时间",
    nav: [
      { text: '指南', link: '/guide/started' },
      { text: '配置', link: '/config/' },
      { text: '插件', link: '/guide' },
      { text: '主题', link: '/guide' },
      { text: '生态系统', link: '/guide' },
      { text: '开源项目', link: '/guide' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '引导',
          items: [
            { text: '更新日志', link: '/changelog'},
            {text: '常见问题', link: '/faq'}
          ]
        },
        {
          text: '上手',
          items: [
            { text: '快速开始', link: '/guide/started' },
          ]
        },
        {
          text: '开发',
          items: [
            { text: '进入开发', link: '/guide/develop' },
            { text: '路由和菜单', link: '/guide/one' },
            { text: '接口和数据', link: '/guide/mock'},
            { text: '权限控制', link: '/guide/two' },
            { text: '个性化配置', link: '/guide/two' },
            { text: '状态管理', link: '/guide/pinia' },
            { text: '国际化', link: '/guide/i18n' },
          ]
        },
        { text: '构建部署', items: [
          { text: '项目构建', link: '/guide/two' },
          { text: '项目部署', link: '/guide/two' },
        ]},
      ],
      '/config/': [
        {
          text: '配置',
          collapsed: false,
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
      text: '为此页提供修改建议'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present pinata-admin-starter'
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