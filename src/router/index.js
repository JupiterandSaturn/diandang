import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '../views/aboutUs/index.vue'
<<<<<<< HEAD
import Login from '@/views/Login.vue'
import Home from '../components/homepage/index.vue'
import OrderPerson from "@/views/OrderPerson.vue"
=======
import ConfigurationSelection from '../views/ConfigurationSelection/index.vue'
import Evaluation from '../views/Evaluation/index.vue'
import Home from '../components/homepage/index.vue'



>>>>>>> 1c9f3cf81009ec634f80b346fb23b1a399765fde
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
<<<<<<< HEAD
    {
      name:"orderperson",
      path:"/orderperson",
      component:OrderPerson
    },
  
    {
=======
	{
>>>>>>> 1c9f3cf81009ec634f80b346fb23b1a399765fde
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
<<<<<<< HEAD
    
=======
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
      }
>>>>>>> 1c9f3cf81009ec634f80b346fb23b1a399765fde
  ]
})
