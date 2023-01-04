# vue 简介

# 介绍

vue 是一套用来动态构建用户界面的渐进式 JavaScript 框架 1.构建用户界面：把数据通过某种办法变成用户界面 2.渐进式：vue 可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应该可以引入各式各样的 vue
作者：尤雨溪

# vue 的特点

1.遵循 MVVM 模式
2.编码简洁，体积小，运行效率高，适合移动/pc 端开发
3.它本身只关注 Ul,也可以引入其他第三方库开发项目 
4.采用组件化模式，提高代码复用率，且代码更好的维护 
5.声明式编码，让编码人员无需直接操作 DOM，提高效率 
6.使用虚拟 DOM 和 Diff 算法，尽量复用 DOM 节点
与其他 js 框架的关联 
1.借鉴 Angular 的模板和数据绑定技术 
2.借鉴 React 的组件化和虚拟 DOM 技术
市场上和 vue 并行的三大语言框架为

# React

它有一定程度的主张，它的主张主要是函数式编程的理念，比如说，你需要知道什么是副作用，什么是纯函数，如何隔离副作用。它的侵入性看似没有 Angular 那么强，主要因为它是软性侵入。

# Angular

必须 使用它的模块机制
必须使用它的依赖注入
必须使用它的特殊形式定义组件
所以 Angular 是带有比较强的排它性的，如果你的应用不是从头开始，而是要不断考虑是否跟其他东西集成

# vue 渐进式框架

主张就是只负责自己的事情,Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合,在不同层次可以使用不同的概念

# vue 周边库

vue-cli: vue 脚手架
vue-resource
axios
vue-router: 路由
vuex: 状态管理
element-ui: 基于 vue 的 UI 组件库(PC 端

# 初始 vue

# vue 目录简介

vue.config.js：配置 webpack 文件(包括配置跨域,请求接口,第三插件配置,rule 配置)
Package.json
scripts: 配置启动命令,打包命令,eslint 校验代码命令
browserslist: 浏览器适配配置
devDependencies,dependencies:项目 node-modules 大版本的限制
node-modules 大版本的限制
^: 最大兼容版本
~:大约在这个版本上下就行
package-lockjson：约束每个 node-modules 版本下的其他依赖的固定版本
babel.config.js:babel 插件设置
.gitignore:忽略文件
Public: 公共入口文件和公共配置配置
src 放置组件和 axios 配置
Assets -- 放置图片.img,css,js
components：放置其他组件所需要的公共组件
router ：放置其他组件所需要的公共组件
Views-- 放置页面的地方
Home
App.vue 入口的总文件
mainjs 实例化 vue 挂载
Utils-- 所有封装 axios,封装 token,封装公共方法-----工具类文件

# vue 的语法

1、插值语法{{}}
2、动态绑定 v-bind()
3、条件渲染：v-if
概念：控制 dom 元素的创建和销毁，实现渲染和更新页面
特点：如果没有 v-else 的存在，会在 dom 元素被删除的地方，添加一个标识，在下一次进行重新渲染的时候，优先寻找有标识的地方，尽量减少 dom 的循环和查找
4、v-for
key：作用为了防止 dom 元素的重复渲染，如果以 index 为 key 的话，会造成页面多次渲染和渲染不同
5、v-show 1)通过添加或者移除 display: none 样式进行控制 dom 元素的显示与隐藏
2)diff 算法对比节点: 级节点对比,确认和获取每个节点通过 kev 标识来进行对比

# Vue 模板语法有 2 大类

