<template>
  <div class="container">
    <h3>Tidsbrist, så det här var det bästa jag hann åstadkomma med de sparade ordrarna... Enjoy</h3>
    <order v-for="order in orders" :key="order._id" :order="order" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Order from './Order'
export default {
  components: {
    Order
  },
  computed: {
    ...mapGetters(['orders'])
  },
  
  
}
</script>

<style>

</style>