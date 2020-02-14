import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Intro from '../views/Intro.vue'
import Home from '../views/Home.vue'
import MeusDados from '../views/MeusDados.vue'


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
    path:'/home/:id',
    name:'Home',
    component:Home
  },
  {
    path: '/home/:id/meus-dados',
    name: 'MeusDados',
    component:MeusDados
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
