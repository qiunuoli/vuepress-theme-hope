if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-60b22648"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"api/index.html",revision:"7cfc12554f151c7197909869ef596fa4"},{url:"api/page.html",revision:"f9a4680dea17c8ca195b5f121f647018"},{url:"api/plugin/container.html",revision:"5124d3a2855095b89a6baec7fafbcbeb"},{url:"api/plugin/copyright.html",revision:"c1cf93126838fa613ae7a3320a28da2d"},{url:"api/plugin/index.html",revision:"b02eac06acfdf2f95e1bffa9405a3525"},{url:"api/plugin/medium-zoom.html",revision:"3386cd4022eafe782d3b57ebec35e59a"},{url:"api/plugin/pwa.html",revision:"2525de19401b035849286f90c370169c"},{url:"api/stylus.html",revision:"9055db757531ed57c5989e255ea7c1c7"},{url:"api/themeConfig.html",revision:"77bc35a785443e2e83af9037ef1099c9"},{url:"assets/css/0.styles.aa006723.css",revision:"8ad7f2dfd550e75ae54b2a68de1c5203"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/nightmode.73215ae2.png",revision:"73215ae22b72654917bb26f315d7d47c"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/94.c91bb2b5.js",revision:"a9063354bc37ff5ee898bec307f615af"},{url:"assets/js/95.29c5ef88.js",revision:"f7b8c2387bbc2f989505b299328d9079"},{url:"assets/js/app.23aa7a7f.js",revision:"0734e26f0cd874667033ee23cc2d194e"},{url:"assets/js/layout-BlogEntry.0f9e14b4.js",revision:"0af6230c80c717c729936c0fd5ae86c3"},{url:"assets/js/layout-BlogEntry~layout-Layout.273eadfa.js",revision:"07050a85649def4fe41ade9e0af10cc1"},{url:"assets/js/layout-Category.7a6f9143.js",revision:"0b320b40aeaba2c2035c54e1a4caa53f"},{url:"assets/js/layout-Layout.c0aa0cf8.js",revision:"eccfccfce8551d6910ba1fba7a5540f0"},{url:"assets/js/layout-NotFound.97afa204.js",revision:"f7a17b1b8e9f9f2bfd212c4f79a02fd0"},{url:"assets/js/layout-Tag.6a63d514.js",revision:"eae5c96c13a6301955585f0b79332b6e"},{url:"assets/js/page--1b278726.3f9dae24.js",revision:"2ddb6503e347cf177d079ce983d66dd8"},{url:"assets/js/page--24b68849.f54fd952.js",revision:"31bf0c89dcd1d9c616932263820c8dff"},{url:"assets/js/page--298eb4e9.ad6d8d6e.js",revision:"01110a6286f3a7eb04377660ab1485db"},{url:"assets/js/page--33732ef1.e5b92db2.js",revision:"b11c1477e0d1db8764cd0e2d45900014"},{url:"assets/js/page--608d80cf.e2012fa6.js",revision:"cb22b32b043eb9050081d383fc56e58f"},{url:"assets/js/page--b64dd6ee.d495012e.js",revision:"0206e708c64ed2f0c345dcdcb2d35aad"},{url:"assets/js/page-About Vuepress.0825aff9.js",revision:"d6ca62391b700414dd9aa71a72dd9c65"},{url:"assets/js/page-API Docs.ec342d5b.js",revision:"88ddb56350173ef9e43a8b15dc8e66d8"},{url:"assets/js/page-API 文档.7fcbecbf.js",revision:"0f94f330aafb2e49b78838f3d8a42293"},{url:"assets/js/page-Basic.6f177cec.js",revision:"7512d16a6d450776e6b252f96b719606"},{url:"assets/js/page-Breadcrumb.59c9951c.js",revision:"0deffef6dec8478be4e50cb1c2336a00"},{url:"assets/js/page-Comment Function.5378cb29.js",revision:"8352f42c2e9bebf3594f94c05b733896"},{url:"assets/js/page-Default Theme Config.577d25b1.js",revision:"f70bc82da15600ac0d2b83c958cc2de4"},{url:"assets/js/page-Emoji List.2692716b.js",revision:"793893ec46109637c910d60f7b4e1ae4"},{url:"assets/js/page-Emoji列表.629b3a34.js",revision:"a07141728354a2118a37c07eaeae047b"},{url:"assets/js/page-File Structure.62227d6a.js",revision:"a2ac95207adec6c2cb2682b55f84a568"},{url:"assets/js/page-flowchart.cbf64d37.js",revision:"754ce71084c1cdf3509c42ac10944f2c"},{url:"assets/js/page-Footnote.99b02ea4.js",revision:"5954d3c1d8d85a8dc1e8117969254cfa"},{url:"assets/js/page-Fullscreen Button.45a5af63.js",revision:"b852fd079cbe6e9f40ff4419de3e95cf"},{url:"assets/js/page-Home Page.d3960d9e.js",revision:"af72f92047a9213900ffa55941e5186a"},{url:"assets/js/page-Home.42fe06d5.js",revision:"0f5e1c1406149fd5c4aa79739e4502d4"},{url:"assets/js/page-Introduction.ed32ad0f.js",revision:"b9a6db37b30395fb3aa66d4e51c9823b"},{url:"assets/js/page-Markdown DEMO.65c832f3.js",revision:"6dfea54e7a72490c458ea2839e2a8b38"},{url:"assets/js/page-Markdown Introduction.1c9d90c0.js",revision:"0dadb3ba5e5d980d988be284bc731955"},{url:"assets/js/page-Markdown 新语法.470db256.js",revision:"de13edbdee680096aeed70e1a55411d5"},{url:"assets/js/page-Markdown介绍.76f9c982.js",revision:"d81f977687373ad255f7c7e9186bca11"},{url:"assets/js/page-Markdown示例.2edf54b3.js",revision:"e01985a61dd736e4a3cb09958521e6e0"},{url:"assets/js/page-NavBar.fa595b47.js",revision:"547e662b7134800fbaeb07c71fd5a657"},{url:"assets/js/page-New Component.aba6a287.js",revision:"cf311c69069b006ffab676e84c0cba79"},{url:"assets/js/page-New syntax in Markdown.fe2c5e9d.js",revision:"c7f6c6055241b98ff2ee1d97d4e24d96"},{url:"assets/js/page-Page Configuration.8f34ba53.js",revision:"512d880477d2a4871302539f8e69b8e9"},{url:"assets/js/page-Page.9b793533.js",revision:"2c8c3c7613cbf8831ab6df3a11825aa3"},{url:"assets/js/page-Plugin Description.46030c39.js",revision:"5aebbead0902c4a7642887bef666ab31"},{url:"assets/js/page-Plugins.6d31ca6e.js",revision:"94e12f33e76a99da064083d672600d89"},{url:"assets/js/page-Sidebar.2e8130d6.js",revision:"4bf8e8912935794daf829bd1d957f976"},{url:"assets/js/page-stylus configuration.fd09b097.js",revision:"c210749bec8a3eb2cc2e754725dc182d"},{url:"assets/js/page-stylus 配置.a8d49758.js",revision:"e9e4807dbcb87f6ee5d757eca5a14407"},{url:"assets/js/page-Superscript and Subscript.de3f07e9.js",revision:"c0d974c61ce5f170cfc18cf41af0b17b"},{url:"assets/js/page-Tex Support.95dda073.js",revision:"ed979971bf5f2ac8b4a6545aff467d98"},{url:"assets/js/page-Tex 语法支持.bc6801e7.js",revision:"27cbfedd397453a7bb77f9dbe3ff7083"},{url:"assets/js/page-Theme color and Night mode.760e1653.js",revision:"83e4c8b52b26e87a2e775fde572b52f6"},{url:"assets/js/page-Theme Config.b0aa617f.js",revision:"bfa1b24fe280f8ffef9c6fac5bffcd15"},{url:"assets/js/page-TS 支持.307252e5.js",revision:"9c73300324d503d59c88fa47e4055ab5"},{url:"assets/js/page-Vuepress Cases.3c235737.js",revision:"8b202f13dfdc88ee7cc2af5613f03d57"},{url:"assets/js/page-Vuepress commands.809b7ab3.js",revision:"26718c5f85fca8d73e248132660f5c4b"},{url:"assets/js/page-Vuepress 案例.8fcb0b73.js",revision:"ba1a7645768395a9d719bd16cdc37468"},{url:"assets/js/page-vuepress-plugin-container.f1a78f6f.js",revision:"53bd4050223727d1c7d1dee31b37f04d"},{url:"assets/js/page-vuepress-plugin-copyright.f3528672.js",revision:"48cbe8c8d56014c8df2df3eaad0301a6"},{url:"assets/js/page-vuepress-plugin-name-chunks.2a9f1d3c.js",revision:"e845af2a90403563d979f4b996f5e452"},{url:"assets/js/page-Vuepress.26dbb163.js",revision:"9e099e7b92ba65dde0252acb1cbf8359"},{url:"assets/js/page-Writing a theme.58a4a39d.js",revision:"13cf274fc4dd922c8958b8db47a59167"},{url:"assets/js/page-上下角标.5552a934.js",revision:"1f5098303afd84f694179bec327c7aa0"},{url:"assets/js/page-主页.2e320c8c.js",revision:"51fccf4d0f0cb676788dd92a617f2162"},{url:"assets/js/page-主题色与夜间模式.2d938ed3.js",revision:"ca9f1be722698d16fc98ec9b93823ecc"},{url:"assets/js/page-主题配置.b82f1169.js",revision:"1cc9b24a3d1e3d741dc793e74f67850b"},{url:"assets/js/page-人物.bf783194.js",revision:"b612d6c187de0325b192ac366e931793"},{url:"assets/js/page-介绍.312d259d.js",revision:"a8768cbd4fec9f20a2b56eac4af04ee4"},{url:"assets/js/page-侧边栏.9a80d33d.js",revision:"7ce764dbcbedbd68992004f83832f4fd"},{url:"assets/js/page-全屏按钮.ba5c6a76.js",revision:"cfc9deffa2035e0867893b97525e0fe7"},{url:"assets/js/page-加密功能.1d76f3cd.js",revision:"d4c204356e6385dc1d63247556c684e4"},{url:"assets/js/page-图标支持.5e1fd28a.js",revision:"ade6effe0fde0f6478a68802e8b81034"},{url:"assets/js/page-地点.0709fb3d.js",revision:"fda7ad635a709c8e6b697c4a9bd42efa"},{url:"assets/js/page-基础知识.c059885b.js",revision:"0bdf2ec328c4859cee833728417e875a"},{url:"assets/js/page-对象.ec3268b8.js",revision:"c501094d2cd8be62c1d7623af9544624"},{url:"assets/js/page-导航栏.23b2abf9.js",revision:"36a8d7de41e2838fe916ff83a13f0e3f"},{url:"assets/js/page-布局.ae35d901.js",revision:"ae185ae6d5fc8c86d4f9e8efd45c0c68"},{url:"assets/js/page-常见问题.827008cc.js",revision:"154032b8a8d0a2b67e7efdf6cbb85aa1"},{url:"assets/js/page-开发主题.6bbf6d45.js",revision:"0d3831d35132810c54c313a2e75616e8"},{url:"assets/js/page-插件.fb332b74.js",revision:"0f538680383b33d297904792eea9629a"},{url:"assets/js/page-插件说明.e1414aa1.js",revision:"c9873560ecf98c225f9aef59c43ea6b0"},{url:"assets/js/page-文件结构介绍.4ba88fde.js",revision:"08fa2b13ff8571565abd3b979d73dee5"},{url:"assets/js/page-新增特性.d00d36f5.js",revision:"07f101ebfa7bebd691805c4c9068e491"},{url:"assets/js/page-新增组件.0b78ab7d.js",revision:"3142c45012d4bd4ceb248bb40eee641a"},{url:"assets/js/page-流程图支持.c36151aa.js",revision:"643fc5733c5cfeedf5cbc7b316c1ec63"},{url:"assets/js/page-符号.e1e7ffed.js",revision:"647f379380765b619b40d23c23e27554"},{url:"assets/js/page-脚注.3dbd1cd6.js",revision:"a7f3fe3cb885af72283466d87406ca2b"},{url:"assets/js/page-自定义对齐.17513045.js",revision:"188b0e50060f5527d774e30d1a83cb5f"},{url:"assets/js/page-自然.483114d4.js",revision:"7ed3836646393fe3837937640af69157"},{url:"assets/js/page-评论功能.fe3e162f.js",revision:"299367a2e2857de8b474f5001e28392a"},{url:"assets/js/page-路径导航.e4de8bd8.js",revision:"035fb8c890c3a7cf9aec7909ec5c1502"},{url:"assets/js/page-页面.dea283f5.js",revision:"4cd50c3c959d83bf2224a28f3b0578ad"},{url:"assets/js/page-页面配置.d48ad71b.js",revision:"f8c118628846b6766abdfc327dee7cdb"},{url:"assets/js/page-项目指令.5fbf1330.js",revision:"ecf94728da99f3870f8fb22927a49dce"},{url:"assets/js/page-默认主题配置.25687ff2.js",revision:"48bdb6be3426544d930f96d127a7ca83"},{url:"assets/js/vendors~docsearch.d9b0a381.js",revision:"77739dcba776a2625d0338a6ae200826"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.d93b0761.js",revision:"eaebb03801daeb4095e8f7ad49831686"},{url:"basic/index.html",revision:"7ab0709e5c353a9b082b486738fe899b"},{url:"basic/markdown/demo.html",revision:"9841a044286acc8bcadcde34d73f5781"},{url:"basic/markdown/emoji/index.html",revision:"5d1ee74afc9766061a018ce59611522f"},{url:"basic/markdown/emoji/locate.html",revision:"564ac60bc53bebba0d0fdd2f4420a68c"},{url:"basic/markdown/emoji/nature.html",revision:"7331fe77d361855b3626b4e3861d1dc5"},{url:"basic/markdown/emoji/object.html",revision:"13e247e3aa0769acee45a985559293e0"},{url:"basic/markdown/emoji/people.html",revision:"43b30264ad8da7876580e6a01c367a10"},{url:"basic/markdown/emoji/symbol.html",revision:"d3bb74c7811c5644664af26048dca780"},{url:"basic/markdown/index.html",revision:"44a194dc5d2bd003bf3836a457a19ede"},{url:"basic/vuepress/case.html",revision:"899ba28c8f0497a8377d5e91380c1778"},{url:"basic/vuepress/command.html",revision:"854d9a0c452ad4f52f03a720b5bada61"},{url:"basic/vuepress/file.html",revision:"6566f2525b8642814f20a5eba1de817c"},{url:"basic/vuepress/index.html",revision:"e933a2e51c83388404c7d10540ab9def"},{url:"basic/vuepress/plugin.html",revision:"80c3ffa8bdfd8e01bb3fae39f6bc55de"},{url:"basic/vuepress/theme/config.html",revision:"9ba088bef0ed4e1a6074a7ab7c8efcba"},{url:"basic/vuepress/theme/dev.html",revision:"0980dacad9a3312e2e479c127b58df8b"},{url:"basic/vuepress/theme/index.html",revision:"4b1b91555b98cfec8b0eb376b6efaabc"},{url:"category/api/index.html",revision:"1fbb245c9d7762d0dbb10b109311343f"},{url:"category/function/index.html",revision:"353e26f1d6feac1ccdd65f9271ade116"},{url:"category/index.html",revision:"804d7f0a47946e42941821caeffbc241"},{url:"category/instruction/index.html",revision:"a3e956b63d3360418eca97da4b4dcdce"},{url:"category/layout/index.html",revision:"5261b299467ff7c6239d016b17315f73"},{url:"category/markdown/index.html",revision:"f5e3e6b81b0a6ef0c88196747bd34abe"},{url:"category/style/index.html",revision:"bac3246c9bb76d07ba36501fcfe638b8"},{url:"en/api/index.html",revision:"390089422dd14f86c2d2fd0f76044971"},{url:"en/api/page.html",revision:"6b2e69cc92b28453cdf0b7786da4a75b"},{url:"en/api/plugin/container.html",revision:"d92bf4a134fe737b434cfbbfc0a02fad"},{url:"en/api/plugin/copyright.html",revision:"5f5eea357a82b840005cd81a751d16bb"},{url:"en/api/plugin/index.html",revision:"0737749e5717c613a4cf83186a4c0bea"},{url:"en/api/plugin/medium-zoom.html",revision:"09c7e086d0c204545af3bfd31a2d1055"},{url:"en/api/plugin/name-chunks..html",revision:"8aac1770d5a4d4c080013b65f95e272f"},{url:"en/api/plugin/pwa.html",revision:"f7d9c2a2fc38306dc5e39b3295c16fcd"},{url:"en/api/stylus.html",revision:"3e98a2ce9c1bd9db78cd7f3264711c4f"},{url:"en/api/themeConfig.html",revision:"f4e3d024fbe08c0f1b28cc5559acb4a8"},{url:"en/basic/index.html",revision:"a23b55a341aa48fbd8179c1986b358f3"},{url:"en/basic/markdown/demo.html",revision:"73587277187ae7dbf75b3805273e843d"},{url:"en/basic/markdown/emoji.html",revision:"c516446ba621a49922e09d100087b7a6"},{url:"en/basic/markdown/index.html",revision:"a53daefb95aca4d1a83d196db8709dc7"},{url:"en/basic/vuepress/case.html",revision:"398064d64e9b80044d51f1742197c89b"},{url:"en/basic/vuepress/command.html",revision:"8743105695c10d4fb2051db49d251d86"},{url:"en/basic/vuepress/file.html",revision:"9c994bcfa22e2e6a08512cb047332d88"},{url:"en/basic/vuepress/index.html",revision:"4aee5b2b77a357a31f31eeeca750e5e3"},{url:"en/basic/vuepress/plugin.html",revision:"d83e84c9ec4fa1b13c1c84561c2c5df7"},{url:"en/basic/vuepress/theme/config.html",revision:"35596e14bd32e8f6d42cca394ae56470"},{url:"en/basic/vuepress/theme/dev.html",revision:"7ecf425ee64b646f30f60756a9168383"},{url:"en/basic/vuepress/theme/index.html",revision:"35c531ec415232153f9911ed5775bc73"},{url:"en/guide/breadcrumb.html",revision:"032d26949e1c548656a2db1c07a561ee"},{url:"en/guide/comment.html",revision:"086992d16563bcca0867dc7788fc59ea"},{url:"en/guide/component.html",revision:"9b6cfcc56df3e5d9a61a6ead988ca8d0"},{url:"en/guide/fullscreen.html",revision:"1047c030957b432387db080755abf814"},{url:"en/guide/home.html",revision:"29cf16cde246c61d16e4727115fa6b64"},{url:"en/guide/index.html",revision:"ff8741e2ffc080fbcb058a080d81a107"},{url:"en/guide/install.html",revision:"50cbbe6fe1ece052a0e892f32b73d439"},{url:"en/guide/markdown/flowchart.html",revision:"39b221d03e93f8af7aa377c96fef328b"},{url:"en/guide/markdown/footnote.html",revision:"6e98311ce1181aa58e73c082aabba496"},{url:"en/guide/markdown/index.html",revision:"e30789227adbfbd3b9e77a0c961dae48"},{url:"en/guide/markdown/sup-sub.html",revision:"0ea011fb54d13c0690ad050e8df91285"},{url:"en/guide/markdown/tex.html",revision:"12a07e375b1f5c98077109599d1a1d35"},{url:"en/guide/navbar.html",revision:"af7f06fd40ba03485dc2cc67fb422d78"},{url:"en/guide/page.html",revision:"ef0706d494fddfb08881f6d30d7c4279"},{url:"en/guide/sidebar.html",revision:"28f15f67558302f1aa35ca3696afbee7"},{url:"en/guide/themecolor.html",revision:"321a8e58d038994a100251993813d3cd"},{url:"en/index.html",revision:"cfa835381b78ba4537126773f565b6e4"},{url:"FAQ/index.html",revision:"4a91e35ecc6530832c589a8884f5c8b8"},{url:"guide/feature/comment.html",revision:"33f32887a290ab284ac38e81bb3b4d8c"},{url:"guide/feature/component.html",revision:"acf45a86350e3a8ff734001591870ed3"},{url:"guide/feature/encrypt.html",revision:"2737882bcdfe52836cf9c8a24fc11c3c"},{url:"guide/feature/fullscreen.html",revision:"cbe5153e17514fda540c79ea86d08e4f"},{url:"guide/feature/icon.html",revision:"e61706dc194ade8dc049727d6cd24f7e"},{url:"guide/feature/index.html",revision:"a728b55d44bab00ecac788060da6b5fd"},{url:"guide/feature/themecolor.html",revision:"18fa6898da7a5492c1777bb6c649447b"},{url:"guide/feature/typescript.html",revision:"e965adc0fc9ca2bb6be0865cb8a03f48"},{url:"guide/index.html",revision:"7d2706792682b32dec03bcaf29d658b5"},{url:"guide/install.html",revision:"26ca4642c22c238d9d2e9252740db543"},{url:"guide/layout/breadcrumb.html",revision:"95fa78e23b632baad131435d8d82452d"},{url:"guide/layout/home.html",revision:"dff0ca7d3b4eb34fa662b853559be48c"},{url:"guide/layout/index.html",revision:"bfb90e33abc55e8bddee7fd580c367c8"},{url:"guide/layout/navbar.html",revision:"cc8f81b8e6c143afac27ce38f1b5577e"},{url:"guide/layout/page.html",revision:"ad4976436aa082161728f2060313a1b2"},{url:"guide/layout/sidebar.html",revision:"e4fd4f7871a890a796625681325d629a"},{url:"guide/markdown/align.html",revision:"87554a8e5869a07aa93d6f7dd3440d99"},{url:"guide/markdown/flowchart.html",revision:"2c9e9d2599fcc37e0ef48e1b21521beb"},{url:"guide/markdown/footnote.html",revision:"b644c2d20a7621f45dc5088c6386c398"},{url:"guide/markdown/index.html",revision:"1f6c9824732dcc7e4b4b09657564e554"},{url:"guide/markdown/sup-sub.html",revision:"bbca7ed7ceb90694456e7e12216742b6"},{url:"guide/markdown/tex.html",revision:"0982a036d1dd6bd1e97f5e3eaeb2b824"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"565c61e1faf4d77aa1886049f38ebcb9"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"da8e25abb73181351b23b35830370f21"},{url:"tag/comment/index.html",revision:"cc34bd7db0c95456df531be84ab82b56"},{url:"tag/component/index.html",revision:"068411ce3ac1d165be14ddbc4bc270a5"},{url:"tag/components/index.html",revision:"bbc8ab83ec6ccd6cd25ae3718971931b"},{url:"tag/emoji/index.html",revision:"82102d008a97c4d915d9843a9f855339"},{url:"tag/encrypt/index.html",revision:"4341c6f7bc4f5d6e863ad4e99be87d00"},{url:"tag/enhance/index.html",revision:"a14c761c851e4c157d8bc2ca28eb797d"},{url:"tag/frontmatter/index.html",revision:"b142f56ca10005cf9d6c30ba1d9743ba"},{url:"tag/fullscreen/index.html",revision:"54999a9f222cae0cf89b1bc6676a74a3"},{url:"tag/function/index.html",revision:"000638c0898a0bbc87786831da810da9"},{url:"tag/home/index.html",revision:"47a6b4940436e8d919faac4e9e293a9d"},{url:"tag/icon/index.html",revision:"38debb923736a3f3320a51c65f7b78e3"},{url:"tag/index.html",revision:"c3dd0017fb6e61e221786813e5ec09ba"},{url:"tag/intro/index.html",revision:"17cb1471f0c62e5c5cb7ee04cc401c77"},{url:"tag/layout/index.html",revision:"43a97393bb6311e13342e30b4c1688eb"},{url:"tag/markdown/index.html",revision:"67c54bc3fdd339ce76b46c08397aec11"},{url:"tag/plugin/index.html",revision:"667a4c75ea4bd4baa44d879d1c61835b"},{url:"tag/style/index.html",revision:"b14dc2a8c672a1b65d66c5a2d2908e78"},{url:"tag/themeConfig/index.html",revision:"e78b633f63789ff9d7f4e9b214b626f1"},{url:"tag/typescript/index.html",revision:"811ac2e2225892e2294282f91ebb7737"},{url:"tag/vuepress/index.html",revision:"192f2852109cdff2a6f2b30e9ff20c4c"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});