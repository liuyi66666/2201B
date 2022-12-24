import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
/**引入earchs**/
import* as echarts from 'echarts'
/**挂载到原型上**/
Vue.prototype.$echarts=echarts

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
