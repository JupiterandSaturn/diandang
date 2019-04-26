import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '../views/aboutUs/index.vue'
import Shopcar from '../views/shopcar/shopcar.vue'
import Home from '../components/homepage/index.vue'
import Index from '../views/Index/index.vue'
import Success from '../views/Success/Success.vue'
import Second from '../views/Second/index.vue'
import Third from '../views/third/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name:"index",
      path:"/index",
      component: Index
    },
    {
      name:"home",
      path:"/home",
      component: Home
    },
    {
      name:"aboutUs",
      path:"/aboutUs",
      component: AboutUs
    },
    {
      name:"shopcar",
      path:"/shopcar",
      component: Shopcar
    },
    {
      path:'/',
      redirect:'index'
    },
    {
      name:"Success",
      path:'/success',
      component:Success
    },
    {
      name:'Second',
      path:'/second',
      component:Second
    },
    {
      name:'Third',
      path:'/third',
      component:Third
    }
    ]
})
