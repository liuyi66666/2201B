import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "@/untils/httpRequest"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$http=http
// import { Button, Select } from 'element-ui';
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

// Vue.use(Button)
// Vue.use(Select)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
