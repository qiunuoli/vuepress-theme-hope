---
icon: blog
tags:
  - home
  - blog
  - layout
category: layout
---

# 博客主页

vuepress-theme-hope 允许你启用博客风格的主页。

你需要在相应的页面的 frontmatter 中，设置 `blog` 为 `true` 来开启博客风格。

![主页截图](./assets/blog.png)

## 可配置的项目

你可以自由配置左上方的博主头像与博主姓名，他们的配置项为 `themeConfig.blog.avatar` 和 `themeConfig.blog.name`。如果你没有填写它们，它们会自动回退到站点 Logo (`themeConfig.logo`) 和 站点名称 (`themeConfig.name`)。

如果你使用 `themeConfig.intro` 配置了个人介绍页地址，点击左上角的博主头像和博主名称，会自动跳转到博主的个人介绍页。

你还可以在 `themeConfig.blog.links` 这个对象中以 `社交媒体名: 社交媒体链接` 的格式配置你的社交媒体链接。

::: tip 可用的社交媒体：

- `'Baidu'`: 百度
- `'Dingding'`: 钉钉
- `'Dribbble'`: Dribble
- `'Evernote'`: 印象笔记
- `'Facebook'`: 脸书
- `'Flipboard'`: 红板报
- `'Github'`: ~~Gayhub~~ Github
- `'Gmail'`: 谷歌邮箱(当然你也可以填入你自己的其他邮箱)
- `'Instagram'`: Instagram
- `'Line'`: Line
- `'Linkedin'`: 领英
- `'Pinterest'`: 拼趣
- `'Pocket'`: Pocket
- `'QQ'`: QQ
- `'Qzone'`: QQ 空间
- `'Rss'`: RSS 地址
- `'Steam'`: Steam
- `'Taobao'`: 淘宝
- `'Twitter'`: Twitter
- `'Wechat'`: 微信
- `'Weibo'`: 微博
- `'Whatsapp'`: Whatsapp
- `'Youtube'`: YouTube
- `'Zhihu'`: 知乎

:::

如果你对时间轴上面的提示文字不满意，你可以使用 `themeConfig.blog.timeline` 自定义一个。

## frontmatter 可用参数

### hero

- 类型: `boolean`
- 默认: `true`

是否显示主页的图标与描述。主页的图标、描述设置请见默认主页。

### bgImage

- 类型: `string`

背景图片的地址，需填写绝对路径。如果不填写，会自动应用一张默认的风景图片。

### bgImageStyle

- 类型: `Record<string, string>`

背景图片的 CSS 样式。

### heroImageStyle

- 类型: `Record<string, string>`

主页图标的 CSS 样式