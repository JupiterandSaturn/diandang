import Vue from 'vue'
import Vuex from 'vuex'
// import HomePage from './index'
import second from './second'
import ConfigurationSelection from './ConfigurationSelection'
import OrderInformation from './OrderInformation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    ConfigurationSelection,
    OrderInformation,

  }
})
