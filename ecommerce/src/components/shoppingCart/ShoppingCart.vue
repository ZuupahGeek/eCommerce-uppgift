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
      <div>
        <div class="total-price"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartItem from './CartItem.vue'
export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['shoppingCart'])
  }
}
</script>

<style>


</style>