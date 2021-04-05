<template>
  <div>
    <div class=" border my-3">
      <p>Order Number: {{order._id}}</p>
      <p>Den inloggade kundens ID: {{order.customerID}}</p>
      <p>total price: {{order.totalPrice}} kr (not really)</p>
    
    </div>
  </div>
</template>

<script>
export default {
  props: ['order']
}
</script>

<style>

</style>