插值语法:
        功能:用于解析标签体内容。
        写法: {{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。

指令语法:
        功能:用于解析标签(包括: 标签属性、标签体内容、绑定事件.....)
        举例: v-bind:href="xxx”或 简写为 :hrf="xxx”，xxx同样要写is表达式且可以直接读取到data中的所有属性。
        备注: Vue中有很多的指令，且形式都是: V-????，此处我们只是拿v-bind举个例子

# data 与 el 的 2 种写法

el有2种写法
        (1).new Vue时候配置el属性。
        (2).先创建Vue实例，随后再通过vm.$mount('#root')指定el的值

data有2种写法
        (1).对象式
        (2).函数式
        如何选择:目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。因为组件最终是加载到一起,需要闭包来保护变量不被污染

    一个重要的原则:
        由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

# vue 中的 MVVM

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

基本原理:
        通过0bject.defineProperty()把data对象中所有属性添加到vm上。
        为每一个添加到vm上的属性，都指定一个getter/setter。
        在getter/setter内部去操作 (读/写) data中对应的属性

# 事件的基本使用:

1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名;
2.事件的回调需要配置在methods对象中，最终会在xm上;
3.methods中配置的函数，不要用箭头函数! 否则this就不是vm了，
4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象
5.@click="demo”和 @click="demo($event)” 效果一致，但后者可以传参;

# Vue 中的事件修饰符:

1.prevent: 阻止默认事件 (常用)
2.stop: 阻止事件冒泡 (常用) ;
            当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上其他祖先上的处理程序
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

# computed 计算属性

1.定义:要用的属性不存在，要通过已有属性计算得来。 2.原理: 底层借助了 0bjcet.defineproperty 方法提供的 getter 和 setter。
特点：
1）computed 具有缓存性
2）computed 是同步的，不能进行异步操作
3）数据和属性来源于 data 数据中，具有多对一的关系

## 3.get 函数什么时候执行?

(1).初次读取时会执行一次。
(2)当依赖的数据发生改变时会被再次调用。 4.优势: 
与 methods 实现相比，内部有缓存机制 (复用) ，效率更高，调试方便 
5.备注: 1.计算属性最终会出现在 vm 上，直接读取使用即可。 
2.如果计算属性要被修改，那必须写 set 函数去响应修改，且 set 中要引起计算时依赖的数据发生改变。

# 深度监视

(1)Vue 中的 vatch 默认不监测对象内部值的改变 (一层)
(2).配置 deep;true 可以监测对象内部值改变 (多层)
(3).一进页面就可以立即监听: immediate:true
(4).没有缓存，且是异步的
备注：
(1).Vue 官身可以临测对象丙部值的改变，但 Vue 提供的 watch 默认不可以!
(2).使 watch 时根据数据的具体结构，决定是否采用深度监视.

# 监视属性 watch:

1.定义:监听的属性必须要在 data 中存在或定义吧 
2.原理: 底层借助了 0bjcet.defineproperty 方法提供的 getter 和 setter。 3.监视的两种写法:
(1).new Vue 时传入 watch 配置
(2).通过 vm.5watch 监视 
4.特点:
1).当被监视的属性变化时，回调函数自动调用，进行相关操作
2).监视的属性必须存在，才能进行监视!!
3).watch 是异步的 
5.可以配置两个属性 immediate(一进页面立即监听),deep(深度监听)属性

# 绑定样式

class样式
        写法:cLass="xxx” xxx可以是字符串、对象、数组。
        字符串写法适角于:类名不确定，要动态获取。
        对象写法适用于:要绑定多个样式，个数不确定，名字也不确定。
        数组写法适用于:要绑定多个样式，个数确定，名字也确定，但不确定用不用。

style样式
        :style="{fontSize: xxx}"其中xxx是动态值。
        :style="[a,b]“其中a、b是样式对象。

# v-for 指令:
1.用于展示列表数据
2.语法: v-for="(item，index) in xxx ;key="yyy'
3.可遍历:数组、对象、字符串 (用的很少)、指定次数 (用的很少)

# 面试题: react、vue 中的 key 有什么作用? (key 的内部原理)

1，虚拟DOM中key的作用:
        key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据[新数据]生成[新的虚拟DOM]
        随后Vue进行[新虚拟DOM] 与[旧虚拟DOM] 的差异比较，

2.对比规则:
        (1).旧虚拟DOM中找到了与新虚拟DOM相同的key:
            若虚拟DOM中内容没变，直接使用之前的真实DOM!
            若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

        (2).旧虚拟DOM中未找到与新虚拟DOM相同的key
            创建新的真实DOM，随后渲染到到页面

