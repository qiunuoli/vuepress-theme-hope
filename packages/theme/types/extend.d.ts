/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-empty-interface */
import { HopeThemeConfig } from "./hopeConfig";
import { HopeI18nConfig } from "@mr-hope/vuepress-shared-utils";

declare module "@mr-hope/vuepress-types" {
  interface ThemeConfig extends HopeThemeConfig {
    /* nothing more extends */
  }

  interface I18nConfig extends HopeI18nConfig {
    /* nothing more extends */
  }
}

declare module "vue/types/vue" {
  export interface Vue {
    $category: any;
    $tag: any;
    $currentTag: any;
    $currentCategory: any;
    $pagination: any;
  }
}
