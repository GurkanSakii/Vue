<template>
  <header>
    <nav class="main-nav">
      <router-link :to="{ name: 'AddProject' }">Add a New Project</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header nav {
  margin: 64px 62px;
  display: flex;
  justify-content: flex-end;

  a {
    width: 200px;
    height: 46px;
    left: 1020px;
    top: 64px;
    background: #204080;
    border-radius: 12px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
}

</style>
