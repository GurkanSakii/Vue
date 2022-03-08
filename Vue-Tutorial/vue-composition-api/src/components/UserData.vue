<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
  props: ["firstName", "lastName"],

  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + "  " + props.lastName;
    });

    const age = inject("userAge");
    age.value = 29;

    console.log(context);
    /*  context.emit(); */
    // this.$emit()

    onBeforeMount(function () {
      console.log("onbeforemount");
    });
    onMounted(function () {
      console.log("onMounted");
    });
    onBeforeUpdate(function () {
      console.log("onBeforeUpdate");
    });
    onUpdated(function () {
      console.log("onUpdated");
    });
    
    onBeforeUnmount(function () {
      console.log("onBeforeUnmount");
    });
    onUnmounted(function () {
      console.log("onUnmounted");
    });
    return {
      userName: uName,
      age: age,
    };
  },
  /*     computed:{
        userName(){
            return this.firstName + ' ' + this.lastName;
        }
    } */
};
</script>

<style></style>
