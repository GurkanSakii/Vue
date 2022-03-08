<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore} from 'vuex';

export default {
  setup() {

    const store =  useStore();

    function inc() {
        store.dispatch('increments');
    }

    return { inc };
  },
};
</script>