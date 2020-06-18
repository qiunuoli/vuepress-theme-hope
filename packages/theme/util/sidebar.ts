import {
  HopeSideBarConfig,
  HopeSideBarItem,
} from "@mr-hope/vuepress-shared-utils";
import { PageComputed, SiteData } from "@mr-hope/vuepress-types";
import {
  ensureEndingSlash,
  ensureExt,
  isExternal,
  normalize,
  resolvePath,
} from "./path";
import groupHeaders, { SidebarHeader } from "./groupHeader";
export { SidebarHeader } from "./groupHeader";

export interface SidebarHeaderItem extends SidebarHeader {
  type: "header";
  basePath: string;
  path: string;
}

export interface SidebarAutoItem {
  type: "group";
  /** 分组的标题 */
  title: string;
  /** 页面图标 */
  icon?: string;
  /** 页面内的标题 */
  children: SidebarHeaderItem[];
  collapsable: false;
  path: "";
}

export const groupSidebarHeaders = groupHeaders;

const getErrorSidebarConfig = (path: string): SidebarErrorItem => {
  console.warn(`Sidebar: "${path}" has no matching page`);

  return { type: "error", path };
};

/**
 * 处理侧边栏的分组的标题
 *
 * @param page 当前页面
 */
const resolveSidebarHeaders = (page: PageComputed): SidebarAutoItem[] => {
  const headers = page.headers ? groupSidebarHeaders(page.headers) : [];

  return [
    {
      type: "group",
      collapsable: false,
      title: page.title,
      icon: page.frontmatter.icon as string | undefined,
      path: "",
      children: headers.map<SidebarHeaderItem>((header) => ({
        ...header,
        type: "header",
        basePath: page.path,
        path: `${page.path}#${header.slug}`,
        children: header.children,
      })),
    },
  ];
};

/** 寻找匹配的侧边栏配置 */
const resolveMatchingConfig = (
  regularPath: string,
  config: HopeSideBarItem[] | Record<string, HopeSideBarItem[] | "auto">
): { base: string; config: HopeSideBarItem[] | "auto" } | false => {
  // 数组意味着最简单的配置方式，直接返回
  if (Array.isArray(config))
    return {
      base: "/",
      config,
    };

  for (const base in config)
    if (ensureEndingSlash(regularPath).startsWith(encodeURI(base)))
      return {
        base,
        config: config[base],
      };

  console.warn(`Sidebar: "${regularPath}" has no matching page`);

  return false;
};

/** 外部链接侧边栏项 */
export interface SidebarExternalItem {
  /** 标题 */
  title?: string;
  /** 图标 */
  icon?: string;
  /** 类型 */
  type: "external";
  /** 链接路径 */
  path: string;
}

/** 页面侧边栏项 */
export interface SidebarPageItem extends PageComputed {
  type: "page";
  /** 图标 */
  icon?: string;
  /** 路径 */
  path: string;
}

/** 分组侧边栏项 */
export interface SidebarGroupItem {
  type: "group";
  /** 分组的标题 */
  title: string;
  /** 可折叠，默认为 true */
  collapsable: boolean;
  /** 侧边栏深度，默认为 1 */
  sidebarDepth?: number;
  /** 分组的图标 */
  icon?: string;
  /** 当前分组的路径前缀 */
  prefix?: string;
  /** 当前侧边栏的子项 */
  children: SidebarItem[];

  [props: string]: unknown;
}

interface SidebarErrorItem {
  type: "error";
  path: string;
}

/**
 * 处理侧边栏项，为其合并页面配置
 *
 * @param pages
 * @param path 配置中的路径
 */
export const resolvePageforSidebar = (
  pages: PageComputed[],
  path: string
): SidebarPageItem | SidebarExternalItem | SidebarErrorItem => {
  // 外部链接
  if (isExternal(path))
    return {
      type: "external",
      path,
    };

  /** 处理过的真实路径 */
  const realPath = normalize(path);

  // 在整个页面配置中寻找匹配
  for (const page of pages)
    if (normalize(page.regularPath) === realPath)
      // 返回合并了相应页面配置的侧边栏对象
      return {
        ...page,
        type: "page",
        path: ensureExt(page.path),
      };
  return getErrorSidebarConfig(realPath);
};

export type SidebarItem =
  | SidebarAutoItem
  | SidebarErrorItem
  | SidebarExternalItem
  | SidebarGroupItem
  | SidebarPageItem;

