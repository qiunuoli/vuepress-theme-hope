(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{277:function(t,e,n){"use strict";n.r(e);var r=n(278),o=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e.default=o.a},278:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});const o=n(2),s=n(63);let i=class extends o.Vue{constructor(){super(...arguments),this.title="404",this.msgs=[""],this.linkText="带我回家"}mounted(){const t=this.$themeLocaleConfig.error404||s.i18n.getDefaultLocale().error404;this.msgs=t.text,this.linkText=t.link}get msg(){return this.msgs[Math.floor(Math.random()*this.msgs.length)]}};i=r([o.Component],i),e.default=i},451:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container"},[n("div",{staticClass:"theme-default-content"},[n("h1",[t._v("404")]),t._v(" "),n("blockquote",{domProps:{textContent:t._s(t.msg)}}),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v(t._s(t.linkText))])],1)])},o=[]},478:function(t,e,n){"use strict";n.r(e);var r=n(451),o=n(277);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);var i=n(1),c=Object(i.a)(o.default,r.a,r.b,!1,null,null,null);e.default=c.exports}}]);