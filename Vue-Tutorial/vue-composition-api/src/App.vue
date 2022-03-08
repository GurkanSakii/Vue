<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>

    <p>{{ users.name }}</p>
    <p>{{ users.age }}</p>

    <p>{{ usernames }}</p>
    <p>{{ ages }}</p>

    <button @click="setAge">Change Age</button>

    <p>{{ inputreName }}</p>

    <div>
      <!--       
        <input type="text" placeholder="First Name" @input="getFirstName" />
        <input type="text" placeholder="Last Name" @input="getLastName" /> 
        -->

      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />

      <!--       
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" /> 
      -->
      <button @click="setLastNameInput">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, provide } from "vue";
import UserData from "./components/UserData.vue";
export default {
  components: {
    UserData,
  },
  setup() {
    const uName = ref("Maximilian");
    const uAge = ref(31);
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);

    /* obje oldugunda reactive, solo oldugunda ref */
    const user = reactive({
      name: "Max",
      age: 31,
    });
    const userRefs = toRefs(user);

    provide("userAge", uAge);

    function setNewAge() {
      user.age = 32;
      uAge.value = 32;
    }
    function setLastNameInput() {
      lastName.value = lastNameInput.value.value;
    }
    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const reName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    watch([uAge, reName], function (newValues, oldValues) {
      console.log("Old age: " + oldValues[0]);
      console.log("New age: " + newValues[0]);
      console.log("Old name: " + oldValues[1]);
      console.log("New name: " + newValues[1]);
    });

    return {
      userName: uName,
      age: uAge,
      users: user,
      usernames: userRefs.name,
      ages: userRefs.age,
      setAge: setNewAge,
      getFirstName: setFirstName,
      getLastName: setLastName,
      inputreName: reName,
      firstName: firstName,
      lastName: lastName,
      lastNameInput,
      setLastNameInput,
    };
  },

  /*   data() {
    return {
      userName: 'Maximilian',
      age: 31
      firstName: '',
      lastName: ''
    };
  }, 
  methods: {
      setNewAge(){
          this.age= 32;
      },
      computed: {
  return this.firstName. + ' ' + this.lastName
      },
      watch: {
          age(val){
              console.log(val);
          }
      },
      provide(){
          return { ages: this.age};
      }
      */
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
