import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
// import HomePage from './index'
import second from './second'
=======
import ConfigurationSelection from './ConfigurationSelection'
import OrderInformation from './OrderInformation'

>>>>>>> e4be65c317689ce24d3bd017597bc926f7cb889d
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
<<<<<<< HEAD
    //  HomePage,
     second
=======
    ConfigurationSelection,
    OrderInformation,
>>>>>>> e4be65c317689ce24d3bd017597bc926f7cb889d
  }
})
