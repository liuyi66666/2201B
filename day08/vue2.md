# vue简介
# 介绍
vue是一套用来动态构建用户界面的渐进式JavaScript框架
1.构建用户界面：把数据通过某种办法变成用户界面
2.渐进式：vue可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应该可以引入各式各样的vue
作者：尤雨溪
# vue的特点
1.遵循MVVM模式
2.编码简洁，体积小，运行效率高，适合移动/pc端开发
3.它本身只关注Ul,也可以引入其他第三方库开发项目
4.采用组件化模式，提高代码复用率，且代码更好的维护
5.声明式编码，让编码人员无需直接操作DOM，提高效率
6.使用虚拟DOM和Diff算法，尽量复用DOM节点
与其他js框架的关联
1.借鉴Angular的模板和数据绑定技术
2.借鉴React的组件化和虚拟DOM技术
市场上和vue并行的三大语言框架为
# React
它有一定程度的主张，它的主张主要是函数式编程的理念，比如说，你需要知道什么是副作用，什么是纯函数，如何隔离副作用。它的侵入性看似没有Angular那么强，主要因为它是软性侵入。
# Angular
必须 使用它的模块机制
必须使用它的依赖注入
必须使用它的特殊形式定义组件
所以Angular是带有比较强的排它性的，如果你的应用不是从头开始，而是要不断考虑是否跟其他东西集成
# vue渐进式框架
主张就是只负责自己的事情,Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合,在不同层次可以使用不同的概念
# vue周边库
vue-cli: vue 脚手架
vue-resource
axios
vue-router: 路由
vuex: 状态管理
element-ui: 基于 vue 的 UI 组件库(PC 端
# 初始vue
# vue目录简介
vue.config.js：配置webpack文件(包括配置跨域,请求接口,第三插件配置,rule配置)
Package.json
scripts: 配置启动命令,打包命令,eslint校验代码命令
browserslist: 浏览器适配配置
devDependencies,dependencies:项目node-modules大版本的限制
node-modules大版本的限制
^: 最大兼容版本
~:大约在这个版本上下就行
package-lockjson：约束每个node-modules版本下的其他依赖的固定版本
babel.config.js:babel插件设置
.gitignore:忽略文件
Public: 公共入口文件和公共配置配置
src 放置组件和axios配置
Assets -- 放置图片.img,css,js
components：放置其他组件所需要的公共组件
router ：放置其他组件所需要的公共组件
Views-- 放置页面的地方
Home
App.vue 入口的总文件
mainjs 实例化vue挂载
Utils-- 所有封装axios,封装token,封装公共方法-----工具类文件
# vue的语法
1、插值语法{{}}
2、动态绑定v-bind()
3、条件渲染：v-if
概念：控制dom元素的创建和销毁，实现渲染和更新页面
特点：如果没有v-else的存在，会在dom元素被删除的地方，添加一个标识，在下一次进行重新渲染的时候，优先寻找有标识的地方，尽量减少dom的循环和查找
4、v-for
key：作用为了防止dom元素的重复渲染，如果以index为key的话，会造成页面多次渲染和渲染不同
5、v-show
1)通过添加或者移除 display: none样式进行控制dom元素的显示与隐藏
2)diff算法对比节点: 级节点对比,确认和获取每个节点通过kev标识来进行对比



