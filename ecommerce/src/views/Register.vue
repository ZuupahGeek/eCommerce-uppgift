<template>
   <!-- Default form register -->
<form class="text-center border border-light p-5" @submit.prevent="onSubmit">

    <p class="h4 mb-4">Sign up</p>

    <div class="form-row mb-4">
        <div class="col">
            <!-- First name -->
            <input type="text" id="defaultRegisterFormFirstName" class="form-control mb-4" placeholder="First name" v-model="user.firstName">
        </div>
        <div class="col">
            <!-- Last name -->
            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" v-model="user.lastName">
        </div>
    </div>
     

    <!-- E-mail -->
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" v-model="user.email">

    <!-- Password -->
    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" v-model="user.password">
   

    <!-- Sign up button -->
    <button class="btn btn-info my-4 btn-block" type="submit">Sign up and Sign in</button>


   

    <hr>

    <!-- Terms of service -->
    <p>By clicking
        <em>Sign up</em> you agree to our
        <a href="" target="_blank">terms of service</a> </p>

</form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return{
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }, // slut på data
  methods: {
    ...mapActions(['register']),
     onSubmit(){
       if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
        this.register(this.user)
    }
  } 
} // slut på methods
} // slut på export default
</script>

<style>

</style>