<!--
 * @Author: Mr.Hope
 * @Date: 2019-10-07 19:04:30
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-11-11 17:53:14
 * @Description: 路径导航
-->
<template>
  <nav :class="['breadcrumb',{disable:!enable}]">
    <ul v-if="enable">
      <li
        v-for="(item,index) in config"
        :key="item.url"
        :class="{'is-active': config.length -1 === index}"
      >
        <a @click="$router.push(item.url)">
          <div
            v-if="item.icon && $themeConfig.breadcrumbIcon !== false"
            :class="`iconfont ${iconPrefix}${item.icon}`"
          />
          <div class="title" v-text="item.title" />
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'BreadCrumb',

  data: () => ({
    /** 路径导航配置 */
    config: []
  }),

  computed: {
    /** 是否启用路径导航 */
    enable() {
      const globalEnable = this.$themeConfig.breadcrumb !== false;
      const pageConfig = this.$page.frontmatter.breadcrumb;

      return (
        (globalEnable && pageConfig !== false) ||
        (!globalEnable && pageConfig === true)
      );
    },

    iconPrefix() {
      const { iconPrefix } = this.$themeConfig;

      return typeof iconPrefix === 'string'
        ? iconPrefix
        : iconPrefix === false
        ? ''
        : 'icon-';
    }
  },

  watch: {
    $route(to, from) {
      if (this.enable && to.path !== from.path)
        this.config = this.getBreadCrumbConfig(to);
    }
  },

  mounted() {
    if (this.enable) this.config = this.getBreadCrumbConfig(this.$route);
  },

  methods: {
    getLinks(route) {
      /** 路径项 */
      const routePaths = route.fullPath.split('#')[0].split('/');
      /** 链接 */
      const links = [];
      let link = '';

      // 生成链接
      routePaths.forEach((element, index) => {
        if (index !== routePaths.length - 1) {
          link += `${element}/`;
          links.push(link);
        } else if (element !== '') {
          link += element;
          links.push(link);
        }
      });

      return links;
    },
    getBreadCrumbConfig(route) {
      /** 页面对象 */
      const { pages } = this.$site;
      /** 路径导航配置 */
      const breadcrumbConfig = [];

      /** 页面路径 */
      const links = this.getLinks(route);

      // 生成路径导航配置
      for (let index = 1; index < links.length; index++)
        for (let index2 = 0; index2 < pages.length; index2++) {
          const element = pages[index2];

          if (element.path === links[index]) {
            breadcrumbConfig.push({
              title: element.title,
              icon: element.frontmatter.icon,
              url: element.path
            });
            break;
          }
        }

      return breadcrumbConfig;
    }
  }
};
</script>
<style lang="stylus">
@require '~@vuepress/theme-default/styles/wrapper.styl'
@require '~@vuepress/theme-default/styles/config.styl'

// 修正标题的上边距
{$contentClass}:not(.custom)
  > *:first-child
    margin-top 0

h1, h2, h3, h4, h5, h6
  {$contentClass}:not(.custom) &:first-child
    margin-top 0.5rem - $navbarHeight !important
    padding-top $navbarHeight + 1rem !important

.breadcrumb
  @extend $wrapper
  font-size 15px
  white-space nowrap
  margin-top $navbarHeight
  padding-top 0.2rem
  margin-bottom - $navbarHeight
  padding-bottom 0.2rem

  .iconfont
    font-size inherit

    &:before
      line-height 1
      vertical-align middle
      display inline-block

  @media (max-width: $MQNarrow)
    font-size 14px

  @media (max-width: $MQMobileNarrow)
    font-size 13px

  &.disable
    padding-bottom 1.3em

.breadcrumb ul
  list-style none
  padding-left 0px
  align-items flex-start
  display flex
  flex-wrap wrap
  justify-content flex-start

.breadcrumb li
  align-items center
  display flex

  &:first-child a
    padding-left 0

  &:last-child a
    padding-right 0

.breadcrumb li+li::before
  color #b5b5b5
  content '\0002f'

.breadcrumb a
  align-items center
  display flex
  justify-content center
  padding 0 0.5em

  .title:hover
    cursor pointer
    text-decoration underline

.breadcrumb li.is-active a
  color #7a7a7a
  cursor default
  pointer-events none

.breadcrumb .iconfont
  margin-left 2px
  margin-right 2px
</style>