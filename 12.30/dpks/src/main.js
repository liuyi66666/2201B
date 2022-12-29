import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// loding组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
