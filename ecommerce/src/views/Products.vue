<template>
  <div>
    <product-list />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductList from '../components/products/ProductList.vue'
export default {
  components: { 
    ProductList 
    },
    methods: {
      ...mapActions(['getProducts'])
    },
    created(){
      this.getProducts()
    }

}
</script>

<style>

</style>