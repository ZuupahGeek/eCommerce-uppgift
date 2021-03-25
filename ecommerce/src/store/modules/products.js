import axios from 'axios'



export default new Vuex.Store({
  state: {
    products: [],
    product: null
  },
  getters: {
    products: state => state.products,
    product: state => state.product
  },
  mutations: {
    GET_PRODUCTS: (state, products) => {
      state.products = products
    },
    GET_PRODUCT: (state, product) => {
      state.product = product
    }
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('http://localhost:3000/products')
      commit('GET_PRODUCTS', res.data)
    },
    getOneProduct: async ({commit}, _id) => {
      const res = await axios.get('http://localhost:3000/products/' + _id)
      commit('GET_PRODUCT', res.data)
    }
  }

})