<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <NewProduct />
    <br><br>
    <ProgressNowVue />
    <br><br>

    <ProductsList />
  </div>
</template>

<script>
import NewProduct from '../src/components/NewProduct.vue'
import ProgressNowVue from './components/ProgressNow.vue';
import ProductsList from './components/ProductsList.vue'
  export default {
      components: {
          NewProduct,
          ProgressNowVue,
          ProductsList
      },

  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

    .card {
        margin-right: 5px;
        margin-bottom: 5px;
    }

    .card:last-child {
        margin-right: 0px;
    }

    .col-md-2 {
        max-width: 15.666667% !important;
    }

    .product-container {
        margin-left: 15px;
    }


</style>

