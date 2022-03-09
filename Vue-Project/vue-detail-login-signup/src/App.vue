<template>
  <NavbarTo />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import NavbarTo from "./components/NavbarTo.vue";

export default {
  components: {
    NavbarTo,
  },
};
</script>

<style>
.content {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>