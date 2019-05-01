import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import register from './register'
import pageTop from './pageTop'
import shopcar from './shopcar'
import orderperson from './orderperson'
import second from './second'
import ConfigurationSelection from './ConfigurationSelection'
import OrderInformation from './OrderInformation'
import HomePage from './HomePage'

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
    orderperson,
      second,
      ConfigurationSelection,
      OrderInformation,
  }
})
