import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {     
      show: false,      
      items: [],
      totalPrice: 0,    
       
  },
  mutations: {
   
    addCart(state, data){
      state.items.push(data) 
      state.totalPrice =  state.items.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0)
    },
    addCartSelected(state, data){
      if(state.items.length == 0){
        state.items = data       
      }else{       
          state.items = state.items.concat(data)       
      }
      state.totalPrice =  state.items.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0)
    },
    removeCart(state, index){
      state.items.splice(index, 1)      
      state.totalPrice =  state.items.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0)      
     
    },
    removeCartSelected(state, data){
      for (let i = state.items.length - 1; i >=0 ; i--) {
        for (let j = data.length - 1; j >=0 ; j--) {         
          if(state.items[i] == data[j]){
            state.items.splice(i,1)
          }
        }        
      }
      state.totalPrice =  state.items.reduce((sum, value) => (typeof value.price == "number" ? sum + value.price : sum), 0)      
    }
  },
  computed: {    
  },
  actions: {
  },
  modules: {
  },
})
