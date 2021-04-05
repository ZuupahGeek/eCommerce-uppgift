<template>
  <div>
    <!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark bg-brown">
  <div class="container">
    <router-link class="navbar-brand" to="/"><h2><i class="fas fa-star-of-life"></i> Stranus</h2></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About us</router-link>
        </li>
  
      
      </ul>
      <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user-ninja"></i>
          </a>

          <div class="dropdown-menu dropdown-menu-right dropdown-default cart-width" aria-labelledby="navbarDropdownMenuLink-333">
              <div v-if="!loggedIn">
                <p>You are not logged in</p>
                <router-link to="/login">Log in</router-link>
              </div>
              <div v-else>
               <a  @click="logout()"> Logout </a>
               <router-link to="/orders">Orders</router-link>
                </div>
        
          </div>

        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <span v-show="cartItemCount" class="badge badge-danger ml-2">{{ cartItemCount }}</span>
          <i class="fas fa-shopping-cart"></i>
          
          </a>
          
          <div class="dropdown-menu dropdown-menu-right dropdown-default cart-width"
            aria-labelledby="navbarDropdownMenuLink-333">
              <shopping-cart />
        
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!--/.Navbar -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShoppingCart from "../shoppingCart/ShoppingCart.vue"

export default {
  components: { 
    ShoppingCart 
    },
    computed: {
      ...mapGetters(['cartItemCount', 'loggedIn'])
    },
    methods: {
      ...mapActions(['logout'])
    }

}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
}
.nav-links a {
  margin-right: 1rem;
} 
.cart-width {
  min-width: 350px;
}
</style>