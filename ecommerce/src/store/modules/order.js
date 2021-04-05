import axios from 'axios'


export default {
  state: {
    orders: [],
    order: null
  },
  getters: {
    orders: state => state.orders,
    order: state => state.order
  },
  mutations: {
    SET_ORDERS: (state, orders) => {
      state.orders = orders
    },
    SET_ORDER: (state, order) => {
      state.order = order
    },
    SAVE_ORDER: (state, payload) => {
      state.orders.push(payload)
    }
  },
  actions: {
    saveOrder: ({commit}, payload) => {
      commit('SAVE_ORDER', payload)
    },

    getOrders: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/orders')
      commit('SET_ORDERS', res.data)
    },
    getOrder: async ({commit}, _id) => {
      const res = await axios.get(`http://localhost:9999/api/orders/${_id}`)
      commit('SET_ORDER', res.data)
    },
  },





}