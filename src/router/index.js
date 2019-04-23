import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '../views/aboutUs/index.vue'
import ConfigurationSelection from '../views/ConfigurationSelection/index.vue'
import Evaluation from '../views/Evaluation/index.vue'
import Home from '../components/homepage/index.vue'



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
      name:"aboutUs",
    path:"/aboutUs",
    component: AboutUs
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
      }
  ]
})
