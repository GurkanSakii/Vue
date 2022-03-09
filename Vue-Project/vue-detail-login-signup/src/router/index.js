import { createRouter, createWebHistory } from "vue-router";
import LoginTo from '../views/LoginTo.vue'
import SignUpTo from '../views/SignUpTo.vue'


const routes = [
  {
    path: "/",
    name: "LoginTo",
    component: LoginTo,
  },
  {
    path: "/signup",
    name: "SignUpTo",
    component: SignUpTo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
