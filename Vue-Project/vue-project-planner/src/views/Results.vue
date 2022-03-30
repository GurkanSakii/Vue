<template>
  <div class="home">
    <div v-if="projects.length">
      <select name="sortBy" id="select" v-model="sortBy">
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>

      <div v-for="project in displayedUsers" :key="project.id">
        <SingleProject :proj="project" />
      </div>
      <nav class="text-center">
        <ul class="pagination pagination-sm">
          <li>
            <button @click="page = 1">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li>
            <button v-if="page != 1" @click="page--">
              <span aria-hidden="true">&lsaquo;</span>
            </button>
          </li>
          <li v-for="pageNumber in pages.slice(page - 1, page + 4)" :key="pageNumber" :class="{ active: page === pageNumber }">
            <button @click="page = pageNumber">{{ pageNumber }}</button>
          </li>
          <li>
            <button @click="page++" v-if="page < pages.length">
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </li>
          <li>
            <button @click="page = pages.length">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";

export default {
  name: "Home",
  components: {
    SingleProject,
  },
  data() {
    return {
      projects: [],
      current: "all",
      page: 1,
      perPage: 3,
      pages: [],
      sortBy: "name",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err));
  },
  methods: {
    setPages() {
      var numberOfPages = Math.ceil(this.projects.length / this.perPage);
      for (var index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(projects) {
      var page = this.page;
      var perPage = this.perPage;
      var from = page * perPage - perPage;
      var to = page * perPage;
      return projects.slice(from, to);
    },
  },
  computed: {
    displayedUsers() {
      this.projects.sort((a, b) => {
        if (this.sortBy == "name") {
          let fa = a.namesurname.toLowerCase(),
            fb = b.namesurname.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        } else if (this.sortBy == "date") {
          return a.details - b.details;
        }
      });
      return this.paginate(this.projects);
    },
  },
  watch: {
    projects() {
      this.setPages();
    },
  },
};
</script>