3，用index作为key可能会引发的问题:
        1.若对数据进行:逆序添加、逆序删除等破坏顺序操作:
            会产生没有必要的真实DOM更新 ==> 界面效果没问题，但效率低。

        2.如果结构中还包含输入类的DOM:
            会产生错误DOM更新 => 界面有问题。

4，开发中如何选择key?:
        1.最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。
        2.如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

# Vue监视数据的原理:

1、vue 会监视 data 中所有层次的数据
2，如何监测对象中的数据?
通过 setter 实现监视，且要在 new Vue 时就传入要监测的数据。
(1)对象中后追加的属性，Vue 默认不做响应式处理
(2)如需给后添加的属性做响应式，请使用如下 API:
Vue.set(target，propertyName/index，value) 或
vm.$set(target，propertyName/index， value)
3.如何监测数组中的数据?
通过包裹数组更新元素的方法实现，本质就是做了两件事:
(1).调用原生对应的方法对数组进行更新。
(2).重新解析模板，进而更新页面。
4.在Vue修改数组中的某个元素一定要用如下方法:
1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
2.Vue.set()或 vm.sset()
特别注意: Vue.set()和 vm,$set() 不能给 vm 或 vm 的根数据对象 添加属性!!!

# v-model 的三个修饰符:
    lazy:失去焦点再收集数据
    number: 输入字符串转为有效的数字
    trim: 输入首尾空格过滤

# 过滤器
过滤器分为两种:
        全局过滤器
        局部过滤器
过滤器
        定义:对要显示的数据进行特定格式化后再显示 (适用于一些简单逻辑的处理)。
        语法:
            1.注册过滤器: Vue.filter(name,callback) 或 new Vue[filters:}
            2.使用过滤器:{{xxx过滤器名}} 或 v-bind:属性 =“xxx过滤器名"

        备注:
            1.过滤器也可以接收额外参数、多个过滤器也可以串联
            2.并没有改变原本的数据，是产生新的对应的数据

# v-cloak 指令 (没有值) :
 1.本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉 v-cloak 属性。
  2.使用 css 配合 v-cloak 可以解决网速慢时页面展示出{{xxx}}的问题。

# v-pre 指令: 1.跳过其所在节点的编译过程。
 2.可利用它跳过:没有使用指令语法、没有使用插值语法的节点，会加快编译。

# 自定义指令总结:

