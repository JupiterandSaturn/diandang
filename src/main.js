import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router/index.js'
import store from './store/index.js'
import axios from "axios";
import '../public/font_aboutUs/iconfont.css'
<<<<<<< HEAD
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.use(ElementUI);

=======
// import round from 'components/round.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);
>>>>>>> g
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
