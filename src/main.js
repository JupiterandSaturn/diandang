import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router/index.js'
import store from './store/index.js'
import axios from "axios";
import '../public/font_aboutUs/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

// import round from 'components/round.vue'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
