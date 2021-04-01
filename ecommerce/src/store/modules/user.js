import axios from "axios"
import router from "@/router"

export default {
  state: {
    userToken: null,
    loggedIn: false
  },
  getters: {
    loggedIn: state => state.loggedIn
  },
  mutations: {
    SET_USER: (state, token) => { // om det finns en token, loggas man in, annars inte
 
        if(token) {
          state.userToken = token
          state.loggedIn = true
        } else {
          state.userToken = null
          state.loggedIn = false
        }
      },
      
    CHECK_USER: state => { // kolla om token finns
      try {
        let token = localStorage.getItem('token')
        if(token) {
          state.userToken = token
          state.loggedIn = true
        } else {
          state.userToken = null
          state.loggedIn = false
        }
      }
      catch(err){
        console.log(err)
      }
    }
  },

  actions: {
    // registrera användare, och om det går bra, logga in automatiskt
    register: async ({dispatch}, _user) => {
      const user = {
        email: _user.email,
        password: _user.password
      }
      await axios.post('http://localhost:9999/api/users/register', _user)
      dispatch('login', {user})
    },
    // Logga in användar
    login: ({commit}, payload) => {
      axios.post('http://localhost:9999/api/users/login', payload.user)
      .then(res => {
        if(res.status === 200) {
          localStorage.setItem('token', res.data.token)
          commit('SET_USER', res.data.token)

          if(payload.route) {
            router.push(payload.route)
          } else {
            router.push('/')
          }
        }
      })
    }, // slut på funktion "logga in användare"
    checkUser: ({commit}) => { // kolla så att avändaren är inloggad
      commit('CHECK_USER')
    },
    logout: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        localStorage.removeItem('token')

        commit('SET_USER', null)
      }
    }
  }
}
