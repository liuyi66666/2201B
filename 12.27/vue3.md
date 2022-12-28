# vue3

# vite为什么是下一代的新型构建工具
一个开发服务器，它基于原生ES模块 提供了丰富的内建功能，速度快模块热更新（HMR）。
一套构建指令，它使用Rollup打包代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源.
Vite 提供了一套原生ESM的HMR API。 具有HMR功能的框架可以利用该API提供即时、准确的更新，而无需重新加载页面或清除应用程序状态。Vite 内置了HMR到Vue.js单文件组件（SFC）和React Fast Refresh 中。

# vite 和webpack区别在哪里
webpack是一个JavaScript应用程序的静态模块打包工具，它会对整个应用程序进行依赖关系图构建。
vite是构建工具的高阶封装，使用简单，快（开发的时候感觉没有编译过程），便于扩展。而他集成的esbuild(Go 编写) 预构建依赖，比node快 10-100 倍。
和webpack的区别：

1）关注层级不同
vite关注的层级更高：vite是 high level api，关注的是如何快速方便的搭建项目，相比webpack，减少了很多配置量。
webpack关注的层级更低：webpack是low level api，因为webpack更关注的是各种功能的实现，重点放在构建上。

2）vite自己不包含编译能力。
它本身并不参与编译，它的编译能力只是集成了rollup和ESbuild的功能.

3）启动项目vite更快，可以说是超级快。
对比webpack在dev-serve的时候，会提交所有编译的文件，而vite在dev-serve的时候利用了浏览器的native ES module功能，在浏览器请求对应的url时才提供文件，实现了根据路由的懒加载，所以启动的时候是超快的。

4）vite的热更新更快。
对比webpack的热更新，热更新时，把改动过模块的相关依赖模块全部编译一次。而vite热更新时，仅让浏览器重新请求改动过的模块。
现在公司项目从webpack过渡到vite,还在不断摸索爬坑中，虽然目前vite的生态不如webpack丰富，且实用的开发者也不及webpack。
但是不可否认的是，相比于webpack, vite非常适合项目的开发，webpack适合工具的开发。

# vue3的优势在哪里
1. 响应系统的变动
   由原来的 Object.defineProperty 的 getter 和 setter，改变成为了 ES6 Proxy 作为其观察机制。
   Proxy 的优势：速度加倍，节省了⼀半的内存开销。
2. 虚拟 DOM 重写（Virtual DOM Rewrite）
   用更有效的代码来创建虚拟节点。
3. 组件渲染的优化（优化插槽⽣成）
   Vue2 当中在⽗组件渲染同时，⼦组件也会渲染。 Vue3 就可以单独渲染⽗组件、⼦组件。
总体来说：1. 更快 2. 更⼩ 3. 更容易维护 4. 更加友好 5. 更容易使⽤

# vue2的优势在哪里
1.简单易学：Vue是由国人开发的
2.Vue是轻量级框架，只关注视图层，是一个构建数据的视图集合，大小只有几十kb
3.双向数据绑定：保留了angular的特点，在数据操作方面更为简单；
4.组件化：数据保留react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；
5.视图，数据，结构分离，这使得数据变得更为简单，不需要进行逻辑代码修改，只需要操作数据就可以完成相关操作
6.虚拟DOM：dom操作是一个非常消耗性能的操作，不再使用原生的dom操作节点，极大的解放了dom操作，但具体的操作还是dom不过是换了另一个方式
7.运行速度更快:相比较react而言，操作虚拟dom，在性能上vue存在很大的优势

# vue2和vue3的区别
1. 双向数据绑定原理发生了改变，使用 proxy 替换 Object.defineProperty,使用 Proxy 的优势：
    可直接监听数组类型的数据变化
    监听的目标为对象本身，不需要像 Object.defineProperty 一样遍历每个属性，有一定的性能提升
    可直接实现对象属性的新增/删除
