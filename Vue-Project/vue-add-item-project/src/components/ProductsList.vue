<template>
  <div v-if="productList.length > 0">
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr />
    <div class="row product-container">
      <product-list v-for="item in productList" :key="item">
        <img class="card-img-top" :src="item.selectedImage" alt="item.title" />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <small> <strong>Adet : </strong> {{ item.count }} </small>
          <br />
          <small> <strong>Fiyat : </strong> {{ item.price }} </small>
          <br />
          <small> <strong>Tutar : </strong> {{ item.totalPrice }}</small>
        </div>
      </product-list>
    </div>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
export default {
  components: {
    ProductList,
  },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    this.emitter.on("productAdded", (item) => {
      if (this.productList.length < 2) {
        this.productList.push(item);
        this.emitter.emit("progressBarUpdated", this.productList.length);
      } else {
        alert("Daha fazla ürün ekleyemezsiniz");
      }
    });
  },
};
</script>

<style>
</style>
