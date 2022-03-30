<template>
  <main>
    <div class="logo-area">
      <div class="logo-inner">
        <img src="../assets/jpg1.jpg" />
        <span class="search">Search App</span>
      </div>
    </div>
    <SearchComponent />
  </main>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  name: "Home",
  components: {
    SearchComponent
  },
  data() {
  },

};
</script>
<style lang="scss" scoped>
main {
  max-width: 1150px;
  margin: 0 auto;

  .logo-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo-inner {
      display: inline-flex;
      flex-direction: column;

      span {
        position: relative;
        right: -50px;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: right;
        color: #484848;
      }
    }
  }
}
</style>
