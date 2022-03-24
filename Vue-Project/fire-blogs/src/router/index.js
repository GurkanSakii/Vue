import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from "../views/BlogPreview.vue";
import ViewBlog from "../views/ViewBlog.vue";
import EditBlog from "../views/EditBlog.vue";
import NotFoundComponent from '../views/NotFoundComponent.vue'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: "Blogs",
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requiresUnAuth: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      requiresUnAuth: true,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
      requiresUnAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: "Create Post",
      requiresAuth: true,
    },
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: "Preview Blog Post",
      requiresAuth: true,
    },
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlog",
    component: ViewBlog,
    meta: {
      title: "View Blog Post",
      requiresAuth: false,
    },
  },
  {
    path: "/edit-blog/:blogid",
    name: "EditBlog",
    component: EditBlog,
    meta: {
      title: "Edit Blog Post",
      requiresAuth: false,
    },
  },
  {
    path: "/:notFound(.*)",
    name: "NotFoundComponent",
    component: NotFoundComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next();
});
router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;  
  console.log(user, "x")

  if (to.meta.requiresAuth) {
    if (user) {
      return next();
    } else {
        return next({ name: "Home" });
    }
  } else if (to.meta.requiresUnAuth){
      if(user){
          return next({name: "Home"})
      }
      return next()
  } else {
  return next();
  }
});

export default router;
