<template>
  <button @click="updateName">Yeni Item Ekle</button>
</template>

<script>
export default {
  methods: {
    updateName() {
        const datanew = { id: 6, title: "ssss", type: "mobilya" }
  /*     this.$store.commit('newItemAdd', datanew) */
      this.$store.dispatch('newItem',datanew )
    },
  },
};
</script>

<style></style>
