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

# Vue模板语法有2大类
    插值语法:
        功能:用于解析标签体内容。
        写法: {{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

    .指令语法:
        功能:用于解析标签(包括: 标签属性、标签体内容、绑定事件.....)
        举例: v-bind:href="xxx”或 简写为 :hrf="xxx”，xxx同样要写is表达式且可以直接读取到data中的所有属性。
        备注: Vue中有很多的指令，且形式都是: V-????，此处我们只是拿v-bind举个例子


# data与el的2种写法
    el有2种写法
        (1).new Vue时候配置el属性。
        (2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值

    data有2种写法
        (1).对象式
        (2).函数式
        如何选择:目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。因为组件最终是加载到一起,需要闭包来保护变量不被污染

    一个重要的原则:
        由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

#  vue中的MVVM
    MVVM模型
        M: 模型(Model) : data中的数据
        V:视图(View) :模板代码
        VM: 视图模型(ViewMode): Vue实例

    观察发现:
        1.data中所有的属性，最后都出现在了vm身上
        2.vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用

# Object.defineProperty
    enumerable: true， // 控制属性是否可以枚举，默认值是false
    枚举：循环遍历遍历不出来的属性
    writable: true，//控制属性是否可以被修改，默认值是false
    configurable:true，//控制属性是否可以被删除，默认值是false

# 数据代理
    Vue中的数据代理:
        通过一个对象代理对另一个对象中属性的操作 (读/写) 

    Vue中数据代理的好处:
        更加方便的操作作data中的数据

    .基本原理:
        通过0bject.defineProperty()把data对象中所有属性添加到vm上。
        为每一个添加到vm上的属性，都指定一个getter/setter。
        在getter/setter内部去操作 (读/写) data中对应的属性


# 事件的基本使用:
    1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名;
    2.事件的回调需要配置在methods对象中，最终会在xm上;
    3.methods中配置的函数，不要用箭头函数! 否则this就不是vm了，
    4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象
    5.@click="demo”和 @click="demo($event)” 效果一致，但后者可以传参;

# Vue中的事件修饰符:
    1.prevent: 阻止默认事件 (常用)
    2.stop: 阻止事件冒泡 (常用) ;
    3.once: 事件只触发一次 (常用) ;
    4.capture: 使用事件的捕获模式;
    捕获：事件处理的另一个阶段被称为“捕获 (capturing)"。它很少被用在实际开发中，但有时是有用的。
    DOM 事件标准描述了事件传播的3个阶段:
        1.捕获阶段 (Capturing phase)--事件 (从Window)向下走近元素。
        2.目标阶段 (Target phase)--事件到达目标元素。
        3.冒泡阶段 (Bubbling phase)-事件从元素上开始冒泡
    5.self: 只有event,target是当前操作的元素时才触发事件;
    6.passive:事件的默认行为立即执行，无需等待事件回调执行完毕;
    .Vue中常用的按键别名:
        回车 => enter
        删除 => delete (捕获“删除”和“退格”键)
        )退出 => esc
        空格 =>space
        换行 => tab (特殊，必须配合keydown去使用)
        上=>up
        下=> down
        左 => left
        右=>right

    Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case (短横线命名)
    系统修饰键 (用法特殊) : ctrl、alt、shift、meta
        (1).配合keyup使用: 按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发
        (2).配合keydown使用: 正常触发事件。

    也可以使用keyCode去指定具体的按键 (不推荐)
    Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

# 双向绑定的原理
    当把一公普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。这些getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够迫踪依赖，在 property 被访问和修改时通知变更，每个组件实例都对应一个watcher 实例，它会在组件演染的过程中把接触”过的数据 property 记录为依赖。之后当依额项的 setter 触发时，会通知 watcher，从而使它关联的组件从新渲染。





