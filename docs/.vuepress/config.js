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
        text: '小组博客',
        items: [{
          text: '项目确立与第一周任务分工',
          link: '/Blog/Week1-1.md'
        }, {
          text: '第一周小组会议概要',
          link: '/Blog/Week1-2.md'
        }, {
          text: '第二周任务分工',
          link: '/Blog/Week2-1.md'
        }, {
          text: '第二周小组会议概要',
          link: '/Blog/Week2-2.md'
        }, {
          text: '第三周任务分工',
          link: '/Blog/Week3-1.md'
        }, {
          text: '第三周小组会议概要',
          link: '/Blog/Week3-2.md'
        }, {
          text: '第四周任务分工',
          link: '/Blog/Week4-1.md'
        },]
      },
      {
        text: '博客发布规范',
        link: '/Guidelines/Guidelines.md'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/zan-press'
      }
    ],
    sidebar: {
      '/Blog/': [
        'Week1-1.md',
        'Week1-2.md',
        'Week2-1.md',
        'Week2-2.md',
        'Week3-1.md',
        'Week3-2.md'
      ]
    },
    lastUpdated: '最后更新于',
    smoothScroll: true
  },
  plugins: [
    'vuepress-plugin-medium-zoom',
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
    ]
  ]
}
