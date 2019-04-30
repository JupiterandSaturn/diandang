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


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);


// import round from 'components/round.vue'

axios.interceptors.request.use(config=>{
  config.url="/diandang" +config.url;
  return config;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
