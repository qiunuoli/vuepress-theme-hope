if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,f)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=f(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-1a661b4a"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"cfbeab6397fc9ae214f4072f8433dab5"},{url:"article/index.html",revision:"465a66bd952d73f0b07feb3fc1f7836b"},{url:"assets/css/0.styles.11e78ef1.css",revision:"7c43eec4139ab0b0bd8d549cc292d27f"},{url:"assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",revision:"7f06b4e30317f784d61d26686aed0ab2"},{url:"assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",revision:"aaf4eee9fba9907d61c3935e0b6a54ae"},{url:"assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",revision:"e78e28b4834954df047e4925e9dbf354"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",revision:"021dd4dc61ee5f5cdf315f43b48c094b"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",revision:"1e802ca9dedc4ed4e3c6f645e4316128"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",revision:"4ec58befa687e9752c3c91cd9bcf1bcb"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",revision:"7edb53b6693d75b8a2232481eea1a52c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",revision:"d3b46c3a530116933081d9d74e3e9fe8"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",revision:"d49f2d55ce4f40f982d8ba63d746fbf9"},{url:"assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",revision:"a31e7cba7b7221ebf1a2ae545fb306b2"},{url:"assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",revision:"c4c8cab7d5be97b2bb283e531c077355"},{url:"assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",revision:"d5b59ec9764e10f4a82369ae29f3ac58"},{url:"assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",revision:"32a5339eb809f381a7357ba56f82aab3"},{url:"assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",revision:"a48dad4f58c82e38a10da0ceebb86370"},{url:"assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",revision:"b7d9c46bff5d51da6209e355cc4a235d"},{url:"assets/fonts/KaTeX_Main-Bold.22086eb5.woff",revision:"22086eb5d97009c3e99bcc1d16ce6865"},{url:"assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",revision:"8e1e01c4b1207c0a383d9a2b4f86e637"},{url:"assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",revision:"9ceff51b3cb7ce6eb4e8efa8163a1472"},{url:"assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",revision:"284a17fe5baf72ff8217d4c7e70c0f82"},{url:"assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",revision:"4c57dbc44bfff1fdf08a59cf556fdab3"},{url:"assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",revision:"e8b44b990516dab7937bf240fde8b46a"},{url:"assets/fonts/KaTeX_Main-Italic.29c86397.ttf",revision:"29c86397e75cdcb3135af8295f1c2e28"},{url:"assets/fonts/KaTeX_Main-Italic.99be0e10.woff",revision:"99be0e10c38cd42466e6fe1665ef9536"},{url:"assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",revision:"e533d5a2506cf053cd671b335ec04dde"},{url:"assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",revision:"5c734d78610fa35282f3379f866707f2"},{url:"assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",revision:"5c94aef490324b0925dbe5f643e8fd04"},{url:"assets/fonts/KaTeX_Main-Regular.b741441f.woff",revision:"b741441f6d71014d0453ca3ebc884dd4"},{url:"assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",revision:"9a2834a9ff8ab411153571e0e55ac693"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",revision:"b13731ef4e2bfc3d8d859271e39550fc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",revision:"d747bd1e7a6a43864285edd73dcde253"},{url:"assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",revision:"291e76b8871b84560701bd29f9d1dcc7"},{url:"assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",revision:"4ad08b826b8065e1eab85324d726538c"},{url:"assets/fonts/KaTeX_Math-Italic.f0303906.woff",revision:"f0303906c2a67ac63bf1e8ccd638a89e"},{url:"assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",revision:"3fb419559955e3ce75619f1a5e8c6c84"},{url:"assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",revision:"6e0830bee40435e72165345e0682fbfc"},{url:"assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",revision:"7dc027cba9f7b11ec92af4a311372a85"},{url:"assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",revision:"4059868e460d2d2e6be18e180d20c43d"},{url:"assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",revision:"727a9b0d97d72d2fc0228fe4e07fb4d8"},{url:"assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",revision:"fba01c9c6fb2866a0f95bcacb2c187a5"},{url:"assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",revision:"2555754a67062cac3a0913b715ab982f"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",revision:"5c58d168c0b66d2c32234a6718e74dfb"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",revision:"d929cd671b19f0cfea55b6200fb47461"},{url:"assets/fonts/KaTeX_Script-Regular.755e2491.woff2",revision:"755e2491f13b5269f0afd5a56f7aa692"},{url:"assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",revision:"d12ea9efb375f9dc331f562e69892638"},{url:"assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",revision:"d524c9a5b62a17f98f4a97af37fea735"},{url:"assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",revision:"7342d45b052c3a2abc21049959fbab7f"},{url:"assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",revision:"eb130dcc661de766c999c60ba1525a88"},{url:"assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",revision:"ad7672524b64b730dfd176140a8945cb"},{url:"assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",revision:"257023560753aeb0b89b7e434d3da17f"},{url:"assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",revision:"3fe216d2a5f736c560cde71984554b64"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",revision:"6cc31ea5c223c88705a13727a71417fa"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.63c13822.png",revision:"63c138223630a1ad4ac7d129b848409d"},{url:"assets/img/category.4884e842.png",revision:"4884e842d997d40ecd3d347d69801497"},{url:"assets/img/darkmode.cd6c7360.png",revision:"cd6c73602cbe64a85e784daa3caf6b58"},{url:"assets/img/home.54e43b1b.png",revision:"54e43b1b23e40af37563d18d2ea728aa"},{url:"assets/img/home.c65f0280.png",revision:"c65f02809ddb4469ee5a7215e9c05802"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/app.48f2c824.js",revision:"43ae92b9729acdfcfd31293e9b9c254b"},{url:"assets/js/layout-Blog.32f991ff.js",revision:"57891294443771e774199da0dd4930af"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.1b691761.js",revision:"4ecae65e2cfc43c0c638e6379dfcd267"},{url:"assets/js/layout-Layout.7cd6c9d7.js",revision:"d3c4a3de73716def62c4af90f66d007a"},{url:"assets/js/layout-NotFound.6e70b4f3.js",revision:"4144cb9f2a3765fb75563df4206c7ea2"},{url:"assets/js/page--051692f2.db5811ab.js",revision:"3226bbc9b178249cb320f5e941ea38d3"},{url:"assets/js/page--0ab466d2.abd1e8bd.js",revision:"0cd00fe3d3ed92f31ba171389882249f"},{url:"assets/js/page--1104de32.2ff85a80.js",revision:"296a8ae033fb825e3eed0026fd6c9c4e"},{url:"assets/js/page--1c9738b4.80e34ac1.js",revision:"277a1987cf5c22f039c9d48efcf731b7"},{url:"assets/js/page--36317372.5bdc2d93.js",revision:"b28cf8bb18330c5836933ffb1539d098"},{url:"assets/js/page--36b7a178.448dbc1d.js",revision:"48f5fc9cb6309d3ec9714fbc48e65729"},{url:"assets/js/page--44db09a4.b118ed36.js",revision:"16517018c6c82f9b07dd608738e51e9e"},{url:"assets/js/page--4bd3dd04.760c1a76.js",revision:"db9544207db1701752a3bbc540cd4834"},{url:"assets/js/page--4c19db12.f38f53ed.js",revision:"08cbcc88263e445d6813c52fcbbac87e"},{url:"assets/js/page--5dafe67a.c95fce92.js",revision:"7c88d631d832342fd1b8969c74652e75"},{url:"assets/js/page--6426a252.167bc7fc.js",revision:"e455d16d55315d5cb5aa25e56f418248"},{url:"assets/js/page--7a219d12.bbc1f466.js",revision:"4a1967d3fe669a43d71cdf513b005c6c"},{url:"assets/js/page--cde16ddc.d15bba7d.js",revision:"e3a613f72f7d8e0ff7c6eb1b92897a0c"},{url:"assets/js/page--ebefb430.cf55d45c.js",revision:"a7c597f2f4224d90c3b4b4a9c1318c29"},{url:"assets/js/page-About Vuepress.a9c20fec.js",revision:"dd5bc8198bb72480cb7369c30bfcb7db"},{url:"assets/js/page-Basic.0fc9fb4a.js",revision:"538fb6917c30701d76e846102ebe015e"},{url:"assets/js/page-Blog homepage.0d1f66a2.js",revision:"9feefbbe75165223746f8d6d95558f70"},{url:"assets/js/page-Blog related.440f6882.js",revision:"3104b276d49406e50b754f8db0c8c1fd"},{url:"assets/js/page-Comment Function.669acb85.js",revision:"e80894669c8506b699422c303431923a"},{url:"assets/js/page-Common problems.18111185.js",revision:"3ac8c654205e55577de29e4704ca5cfc"},{url:"assets/js/page-Config Docs.a8824086.js",revision:"53e8a1dbb6878b907b798a28e4bde2ad"},{url:"assets/js/page-Custom alignment.431ccf2e.js",revision:"3567c36495319f3b439868968d6b50e2"},{url:"assets/js/page-Darkmode and Theme color.b70984f5.js",revision:"00a941ff60914d15fb479fffa86ece76"},{url:"assets/js/page-Demos.3219a9dd.js",revision:"3f4b9b3e11337abc1b02ba91ecde4414"},{url:"assets/js/page-Emoji List.d1fae659.js",revision:"cf5bde965fe2741981681c799effce41"},{url:"assets/js/page-Emoji 列表.5a2ca2bc.js",revision:"9aa2f8ad52ea9e63ba86d4522d4ab57b"},{url:"assets/js/page-Encryption function.a12e30d4.js",revision:"12bae57b73aba9149c91df962601920f"},{url:"assets/js/page-File Structure.00ad0226.js",revision:"ac0808ce71bbc52e24f7d9c50ee94e7d"},{url:"assets/js/page-Flowchart.eb5f8bdf.js",revision:"9dfd6026bc3bc31412a5b2d7c84a1228"},{url:"assets/js/page-Footnote.a6423b83.js",revision:"90ed84e6eee5aa2bfb3a40165b5790bd"},{url:"assets/js/page-Home Page.6d874583.js",revision:"c1914e5c34109fd42dbaf6195468b1c5"},{url:"assets/js/page-Home.da7307a3.js",revision:"9388909a7f53039e0f5676a83683028c"},{url:"assets/js/page-Introduction.f83e7b83.js",revision:"d5e978ef843a196383d3b2bd92c16bf9"},{url:"assets/js/page-Layout.d9f72344.js",revision:"a4b723321d39b1a966f718eb0a9c6c48"},{url:"assets/js/page-Markdown DEMO.95a8ea1e.js",revision:"a4ecea971472696d2703113944f86f28"},{url:"assets/js/page-Markdown Introduction.964cc38f.js",revision:"82f3829741a6a03d2fde4fbcc5fcd3ab"},{url:"assets/js/page-Markdown 介绍.e116fc7d.js",revision:"8be5888c22a9a26a0f6c6db06838c7d9"},{url:"assets/js/page-Markdown 新语法.906881b2.js",revision:"8f53576629769f84195560a1b86c369d"},{url:"assets/js/page-Markdown示例.71681d9c.js",revision:"84738655a03b341a112ce2089e7020f0"},{url:"assets/js/page-Markup.d2659e21.js",revision:"e076a4edd057d92f89565b02d9924db2"},{url:"assets/js/page-Nature.24e3cae7.js",revision:"8b3281410acb03ad75cdca9f0b5ddac7"},{url:"assets/js/page-NavBar.010e329c.js",revision:"7e52e3a0d0de8ee5a4edd9825258d416"},{url:"assets/js/page-New Component.b4fbfa93.js",revision:"a0a71d4f9a3bd96029340c6163886726"},{url:"assets/js/page-New feature.01b977aa.js",revision:"3e7a63dfab878afda3dbabb784ecfc14"},{url:"assets/js/page-New syntax in Markdown.fa5b0237.js",revision:"0dd5555f7da86d47b2725c4c373192fe"},{url:"assets/js/page-Object.025a6947.js",revision:"9b61f9593e38b5a6fca5a2227eeb32c8"},{url:"assets/js/page-Page Configuration.011cfdf9.js",revision:"8d3396478511fb78a4c378d0f018dca6"},{url:"assets/js/page-Page information.da643f22.js",revision:"02180f017c06fa9ce65101cc49a4192c"},{url:"assets/js/page-Page.2b562bb4.js",revision:"d35628a4eaa23496b28289828d788857"},{url:"assets/js/page-People.34cec7c2.js",revision:"23741fb87df74c5a292ce9c7f3e2f0a2"},{url:"assets/js/page-Place.d4b023ef.js",revision:"b38027125f91225b6e636d201667fe68"},{url:"assets/js/page-Plugin Description.1a2370c0.js",revision:"b7d118511f1e88d73bd56ebc7a623d8d"},{url:"assets/js/page-Plugins.85c52dff.js",revision:"2b9075daa813989a6b9901c56296acdd"},{url:"assets/js/page-Sidebar.955c4342.js",revision:"294af8d8f41b60c85392d282e398ee97"},{url:"assets/js/page-stylus configuration.da6aeebe.js",revision:"88c6015576c856a6c4080df0d6ef9ff3"},{url:"assets/js/page-stylus 配置.8f4e6805.js",revision:"a69837c3abd8d000e56fad077388f40a"},{url:"assets/js/page-Superscript and Subscript.be1a33a7.js",revision:"23bbea64ed45a5e55e274ab22e6d949c"},{url:"assets/js/page-Symbol.7e5a8b15.js",revision:"b893218cc6e067ace1f701a272a63712"},{url:"assets/js/page-Tex Support.4d1e1464.js",revision:"8613819b561a806dd4045e22791b45e7"},{url:"assets/js/page-Tex 语法支持.64e84174.js",revision:"ab4b2d3a1a64351105f4fa609afd453c"},{url:"assets/js/page-Theme Config.1564228a.js",revision:"d1cc4e7da0705a55acaa699a1f7875e5"},{url:"assets/js/page-TS support.ffe278eb.js",revision:"12692dbca3bb92231abc56212c289967"},{url:"assets/js/page-TS 支持.a33510a4.js",revision:"88c1b9d8386c1c06ce5bd0957089b02c"},{url:"assets/js/page-Vuepress Cases.33f6d4d1.js",revision:"489685c755f538fee6a7666565e231a0"},{url:"assets/js/page-Vuepress commands.94b7762e.js",revision:"4a0a4dec36dd7b98d59501f900af6a01"},{url:"assets/js/page-Vuepress 案例.f954b717.js",revision:"9b22ed29a25702706f38656eaadeedff"},{url:"assets/js/page-vuepress-plugin-container.dc8dd15d.js",revision:"d6f06d706ab8f4b33f29b7eb59c52106"},{url:"assets/js/page-vuepress-plugin-copyright.d9bff43d.js",revision:"7940885a2d867974575ce7ff3dfa9ddd"},{url:"assets/js/page-Vuepress.734b80f5.js",revision:"432d982e4f17738b7fec243aa96f69e3"},{url:"assets/js/page-上下角标.8e404298.js",revision:"255e92aa1d28543ebbfb5cf3f8ab728d"},{url:"assets/js/page-主题配置.0027db0f.js",revision:"c0148c664166e578dc36ec1d68920904"},{url:"assets/js/page-人物.d7a7d788.js",revision:"a88f5d5d81f7c4c2aa39b2293f6fed52"},{url:"assets/js/page-介绍.3bd1abdd.js",revision:"9dca7537cb809be62f635a8e4deff1f2"},{url:"assets/js/page-侧边栏.79295d7f.js",revision:"938abd17f81bc494b5f5d12969c36814"},{url:"assets/js/page-加密功能.2e18b53e.js",revision:"9eda2b825f83e18f4224910c0020502b"},{url:"assets/js/page-博客相关.a4460016.js",revision:"7250ed5a55406197b9ed10f64dbf24a2"},{url:"assets/js/page-博客首页.6310a09c.js",revision:"efb4f89e29dc5966e71bdc075b1286cd"},{url:"assets/js/page-地点.6cba4ff4.js",revision:"984c7696b1fd13682993c9c72ba5eb12"},{url:"assets/js/page-基础知识.8850774b.js",revision:"bdc3dabc5ee633d67d535d49ba5b9068"},{url:"assets/js/page-对象.c59ec411.js",revision:"667533915e81ad4f7a6da6f21b970f97"},{url:"assets/js/page-导航栏.de6216e0.js",revision:"258d91fbbb1186613bf753c034f346a2"},{url:"assets/js/page-布局.3c53bfff.js",revision:"1d80b6d8d3b8fc4f4141a14f751258ac"},{url:"assets/js/page-常见问题.254dc46e.js",revision:"9c2e898ca0e54fedac5f80880ca94667"},{url:"assets/js/page-插件.c686a2b9.js",revision:"b0db645757ffdcd3634cbf2b02b98f7d"},{url:"assets/js/page-插件说明.3f47e93c.js",revision:"9baae3f71ce4d7695b671a32e0ca41ba"},{url:"assets/js/page-文件结构介绍.1cde8f0f.js",revision:"4c52337ab89c94e5753d686186575671"},{url:"assets/js/page-新增特性.41c79e0e.js",revision:"595f4c0df717eadf2fbc75007e61193b"},{url:"assets/js/page-新增组件.f1a1b17b.js",revision:"03614db36f2c7bf69ef435faf7e34419"},{url:"assets/js/page-标记.50d93a4a.js",revision:"5736e45a1fa7ee601ef465dbc38bd69b"},{url:"assets/js/page-流程图支持.e97ebbe2.js",revision:"6fe8cf1561225704fa5ce81c68ca2e10"},{url:"assets/js/page-深色模式与主题色.251d88f6.js",revision:"9897b2a888e35c85256bfa689c48635e"},{url:"assets/js/page-符号.6d0e1d3c.js",revision:"c44b6b3bc36144a6ce20026df6a824ce"},{url:"assets/js/page-脚注.65fe3679.js",revision:"5f4af46e52ed0b4fcdc8376a93356553"},{url:"assets/js/page-自定义对齐.932d3026.js",revision:"f51e9aace43ca9d9c174f817a1ae8e8c"},{url:"assets/js/page-自然.f7cc3704.js",revision:"1d73d30c5ac0d9bc31d8d8688f886b26"},{url:"assets/js/page-评论功能.d9aa886f.js",revision:"6ec1a9f966004701e9c082d8b155a729"},{url:"assets/js/page-配置文档.bd0cea80.js",revision:"fa25609f1e3d7be38f523879ddf37fc9"},{url:"assets/js/page-页面.2efc900d.js",revision:"cbe46c3409c9347528b724053991ae06"},{url:"assets/js/page-页面信息.453fce60.js",revision:"542ec8a5a992f93c17ca231d50709c6e"},{url:"assets/js/page-页面配置.02aabc92.js",revision:"3b4bd139a8baa19855f7b78cdf1da7bd"},{url:"assets/js/page-项目指令.fcd3d43a.js",revision:"a5ee67d64fb0d4401447d37a536eeb6b"},{url:"assets/js/page-项目案例.7d1355f5.js",revision:"dcb9435990f4a36422d1794bddb44465"},{url:"assets/js/page-首页.c3f75599.js",revision:"841d8af6c7e1d53d920915d28945af33"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.5b67b132.js",revision:"87bc1b5c7a02882ceb3725a53636fc0b"},{url:"assets/js/vendors~layout-Layout.3288cf8a.js",revision:"141871250dd140aef9910ad2e2d5c4a6"},{url:"basic/index.html",revision:"d759fbbc8952c7998581c01db6b3d942"},{url:"basic/markdown/demo.html",revision:"f628af8f9cb3297bd608159d4fbd7a87"},{url:"basic/markdown/emoji/index.html",revision:"578063c2cc10a91515a6c0c93c7b2621"},{url:"basic/markdown/emoji/nature.html",revision:"77d329a80ac2d0d955e2cd6d1f824397"},{url:"basic/markdown/emoji/object.html",revision:"c0b6bc6db38435c82c8bb0842b200e1a"},{url:"basic/markdown/emoji/people.html",revision:"c73156d0cf78fd7738562d68de5d7b72"},{url:"basic/markdown/emoji/place.html",revision:"48734a3c5ebee5e330f3f07cbbeb9cfc"},{url:"basic/markdown/emoji/symbol.html",revision:"3ef1367da8f15d159c8581bffc475624"},{url:"basic/markdown/index.html",revision:"50ecdd1fe92814aaeacd81683ec253e6"},{url:"basic/vuepress/case.html",revision:"16753824ab3477d5d9807e4f7853d54f"},{url:"basic/vuepress/command.html",revision:"8a254f3f10aa60b899b787dae75f6231"},{url:"basic/vuepress/file.html",revision:"34d6919c9355d8043e8c4bd0886519b7"},{url:"basic/vuepress/index.html",revision:"02981c52203ea17d7e10609f7ee82af7"},{url:"basic/vuepress/plugin.html",revision:"bf24629f50eb43320f47f9a1514c4996"},{url:"basic/vuepress/theme.html",revision:"b77133f1c380c1428e114b0f570b89f0"},{url:"category/aconfigpi/index.html",revision:"bf11e2a4a98d09703ab3199f6b3e5324"},{url:"category/config/index.html",revision:"58db79cea3ddcd8818ac4c7fc56b91ee"},{url:"category/config/page/2/index.html",revision:"57b2577974a68c27260faf16fd508a49"},{url:"category/config/page/3/index.html",revision:"48b9fa5cc1faab17a3add95e8c0a11ed"},{url:"category/FAQ/index.html",revision:"24afe7eb2568347b0fa491679a72c055"},{url:"category/feature/index.html",revision:"1cb24835c46305ad387625e0981fd616"},{url:"category/feature/page/2/index.html",revision:"7113934a36665c461027e2fb6e9aa98f"},{url:"category/index.html",revision:"b431238ad440face83af8984c6bc700c"},{url:"category/instruction/index.html",revision:"2ee3b5a2ff5619ec581c0fba0bb3abcf"},{url:"category/layout/index.html",revision:"303ffef9be0076ef23f3518c9cabba2a"},{url:"category/layout/page/2/index.html",revision:"e0205f4c2e52ac379266624facc6d85b"},{url:"category/markdown/index.html",revision:"4f852b11bc8d47ae71717efffc2ddce0"},{url:"config/index.html",revision:"c660ba5037c40ef8f24f4d5c6872a57e"},{url:"config/page.html",revision:"aecd0d30521241b62fd7ce0d23e6a514"},{url:"config/plugin/container.html",revision:"62ad63c92b100a871e72e74f7b4c37c9"},{url:"config/plugin/copyright.html",revision:"fd491ba447b509de42607714e9c58ac3"},{url:"config/plugin/index.html",revision:"e3cc19c9ab8b64e8b22bcca0e3bee4c9"},{url:"config/plugin/last-update.html",revision:"9e0860fdae1f6d1b46a16e8e5150a0a3"},{url:"config/plugin/medium-zoom.html",revision:"3bdb4d4d12a6eb38856b4dd8233e0836"},{url:"config/plugin/pwa.html",revision:"297ffc26bed6d61f19601af9d10f502d"},{url:"config/plugin/reading-time.html",revision:"e3d827c3739aacd693c652f2873c70ca"},{url:"config/plugin/seo.html",revision:"9ecf03b342e63d54af3c84cce84f7942"},{url:"config/plugin/sitemap.html",revision:"7735df5ce3ee97d75fde3f58973c1c2f"},{url:"config/stylus.html",revision:"0473c39e14b443b2a07f205e7876014d"},{url:"config/themeConfig.html",revision:"23113febfdf9438c38fbd79947676fc8"},{url:"demo/index.html",revision:"b18f4bcb42884c2afd13d1da1d54325c"},{url:"en/basic/index.html",revision:"d659d67aaad06248523d7d41ddbbf9ab"},{url:"en/basic/markdown/demo.html",revision:"7a231d27d363f878fbcec1e73e92552f"},{url:"en/basic/markdown/emoji/index.html",revision:"46336a0316101981ac7504834bc66560"},{url:"en/basic/markdown/emoji/nature.html",revision:"ba87d57ce253155cf4221edf93f28a2e"},{url:"en/basic/markdown/emoji/object.html",revision:"9745e6a8cb5fe3baafe42de43327ce88"},{url:"en/basic/markdown/emoji/people.html",revision:"25d1e03797c0fc9c707f7f2fe02439d1"},{url:"en/basic/markdown/emoji/place.html",revision:"e67e645f5cbb14af2f4414c6357c6303"},{url:"en/basic/markdown/emoji/symbol.html",revision:"79fc5f10e726296f9f3e1e2bfcd8888d"},{url:"en/basic/markdown/index.html",revision:"d8d467a264a1c6bf3c840f9625198249"},{url:"en/basic/vuepress/case.html",revision:"c64df19c2b7becd4cc942d2d83889d34"},{url:"en/basic/vuepress/command.html",revision:"bc2c79f66282905a6a171fc3d09a1acb"},{url:"en/basic/vuepress/file.html",revision:"cce5dd068edc516ee69066e133fbe26b"},{url:"en/basic/vuepress/index.html",revision:"0f04af45fe1151744a93a6153a39d777"},{url:"en/basic/vuepress/plugin.html",revision:"adbe8e4a538e6afc6a1015d14dff92ae"},{url:"en/basic/vuepress/theme.html",revision:"d4621c6b71db4f0c64482b11c5ce69c7"},{url:"en/config/index.html",revision:"a83b0a5582fda8e65beea6c42e49c7e2"},{url:"en/config/page.html",revision:"b9fbb129ecf1c7be733d5c0c8657e961"},{url:"en/config/plugin/container.html",revision:"894043a6d54974f46294ca00ef38eb99"},{url:"en/config/plugin/copyright.html",revision:"0ee7a5cd698162fa6f1050195b386368"},{url:"en/config/plugin/index.html",revision:"6867cc73cf793891f336d948306eb4e0"},{url:"en/config/plugin/last-update.html",revision:"fe993fa71df8ffbcb9dc3247e3360b3e"},{url:"en/config/plugin/medium-zoom.html",revision:"161bc5c2bf826a53e194afd1b6b7b649"},{url:"en/config/plugin/pwa.html",revision:"4daca23f21dd4230997c7b454b2ec0b8"},{url:"en/config/plugin/reading-time.html",revision:"e186392c197c36b11b8f7541d7745476"},{url:"en/config/plugin/seo.html",revision:"2a535985367b53c5cd12af143fd9ef0d"},{url:"en/config/plugin/sitemap.html",revision:"df860868801279994070106dd2d64955"},{url:"en/config/stylus.html",revision:"f9331379be527baf3412d0fa1220ecd0"},{url:"en/config/themeConfig.html",revision:"403abeb4ede29d0ffa51ca8180d93712"},{url:"en/demo/index.html",revision:"9ad32d1acb71fe83ee3a7c8a3669f04e"},{url:"en/FAQ/index.html",revision:"5859dd17d8ee8a36d208b68d2ea1638a"},{url:"en/guide/feature/blog.html",revision:"721a551f062164b183efdfe4b7f4fac0"},{url:"en/guide/feature/comment.html",revision:"3be4821fddb4c552d061f3127359596f"},{url:"en/guide/feature/component.html",revision:"6d65808845d2b97b57ce0ff81fec1418"},{url:"en/guide/feature/encrypt.html",revision:"83397cf522c8b63ee0e24296b9aae4c9"},{url:"en/guide/feature/index.html",revision:"e9038597301916b689823f970a09b3fa"},{url:"en/guide/feature/markdown/align.html",revision:"fb4e59a7f0efa8caf568b27c2e1f12e1"},{url:"en/guide/feature/markdown/flowchart.html",revision:"d49f8c807ad68d97c9ea5a4256cb5a22"},{url:"en/guide/feature/markdown/footnote.html",revision:"632383e3bcd7d79aa2fa7d1ec6d1fb3d"},{url:"en/guide/feature/markdown/index.html",revision:"016571ff3fa5b3c7fd6c472ab9f8e7c8"},{url:"en/guide/feature/markdown/mark.html",revision:"55d542b3a695313f9601bd64fb181a16"},{url:"en/guide/feature/markdown/sup-sub.html",revision:"67ba7f1b9ce48fbfdac0b34d93e4529b"},{url:"en/guide/feature/markdown/tex.html",revision:"f83da244d0319cef74401dd93397fe08"},{url:"en/guide/feature/page-info.html",revision:"ca1253fa10dbee63fe6e46e48e6bc412"},{url:"en/guide/feature/theme.html",revision:"5fd5c2198784404423c3183bb680f2f7"},{url:"en/guide/feature/typescript.html",revision:"e7c345a3c4241663be2ae1ac08c8726c"},{url:"en/guide/index.html",revision:"0cae63f38e34dab5d34456c5805af2d4"},{url:"en/guide/install.html",revision:"2b1e272d398df8150f15f2626fbfb91e"},{url:"en/guide/layout/blog.html",revision:"63f28ff7d6753be6b148d2361a963ac0"},{url:"en/guide/layout/home.html",revision:"d87ce7953161a46454e609df1d760d20"},{url:"en/guide/layout/index.html",revision:"03d0cbe521a973b4e55af80b0e70f5c2"},{url:"en/guide/layout/navbar.html",revision:"ce35bf3b549b5bb7c8b30170e3973a40"},{url:"en/guide/layout/page.html",revision:"6882b0c9dcdeff6cc407a419065516c3"},{url:"en/guide/layout/sidebar.html",revision:"97437f1ea72cdd2c17048a39c8666cdc"},{url:"en/index.html",revision:"6fb85ec14cb790411a5caa0ab2a1e3a4"},{url:"FAQ/index.html",revision:"5a71cdc94def5ab43e9c15efa2b9fe61"},{url:"guide/feature/blog.html",revision:"c8780dc6d7c8859eb19a04efb6380e72"},{url:"guide/feature/comment.html",revision:"d4b42acf3027c82f397c38a9cb654ca6"},{url:"guide/feature/component.html",revision:"c1ce26c08716e356f00dc014ad6df397"},{url:"guide/feature/encrypt.html",revision:"cfe4a3d4afd9041049cbe6fca67d3ffa"},{url:"guide/feature/index.html",revision:"7b22c9fda53fe34de4d96f3bcc110c98"},{url:"guide/feature/markdown/align.html",revision:"d8e64bc7eac533029fbf818c334f5fe4"},{url:"guide/feature/markdown/flowchart.html",revision:"b8c876561decd878c3d72b3d37f57bb5"},{url:"guide/feature/markdown/footnote.html",revision:"1dcdd1a23d4f96b59ce286164dff2413"},{url:"guide/feature/markdown/index.html",revision:"ec7f5b1881674768ba185c9258a461b5"},{url:"guide/feature/markdown/mark.html",revision:"e52a1984fe2c1076df0b91b06a018bc2"},{url:"guide/feature/markdown/sup-sub.html",revision:"ba7f74cf8dc840c7abc4e1f97cf3dd72"},{url:"guide/feature/markdown/tex.html",revision:"02a5f3eca85b3a16991ebb6167a2f744"},{url:"guide/feature/page-info.html",revision:"97c2dc2dcc9f175fe4ea985ecb06bad8"},{url:"guide/feature/theme.html",revision:"a7a7ac233270e7816d3545488980f556"},{url:"guide/feature/typescript.html",revision:"f25027f97e5449440034ae3c70dffcee"},{url:"guide/index.html",revision:"2138c16da0c4dbde1d2de262ce8223c9"},{url:"guide/install.html",revision:"a8927e70dce9a41e423323076db8ae01"},{url:"guide/layout/blog.html",revision:"4a8a1e720d7a331a283f8bee2706456b"},{url:"guide/layout/home.html",revision:"8fed367d0fc036b5bba90d45d5c620fb"},{url:"guide/layout/index.html",revision:"abed427996ed4df37c20c2f6fd8b8d65"},{url:"guide/layout/navbar.html",revision:"73e55db27e73f330fc8412d2d2be6e0c"},{url:"guide/layout/page.html",revision:"678b67376123b3c88c95bebdcd85682a"},{url:"guide/layout/sidebar.html",revision:"5a1a8963621db3d586290bc8eca1eb12"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"a01ac890eec6f38493802a736b3eb196"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/blog/index.html",revision:"20f38d06bde5ed52e9bf5d9c4b58df1a"},{url:"tag/comment/index.html",revision:"837224978ea594d29fb0432a1f491b7d"},{url:"tag/components/index.html",revision:"4ca83c4a21b180e9f32cadf6275b593f"},{url:"tag/config/index.html",revision:"f22040a60c04e8487b9dfe6cd5edf254"},{url:"tag/config/page/2/index.html",revision:"0895c1627bd377c70c9a298e2865f8f2"},{url:"tag/config/page/3/index.html",revision:"2407c611249852739c7021d3b70ac983"},{url:"tag/emoji/index.html",revision:"5b3d933384f5c39289b2e8ed9ee87d20"},{url:"tag/emoji/page/2/index.html",revision:"9c27d127e7c860d83efb994e156a0080"},{url:"tag/encrypt/index.html",revision:"0812a8fa75c76e15a42da5f2ab80c7a4"},{url:"tag/feature/index.html",revision:"1025583f9320b73806e4be62533bb98f"},{url:"tag/feature/page/2/index.html",revision:"e3948baa2fb44b01073f2a4964b53db3"},{url:"tag/frontmatter/index.html",revision:"08ced80d768b5db412036fd3d673e70a"},{url:"tag/function/index.html",revision:"83eaa2449efb237f161b6037f0761c70"},{url:"tag/function/page/2/index.html",revision:"6604170840d6acb0dbe596a700a4e54b"},{url:"tag/home/index.html",revision:"004de3e9d2978237fe5930506fd709bc"},{url:"tag/index.html",revision:"e666d28bb0c236ae32fb55173fd29446"},{url:"tag/intro/index.html",revision:"c4fe6b69ea1e36eeda97158737dfe1f7"},{url:"tag/layout/index.html",revision:"8a213eba2bddbf4f93dba025e1483789"},{url:"tag/layout/page/2/index.html",revision:"a38159f2fea0fbc5df2696b2021632b0"},{url:"tag/markdown/index.html",revision:"a785e674b7a71be6934739b4362fb2f2"},{url:"tag/markdown/page/2/index.html",revision:"f8b68b050e22699432979cf3b6310f15"},{url:"tag/markdown/page/3/index.html",revision:"46c9d475e45ceed8e0af5f00ae78c844"},{url:"tag/navbar/index.html",revision:"6a3092169fe5b3dcfd611c295b196ed8"},{url:"tag/page-info/index.html",revision:"bed5630efe407da0ec89cfdc54e80d95"},{url:"tag/plugin/index.html",revision:"e0d7c644bf9c3ef5b5d1b4ba606ab1a0"},{url:"tag/plugin/page/2/index.html",revision:"fe10b7cbeecbec38cab46464edaca2fa"},{url:"tag/sidebar/index.html",revision:"c090849d22da4214208462f4f620709a"},{url:"tag/style/index.html",revision:"05caabdb5623f05639e131690cdbfb27"},{url:"tag/themeConfig/index.html",revision:"2a770802259e37758ca8ca2096b13f44"},{url:"tag/typescript/index.html",revision:"f32c2ae10d4c69eebd8f22a788af2de0"},{url:"tag/vuepress/index.html",revision:"eaa8a015e3a2f141ac6a7ba161cd0ef9"},{url:"timeline/index.html",revision:"189f403609673ed0a9a879fd5774f18a"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error }),
      ),
    );
});
