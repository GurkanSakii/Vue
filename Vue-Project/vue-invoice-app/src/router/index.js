import { createRouter, createWebHistory } from "vue-router";
import HomeTo from "../views/HomeTo.vue";
import InvoiceView from "../views/InvoiceView.vue";

const routes = [
  {
    path: "/",
    name: "HomeTo",
    component: HomeTo,
  },
  {
    path: "/invoice/:invoicesId",
    name: "InvoiceView",
    component: InvoiceView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;