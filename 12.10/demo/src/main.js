import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入axios
import axios from "axios"
// 配置请求的跟路径
axios.defaults.baseURL = 'http://www.ysqorz.top:8888/api/private/v1/'
// interceptors 拦截器， 在请求的时候拦截下来，如果没有token不能请求数据
axios.interceptors.request.use(config => {
    // console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
    // 在最后必须 return config
    return config
})
Vue.prototype.$axios = axios;

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局挂载富文本
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor)

// 引入树形表格
import ZkTable from 'vue-table-with-tree-grid'
Vue.use(ZkTable)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
