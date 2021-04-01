<template>
  <div>
    <div class="container py-4">
      <div class="row row-cols-1 row-cols-md-3">
       <product v-for="product in products" :key="product._id" :product="product"/>
      </div>
    </div>
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
  },
  methods: {
  }
}
</script>

<style>

</style>