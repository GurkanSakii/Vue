import { createRouter, createWebHistory } from "vue-router";

import store from './store'
import WelcomePage from './components/welcome/welcomeRe.vue'
import DashboardPage from './components/dashboard/dashboardRe.vue'
import SignupPage from './components/auth/signupRe.vue'
import SigninPage from './components/auth/signinRe.vue'



const routes = createRouter({
    history: createWebHistory(),
    routes: [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage, beforeEnter(to, from, next){
    if(store.state.idToken){
        next()
    } else {
        next('/signin')
    }
  } }   
]
})

export default routes;