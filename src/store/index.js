import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      search: '',
      cart:[],
  },
  mutations: {
    dataSearch(state, data){
      state.search = data
    },
    addCart(state, data){
      state.cart.push(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
