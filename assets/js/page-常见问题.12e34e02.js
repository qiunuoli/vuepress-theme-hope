(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{571:function(s,t,n){"use strict";n.r(t);var e=n(1),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),n("h2",{attrs:{id:"项目运行报错"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目运行报错"}},[s._v("#")]),s._v(" 项目运行报错")]),s._v(" "),n("p",[s._v("请确保你的项目依赖了 typescript，且目录下有一个合法的 tsconfig.json 文件。")]),s._v(" "),n("p",[s._v("同时，保证你的项目至少有一个 TypeScript 文件被其 include。")]),s._v(" "),n("h3",{attrs:{id:"error-when-parsing-tsconfig-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#error-when-parsing-tsconfig-json"}},[s._v("#")]),s._v(" error when parsing tsconfig.json")]),s._v(" "),n("p",[s._v("这个问题通常是 ts-loader 找不到 tsconfig.json 导致的。由于主题添加了 TypeScript 支持，你需要在你的项目内创建一个合法的 tsconfig.json。")]),s._v(" "),n("p",[s._v("一个简单的 tsconfig.json 如下：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES6"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 任何不低于 ES6 的 target 均可")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"experimentalDecorators"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue 的 Typescript 写法需要开启此选项")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vuepress 与本主题的类型定义文件")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@mr-hope/vuepress-theme-types"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-types"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"include"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/.vuepress/enhanceApp.ts"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 请将 src 替换成你的文档目录")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"提示找不到相应-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#提示找不到相应-types"}},[s._v("#")]),s._v(" 提示找不到相应 types")]),s._v(" "),n("p",[s._v("请确保将 "),n("code",[s._v('"@mr-hope/vuepress-theme-types"')]),s._v(" 加入 "),n("code",[s._v("compilerOptions.types")]),s._v(" 中，因为它不在 "),n("code",[s._v("@types")]),s._v(" 目录下。")]),s._v(" "),n("h3",{attrs:{id:"no-inputs-were-found-in-config-file-tsconfig-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#no-inputs-were-found-in-config-file-tsconfig-json"}},[s._v("#")]),s._v(" No inputs were found in config file 'tsconfig.json'")]),s._v(" "),n("p",[s._v("这个问题一般是你的项目中没有 TypeScript 文件 (或你的 tsconfig.json 配置有误) 导致的。")]),s._v(" "),n("p",[s._v("ts-loader 要求 tsconfig.json 的 include 和 exclude 配置项包含项目内至少一个 ts 文件。")]),s._v(" "),n("p",[s._v("如果你的项目没有 ts 文件，为了规避这个问题，你可以在你的项目的任意地方创建一个空的 ts 文件并把它添加至 tsconfig.json 的 include 中。")]),s._v(" "),n("p",[s._v("一个稍微好些的解决方案是通过在 "),n("code",[s._v(".vuepress")]),s._v(" 目录下，建立一个空的 "),n("code",[s._v("enhanceApp.ts")]),s._v(" 来解决这个问题，如果你已经有 "),n("code",[s._v("enhanceApp.js")]),s._v("，你可以直接将其转换为 TS。")]),s._v(" "),n("h2",{attrs:{id:"部分页面设置失效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部分页面设置失效"}},[s._v("#")]),s._v(" 部分页面设置失效")]),s._v(" "),n("p",[s._v("你可以先重新查阅文档，看看该设置是否 "),n("strong",[s._v("不支持局部配置")]),s._v("。")]),s._v(" "),n("p",[n("strong",[s._v("支持局部配置")]),s._v(" 意味着主题允许页面的配置能够覆盖全局的同名(同功能)配置，但并不是所有功能都满足此设置。为了项目的编译速度，有些项目在全局配置禁用后不会在编译阶段加载，它们就无法局部启用。")])])}),[],!1,null,null,null);t.default=a.exports}}]);