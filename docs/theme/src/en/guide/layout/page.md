---
icon: page
category: layout
---

# Page

## Icon support

You can configure the icon field in the `Front Matter` of the page, and fill in the FontClass of the corresponding icon to bind the icon to the page.

This icon is used in **Path Navigation** and **Sidebar**.

::: details Example

```md
---
icon: Home
---
```

:::

## Breadcrumb <MyBadge text="Support local configuration" />

This theme adds a new Breadcrumb support, the config key is `breadcrumb`.

Without any additional configuration, a Breadcrumb that matches the theme color is displayed at the top of the page content to help the reader understand the document structure.

The icon display of path navigation is also <MyBadge text="Support local configuration" />, the configuration item is `breadcrumbIcon`.

::: warning
In order to ensure Breadcrumb working well, the `readme.md` file should be included in each folder.

Otherwise, the path navigation will automatically ignore that level because the component can not generate titles and links from the corresponding level folder.
:::

## Page Info Display

See [Page Info Section](../feature/page-info.md)

## Last Updated

The `themeConfig.lastUpdated` option allows you to get the UNIX timestamp(ms) of each file’s last `git` commit, and it will also display at the bottom of each page in an appropriate format:

```js
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated' // string | boolean
  }
};
```

Note that it’s `off` by default. If given a `string`, it will be displayed as a prefix (default value: `Last Updated`).

::: warning
Since `lastUpdated` is based on `git`, you can only use it in a `git` repository. Also, since the timestamp used comes from the git commit, it will display only after a first commit for a given page, and update only on ensuing commits of that page.
:::

## Prev / Next Links

Prev and next links are automatically inferred based on the sidebar order of the active page. You can also explicitly overwrite or disable them globally with theme config or on specific pages using `Front matter`:

```yaml
---
prev: ./some-other-page
next: false
---

```

## Comment

See the [Comment section](../feature/comment.md) for details.

## Footer Support <MyBadge text="Support local configuration" />

If you want to display the footer on every page, you need to set `themeConfig.footer.display` to `true`. At the same time, you can also use `themeConfig.footer.copyright` and `themeConfig.content` to set the default copyright information and footer content.

At the same time, you can configure the `footer` field in the `frontmatter` page.

The `footer` field accepts a string or htmlString. They will be rendered directly at the footer's position. You can also set `footer` to `true` to display the default footer text.

::: details Example

Enable the default footer text:

```md
---
footer: true
---
```

Customize footer text without displaying copyright information and media links:

```md
---
footer: This website is served by Github Pages
copyright: false
medialink: false
---
```

Custom footer content and copyright information and media links:

```md
---
copyright: MIT LICENSE
footer: <a href="https://github.com/Mister-Hope"> Mr.Hope </a>
medialink:
  Zhihu: https://zhihu.com
---
```

When you set `footer.display` to true in the theme, you can also disable it locally:

```md
---
footer: false
---
```

:::

## Custom Layout for Specific Pages

By default the content of each `*.md` file is rendered in a `<div class="page">` container, along with the sidebar, auto-generated edit links and prev/next links. To use a fully custom component in place of the page, you can again specify the component to use using `YAML front matter`:

```yaml
---
layout: SpecialLayout
---

```

This will render `.vuepress/components/SpecialLayout.vue` for the given page.