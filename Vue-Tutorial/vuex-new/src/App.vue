<template>

<UserList/>
<NewUser />
</template>

<script>
import UserList from "@/components/UserList.vue";
import NewUser from "@/components/NewUser.vue";

export default {
  name: "App",
  components: {
    UserList,
    NewUser,
  },
};
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
