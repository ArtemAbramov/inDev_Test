import Vue from 'vue'
import Vuex from 'vuex'

import pairs from './pairs'

Vue.use(Vuex)

// Modules

export default new Vuex.Store({
  modules: { pairs }
})