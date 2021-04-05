<template>
  <div>
    <orders />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Orders from '../components/orders/Orders.vue'
export default {
  components: { Orders },
  methods: {
    ...mapActions(['getOrders'])
  },
  created() {
    this.getOrders()
  }
}
</script>

<style>

</style>