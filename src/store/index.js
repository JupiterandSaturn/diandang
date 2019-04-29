import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import register from './register'
import pageTop from './pageTop'
import shopcar from './shopcar'
import orderperson from './orderperson'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
 
  },
  mutations: {

  },
  actions: {

  },
  modules:{
    login,
    register,
    pageTop,
    shopcar,
    orderperson
  }
})
