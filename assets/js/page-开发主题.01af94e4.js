(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{510:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"开发主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发主题"}},[s._v("#")]),s._v(" 开发主题")]),s._v(" "),a("p",[s._v("想要书写一个主题，首先在你文档根目录创建一个 "),a("code",[s._v(".vuepress/theme")]),s._v(" 目录，接着创建一个 "),a("code",[s._v("Layout.vue")]),s._v(" 文件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n└─ .vuepress\n └─ theme\n   └─ Layout.vue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("到这里，就像开发一个普通的 Vue 应用一样。如何组织你的主题，这完全取决于你。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("放置在 theme 文件夹下的文件会被自动应用为本地主题，无需对"),a("code",[s._v("config.js")]),s._v("做任何额外的配置。")])]),s._v(" "),a("h3",{attrs:{id:"获取渲染内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取渲染内容"}},[s._v("#")]),s._v(" 获取渲染内容")]),s._v(" "),a("p",[s._v("当前的 "),a("code",[s._v(".md")]),s._v(" 文件渲染的内容，可以作为一个独特的全局组件 "),a("code",[s._v("<Content/>")]),s._v(" 来使用，你可能想要它显示在页面中的某个地方。一个最简单的主题，可以是一个唯一的 "),a("code",[s._v("Layout.vue")]),s._v(" 组件，并包含以下内容：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("theme-container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Content")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("更多请阅读:")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/markdown-slot.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Markdown 插槽"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"内容摘抄"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容摘抄"}},[s._v("#")]),s._v(" 内容摘抄")]),s._v(" "),a("p",[s._v("如果一个 markdown 文件中有一个 "),a("code",[s._v("\x3c!-- more --\x3e")]),s._v(" 注释，则该注释之前的内容会被抓取并暴露在 "),a("code",[s._v("$page.excerpt")]),s._v(" 属性中。如果你在开发一个博客主题，你可以用这个属性来渲染一个带摘抄的文章列表。")]),s._v(" "),a("h3",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("p",[s._v("随着需求的变化，只有一个布局组件 "),a("code",[s._v("Layout.vue")]),s._v(" 可能还不够，你可能想要定义更多的布局组件用于不同的页面，你可能还想要自定义一个"),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/config/#palette-styl",target:"_blank",rel:"noopener noreferrer"}},[s._v("调色板"),a("OutboundLink")],1),s._v("，甚至应用一些插件。")]),s._v(" "),a("p",[s._v("那么是时候重新组织你的主题了！一个约定的主题的目录结构如下：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("theme\n├── "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`global-components`")]),s._v("\n│ └── xxx.vue\n├── "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`components`")]),s._v("\n│ └── xxx.vue\n├── "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`layouts`")]),s._v("\n│ ├── Layout.vue (必要的)\n│ └── 404.vue\n├── "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`styles`")]),s._v("\n│ ├── index.styl\n│ └── palette.styl\n├── "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`templates`")]),s._v("\n│ ├── dev.html\n│ └── ssr.html\n├── "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`index.js`")]),s._v("\n├── "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`enhanceApp.js`")]),s._v("\n└── package.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("theme/global-components")]),s._v(": 该目录下的组件都会被自动注册为全局组件。想了解更多，请参考 "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[s._v("@vuepress/plugin-register-components"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("theme/components")]),s._v(": Vue 组件。")]),s._v(" "),a("li",[a("code",[s._v("theme/layouts")]),s._v(": 布局组件，其中 "),a("code",[s._v("Layout.vue")]),s._v(" 是必需的。")]),s._v(" "),a("li",[a("code",[s._v("theme/styles")]),s._v(": 全局的样式和调色板。")]),s._v(" "),a("li",[a("code",[s._v("theme/templates")]),s._v(": 修改默认的模板文件。")]),s._v(" "),a("li",[a("code",[s._v("theme/index.js")]),s._v(": 主题文件的入口文件。")]),s._v(" "),a("li",[a("code",[s._v("theme/enhanceApp.js")]),s._v(": 主题水平的客户端增强文件。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("当你将你的主题以一个 npm 包的形式发布时，如果你没有任何主题配置，即没有 "),a("code",[s._v("theme/index.js")]),s._v("，那么你需要将 "),a("code",[s._v("package.json")]),s._v(" 中的 "),a("code",[s._v('"main"')]),s._v(" 字段设置为 "),a("code",[s._v("layouts/Layout.vue")]),s._v("，只有这样 VuePress 才能正确地解析主题。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"layouts/Layout.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如果你开发/编写了一个本地主题，不需要填写"),a("code",[s._v("theme")]),s._v("属性，因为"),a("code",[s._v(".vuepress/theme")]),s._v("文件夹的内容会自动应用为"),a("strong",[s._v("local theme")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"布局组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局组件"}},[s._v("#")]),s._v(" 布局组件")]),s._v(" "),a("p",[s._v("假设你的主题 "),a("code",[s._v("layouts")]),s._v(" 目录如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("theme\n└── `layouts`\n  ├── Layout.vue\n  ├── AnotherLayout.vue\n  └── 404.vue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后，所有的页面将会默认使用 "),a("code",[s._v("Layout.vue")]),s._v(" 作为布局组件，对于那些匹配不到的路由将会使用 "),a("code",[s._v("404.vue")]),s._v("。")]),s._v(" "),a("p",[s._v("如果你想要在某一个页面中使用 "),a("code",[s._v("AnotherLayout.vue")]),s._v(" 作为布局组件，那么你只需要更新这个页面的 "),a("code",[s._v("frontmatter")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[s._v("layout: AnotherLayout\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("每个 layout 组件都可能会渲染出截然不同的页面，如果你想设置一些全局的 UI(如全局的 "),a("code",[s._v("<header>")]),s._v(")，可以考虑使用 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/theme/option-api.html#globallayout",target:"_blank",rel:"noopener noreferrer"}},[s._v("globalLayout"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"使用插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[s._v("#")]),s._v(" 使用插件")]),s._v(" "),a("p",[s._v("你可以通过主题的配置文件 "),a("code",[s._v("themePath/index.js")]),s._v(" 来给主题应用一些插件：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/pwa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      serviceWorker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      updatePopup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"网站和页面的元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站和页面的元数据"}},[s._v("#")]),s._v(" 网站和页面的元数据")]),s._v(" "),a("p",[a("code",[s._v("Layout")]),s._v(" 组件将会对每一个文档目录下的 "),a("code",[s._v(".md")]),s._v(" 执行一次，同时，整个网站以及特定页面的元数据将分别暴露为 "),a("code",[s._v("this.$site")]),s._v(" 和 "),a("code",[s._v("this.$page")]),s._v(" 属性，它们将会被注入到每一个当前应用的组件中。")]),s._v(" "),a("p",[s._v("这是你现在看到的这个网站的 "),a("code",[s._v("$site")]),s._v(" 的值：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Vue 驱动的静态网站生成器"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"base"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1524027677000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"VuePress"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("code",[s._v("title")]),s._v(", "),a("code",[s._v("description")]),s._v(" 和 "),a("code",[s._v("base")]),s._v(" 会从 "),a("code",[s._v(".vuepress/config.js")]),s._v(" 中对应的的字段复制过来，而 "),a("code",[s._v("pages")]),s._v(" 是一个包含了每个页面元数据对象的数据，包括它的路径、页面标题(明确地通过 "),a("RouterLink",{attrs:{to:"/basic/vuepress/guide/markdown.html#front-matter"}},[s._v("YAML front matter")]),s._v(" 指定，或者通过该页面的第一个标题取到)，以及所有源文件中的 "),a("code",[s._v("YAML front matter")]),s._v(" 的数据。")],1),s._v(" "),a("p",[s._v("下面的这个对象是你正在看的这个页面的 "),a("code",[s._v("$page")]),s._v(" 的值：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"lastUpdated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1524847549000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/custom-themes.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"自定义主题"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"headers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"frontmatter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("如果用户在 "),a("code",[s._v(".vuepress/config.js")]),s._v(" 配置了 "),a("code",[s._v("themeConfig")]),s._v("，你将可以通过 "),a("code",[s._v("$site.themeConfig")]),s._v(" 访问到它。如此一来，你可以通过它来对用户开放一些自定义主题的配置 —— 比如指定目录或者页面的顺序，你也可以结合 "),a("code",[s._v("$site.pages")]),s._v(" 来动态地构建导航链接。")]),s._v(" "),a("p",[s._v("最后，别忘了，作为 Vue Router API 的一部分，"),a("code",[s._v("this.$route")]),s._v(" 和 "),a("code",[s._v("this.$router")]),s._v(" 同样可以使用。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[a("code",[s._v("lastUpdated")]),s._v(" 是这个文件最后一次 git 提交的 UNIX 时间戳，更多细节请参考："),a("RouterLink",{attrs:{to:"/basic/vuepress/theme/default-theme-config.html#最后更新时间"}},[s._v("最后更新时间")]),s._v("。")],1)]),s._v(" "),a("p",[a("strong",[s._v("参考:")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/global-computed.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("全局计算属性"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("h3",{attrs:{id:"应用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用配置"}},[s._v("#")]),s._v(" 应用配置")]),s._v(" "),a("p",[s._v("自定义主题也可以通过主题根目录下的 "),a("code",[s._v("enhanceApp.js")]),s._v(" 文件来对 VuePress 应用进行拓展配置。这个文件应当 "),a("code",[s._v("export default")]),s._v(" 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// VuePress 正在使用的 Vue 构造函数")]),s._v("\n  options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 附加到根实例的一些选项")]),s._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前应用的路由实例")]),s._v("\n  siteData "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 站点元数据")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...做一些其他的应用级别的优化")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);