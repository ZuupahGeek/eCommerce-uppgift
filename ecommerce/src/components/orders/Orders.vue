<template>
  <div>
    <order v-for="order in orders" :key="order._id" order="order" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Order from './Order'
export default {
  components: {
    Order
  },
  computed: {
    ...mapGetters(['orders'])
  },
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