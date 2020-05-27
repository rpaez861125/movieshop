import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      search: '',
      show: false,
      cart:[],
      totalPrice: 0,
  },
  mutations: {
    dataSearch(state, data){
      state.search = data
    },
    addCart(state, data){
      state.cart.push(data)  
      state.totalPrice = state.cart.reduce((a, b) => a.price + b.price)
      if(state.cart.length != 0){
        state.show = true
      }    

    },
    removeCart(state, index){
      state.cart.splice(index, 1)
      state.totalPrice = state.cart.reduce((a, b) => a.price + b.price)
      if(state.cart.length == 0){
        state.show = false
      }  
    },
    // calcTotalPrice(state){      
    //   state.totalPrice = state.cart.reduce((a, b) => a.price + b.price)     
    // }
  },
  actions: {
  },
  modules: {
  }, 
  // updated() {
  //   this.calcTotalPrice()
  // },
})
