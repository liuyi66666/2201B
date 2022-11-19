import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 挂载到空的vue实例上起名为$bus
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