定义语法:
        (1).局部指令:new  Vue({directives:{指令名:配置对象}}）
        (2).全局指令:Vue.directive(指令名,配置对象)

配置对象中常用的3个回调:
        (1).bind: 指令与元素成功绑定时调用。
        (2).inserted: 指令所在元素被插入页面时调用。
        (3).update: 指令所在模板结构被重新解析时调用.

备注:
        1.指令定义时不加v-，但使用时要加v-;
        2.指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。

# Vue 中使用组件的三大步骤:

定义组件(创建组件)
        使用Vue.extend(options)创建,其中options和new Vue(options)时传入的那个options几乎-样，但也有点区别;
            1.el不要写，为什么? 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器.
            2.data必须写成函数，为什么? - 避免组件被复用时，数据存在引用关系。

        备注: 使用template可以配置组件结构。

注册组件
        1.局部注册: 靠new Vue的时候传入components选项
        2.全局注册: 靠Vue.component('组件名,组件)

使用组件(写组件标签)
        <school></school>

# 几个注意点:

1.关于组件名:
        一个单词组成
            第一种写法(首字母小写): school
            第二种写法(首字母大写): School

        多个单词组成:
            第一种写法(kebab-case命名): my-school
            第二种写法(CamelCase命名): MySchool (需要Vue脚手架支持)

        备注:
            (1).组件名尽可能更避HTML中已有的元素名称，例如: h2、H2都不行
            (2)可以使用name配置项指定组件在开发者工具中呈现的名字。


2.关于组件标签:
        第一种写法:<school></school>
        第二种写法:<school/>
        备注:不用使用脚手架时，<school/>会导致后续组件不能渲染。

3.一个简写方式:
        const school = Vue.extend(options) 可简写为: const school = options

# 收集表单数据：

若：<input type="text" />,则 v-model 收集的是 value 值，用户输入的就是 value。

若：<input type="radio" />,则 v-model 收集的是 value 值，且要给标签配置 value 值。

若：<input type="checkbox" />,没有配置 input 的 value 属性，那么收集的就是 checked（勾选 or 未勾选， 是布尔值）

2.配置 input 的 value 属性：
（1）v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选， 是布尔值）

（2）v-model 的初始值是数组，那么收集的就是 value 组成的数组。

# data为什么是一个函数,什么情况可以用对象,什么情况下用函数
1、如果data是一个函数的话，这样每复用一次组件，就会返回一份新的data(类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据)
Object是引用数据类型，里面保存的是内存地址，单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果。
或者是
（因为组件是可以复用的, JS里对象是引用关系, 如果组件data是一个对象, 那么在子组件中的data属性值会互相污染, 产生副作用。
所以一个组件的data选项必须是一个函数， 因此每个实例可以维护一份被返回对象的独立拷贝。new Vue的实例是不会被复用的，因此不存在以上问题。）



# 什么情况可以用对象
1、组件复用时所有组件实例都会共享 data，如果 data 是对象的话，就会造成一个组件修改 data 以后会影响到其他所有组件，所以需要将 data 写成函数，每次用到就调用一次函数获得新的数据。
2、当我们使用 new Vue() 的方式的时候，无论我们将 data 设置为对象还是函数都是可以的，因为 new Vue() 的方式是生成一个根组件，该组件不会复用，也就不存在共享 data 的情况了

# ES6 新增特性

> 1. 块级作用域(let,const)
> 2. 定义类的语法糖(class)
> 3. 基本数据类型(Symbol)
> 4. 变量的解构赋值
> 5. 函数参数允许设置默认值，引入了 rest （扩展运算符）参数，新增了箭头函数
> 6. 数组新增了一些 API，如 isArray / from / of 方法;数组实例新增了entries()，keys() 和 values() 等方法
> 7. 对象和数组新增了扩展运算符
> 8. ES6 新增了模块化(import/export)
> 9. ES6 新增了 Set 和 Map 数据结构
> 10. ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例
> 11. ES6 新增了生成器(Generator)和遍历器(Iterator)
> 12. async await
> 13. promise
> 14. fro of  fro in

# vue中组件的生命周期，每个生命周期做了什么
1.beforeCreate 在实例初始化之后，数据观测(data observer) 之前被调用。
2.created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，watch/event 事件回调。这里没有$el
3.beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。
4.mounted el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
5.beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
6.updated 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
7.beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。
8.destroyed Vue 实例销毁后调用。调用后， Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用

# 要掌握每个生命周期内部可以做什么事

1.created 实例已经创建完成，因为它是最早触发的原因可以进行一些数据，资源的请求。
2.mounted 实例已经挂载完成，可以进行一些DOM操作
3.beforeUpdate 可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
4.updated 可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
5.destroyed 可以执行一些优化操作,清空定时器，解除绑定事件



# vue2生命周期
创建阶段
- beforeCreate 实例创建之前 这个时候什么都没有 data methods 都不能用 也没有 this
- created 创建之后 也是最早的可以使用 data 和 methods 的钩子函数 这个时候有 this 了
- beforeMount 组件挂载之前
- mounted 组件挂载之后
  这个时候能拿到 dom 节点使用
   运行阶段 只要修改 data 就会触发
- beforeUpdate 数据变了 视图还没变
- updated 数据变了 视图也变了
销毁阶段
- beforeDestory 组件销毁之前 是最后一个能使用 data 和 methods 的钩子函数
- destoryed 组件销毁之后

除了这八个 还有 三个
如果用 keep-alive 缓存了组件 就会有 actived deactived 这两个钩子函数
activated 组件激活
deactivated 组件停用
errorCaptured 子组件出错的时候会触发这个钩子函数
     
# vuex 的理解

vuex 是 vue 的状态管理工具 管理项目中的公共数据 能够在所有的组件中使用
一共有五大核心
state 存放公共数据的地方 通过 this.$store.state.xxx调用
mutations 修改 state 的地方 只有这里能修改 通过this.$store.commit 调用
getters 相当于是之前的计算属性 通过 this.$store.getters 调用
actions 执行异步操作的地方 通过 this.$store.dispatch 调用
modules 模块化

vuex 缺点就是刷新数据会丢失 我们可以保存本地存储 或者 安装 vuex 持久化插件 vuex-persist 去实现自动本地存储

## vuex的执行机制
 我在项⽬当中如果要改变 state 的状态,我们⼀般是在组件⾥⾯调⽤ this.$store.dispatch ⽅式来触发 actions ⾥⾯的⽅法,在 actions
⾥⾯的⽅法通过 commit 来调⽤ mutations ⾥⾯定义的⽅法来改变 state,同时这也是 vuex 的执⾏机制

# 路由的模式及区别
vue 的路由模式,vue 的路由模式⼀共有两种,分别是哈希和 history.他们的区别是 hash 模式不会包含在 http 请求当中,并且 hash 不会重新加载⻚⾯,⽽使⽤ history 模式的话,如果前端的 url 和后端发起请求的 url 不⼀致的话,会报 404 错误,所以使⽤ history 模块的话我们需要和后端进⾏配合.
history 的原理就是利⽤html5 新增的两个特性⽅法,分别是 pushState 和 replaceState 来完成的. 以上就是我对 vue 路由模式的理解
# vue 的路由守卫
导航守卫一共有三种
全局的守卫 守卫所有的页面
beforeEach 路由前置守卫
beforeResolve 路由解析之前
afterEach 路由离开

全局守卫 beforeEach 和 beforeResolve  
他们两个都会在路由跳转前就执行 参数都是 to from next
他们两个的区别 执行的时机不一样 beforeEach 是在路由规则被循环之前执行
beforResolve 是在组件被解析之后调用 beforeEach 要比 beforResolve 先执行

组件守卫 守卫单个组件
beforeRouteEnter 路由进入
beforeRouteUpdate 路由更新
beforeRouteLeave 路由离开

独享守卫 守卫单个页面
beforeEnter 路由进入之前

# v-if和v-show的区别
⾸先 v-if 和 v-show 都是控制元素的显示与隐藏, 不过 v-if 控制元素的显示和隐藏的时候会删除对应的 dom 元素,当每⼀个显示的时候,都会重新创建 dom 和渲染. ⽽ v-show 则是通过 css 的 display:none和 display:block 来控制元素的显示与隐藏. v-if ⽐较耗费性能,所以我们涉及到频繁的显示隐藏操作我们建议使⽤ v-show,
如果不是频繁操作的话,我们可以 v-if在项⽬中我会经常使⽤ v-if 和 v-show,⽐如我们在搜索功能的时候,他有⼀个历史记录,这个时候我们根据是否有搜索的结果来判
断历史记录的显示与隐藏,这块我就可以使⽤ v-if ,当然⽤ v-show 也可以. 以上就是我对 v-if 和 v-show 的理解.
# v-if和v-for谁的优先级高？
在vue2中v-for 的优先级⾼，vue3则恰好相反. 因为 v-for 的时候我们才开始渲染 dom 元素,这个 v-if 还⽆法进⾏判断.
v-for 和 v-if 不能同时使⽤,我们可以通过标签,⽐如 div 或者 template 标签来进⾏包裹,把 v-if 写到包裹的标签上⾯(写到 v-for 外⾯)
# vue组件通信（八种）
1. 父传子
- 首先在使用子组件的标签上 通过自定义属性传递变量 在子组件中 通过 props 接受
  在接收的时候有两种接收方式 数组形式 和 对象形式 对象形式可以规定传来的变量的数据类型（type）默认值（default）以及是否必填（required）

2. 子传父
首先在使用子组件的标签上定义一个自定义事件 在子组件里通过 this.$emit 去调用这个自定义事件 $emit 方法的第一个参数是自定义事件的名字 第二个参数是就是子组件要传递给父组件的变量 最后在父组件接收使用就可以了

3. 兄弟组件
- 利用中央事件总线 eventbus
  在 main.js 中 把一个空的 vue 实例挂载在 vue 的原型上起名叫$bus
  传数据的时候用this.$bus.$emit传 
  在要接受数据的子组件 在 created钩子函数中 用$on 方法接收

4. 利用 vuex 进行组件通信 把公共的数据存在 vuex 里就可以实现 组件之间都能使用这个数据了

5. 其实 v-model 也能实现组件通信 因为 v-model 就是 :value 和 @input 事件的合写 如果在一个子组件上使用 v-model 也能实现父子组件之间的通信

6. $attr+$listener
   如果父组件 A 下面有子组件 B 子组件 B 下面又有子组件 C 如果 a 组件的变量和方法想要传给组件 C 的时候 就用到这个方法 适用于多级组件传值
   在 B 组件中给 C 组件绑定 v-bind="$attrs" v-on="$listeners" 然后在 C 组件中就可以直接使用 a 传来的属性和方法了
   （简单来说：$attrs与$listeners 是两个对象，$attrs 里存放的是父组件中绑定的非 Props 属性，$listeners 里存放的是父组件中绑定的非原生事件。）

7. provide 和 inject
   父组件通过 provide 提供变量 子组件中通过 inject 注入变量，不论嵌套了几层子组件 都能通过 inject 来调用 provide 的数据
这种写法传的数据是不响应的

8. $parent和$children
   在子组件内可以直接通过$parent对父组件进行操作，在父组件内可以直接通过$children 对子组件进行操作
   在父组件调用子组件时候要加下标也就是$children 是一个数组 因为可以有很多个子组件

9. 也能用本地存储 来 完成组件通信

# vue中data的返回值为什是个函数
如果data是一个函数的话，这样每复用一次组件，就会返回一份新的data(类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据)
Object是引用数据类型，里面保存的是内存地址，单纯的写成对象形式，就使得所有组件实例共用了一份data，就会造成一个变了全都会变的结果

# vue中data发生变化,视图不更新如何解决
原因：通过下标的形式修改数组,修改的内容并没有被object.definproty添加getter和setter属性,没有变成响应式的数据,所以无法被检测到
1、Vue.set(target, 下标, 内容) // 全局的使用方法
   this.$set(和上面一样)
2、this.$focusUpdated 强制更新视图
3、调用数组的方法: push, unshift,pop
#
相同点：
1）都是本地存储
2）只存字符串，数组/对象通过JSON.stringify([]||{}) 存储

不同点：
1)localStorage 存储大小20M， sessionStorage 存储大小为5M
2) localStrrage: 永久存储(只要浏览器不清空缓存) ,sessionStorage: 回话存储(浏览器窗口关掉，存储消失)
3) 作用域不同：localStrrage:在同源窗口下是可以共享的， sessionStorage:不同窗口不进行共享
# vue跨域如何解决
# keep-alive的理解
keep-alive 是 vue 内置的⼀个组件，⽽这个组件的作⽤就是能够缓存不活动的组件，我们能够知道，⼀般情况下，组件进⾏切
换的时候，默认会进⾏销毁，如果有需求，某个组件切换后不进⾏销毁，⽽是保存之前的状态，⽐如说刚刚填好的表单数
据。那么就可以利⽤ keep-alive 来实现
被缓存的组件 切换的时候不会触发创建和销毁的钩子函数 而是会触发跟 keep-alive 相关的 activated（激活） deactivated（停用）这两个钩子函数

keep-alive 标签 有 include 属性和 exclude 属性
include 属性 定义了要缓存谁
exclude 属性 定义了不缓存谁
还可以利用 路由的 meta 信息去规定缓存谁不缓存谁

我在写项目的过程中 可以使用 keep-alive 缓存刚刚填好的表单数据 还可以记录页面滚动条的距离，离开再回来滚动条还在这个位置
