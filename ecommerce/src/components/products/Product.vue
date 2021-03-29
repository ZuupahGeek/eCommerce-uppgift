<template>
  <div>
    <div class="container my-5 py-5">


    <!--Section: Content-->
    <section class="text-center">


      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-lg-3 col-md-2 mb-2">

          <a href="" class="waves-effect waves-light"><img
              :src="product.image" class="img-fluid"
              alt=""></a>

          <div class="card">
            <div class="card-body">

              <p class="mb-1"><a href="" class="font-weight-bold black-text">{{ product.name }}</a></p>

              <p class="mb-1"><small class="mr-1"><s></s></small><strong>{{ product.price }} sek</strong></p>

              <div class="amber-text fa-xs mb-1">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>

              <button type="button" class="btn btn-black btn-rounded btn-sm px-3">Buy Now</button>
              <router-link :to="{name: 'ProductDetails', params: {id: product._id}}"><button type="button" class="btn btn-outline-black btn-rounded btn-sm px-3 waves-effect">Details</button></router-link>

            </div>
          </div>
        </div>
      </div>
    </section>



  </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

<style>


</style>