<template>
  <div class="cart-item">

      <div id="item-info" class=" d-flex align-items-center justify-content-between">
        <div><img :src="item.product.image" alt="" class="img-fluid image-width"></div>
        <div id="name-price">
          <div><strong>{{ item.product.name }}</strong></div>
          <div><small> {{ item.quantity }} x {{ item.product.price }} sek</small></div>
          <div id="buttons">
            <div class="btn-group btn-group-sm me-2" role="group" area-label="quantity">
              <button class="btn btn-dark btn-cart mr-2" @click.stop="subtractQuantity(item)">-</button>
              <button class="btn btn-dark btn-cart mr-2" @click.stop="item.quantity += 1">+</button>
              <button class="btn btn-danger btn-cart" @click.stop="deleteCartItem(item)"><i class="fas fa-trash-alt"></i></button>
            </div>
    
          </div>
        </div>
      </div>
      
  
   
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'


export default {
  props: ['item'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['deleteCartItem', 'subtractQuantity'])
  },
  computed: {
    ...mapGetters(['shoppingCart'])
  }
}
</script>

<style scoped>
.image-width {
  max-width: 100px;
}
#name-price {
  margin-right: 1rem;
}



</style>