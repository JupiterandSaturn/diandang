import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router/index.js';
import store from './store/index.js';
import Router from 'vue-router';
import axios from "axios";
import login from "@/views/Login.vue";
import '../public/font_aboutUs/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';
import filters from "@/filters"


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
for(var key in filters){
  Vue.filter(key,filters[key])
}

axios.interceptors.request.use(config=>{
  
  config.url="/diandang" + config.url;
  return config;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
