module.exports = {
  title: 'ZanPress 项目团队博客',
  description: 'A self-media oriented article management platform.',
  head: [
    ['link', {
      rel: 'icon',
      href: '/zanpress.png'
    }]
  ],
  themeConfig: {
    nav: [
    //   {
    //   text: '准备工作',
    //   items: [{
    //     text: '安装与环境部署',
    //     link: '/1_Preparations/1-1_Installation'
    //   },
    //   {
    //     text: '利用 Vivado 创建项目',
    //     link: '/1_Preparations/1-2_Vivado'
    //   },
    //   {
    //     text: '使用 VS Code 作为 Vivado 的默认代码编辑器',
    //     link: '/1_Preparations/1-3_Editor'
    //   }]
    // },
    {
      text: 'GitHub',
      link: 'https://github.com/zan-press'
    },
    ],
    // sidebar: {
    //   '/1_Preparations/': [
    //     '1-1_Installation',
    //     '1-2_Vivado',
    //     '1-3_Editor'
    //   ],
    // },
    lastUpdated: 'Last Updated'
  }
}