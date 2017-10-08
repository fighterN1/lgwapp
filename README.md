# learn-ssr
main
npm run build 编译项目
npm run start 启动项目
npm run test 测试


#
1.新建一个web的目录 里面有一个views和一个Widget
2.views是页面 widget是你的组件
3.widget由 js html less images组成 widget和widget之间暂时不发生关系
4.views目录里呢 要有一个entry.js
5.webpack分为 开发版本 上线版本 总的入门版本
6.htmlplugin处理两种方式 直接可以把CSS JS插入到页面 可以指定一个JS 编程 webpack
7.一个pages需要用的组件的脚本 css images 是由于 entry打入进去的
8.一个页面组成组件  一个页面对应entry
9.将所有的pages打到对应的views里面去
10.完成build目录 对 src / web的整体收集