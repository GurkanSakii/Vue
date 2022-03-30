<template>
 <router-link :to="{name: 'Home'}" >Return to List Page</router-link>
  <form @submit.prevent="handleSubmit">
    <label>Name Surname</label>
    <input type="text" v-model="namesurname" required placeholder="Enter name and surname"/>
    <label>Country</label>
    <input type="text" v-model="country" required placeholder="Enter a country"/>
    <label>City</label>
    <input type="text" v-model="city" required placeholder="Enter a city"/>
    <label>Email</label>
    <input type="email" v-model="email" required placeholder="Enter a e-mail(abc@xyz.com)"/>
    <button>Add</button>
  </form>
  <!-- new Date().toLocaleDateString() -->
</template>

<script>
export default {
    data(){
        return{
            namesurname: '',
            country: '',
            city: '',
            email: ''
        }
    },
    methods: {
        handleSubmit(){
            let projecthere = {
                namesurname: this.namesurname,
                country: this.country,
                city: this.city,
                email: this.email
            }
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(projecthere)
            }).then(() => {
                this.$router.push('/')
            }).catch((err) => console.log(err))
        }
    }
}
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0px 10px 0px;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
