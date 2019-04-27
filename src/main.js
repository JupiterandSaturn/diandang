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

axios.interceptors.request.use(config=>{
  config.url="/diandang" + config.url;
  return config;
})


// import round from 'components/round.vue'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