2. 默认使用懒加载
   在 2.x 版本里。不管数据多大，都会在一开始就为其创建观察者，在数据很大时，就会造成性能的问题。在 3.x 中，只会对渲染出来的数据创建观察者，而且 3.x 的观察者更高效。
3. 3.0 新加入了 TypeScript 以及 PWA 支持
4. 重构 Virtual DOM
    模板编译时的优化，将一些静态节点编译成常量
   Slot 优化，将 slot 编译为 lazy 函数，将 slot 的渲染的决定权交给子组织
5. 生命周期有了一定的区别
   Vue2--------------vue3
   beforeCreate -> setup() 开始创建组件之前，创建的是 data 和 method
   created -> setup()
   beforeMount -> onBeforeMount 组件挂载到节点上之前执行的函数。
   mounted -> onMounted 组件挂载完成后执行的函数
   beforeUpdate -> onBeforeUpdate 组件更新之前执行的函数。
   updated -> onUpdated 组件更新完成之后执行的函数。
   beforeDestroy -> onBeforeUnmount 组件挂载到节点上之前执行的函数。
   destroyed -> onUnmounted 组件卸载之前执行的函数。
   activated -> onActivated 组件卸载完成后执行的函数
   deactivated -> onDeactivated

# 拉开序幕的setup
1. 理解: Vule3.0中一个新的配置项，值为一个函数
2. setup是所有Composition API (组合API)“ 表演的舞台”。
3. 组件中所用到的: 数据、方法等等，均要配置在setup中
4. setup函数的两种返回值:
   1.若返回一个对象，则对象中的属性、方法,在模板中均可以直接使用。 (重点关注!)
   2.若返回一个渲染函数: 则可以自定义染内容。 (了解),要求是讲h的染函数返回去
5. 注意点:
   1.尽量不要与Vue2.x配置混用
    Vue2.x配最(data、methos、computed...) 中可以访问到setup中的属性、方法
    但在setup中不能访问到Vue2.x配置 (data、methos、computed...) ，没有this
    如果有重名,setup优先。
   2.setup不能是一个async函数，因为返回值不再是return的对象,而是promise, 模板看不到return对象中的属性。 (后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合)

# ref函数
```<input ref="xxxx”></input>```
作用: 定义一个响应式的数据
语法: const xxx = ref(initValue)
  创建一个包含响应式数据的引用对象 (reference对象，简称ref对象)
  JS中操作数据: xxx.value
  模板中读取数据: 不需要.value，直接: <div>{{xxx}}</div>
备注:
  接收的数据可以是: 基本类型、也可以是对象类型
  基本类型的数据: 响应式依然是靠 Object.defineProperty() 的 get 与 set 完成的。
  对象类型的数据:内部“求助”了Vue3.0中的一个新函数-- reactive 函数。原理是es6的新方式,proxy
注释理解:
  ref包裹的数据最终为对象,是refimpl,拆分开来说,即为reference(用),implement(实现),简称: 引用对象 引用的实现的对象(Reflmpl)
注意点: 当vue3渲染的时候检测到你是用ref包裹,自动将value解析出来

# reactive函数(reactive响应式)
作用: 定义一个对象类型的响应式数据 (基本类型不要用它，要用 ref 函数)
语法: const 代理对象= reactive(源对象)接收一个对象或数组)，返回一个代理对象 (Proxy的实例对象，简称proxy对象)。
reactive定义的响应式数据是“深层次的”。
内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

#  setup、ref以及reactive的区别
1. setup实现不了数据的双向绑定，动态变化
   vue3中实现响应式数据的方法是就是使用ref和reactive，所谓响应式就是界面和数据同步，能实现实时更新
2. reactive的参数必须是一个对象，包括json数据和数组都可以，否则不具有响应式
   如果给reactive传递了其他对象（如时间对象），默认情况下修改对象界面不会自动更新，如果想更新，可以通过给对象重新赋值来解决
