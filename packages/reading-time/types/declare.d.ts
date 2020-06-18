import { ReadingTime } from "./index";

declare module "@mr-hope/vuepress-types" {
  interface PageComputed {
    readingTime: ReadingTime;
  }

  interface Page {
    readingTime: ReadingTime;
  }
}
