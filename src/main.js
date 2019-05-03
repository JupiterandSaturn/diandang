import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import axios from "axios";
import ElementUI from 'element-ui';
import '../public/font_aboutUs/iconfont.css'



import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);


axios.interceptors.request.use(config=>{
  config.url="/diandang" + config.url;
  return config;
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
