<template>
<div class="notfound-page">
    
      <h2>Page not found</h2>
      <p> This page could not be found - maybe check out all our <router-link to="/"> Main Page</router-link></p>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notfound-page{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 500px;
}
</style>
