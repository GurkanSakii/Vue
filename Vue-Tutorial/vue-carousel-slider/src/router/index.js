import { createRouter, createWebHistory } from "vue-router";
import HomeTo from "../views/HomeTo.vue";

const routes = [
  {
    path: "/",
    name: "HomeTo",
    component: HomeTo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;