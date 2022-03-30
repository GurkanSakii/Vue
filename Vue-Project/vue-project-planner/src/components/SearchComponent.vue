<template>
  <div class="home">
    <div v-if="projects.length">
      <div class="search-bar">
        <div class="searchbar-inner">
          <div class="title">Find in records</div>
          <div class="search-row">
            <div class="search-area">
              <img src="../assets/search-icon.svg" />
              <input type="text" v-model="search" placeholder="Search title.." />
            </div>
            <div class="search-button">Search</div>
          </div>
        </div>
      </div>
      <div class="search-results">
<!--            <div v-for="project in displayedUsers" :key="project.id">
        <SingleProject :proj="project" />
      </div> -->
      
      </div>


      <router-link :to="{ name: 'Results' }" v-if="displayedUsers.length >= 3">Load more</router-link>
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
export default {
  name: "SearchComponent",
  components: {
    SingleProject,
  },
  data() {
    return {
      projects: [],
      search: "",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err));
  },
  methods: {},
  computed: {
    displayedUsers() {
      return this.projects.filter((post) => {
        return post.namesurname.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  justify-content: flex-end;

  .searchbar-inner {
    width: 100%;
    max-width: 900px;
  }
}
.search-results {
  width: 717.84px;
  height: 248.25px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #484848;
  box-sizing: border-box;
  border-radius: 24px;
  padding: 16px 11px;
  margin-top: 17px;
}

.title {
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  color: rgb(9, 10, 10);
  font-size: 32px;
  line-height: 36px;
}
.search-row {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;
}
.search-area {
  position: relative;
  width: 100%;

  img {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  input {
    background: rgb(255, 255, 255);
    padding: 14px;
    border: 2px solid rgb(32, 64, 128);
    border-radius: 8px;
    width: 100%;
    text-indent: 20px;
  }
}
.search-button {
  width: 138px;
  height: 47px;
  border: none;
  margin-left: 11px;
  background: rgb(32, 64, 128);
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  border-radius: 12px;
}
</style>
