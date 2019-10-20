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
      '/Blog/': [
        'Week1-1.md',
        'Week1-2.md',
        'Week1-3.md',
        'Week2-1.md'
      ]
    },
    lastUpdated: '最后更新于',
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
