<template>
  <div>
    
    <!-- om det inte finns något i arrayen, ska de stå att det är tomt -->
    <cart-item v-for="item in shoppingCart" :key="item.product.id" :item="item" />

    <div v-if="shoppingCart.length < 1" class="cart-item">
      <div>
        Your shopping cart is empty
      </div>
    </div>

    <!-- totalt pris och gå till kassan -->
    <div class="">
      <div v-if="shoppingCart.length > 1">
        <div class="total-price"></div>
        <button @click="createOrder()" class="btn bg-orange">Save order</button>
      </div>
    </div>
   
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CartItem from './CartItem.vue'
export default {
  data() {
    return {
      order: {
        costumerID: this.userID,
        count: this.cartItemCount,
        totalPrice: 3,
        cart: this.shoppingCart
      }
    }
  },
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['shoppingCart', 'userID', 'cartItemCount'])
  },
  methods: {
    ...mapActions(['createOrder']),
  },
  created() {
    console.log(this.shoppingCart, this.cartItemCount, this.userID)
  },

}
</script>

<style>


</style>