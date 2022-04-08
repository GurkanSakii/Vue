<template>
<p>
    {{ $store.state.mainName}}
</p>
<p>
    {{ $store.state.musteri.contactName}}
</p>

<p>
    {{musteriADI}}
</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  created(){
      console.log(this.$store.getters['musteri/contacttt'])
  },
  computed: {
      ...mapGetters({
          musteriADI: 'musteri/contacttt'
      })
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
