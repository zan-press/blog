# 博客发布规范 <AuthorBadge text="Week 1-3" vertical="middle"/> <AuthorBadge text="@武上博" vertical="middle"/>

::: callout 💡 本文内容
本文主要介绍本博客的发布方法和撰写规范。
::: right
📅 发布于 2019.10.16
:::

## 发布方式

::: callout
目前博客部署于：[https://zanpress.netlify.com](https://zanpress.netlify.com/)

源代码仓库位于：<https://github.com/zan-press/blog>
:::

-   （Windows）下载安装本地编译与预览等必要工具与库，在项目根目录执行：

    ```bash
    # 安装 Node.js 环境，详见：https://nodejs.org/en/download/package-manager/#windows
    scoop install nodejs

    # 安装 yarn 包管理器，详见：https://yarnpkg.com/zh-Hans/docs/install#windows-stable
    scoop install yarn

    # 安装项目依赖
    yarn install --dev
    ```

-   在仓库的 `/docs/Blog` 目录下创建新的 Markdown 文件，文件命名规范为：`Week <周数>-< 每周发布的第几篇 >.md`。比如第一周发布的第二篇文章命名为 `Week1-2.md`：

    ![](https://i.loli.net/2019/10/16/SdhkAu9LZp6IEeU.png)

-   在博客配置文件 `docs/.vuepress/config.js` 中添加侧边导航栏链接，比如添加文件名称为 `Week1-2.md`，则在 `config.js` 第 20 行处的 `sidebar` 下添加：

    ```javascript
    sidebar: {
      '/Blog/': [
        'Week1-1.md',
        'Week1-2.md' // 添加这一行内容
      ]
    }
    ```

-   本地预览博客：

    ```bash
    # 本地编译
    yarn docs:dev
    ```

    编译成功之后默认打开 [`http://localhost:8080`](http://localhost:8080/) 即可看到。

-   博客发布：

    ```bash
    # 添加（全部）文件
    git add .

    # 提交更改
    git commit -m "Add blog (Week 1-2)"

    # 等待 Husky 自动格式化 Markdown 文件，再次重复上述步骤，提交格式化之后的文件
    git ...

    # 推送至 GitHub
    git push
    ```

    之后静待远程服务器 CI 自动部署即可。编译部署成功之后博客会自动发布（更新）于：[ZanPress 项目团队博客](https://zanpress.netlify.com/)

## 编写规范（模板）

例子请看：[zan-press/blog - docs/Blog/Week1-1.md](https://github.com/zan-press/blog/blob/master/docs/Blog/Week1-1.md>)

### 博客模板

```markdown
# 标题 <AuthorBadge text="Week 周数-博客版号" vertical="middle"/> <AuthorBadge text="@作者" vertical="middle"/>

::: callout 💡 本文内容
本文主要介绍了 xxx。
::: right
📅 发布于 2019.xx.xx
:::

## xxx（一级标题）

xxx（正文）
```

### 注释、Callout 模块

```markdown
::: callout 📊 注释的标题
注释的内容
:::
```

渲染结果：

::: callout 📊 注释的标题
注释的内容
:::

### Tips/Warning/Danger 模块

```markdown
::: tip (warning | danger) ❗ 警告标题
警告内容
:::
```

渲染结果：

::: tip ❗ 警告标题
警告内容
:::

更多内容请看：[VuePress - 自定义容器](https://v1.vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8)
