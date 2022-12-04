- Vuex是什么

  - Vuex 是一个专为 Vue.js 应用程序开发的”状态管理模式” . 它采用集中式存储管理应用的所有组件的状态 .

- 市场上同类型的状态管理工具有

  - react

    - (1). Recoil[1]

    - (2). Mobx[2]

    - (3). XState[3]

    - (4). Redux (with hooks)[4]

    - (5). Context

  - vue
    - (1). vuex

  - vue3
    - (1). pinia

  - 状态管理工具 , 因为语言发展的历史 , react的问世早于vue , 所以很多状态管理工具都是为react服务的 , vuex是专门为Vue服务的，吸取了redux的单数据管理 , 去掉了redux的限制 , 更加适合vue . 所以vue选择了vuex,当然也能用其他的,但是会比vuex复杂很多 .

- 核心及使用

  - 1.state 存储数据 组件中使用 this.$store.state.

  - 2.mutations 对象里面是方法 可以直接操作state中的数据

    - 注意:

      - commit只能传一个参数 如果需要传递多个数据用复杂数据类型 比如 数组 对象  同步数据

      - 在组件中 this.$store.cormmit(“模块名/方法名”,参数)

  - 3.getters 是最state中的数据做逻辑处理 类似于计算属性

    - 在组件中 this.$store.getters.方法名

    - 在模块中同理: this.$store.getters.模块名.方法名

  - 4.actions 也是可以操作数据，但是不能直接操作数据 它调用mutations中的方法来操作的数据

    - actions中的方法是异步的 mutations中的方法是同步的

    - 在组件中异步修改数据:

      - 在组件中通过dispatch调用actions中的方法，在actions中调用mutations中的方法，在mutations中可以直接操作state中的数据

      - 在组件中 this.$store.dispatch(“模块名/方法名”,参数)

    - vuex中![img](https://api2.mubu.com/v3/document_image/b1ff1322-4936-4bb4-be27-ad5168a10c75-22187535.jpg)

    - 组件![img](https://api2.mubu.com/v3/document_image/7b2f7063-7e09-43ef-8f2f-b6d835291c24-22187535.jpg)

  - 5. modules 分模块存储

    - 将state分成模块存储

    - 在vuex中![img](https://api2.mubu.com/v3/document_image/957db175-3a81-409b-8c41-fe5ccd61feb6-22187535.jpg)

    - 在组件中的使用：

      

      - 组件的模块的数据     this.$store.state.user.

      - 组件中模块方法    this.$store.commit('方法名'，参数)

      - 组件中getters       this.$store.getters.

      - 组件中actions      this.$store.dispatch('方法名' , 参数)

- 5大核心

  - state
    - 状态,也可理解为是数组  (调用的时候会通过计算属性computed 把state return出去再用 )       this.$store.state

  - mutations
    - ⽤来修改state⾥⾯的数据,不过在mutations⾥⾯只能进⾏同步的操作         this.$store.commit

  - actions
    - 也可以去改变state的状态,不过在actions⾥⾯定义的⽅法可以进⾏异步操作        this.$store.dispatch

  - getters
    - ⽤来获取state⾥⾯的状态,且可以对state的数据进⾏处理之后在返回,类似于vue计算属性     this.$store.getters

  - modules
    - 进行模块化处理.,将多个状态抽离到对应js⽂件⾥,最后在modules进⾏合并,⽅便后期维护

  -  vuex的弊端
    - vuex的弊端,⽐如浏览器刷新的时候,vuex的数据会丢失,⼀般结合本地存储来解决

- vuex的运行原理

  - 在组件中通过dispatch调用actions中的方法 , 在actions方法中commits调用mutations中的方法 , 在mutations中的方法中可以直接操作state中的数据 , 只要state中的数据发生改变就会立刻响应到组件的视图上.(异步)

  - 在组件中通过commit调用mutations中的方法 , 在mutations中的方法中可以直接操作state中的数据 , 只要state中的数据发生改变就会立刻响应到组件的视图上 .(同步)

  - ![img](https://api2.mubu.com/v3/document_image/2c7fd969-2d6e-4cb2-97b6-b27551b37999-22187535.jpg)

- vuex的基本写法

  - 1.基础写法 :![img](https://api2.mubu.com/v3/document_image/3b3de4c9-2a51-4297-9b0b-fcca2d202994-22187535.jpg)

  - 2.代码抽离写法,第一种,两者分开查询![img](https://api2.mubu.com/v3/document_image/f3731988-bb0c-4654-8676-1632a135d6c0-22187535.jpg)

  - 3.写成模块抽离![img](https://api2.mubu.com/v3/document_image/2b563980-db6d-423a-9067-8a410930c00b-22187535.jpg)

  - 4.在modules中调用action的写法

    

    - mapState----> this.$store.state

    - mapActions----> this.$store.dispath

    - mapGetters-->this.$store.getters

  - 5.总结![img](https://api2.mubu.com/v3/document_image/5cce9b60-de9b-422f-be2f-6f8cda064ff9-22187535.jpg)

- vuex中的数据刷新丢失怎么办 (vuex的数据持久化)

  - 1. 手动的将数据添加到本地存储中

  - 2. 可以使用vuex数据的持久化

    - 下载插件
      - cnpm install vuex-persistedstate --save

    - 导入插件 store
      - import persistedState from 'vuex-persistedstate‘

    - 挂载插件

      - 默认的使用localStorage

      - plugins: [persistedState()]

      - 还可以配置成sessionStorage

      - plugins: [persistedState({storage: window.sessionStorage})]

- vuex的映射函数

  - 在组件中 将该组件用到的数据或者方法映射到组件中

  - \1. 映射mutations中的方法

    - 在组件中导入 mapMutations![img](https://api2.mubu.com/v3/document_image/55262c83-b793-48dd-a5b4-3d5617ac199d-22187535.jpg)

    - 在组件中注册![img](https://api2.mubu.com/v3/document_image/669ce863-26e6-4827-bd60-1c185df6c7f9-22187535.jpg)

    - 当成自己的方法就行![img](https://api2.mubu.com/v3/document_image/2e5413d5-0842-4780-af88-8040b38ad4e7-22187535.jpg)

  - 2. 映射state中的数据

    - 在组件中导入 mapState![img](https://api2.mubu.com/v3/document_image/fb794520-919b-4712-a12e-4ef982596ac8-22187535.jpg)

    - 在组件中注册![img](https://api2.mubu.com/v3/document_image/6c00f107-7acd-4fe3-a2d0-8a98af78c03d-22187535.jpg)

    - 当成自己的数据![img](https://api2.mubu.com/v3/document_image/c44bcea1-c539-4c35-9cad-ff7456d90797-22187535.jpg)

  - 3. 映射getters中的数据

    - 在组件中导入 mapGetters![img](https://api2.mubu.com/v3/document_image/0808346c-b2f6-4652-8b6b-f208912eb031-22187535.jpg)

    - 在组件中注册  也在computed中注册

    - 当成自己的数据

  - 4. 映射actins的写法

    - 在组件中导入 mapActions![img](https://api2.mubu.com/v3/document_image/aae77d03-cd36-4564-81f6-06611b761453-22187535.jpg)

    - 在methos中注册使用![img](https://api2.mubu.com/v3/document_image/5d7d7639-2e82-4df8-b0df-bcc9550fad1c-22187535.jpg)

    - 当成自己的方法,this.XXX来进行调用

- vuex的运用场景

  - Vuex是通过全局注入store对象，来实现组件间的状态共享 .

  - 总之，假如你需要 数据  和  组件  分离，分别处理，那么使用 Vuex 是非常合适的 .

  - 相反，如果不需要分离处理，那么不使用 Vuex 也没关系 .

  - 比如某个数据只跟某组件打交道，是强耦合的 .那么这个数据就应该存放在该组件的 data 属性中 .

  - 如果只是简单的父子组件间传递数据 , 使用vuex未免有点大材小用 , 其实只用使用组件间常用的通信方法即可.

  - 在大型复杂的项目中(多级组件嵌套), 需要实现一个组件更改某个数据 , 多个组件自动获取更改后的数据进行业务逻辑处理 , 这时候使用vuex比较合适 .

  - 涉及到非父子关系的组件，例如兄弟关系、祖孙关系，甚至更远的关系;

  - 他们之间如果有数据交互，需要数据和组件的分离，那么应该使用Vuex来实现

  - 如果页面复杂度比较低的话，也可以考虑使用 global-event-bus 来实现;

  - 如果只是父子关系的组件数据交互，那么应该考虑使用props进行单向传递;

  - 如果涉及到子组件向父组件的数据传递，那么应该考虑使用 emit和on;

- 映射函数和组件方法的对应关系

  - mapState----> this.$store.state

  - mapActions----> this.$store.dispath

  - mapGetters-->this.$store.getters

  - mapMutations---> this.$store.commit

  - 1. 分模块

    - mapState('模块名/方法名'，值)

    - mapState('模块名'[方法名,值])

    - 购物车:价格*数量

    - 使用购物车的页面中

    - Computed: getters 引入价格,数量

    - 不分模块
      - mapState('方法名'，'值')

  - 2. 使用地方

    - mapState------>computed

    - mapActions----->methods

    - mapGetters ---> computed

    - mapMutations ---> methods

  - 3.如何进行分模块操作

    - (1). 新建modules文件

    - (2). 在文件夹中新建每个模块的is文件:例如 user.js

    - gettes单独新建一个文件,和index.js同级 新建一个getters.js