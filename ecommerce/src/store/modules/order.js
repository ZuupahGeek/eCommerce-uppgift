import axios from 'axios'
// import cart from './cart'
// import user from './user'



export default {
  state: {
    orders: [],
    order: null,
    },
 
  getters: {
    orders: state => state.orders,
    order: state => state.order,
  },
  mutations: {
    SET_ORDERS: (state, orders) => {
      state.orders = orders
    },
    SET_ORDER: (state, order) => {
      state.order = order
    },
    CREATE_ORDER: (state) => {
      if(state.userID !== null){
        const _order = {
        customerID: state.userID,
        totalPrice: 3434,
        cart: state.cart
      }
      axios.post('http://localhost:9999/api/orders/new', _order)
      console.log(_order)}
      
    }
    
  },
  actions: {
    

    getOrders: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/orders')
      commit('SET_ORDERS', res.data)
      console.log(res.data)
    },
    getOrder: async ({commit}, _id) => {
      const res = await axios.get(`http://localhost:9999/api/orders/${_id}`)
      commit('SET_ORDER', res.data)
    },
    createOrder: async ({commit}, state) => {
      commit('CREATE_ORDER', state)
    }
  },
  modules: {
    // cart,
    // user,
  }





}