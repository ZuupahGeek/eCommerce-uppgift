
export default {
  state: {
    cart: []
  },
  getters: {
    shoppingCart: state => { 
      if(sessionStorage.getItem('cart') !== null) {
        state.cart = JSON.parse(sessionStorage.getItem('cart'))
      }
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    }
  },
  mutations: {
    ADD_TO_CART: (state, {product, quantity}) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        exists.quantity += quantity
        return
      } else {
        state.cart.push({product, quantity})
        sessionStorage.setItem('cart', JSON.stringify(state.cart))
      } 
    },
    DELETE_CART_ITEM: (state, product) => {
      const i = state.cart.map(item => item._id).indexOf(product)
      state.cart.splice(i, 1)  
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    },
    SUBTRACT_QUANTITY: (state, {product, quantity}) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      exists.quantity == quantity
      if (exists.quantity > 1){
      exists.quantity -= 1
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    
    } else {
        const i = state.cart.map(item => item._id).indexOf(product)
        state.cart.splice(i, 1)  
        sessionStorage.setItem('cart', JSON.stringify(state.cart))
      
      }
    }, 
    ADD_QUANTITY: (state, {product, quantity}) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      exists.quantity == quantity
      exists.quantity += 1
      sessionStorage.setItem('cart', JSON.stringify(state.cart))
    
    } 

  },
    
  
  actions: {
    addToCart: ({commit}, {product, quantity}) => {
      commit('ADD_TO_CART', {product, quantity})
    },
    subtractQuantity: ({commit}, {product, quantity}) => {
     
        commit('SUBTRACT_QUANTITY', {product, quantity})
      
    }, 
    addQuantity: ({commit}, {product, quantity}) => {
      commit('ADD_QUANTITY', {product, quantity})
    },
    deleteCartItem: ({commit}, {product, quantity}) => {
      commit('DELETE_CART_ITEM', {product, quantity})
    }
    
  },
}