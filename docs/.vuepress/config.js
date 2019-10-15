module.exports = {
  title: 'ZanPress 项目团队博客',
  description: 'A self-media oriented article management platform.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/zan-press'
      }
    ],
    sidebar: {
      '/Week1/': ['Week1-1.md']
    },
    lastUpdated: 'Last Updated',
    smoothScroll: true
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: ''
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'callout',
        before: info => `<div class="callout"><p class="title">${info}</p>`,
        after: '</div>'
      }
    ],
    ['vuepress-plugin-medium-zoom']
  ]
}
