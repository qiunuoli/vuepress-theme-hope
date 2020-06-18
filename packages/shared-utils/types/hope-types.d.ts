import { AlgoliaOption, I18nConfig } from "@mr-hope/vuepress-types";

/** vuepress-theme-hope 导航栏配置项 */
export interface HopeNavBarItem {
  /** 导航栏文字 */
  text: string;
  /** 辅助标签 */
  ariaLabel?: string;
  /** 导航栏对应项的图标 */
  icon?: string;
  /** 导航栏链接 */
  link?: string;
  /** 导航栏的路径前缀 */
  prefix?: string;
  /** 导航栏下拉列表子项 */
  items?: HopeNavBarItem[];
}

/** vuepress-theme-hope 导航栏配置 */
export type HopeNavBarConfig = HopeNavBarItem[] | false;

/** vuepress-theme-hope 侧边栏配置对象 */
export interface HopeSideBarGroupItem {
  /** 分组的标题 */
  title: string;
  /** 分组的图标 */
  icon?: string;
  /** 当前分组的路径前缀 */
  prefix?: string;
  /** 分组的路径 */
  path?: string;
  /** 通过目录自动生成 */
  auto?: boolean;
  /** 可折叠，默认为 true */
  collapsable?: boolean;
  /** 侧边栏深度，默认为 1 */
  sidebarDepth?: number;
  /** 当前侧边栏的子项 */
  children?: HopeSideBarItem[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [props: string]: any;
}

/** vuepress-theme-hope 侧边栏配置项 */
export type HopeSideBarItem = string | HopeSideBarGroupItem;

/** vuepress-theme-hope 侧边栏配置 */
export type HopeSideBarConfig =
  | HopeSideBarItem[]
  | Record<string, HopeSideBarItem[] | "auto">
  | "auto"
  | false;

interface HopeI18nItem {
  /** Valine 占位符 */
  valineHolder: string;
  /** 主题色配置 */
  themeColor: {
    /** 颜色提示文字 */
    themeColor: string;
    /** 主题模式提示文字 */
    themeMode: string;
  };
  /** 404错误页 */
  error404: {
    /** 错误提示语 */
    hint: string[];
    /** 返回主页文字 */
    home: string;
    /** 返回上一页文字 */
    back: string;
  };
  /** PWA 提示消息 */
  pwa: string;
  /** 分页多语言配置 */
  pagination: {
    /** 上一页文字 */
    prev: string;
    /** 下一页文字 */
    next: string;
    /** 跳转文字 */
    navigate: string;
    /** 按钮文字 */
    button: string;
    /** 错误文字 */
    errorText: string;
  };
  /** 博客设置 */
  blog: {
    /** 文章文字 */
    article: string;
    /** 文章列表文字 */
    articleList: string;
    /** 作者 */
    author: string;
    /** 写作日期 */
    time: string;
    /** 访问量 */
    views: string;
    /** 标签文字 */
    tag: string;
    /** 分类文字 */
    category: string;
    /** 时间轴文字 */
    timeline: string;
    /** 时间轴显示文字 */
    timelineText: string;
    /** 阅读时间 */
    readingTime: string;
    /** 文章字数 */
    words: string;
    /** 全部文字 */
    allText: string;
  };
  /** 阅读时间 */
  readingTime: {
    /** 字数 */
    word: string;
    /** 一分钟阅读 */
    minute: string;
    /** 时间 */
    time: string;
  };
}

/** vuepress-theme-hope 国际化配置 */
export interface HopeI18nConfig extends I18nConfig, HopeI18nItem {
  /** 当前语言的导航栏链接 */
  nav?: HopeNavBarConfig;
  /** 当前语言的侧边栏配置 */
  sidebar?: HopeSideBarConfig;
  /** 当前语言的 algolia 设置 */
  algolia?: AlgoliaOption;
  /** 多语言下拉菜单的标题 */
  selectText?: string;
  /** 该语言下的更新时间文字 */
  lastUpdated?: string;
  /** 该语言在下拉菜单中的标签 */
  label?: string;
  /** 辅助标签 */
  ariaLabel?: string;
  /** 编辑链接文字 */
  editLinkText?: string; // 默认为 "Edit this page"
}

/** vuepress-theme-hope 多语言配置 */
export interface HopeLangLocalesConfig
  extends Partial<HopeI18nItem>,
    I18nConfig {
  /** 导航栏链接 */
  nav?: HopeNavBarConfig;
  /** 侧边栏配置 */
  sidebar?: HopeSideBarConfig;
  /** 当前语言的 algolia 设置 */
  algolia?: AlgoliaOption;
  /** 多语言下拉菜单的标题 */
  selectText?: string;
  /** 该语言下的更新时间文字 */
  lastUpdated?: string;
  /** 该语言在下拉菜单中的标签 */
  label?: string;
  /** 辅助标签 */
  ariaLabel?: string;
  /** 编辑链接文字 */
  editLinkText?: string; // 默认为 "Edit this page"
}

/** 处理过的 vuepress-theme-hope 多语言配置 */
export interface ResolvedHopeLangLocalesConfig extends HopeI18nConfig {
  /** 导航栏链接 */
  nav: HopeNavBarConfig;
  /** 侧边栏配置 */
  sidebar: HopeSideBarConfig;
}
