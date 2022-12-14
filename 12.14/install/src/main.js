import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "@/untils/httpRequest"

Vue.prototype.$http=http
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import { quillEditor } from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


export default {
  components: {
    quillEditor
  }
}
/**引入earchs**/
import* as echarts from 'echarts'
/**挂载到原型上**/
Vue.prototype.$echarts=echarts


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
