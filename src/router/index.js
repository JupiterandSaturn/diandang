import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '../views/aboutUs/index.vue'
import Home from '../components/homepage/index.vue'
import Login from '@/views/Login.vue'
import OrderPerson from "@/views/OrderPerson.vue"
import Shopcar from '../views/shopcar/shopcar.vue'
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
      name:"about",
      path:"/about",
      component: function () {
        return import(/* webpackChunkName: "coupon" */ '@/views/About.vue')
      }
      },
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
      name:"login",
      path:"/login",
      component:Login
    },
    {
      name:"aboutUs",
    path:"/aboutUs",
    component: AboutUs
    },
    {
      name:"orderperson",
      path:"/orderperson",
      component:OrderPerson
    },

    {
      path: '/coupon',
      name: 'coupon',
      // route level code-splitting
      // this generates a separate chunk (coupon.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "coupon" */ '@/views/Coupon.vue')
      }
    },
    {
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (coupon.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "account" */ '@/views/Account.vue')
      }
    },
    {
      path: '/ConfigurationSelection',
      name: 'ConfigurationSelection',
      component: function () {
        return import(/* webpackChunkName: "account" */ '@/views/ConfigurationSelection/index.vue')
      }
    },
      {
        path:'/Evaluation',
        name:'Evaluation',
        component:function () {
            return import( '@/views/Evaluation/index.vue')
        }
      },
    {
      path:'/personalInformation',
      name:'personalInformation',
      component:function () {
        return import( '@/views/personalInformation.vue')
      }
    },
    {
      path:'/orderInformation',
      name:'orderInformation',
      component:function () {
        return import( '@/views/OrderInformation.vue')
      }
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
