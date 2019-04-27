import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '../views/aboutUs/index.vue'
import ConfigurationSelection from '../views/ConfigurationSelection/index.vue'
import Evaluation from '../views/Evaluation/index.vue'
// import Home from '../components/homepage/index.vue'
import Login from '@/views/Login.vue'
import OrderPerson from "@/views/OrderPerson.vue"
import Shopcar from '../views/shopcar/shopcar.vue'
import index from '@/views/Index/index.vue'
import Success from '../views/Success/Success.vue'

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
      component: index
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
        return import(/* webpackChunkName: "coupon" */ '@/views/coupon')
      }
    },
    {
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (coupon.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "account" */ '@/views/Account')
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
        return import( '@/views/OrderInformation')
      }
    },
    {
      path:'/form',
      name:'form',
      component:function () {
        return import( '@/views/form.vue')
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
      path: '/second',
      name: 'second',
      component: function () {
        return import( '@/views/Second')
      }
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: function () {
        return import( '@/views/shopcar/shopcar.vue')
      }
    },
    {
      path: '/third',
      name: 'third',
      component: function () {
        return import( '@/views/third')
      }
    },


  ]
})
