<template>
   <div>
    <!-- Default form login -->
    <form class="text-center border border-light p-5" @submit.prevent="onSubmit">

        <p class="h4 mb-4">Sign in</p>

        <!-- Email -->
        <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" v-model="email">

        <!-- Password -->
        <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model="password">

        <div class="d-flex justify-content-around">
            <div>
               
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                    <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                </div>
            </div>
      
          
        </div>

    
        <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

   
        <p>Not a member?</p>
            <router-link to="/register">Register</router-link>
        
        
    </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.email,
          password: this.password
        }
        let route =  this.$route.query.redirect
        this.login({user, route})
      }
    }
  }
}
</script>

<style>

</style>