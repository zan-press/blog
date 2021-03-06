# 第四周小组会议概要 <AuthorBadge text="Week 4-2" vertical="middle"/> <AuthorBadge text="@刘嘉伟" vertical="middle"/>

::: callout 💡 本文内容
本文主要介绍本周小组会议的概要与讨论、工作结果。
::: right
📅 发布于 2019.11.07
:::

## 会议事项

1.  列举《需求规格说明书》里面用例，并依次编号，同时修改原有用例说明
2.  修改《需求规格说明书》里面的「系统操作时序图」，按照每个模块依次列举
3.  修改《需求规格说明书》里面的「数据分析」，添加：
    1.  起止时间输入框，检索特定时间段数据的功能
    2.  选择平台、选择文章等特定稿件范围
4.  完善「原型设计」

## 上周问题的解决

上一周我们的任务完成过程中没有遇到需要与甲方沟通的需求问题，在课堂展示汇报后老师对我们现有的成果提出了一些意见及建议。

### 用例图问题

1.  某些用例过于简单，要考虑进行用例合并
2.  部分用例名重复，不便于查找，考虑对用例进行编号

### 增加详细的子模块时序图

对于时序部分只有一个总时序过于粗糙，详细添加每个子模块的时序

### 数据分析模块问题

数据分析模块要提供按照指定时间进行查询，要支持按照类型分类进行查询

## 本周任务与具体分工情况

我们在接下来的工作中，每个人负责一个子系统的设计实现，具体分工情况如下：

-   武上博：文章撰写模块「搜索框」，增加稿件推荐和参考， 完善文章管理模块和数据分析模块的原型设计，完善软件设计说明书。
-   李文煜：完善热点新闻子系统和消息管理子系统的原型设计，完善软件设计说明书。
-   刘嘉伟：完善稿件管理子系统的原型设计，完成登录界面的原型设计，完善软件设计说明书。
-   唐誉铭：完成软件需求规格说明书中的系统输出描述，完成软件设计文档的数据结构部分。

## 《需求规格说明书》的进一步迭代 <AuthorBadge text="v0.7"/>

::: callout 📕 文档地址
《需求规格说明书》在线版本位于：[软件需求规格说明书 v0.5 | 石墨文档](https://shimo.im/docs/xlkbElypoBU9F9q8)
:::

### 添加用例总体陈述

为了使用例陈述更加清晰，我们对用力进行了新的管理规划，给所有用例进行编号汇总，合并部分用例，重新进行用例描述。得到新的用例说明如下：

![](https://i.loli.net/2019/11/07/4DWcfiTsP62zZH9.png)

在下面对每个用例的详细说明和用例图也进行了更新。

### 详化系统操作分析时序图

对每个子模块的操作流程和设计进行时序分析，画出新的时序图如下：

![](https://i.loli.net/2019/11/07/tfawJWA8Oy3FngY.png)

### 增加系统输出设计部分

对系统的一些输出部分进行设计，原型样例如下：

![](https://i.loli.net/2019/11/07/R9dB3lUwGT8DCri.png)

## 原型进一步设计

本周，我们小组进一步完善了我们的原型设计。对于热点新闻原型界面进行了重构，对稿件管理进一步完善了发布归档等功能，对文章撰写模块添加搜索框，增加稿件推荐和参考，完善文章管理模块和数据分析模块的原型设计。进一步完善数据分析部分的用例图，新增账号管理和登录界面。

实时的在线交互版本如下所示：

<iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPTmmShTWCLhiowKNrGAplq%2FMain%3Fnode-id%3D311%253A1205%26scaling%3Dcontain" allowfullscreen></iframe>

## 软件设计说明书 v0.5

完善软件设计说明书，按照层次对系统进行分布设计。

![](https://i.loli.net/2019/11/07/DmGl5znexH8Fufa.png)

撰写设计基础的数据结构。

![](https://i.loli.net/2019/11/07/8d9wsOCtvN1pQ7h.png)

进行热点新闻算法，热点关键词算法设计。

![](https://i.loli.net/2019/11/07/EOXdei9q7gFw2Bm.png)