const getRealPath = (prefix: string, path: string, base: string): string =>
  resolvePath(`${prefix}${path}`, base);

export interface CatalogItem {
  path: string;
  title?: string;
  description?: string;
}

export interface RecursiveCatalogItem {
  title: string;
  path: string;
  description?: string;
  icon?: string;
  collapsable?: boolean;
  auto: true;
}

type CatalogConfig = (CatalogItem | RecursiveCatalogItem | string)[];

const resolveCatalog = (pages: PageComputed[], base: string): SidebarItem[] => {
  const page = pages.find((page) => page.path === base);

  if (page) {
    const { catalog } = page.frontmatter;

    if (catalog)
      return (catalog as CatalogConfig).map((config) =>
        resolveItem(
          typeof config === "object"
            ? "auto" in config && "title" in config
              ? config
              : config.path
            : config,
          pages,
          base
        )
      );

    console.warn(
      `Sidebar: "${base}" has no catalog config, sidebar could not be generated.`
    );
  } else
    console.warn(
      `Sidebar: "${base}" has no matching page, sidebar could not be generated.`
    );

  return [];
};

/**
 * 处理侧边栏项
 *
 * @param sidebarConfigItem 要处理的侧边栏配置项
 * @param pages 项目包含的页面配置
 * @param base 路径基
 */
const resolveItem = (
  sidebarConfigItem: HopeSideBarItem,
  pages: PageComputed[],
  base: string,
  prefix = ""
): SidebarItem => {
  // 返回页面链接以及内部的标题链接
  if (typeof sidebarConfigItem === "string")
    return resolvePageforSidebar(
      pages,
      getRealPath(prefix, sidebarConfigItem, base)
    );

  if (sidebarConfigItem.auto && sidebarConfigItem.path) {
    const path = getRealPath(prefix, sidebarConfigItem.path, base);
    const page = pages.find((page) => page.path === path);

    if (!page) return getErrorSidebarConfig(path);

    const { catalog } = page.frontmatter;

    if (catalog)
      return {
        ...sidebarConfigItem,
        type: "group",
        path: sidebarConfigItem.path
          ? getRealPath(prefix, sidebarConfigItem.path, base)
          : "",
        children: (catalog as CatalogConfig).map((config) =>
          resolveItem(
            typeof config === "object"
              ? "auto" in config && "title" in config
                ? config
                : config.path
              : config,
            pages,
            base,
            `${prefix}${sidebarConfigItem.path as string}`
          )
        ),
        collapsable: Boolean(sidebarConfigItem.collapsable),
      };
  }

  // 对象不存在子项
  const children = sidebarConfigItem.children || [];
  if (children.length === 0 && sidebarConfigItem.path)
    // 覆盖标题
    return Object.assign(
      resolvePageforSidebar(
        pages,
        getRealPath(prefix, sidebarConfigItem.path, base)
      ),
      {
        title: sidebarConfigItem.title,
      }
    );

  // 对每个子项递归处理再返回
  return {
    ...sidebarConfigItem,
    type: "group",
    path: sidebarConfigItem.path
      ? getRealPath(prefix, sidebarConfigItem.path, base)
      : "",
    children: children.map((child) =>
      resolveItem(
        child,
        pages,
        base,
        `${prefix}${sidebarConfigItem.prefix || ""}`
      )
    ),
    collapsable: sidebarConfigItem.collapsable !== false,
  };
};

/**
 * 获得当前页面的侧边栏对象
 */
export const resolveSidebarItems = (
  page: PageComputed,
  site: SiteData,
  localePath: string
): SidebarItem[] => {
  const { themeConfig, pages } = site;
  /** 本语言的配置 */
  const localeConfig =
    localePath && themeConfig.locales
      ? themeConfig.locales[localePath] || themeConfig
      : themeConfig;

  /** 侧边栏配置 */
  const themeSidebarConfig: HopeSideBarConfig | undefined =
    localeConfig.sidebar || themeConfig.sidebar;

  // 自动通过当前页面的标题生成
  if (page.frontmatter.sidebar === "auto" || themeSidebarConfig === "auto")
    return resolveSidebarHeaders(page);

  // 侧边栏被禁用
  if (!themeSidebarConfig) return [];

  const result = resolveMatchingConfig(page.regularPath, themeSidebarConfig);

  return result
    ? result.config === "auto"
      ? resolveCatalog(pages, result.base)
      : result.config.map((item) => resolveItem(item, pages, result.base))
    : [];
};
