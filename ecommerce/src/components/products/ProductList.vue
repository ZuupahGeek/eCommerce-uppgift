<template>
  <div>
    <product v-for="product in products" :key="product._id" :product="product"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from './Product.vue'
export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>