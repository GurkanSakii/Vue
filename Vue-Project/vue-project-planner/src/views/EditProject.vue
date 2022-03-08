<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="changeTitle" required />
    <label>Details:</label>
    <textarea v-model="changeDetails" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      changeTitle: "",
      changeDetails: "",
      urlEdit: 'http://localhost:3000/projects/' + this.id
    };
  },
  mounted(){
      fetch(this.urlEdit).then(res => res.json()).then(data => {
         this.changeTitle = data.title
         this.changeDetails = data.details
      })
  },
  methods:{
      handleSubmit(){
          fetch(this.urlEdit, {
              method: 'PATCH',
              headers: { 'Content-Type' : 'application/json'},
              body: JSON.stringify({ title: this.changeTitle, details: this.changeDetails})
          }).then(() => {
              this.$router.push('/')
          }).catch(err => console.log(err))
      }
  }
};
</script>

<style></style>