3. ref
   既然有了reactive，为何还要ref呢？当我们只想让某个变量实现响应式的时候，采用reactive就会比较麻烦，因此vue3提供了ref方法进行简单值的监听，但并不是说ref只能传入简单值，他的底层是reactive，所以reactive有的，他都有。还是那句老话：
​ref本质也是reactive，ref(obj)等价于reactive({value: obj})

# 选项api和组合api的优缺点和不同
① 选项 API
        什么是选项 API : 在 vue2.x 项目中使用的就是 选项API 写法
        代码风格：date选项写数据，methods选项写函数，一个功能逻辑的代码分散
        优点：易于学习和使用，写代码的位置已经约定好了
        缺点：代码组织性差，相似的逻辑代码不便于复用，逻辑复杂代码多了不好阅读。
        虽然提供了 mixins 用来封装逻辑，但是出现数据函数覆盖的概率很大，不好维护

② 组合 API
        什么是组合 API : 在 vue3 中使用的就是 组合API 写法
        代码风格：一个功能逻辑的代码组织在一起（包括数据，函数、、、）
        优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护
        缺点：需要有良好的代码组织能力和拆分逻辑能力 （在 vue3 中也可以支持 vue2 选项API 写法）

③ 选项式和组合式 API 的关系
        组合式 API 的目的是增强，不是取代选项式 API , vue3 对两种 API 都支持
        简单的场景使用选项式 API 更加简单方便
        需要强烈支持 TS 的项目首选组合式 API
        需要大量逻辑复用的场景首选组合式 API
        伴随着新到的vue3，我们编写组件的书写方式也发生了变化。
        除了底层的更新，编写方式的改变 或许才是我们最能直观感受到的。
        其实就是vue3多了一种名为组合式api(composables api)的写法，相对应的式传统选项式api(options api)
        组合式api简单来说就是使用setup方式编写组件
# 选项api和组合api
- Options Api 选项
  在一个对象中包含了各种 data methods computed 等组件选项 这种叫做选项 api
  A 同⼀个功能逻辑的代码被拆分到不同选项 ；（使⽤ mixin 重⽤公⽤代码）也有问题：命名冲突，数据来源不清晰；
- composition Api 组合 api
  vue3 新增的⼀组 api，它是基于函数的 api，把所有的数据 方法等都放在 setup 函数里， 解决在⼤型项⽬中，选项 api 不好拆分和重⽤的问题。





























# vite为什么是下一代的新型构建工具
一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能 ，如速度快到惊人的 模块热更新（HMR） 。
一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。
Vite（法语意思是 “快”，发音为 /vit/，类似 veet）是一种全新的前端构建工具。你可以把它理解为一个开箱即用的开发服务器 + 打包工具的组合，但是更轻更快。Vite 利用浏览器原生的 ES 模块支持和用编译到原生的语言开发的工具（如 esbuild）来提供一个快速且现代的开发体验。

# vite和webpack区别在哪里
webpack会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。 而vite是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。 由于现代浏览器本身就支持ES Module，会自动向依赖的Module发出请求。 vite充分利用这一点，将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像webpack那样进行打包合并。

# v3的优势在哪里
源代码体积的优化
重写了虚拟 dom

响应式系统的升级
用 Proxy 和 Reflect 来代替 vue2 中的 Object.definepeoperty()方法来重写响应式

vue3 中可以监听动态新增的属性

vue3 中可以监听删除的属性

vue3 中可以监听数组的索引和 length 属性

代码编译优化
使用了 组合 API 来代替 vue2 中的 Options API

组件内不需要根节点了，使用 fragment(代码片段)代替了，fragment(代码片段)不会在页面显示

vue3 中标记和提升所有的静态根节点，diff 的时候只需要对比动态节点内容

# v2的优势
轻量级框架

简单易学

双向数据绑定

组件化

视图,数据,结构分离

虚拟DOM

v3和v2的区别在哪里
响应式原理的不同

生命周期的不同

.默认项目目录结构的不同

vue3对全局API的优化

使用Proxy替代了defineProperty

 