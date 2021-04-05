import axios from "axios"
import router from "@/router"

export default {
  state: {
    userToken: null,
    loggedIn: false,
    userID: null,
  },
  getters: {
    loggedIn: state => state.loggedIn,
    userID: state => state.userID
    },
  mutations: {
    SET_USER: (state, token) => { // om det finns en token, loggas man in, annars inte
        let userID = localStorage.getItem('userID')
        if(token) {
          state.userToken = token
          state.loggedIn = true
          state.userID = userID
        } else {
          state.userToken = null
          state.loggedIn = false
          state.userID = null
        }
      },
      
    CHECK_USER: state => { // kolla om token finns
      try {
        let token = localStorage.getItem('token')
        let userID = localStorage.getItem('userID')
        console.log(userID)
        if(token) {
          state.userToken = token
          state.loggedIn = true
          state.userID = userID
          
        } else {
          state.userToken = null
          state.loggedIn = false
          state.userID = null
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
    // Logga in användare
    login: ({commit}, payload) => {
      axios.post('http://localhost:9999/api/users/login', payload.user)
      .then(res => {
        if(res.status === 200) {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userID', res.data.userID)
          commit('SET_USER', res.data.token)
          // commit('SET_USER', res.data._id)

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
