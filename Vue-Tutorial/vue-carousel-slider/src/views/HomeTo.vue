<template>
  <div class="Home">
    <CarouselTo :navigation="true" :pagination="true" :startAutoPlay="true" :timeout="2000" class="carousel" v-slot="{currSlide}">
      <SlideTo v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currSlide === index + 1" class="slide-info">
          <img :src="require(`../assets/${slide}.jpg`)" alt="" />
        </div>
      </SlideTo>
    </CarouselTo>
  </div>
</template>

<script>
import CarouselTo from "../components/CarouselTo.vue";
import SlideTo from "../components/SlideTo.vue";
export default {
  components: {
    CarouselTo,
    SlideTo,
  },

  setup() {
    const carouselSlides = ["bg-1", "bg-2", "bg-3"];

    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>