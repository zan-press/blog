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
    lastUpdated: 'Last Updated'
  }
}
