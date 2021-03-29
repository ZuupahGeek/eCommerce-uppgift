import axios from 'axios'



export default {
  state: {
    products: [],
    product: null
  },
  getters: {
    products: state => state.products,
    product: state => state.product
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_PRODUCT: (state, product) => {
      state.product = product
    }
  },
  actions: {
    // Hämta produkter, samt en enstaka produkt från API. Enstaka, via produktens _id
    getProducts: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/products')
      commit('SET_PRODUCTS', res.data)
    },
    getOneProduct: async ({commit}, _id) => {
      const res = await axios.get(`http://localhost:9999/api/products/${_id}`)
      commit('SET_PRODUCT', res.data)
    }
  }

}