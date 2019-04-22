import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '../views/aboutUs/index.vue'
import Home from '../components/homepage/index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name:"home",
      path:"/home",
      component: Home
    },
    {
      name:"aboutUs",
    path:"/aboutUs",
    component: AboutUs
    }
    
  ]
})
