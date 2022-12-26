###  vue3简介
2020年9月18日，Vue.js发布3.0版本，代号: One Piece (海贼王)
耗时2年多、2600+次提交、30+个RFC、600+次PR、99位贡献者
github上的tags地址: https://github.com/vuejs/vue-next/releases/tag/v3.0.0

### Vue3带来了什么
1. 性能的提升
   打包大小减少41%
   初次渲染快55%,更新渲染快133%
   内存减少54%
2. 源码的升级
   使用Proxy代替defineProperty实现响应式
   重写虚拟DOM的实现和Tree-Shaking
3. 拥抱TypeScript
   Vue3可以更好的支持TypeScript
4. 新的特性
⑴.Composition API (组合API)
   setup配置
   ref与reactive
   watch与watchEffect
   provide与inject
⑵.新的内置组件
   Fragment
   Teleport
   Suspense
⑶.其他改变
   新的生命周期钩子
   data 选项应始终被声明为一个函数
   移除keyCode支持作为 v-on 的修饰符


### vue3的目录简介
pajectName 
  -----node _modules 项目依赖包
  -----public  存放静态资源公共资源,不会被压缩合并
  -------favicon.ico  网站的显示图标
  -------index.hmtl  入口的html文件
  -----src  项目开发主要文件夹
      -----assets  静态文件.存放图片
      -----components  存放外部公共组件
      -----store  与vuex相关
      -----utils  存放公共方法
      -----App.vue  根组件
      -----main.ts  根入口文件
  -----router
      ------router.ts  路由组件
  -----.gitignore 用来配置那些文件不上传至git 
  -----index.html  根目录html
  -----babel.configjs
  -----jsconfig.json
  -----package.json  项目配置和包管理文件(项目依赖和技术)
  -----README.md  说明文档，项目主要运行
  -----vite.configjs  项目配置信息: 跨域proxy代理,以及各种插件


### vue3的优势
 vue 最主要的特点就是响应式机制、模板、以及对象式的组件声明语法，而 3.0 对这三部分都做了更改。
 性能更好
2.体积更小
3.更好的ts支持
4.更好的代码组织
5.更好的逻辑抽离
6.更多新的功能
7.组合式API
8.hooks思想的引入 


###  使用 vite 创建
官方文档: https://v3.cnvuejs.org/guide/installation.html#vite
vite官网: https://vitejs.cn
什么是vite?--新一代前端构建工具
优势如下:
  开发环境中，无需打包操作，可快速的冷启动
  轻量快速的热重载(HMR)
  真正的按需编译，不再等待整个应用编译完成
传统构建 与 vite构建对比图


### 拉开序幕的setup
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


### ref函数
```<input ref="xxxx”></input>```
作用: 定义一个响应式的数据
语法: const xxx = ref(initValue)
  创建一个包含响应式数据的引用对象 (reference对象，简称ref对象)
  JS中操作数据: xxx.value
  模板中读取数据: 不需要.value，直接: <div>{xxx}}</div>
备注:
  接收的数据可以是: 基本类型、也可以是对象类型
  基本类型的数据: 响应式依然是靠 Object.defineProperty() 的 get 与 set 完成的。
  对象类型的数据:内部“求助”了Vue3.0中的一个新函数-- reactive 函数。原理是es6的新方式,proxy
注释理解:
  ref包裹的数据最终为对象,是refimpl,拆分开来说,即为reference(用),implement(实现),简称: 引用对象 引用的实现的对象(Reflmpl)
注意点: 当vue3渲染的时候检测到你是用ref包裹,自动将value解析出来


### reactive函数(reactive响应式)
作用: 定义一个对象类型的响应式数据 (基本类型不要用它，要用 ref 函数)
语法: const 代理对象= reactive(源对象)接收一个对象或数组)，返回一个代理对象 (Proxy的实例对象，简称proxy对象)。
reactive定义的响应式数据是“深层次的”。
内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。
