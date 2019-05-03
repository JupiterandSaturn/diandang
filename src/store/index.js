import Vue from 'vue'
import Vuex from 'vuex'
import HomePage from './HomePage'
import second from './second'
import third from './third'
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
    HomePage,
     second,
     third,
    ConfigurationSelection,
    OrderInformation

  }
})
