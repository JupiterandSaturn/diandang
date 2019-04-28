import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import axios from "axios";
import '../public/font_aboutUs/iconfont.css'
<<<<<<< HEAD


=======
import 'element-ui/lib/theme-chalk/index.css';
>>>>>>> e4be65c317689ce24d3bd017597bc926f7cb889d


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

axios.interceptors.request.use(config=>{
  config.url="/diandang" + config.url;
  return config;
})


<<<<<<< HEAD
axios.interceptors.request.use(config=>{
config.url="/diandang" + config.url;
return config;
})

=======
// import round from 'components/round.vue'
>>>>>>> e4be65c317689ce24d3bd017597bc926f7cb889d

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
