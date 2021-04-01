<template>
  <div>


    <!--Section: Content-->
    <section class="text-center">

        <!--Grid column-->
        <div class="col">

          <router-link href="" class="waves-effect waves-light" :to="{name: 'ProductDetails', params: {id: product._id}}"><img
              :src="product.image" class="img-fluid"
              alt=""></router-link>

          <div class="card">
            <div class="card-body">

              <p class="mb-1"><a href="" class="font-weight-bold black-text">{{ product.name }}</a></p>

              <p class="mb-1"><small class="mr-1"><s></s></small><strong>{{ product.price }} sek</strong></p>


              <button type="button" class="btn btn-black btn-rounded btn-sm px-3" @click="addToCart({product, quantity})">Buy Now</button>
              <router-link :to="{name: 'ProductDetails', params: {id: product._id}}"><button type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button></router-link>

            </div>
          </div>
        </div>
    </section>



  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Product',
  props: ['product'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
     ...mapActions(['addToCart'])
  }
}
  
</script>

<style>


</style>