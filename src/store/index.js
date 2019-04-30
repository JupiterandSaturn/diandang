import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import ConfigurationSelection from './ConfigurationSelection'
// import Evaluation from './Evaluation'
=======
import login from './login'
import register from './register'
import pageTop from './pageTop'
import shopcar from './shopcar'
import orderperson from './orderperson'
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306

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
    ConfigurationSelection,
    // Evaluation
=======
    login,
    register,
    pageTop,
    shopcar,
    orderperson
>>>>>>> 20668755e494c806b4864034dc634c898f1aa306
  }
})
