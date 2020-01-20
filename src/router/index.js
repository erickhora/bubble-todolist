import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Intro from '../views/Intro.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Intro',
    component:Intro
  },
  {
    path: '/cadastro',
    name:'cadastro',
    component:Cadastro

  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/home',
<<<<<<< HEAD
    name:'Home',
    component:Home
  }
=======
    name:'home',
    component:Home
  },
  
>>>>>>> 89e6231b5774b3be96698f35940c2ccfd6ace255
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
